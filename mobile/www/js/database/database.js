
function initialSQLite($cordovaSQLite) {

  db = window.cordova ? $cordovaSQLite.openDB("anotherlife") : window.openDatabase("anotherlife", "1.0.0", "AnotherLifeDB", -1);

  db.transaction(function(tx) {
    tx.executeSql("DROP TABLE IF EXISTS mails");
    tx.executeSql("DROP TABLE IF EXISTS user");
  });
  //
  // $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS mails " +
  // "( id           integer primary key   , " +
  // "  transmitter  text                  , " +
  // "  subject      text                  , " +
  // "  content      text                  , " +
  // "  createDate   dateTime)               ");
  //
  //   var query = "INSERT INTO mails ("+
  //              "  transmitter, " +
  //              "  subject, " +
  //              "  content, " +
  //              "  createDate) " +
  //              "  VALUES (?,?,?,?)";
  //
  //   var newMail = {
  //      transmitter : 'The Agency',
  //      subject     : 'Phone activation',
  //      content     : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //      createDate  : Date.now()
  //   };
  //
  //   $cordovaSQLite.execute(db, query,
  //      [ newMail.transmitter,
  //        newMail.subject,
  //        newMail.content,
  //        newMail.createDate
  //      ]).then(function (res)
  //      {
  //        console.log('Mail inserted : ' + res.insertId);
  //      });
  //
  // $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS user " +
  //     "( id           integer primary key   , " +
  //     "  firstName    text                  , " +
  //     "  lastName     text                  , " +
  //     "  telephone    text                  , " +
  //     "  email        text                  , " +
  //     "  note         text                  , " +
  //     "  createDate   dateTime              , " +
  //     "  age          integer               , " +
  //     "  isEnable     Boolean)                ");
  //
  //     var newUser = {
  //         firstName   : 'Suzie',
  //         lastName    : 'Sirena',
  //         telephone   : '0679956247',
  //         email       : 'suzie.sirena@gmail.com',
  //         createDate  : Date.now(),
  //         age         : 21,
  //         isEnable    : true
  //     };
  //
  //        var query = "INSERT INTO user (       "    +
  //                    "  firstName      ,            "    +
  //                    "  lastName       ,            "    +
  //                    "  telephone      ,            "    +
  //                    "  email          ,            "    +
  //                    "  createDate     ,            "    +
  //                    "  age            ,            "    +
  //                    "  isEnable)                   "    +
  //                    "  VALUES (?,?,?,?,?,?,?)      ";
  //
  //        $cordovaSQLite.execute(db, query,
  //            [newUser.firstName          ,
  //                newUser.lastName        ,
  //                newUser.telephone       ,
  //                newUser.email           ,
  //                newUser.createDate      ,
  //                parseInt(newUser.age)   ,
  //                newUser.isEnable        ,
  //            ]).then(function (res)
  //            {
  //              console.log('User inserted : ' + res.insertId);
  //            });

    // db = window.cordova ? $cordovaSQLite.openDB("contract.db") : window.openDatabase("contract.db", "1.0", "IonicMaterialDesignDB", -1);
    // $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS contracts " +
    //     "( id           integer primary key   , " +
    //     "  firstName    text                  , " +
    //     "  lastName     text                  , " +
    //     "  telephone    text                  , " +
    //     "  email        text                  , " +
    //     "  note         text                  , " +
    //     "  createDate   dateTime              , " +
    //     "  age          integer               , " +
    //     "  isEnable     Boolean)                ");




};
// End creating SQLite database table.
