import $ from 'jquery';
var projects = require('./data/Projects');

class Portfolio {
  constructor(){
    this.insertPortfolio();
  }

  insertPortfolio(){
    projects.map(function(item){
      $("#projects > div").append(`<div class="row__small-4 row__medium-4 row--b-margin-until-medium">
          <a href=${item.link} target="blank">
            <div class="thumbnail">
              <img src=${item.image} alt="${item.title}" class="" />
              <div class="thumbnail__text">
                <h3>${item.title}</h3>
<p class="font-courier thumbnail__text--smaller">${item.info}</p>
              </div>
          </div>
          </a>
        </div>`);
    });
  }
}

export default Portfolio;