'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('indexBlocks').
  component('indexBlocks', {
    templateUrl: 'index-blocks/index-blocks.template.html',
    controller: ['$http', function PhoneListController($http) {
      var self = this;
      
      $http.get('blocks/blocks.json').then(function(response) {
        self.blocks = response.data;
      });
    }]
  });