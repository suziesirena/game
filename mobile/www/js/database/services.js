appServices.factory('db', function($ngData) {

  var service = {}

  // service.findOneExtend = function(collection, conditions, relatedCollections) {
  //
  //   var finish = false;
  //   service.collection = {};
  //
  //     $ngData.model(collection).findOne(conditions).then(function(collection) {
  //               console.log(collection);
  //               service.collection = collection;
  //               var JSONobJ = JSON.parse(collection[relatedCollections])
  //               for(var key in JSONobJ) {
  //                         console.log("Key: " + key + " value: " + JSONobJ[key]);
  //                           $ngData.model(key).findOne({id : JSONobJ[key]}).then(function(collection) {
  //                           service.collection.toto = collection;
  //                           finish = true;
  //                         }).catch(function(error) {
  //                          console.log(error);
  //                         });
  //               }
  //       }).catch(function(error) {
  //           console.log(error);
  //       });
  //
  //       return service.collection
  // }

  return service;

})
.factory('AppSettings', function($ngData) { return $ngData.model('AppSettings'); })
.factory('PNJ', function($ngData) { return $ngData.model('PNJ'); })
.factory('Event', function($ngData) { return $ngData.model('Event'); })
.factory('Action', function($ngData) { return $ngData.model('Action'); })
.factory('Mail', function($ngData) { return $ngData.model('Mail'); })
.factory('SMS', function($ngData) { return $ngData.model('SMS'); })
.factory('User', function($ngData) { return $ngData.model('User'); })
.factory('Event', function($ngData) { return $ngData.model('Event'); })
.factory('Scenario', function($ngData) { return $ngData.model('Scenario'); })
