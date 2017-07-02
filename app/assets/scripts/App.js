import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
//import StickyHeader from './modules/StickyHeader';
//import Modal from './modules/Modal';
import Portfolio from './modules/Portfolio';


var mobileMenu = new MobileMenu();
//var stickyHeader = new StickyHeader();
//var modal = new Modal();
var portfolio = new Portfolio();
new RevealOnScroll($(".thumbnail"), "85%");
