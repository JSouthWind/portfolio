import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.lazyImages = $(".lazyload");
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".jumbotron__text-content");
    this.createHeaderWaypoint();
    this.pageSections = $(".page-section");
    this.headerLinks = $(".site-header .primary-nav a, .site-header .site-header__logo > div > a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    //this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.load(function() {
      Waypoint.refreshAll();
    });
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll({
      autoCoefficient: 1
    });
  } 

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--scroll");
        } else {
          that.siteHeader.removeClass("site-header--scroll");
        }
      }
    });
  } 

  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function(){
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction){
          if(direction === 'down'){
            var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: "20%"
      });
      
      new Waypoint({
        element: currentPageSection,
        handler: function(direction){
          if(direction === 'up'){
            var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: "-20%"
      })
    })
  }
  
}

export default StickyHeader;