appServices.factory('database', function($rootScope, $cordovaSQLite) {

    return {
        newMail: function(text){

            var query = "INSERT INTO mails ("+
                       "  transmitter, " +
                       "  subject, " +
                       "  content, " +
                       "  createDate) " +
                       "  VALUES (?,?,?,?)";

            var newMail = {
               transmitter : 'The Agency',
               subject     : 'Phone activation',
               content     : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
               createDate  : Date.now()
            };

            $cordovaSQLite.execute(db, query,
               [ newMail.transmitter,
                 newMail.subject,
                 newMail.content,
                 newMail.createDate
               ]).then(function (res)
               {
                 console.log('Mail inserted : ' + res.insertId);
               });

        },

        sayGoodbye: function(text){
            return "Factory says \"Goodbye " + text + "\"";
        }
    }
});
