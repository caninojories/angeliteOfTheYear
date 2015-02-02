(function() {
  'use strict';

  angular
  .module('app.sample')
  .controller('Sample', Sample);

  Sample.$inject = ['logger', 'viewContentLoaded'];

  function Sample( logger, viewContentLoaded ) {
    var vm = this;


    vm.tabs = [
  {
    "title": "1st Category",
    "content": "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica."
  },
  {
    "title": "2nd Category",
    "content": "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."
  },
  {
    "title": "3rd Category",
    "content": "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade."
  },
  {
    "title": "4th Category",
    "content": "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade."
  },
  {
    "title": "Summary",
    "content": "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade."
  }
];
vm.tabs.activeTab = 1;

    logger.success( 'Sample View Activated' );

  }
})();
