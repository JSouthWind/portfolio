import $ from 'jquery';
var projects = require('./data/Projects');

class Portfolio {
  constructor(){
    this.insertPortfolio();
  }

  insertPortfolio(){
    projects.map(function(item){
      $("#projects > div").append(`<div class="row__4 row__6 row--b-margin-until-medium">
          
            <div class="thumbnail">
              <a href=${item.link} target="blank">
<img src=${item.image} alt="${item.title}" class="lazyload" />
              <div class="thumbnail__text">
                <h3>${item.title}</h3>
<p class="font-courier thumbnail__text--smaller">${item.info}</p>
              </div>
</a>

          </div>
        </div>`);
    });
  }
}

export default Portfolio;