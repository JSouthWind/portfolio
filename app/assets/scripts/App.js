import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import Portfolio from './modules/Portfolio';


var portfolio = new Portfolio();
var mobileMenu = new MobileMenu();
var modal = new Modal();
new RevealOnScroll($(".thumbnail"), "85%");
var stickyHeader = new StickyHeader();
