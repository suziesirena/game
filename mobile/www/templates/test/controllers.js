appControllers.controller('testCtrl', ['$rootScope', '$scope', '$mdToast', '$ionicModal', 'sound', 'database', 'Book', 'User', function ($rootScope, $scope, $mdToast, $ionicModal, sound, database, Book, User) {

  $rootScope.newMails=0;


  $scope.test1 = function () {

    $rootScope.newMails ++;
    sound.notification();
    database.newMail();
  };

  $scope.test2 = function () {
      $scope.openModal();
  };

  $scope.test3 = function () {

  }

  $scope.openModal = function(){
    $scope.modal.show();
  }

  $scope.closeModal = function(){
    $scope.modal.hide();
  }


  $ionicModal.fromTemplateUrl('templates/about.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
        // if (true){
        //   $scope.openModal();
        // }
      });

  $scope.user = User.new();

    User.create([{
      firstName   : 'Suzie',
      lastName    : 'Sirena',
      telephone   : '0679956247',
      email       : 'suzie.sirena@gmail.com',
      createDate  : Date.now(),
      age         : 21,
      isEnable    : 'true'
    }])
    .then(function(users) {
        console.log('User inserted : ' + JSON.stringify(users));
    })
    .catch(function(error) {
        console.log(error.message);
    });

  // $scope.index = function(offset, limit) {
  //     Book.find().limit(limit).offset(offset).then(function(books) {
  //         $scope.books = books;
  //     });
  // };
  //
  // $scope.book = Book.new();
  //
  // $scope.show = function(id) {
  //     return Book.findById(id);
  // };
  //
  // $scope.create = function(book) {
  //     return Book.create(book);
  // };
  //
  // $scope.update = function(book) {
  //     return book.save();
  // };
  //
  // $scope.delete = function(book) {
  //     return book.delete();
  // };
  //
  // //seeding books
  // Book.create([{
  //         name: 'Happy Angular',
  //         author: 'Angular Developers',
  //         isbn: 'ANG-135'
  //     }, {
  //         name: 'Happy Ionic',
  //         author: 'Ionic Developers',
  //         isbn: 'ION-145'
  //     }])
  //     .then(function(books) {
  //         console.log(books);
  //     })
  //     .catch(function(error) {
  //         console.log(error.message);
  //     });
  //
  // //load books
  // $scope.index();


}]);
