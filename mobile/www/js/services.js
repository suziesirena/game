angular.module('util.services', [])
.factory('Util', function($rootScope, $auth) {

    return {
        isAuthenticated: function(){
            return $auth.isAuthenticated();
        },
        firstUse: function(){

        },
        sayGoodbye: function(text){
            return "Factory says \"Goodbye " + text + "\"";
        }
    }
})
