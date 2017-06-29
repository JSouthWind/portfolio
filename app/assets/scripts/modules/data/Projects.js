var Projects = function() {
  const projects = [
    /*
  {link: '',
   image: '',
   title: '',
   info: ''
  },
   */ 
    {link: 'https://codepen.io/JKuchina/full/BRVzYp/',
     image: 'https://www.dropbox.com/s/col980yhci1a3gs/meteorit.jpg?dl=0',
     title: 'Map Data Across the Globe',
     info: 'D3, Javascript, Bootstrap, JSON, SVG, CSS. FreeCodeCamp API.'
    },
    {link: 'https://codepen.io/JKuchina/pen/XREOWg',
     image: 'https://www.dropbox.com/s/qssevfp6yyw2083/d3-force-directed.jpg?dl=0',
     title: 'D3.js Force Directed Graph',
     info: 'D3, Javascript, Bootstrap, SVG, CSS. FreeCodeCamp API.'
    },
    {link: 'https://codepen.io/JKuchina/pen/GmOgxJ',
     image: 'https://www.dropbox.com/s/c5g3uon1lxw11rt/d3-heatmap.jpg?dl=0',
     title: 'D3.js Heat Map',
     info: 'D3, Javascript, Bootstrap, SVG, CSS. FreeCodeCamp API.'
    },
    {link: 'https://codepen.io/JKuchina/pen/vmmpve',
     image: 'https://www.dropbox.com/s/kc62t4aqbkipn7u/d3-scatterplot.jpg?dl=0',
     title: 'D3.js Scatterplot Graph',
     info: 'D3, Javascript, Bootstrap, SVG, CSS. FreeCodeCamp API.'
    },
    {link: 'https://codepen.io/JKuchina/pen/QvddYJ',
     image: 'https://www.dropbox.com/s/e7bn98ipbyji4zr/d3js-bar-chart.jpg?dl=0',
     title: 'Data Visualization with a Bar Chart',
     info: 'D3, Javascript, Bootstrap, SVG, CSS. NIPA API.'
    },
    {link: 'https://codepen.io/JKuchina/full/zwBaOM/',
     image: 'https://www.dropbox.com/s/ip8dtskm80ogyku/gameoflife.jpg?dl=0',
     title: 'Game Of Life',
     info: 'React, Javascript, Bootstrap,HTML, SASS, CSS'
    },
    {link: 'https://codepen.io/JKuchina/pen/RpRzeo',
     image: 'https://www.dropbox.com/s/q9bhr0ep36ze4l5/recipebox.jpg?dl=0',
     title: 'Recipe Box',
     info: 'React, Javascript, Bootstrap,HTML, SASS, CSS'
    },
    { link: 'https://aftertax.com.au/',
     image: 'https://www.dropbox.com/s/lly9quj63st8vui/aftertax.png?dl=0',
     title: 'AfterTax',
     info: 'Javascript, jQuery, ChartJS, Bootstrap, HTML, CSS'
    }, {
      link: 'https://openwage.com.au/',
      image: 'https://www.dropbox.com/s/94nykcwhz147400/OpenWage.jpg?dl=0',
      title: 'OpenWage',
      info: 'Grails, ChartJS, Bootstrap, HTML, CSS'
    }, 
    {link: 'https://codepen.io/JKuchina/full/Mpebbm/',
     image: 'https://www.dropbox.com/s/9mbw1rt9hffadjn/leaderboard.png?dl=0',
     title: 'FreeCodeCamper Leaderboard',
     info: 'React, Bootstrap, HTML, SASS, CSS'
    },
    {link: 'https://codepen.io/JKuchina/full/zZrEKJ/',
     image: 'https://www.dropbox.com/s/qcpr75zo3aelgr4/markdown.png?dl=0',
     title: 'Markdown Previewer',
     info: 'React, Bootstrap, HTML, CSS'
    },
    {link: 'https://codepen.io/JKuchina/full/dvMRyo/',
     image: 'https://www.dropbox.com/s/8qxvllyu85v50z4/portfolio.png?dl=0',
     title: 'Portfolio',
     info: 'React, Bootstrap, HTML, CSS'
    },
    {
      link: 'https://codepen.io/JKuchina/full/vKaPaO/',
      image: 'https://www.dropbox.com/s/7lc02f4aizglpa7/simongame.png?dl=0',
      title: 'Simon Game',
      info: 'Javascript, jQuery, Bootstrap, HTML, CSS'
    }, {
      link: 'https://codepen.io/JKuchina/full/rLAKwL/',
      image: 'https://www.dropbox.com/s/kubrqtacsw01wco/tictactoe.png?dl=0',
      title: 'Tic Tac Toe Game',
      info: 'Javascript, jQuery, Bootstrap, HTML, CSS'
    }, {
      link: 'https://codepen.io/JKuchina/full/akEdwa/',
      image: 'https://www.dropbox.com/s/35o5jsac00tfabm/Pomodoro-Clock.jpg?dl=0',
      title: 'Pomodoro Clock',
      info: 'Javascript, jQuery, Bootstrap, HTML, CSS'
    }, {
      link: 'https://codepen.io/JKuchina/full/eZebZJ/',
      image: 'https://www.dropbox.com/s/7b046lyf8evr9y7/Calculator.jpg?dl=0',
      title: 'Calculator',
      info: 'Javascript, jQuery, Bootstrap, HTML, CSS'
    }, {
      link: 'https://codepen.io/JKuchina/full/XdevWj/',
      image: 'https://www.dropbox.com/s/971866o9d55jc1k/twitch.jpg?dl=0',
      title: 'Twitch Streamers',
      info: 'Javascript, jQuery, Bootstrap, HTML, CSS'
    }, {
      link: 'https://codepen.io/JKuchina/full/PNJezg/',
      image: 'https://www.dropbox.com/s/spo9fggbsiu2i9k/wiki.jpg?dl=0',
      title: 'Wikipedia Search',
      info: 'Javascript, jQuery, JSON, Bootstrap, HTML, CSS. Wikipedia API.'
    }, {
      link: 'https://codepen.io/JKuchina/full/JXrMEp/',
      image: 'https://www.dropbox.com/s/yfa2hk4oteq4lcn/weatherapp.jpg?dl=0',
      title: 'Local Weather',
      info: 'Javascript, jQuery, JSON, Bootstrap, HTML, CSS.  Open Weather API, Geolocation API.'
    }, {
      link: 'https://codepen.io/JKuchina/full/eZEOea/',
      image: 'https://www.dropbox.com/s/144uz4uirdclodo/quotemachine.jpg?dl=0',
      title: 'Random Quote Machine',
      info: 'Javascript, jQuery, JSON, Bootstrap, HTML, CSS. Random picture API, random quote API.'
    }
  ];
  
  return projects;
  
}();

module.exports = Projects;