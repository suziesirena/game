
function initialSQLite($cordovaSQLite) {

  db = window.cordova ? $cordovaSQLite.openDB("anotherlife.db") : window.openDatabase("anotherlife.db", "1.0", "AnotherLifeDB", -1);
  $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS user " +
      "( id           integer primary key   , " +
      "  firstName    text                  , " +
      "  lastName     text                  , " +
      "  telephone    text                  , " +
      "  email        text                  , " +
      "  note         text                  , " +
      "  createDate   dateTime              , " +
      "  age          integer               , " +
      "  isEnable     Boolean)                ");

      var newUser = {
          firstName   : 'Suzie',
          lastName    : 'Sirena',
          telephone   : '0679956247',
          email       : 'suzie.sirena@gmail.com',
          createDate  : Date.now(),
          age         : 21,
          isEnable    : true
      };

         var query = "INSERT INTO user (       "    +
                     "  firstName      ,            "    +
                     "  lastName       ,            "    +
                     "  telephone      ,            "    +
                     "  email          ,            "    +
                     "  createDate     ,            "    +
                     "  age            ,            "    +
                     "  isEnable)                   "    +
                     "  VALUES (?,?,?,?,?,?,?)      ";

         $cordovaSQLite.execute(db, query,
             [newUser.firstName          ,
                 newUser.lastName        ,
                 newUser.telephone       ,
                 newUser.email           ,
                 newUser.createDate      ,
                 parseInt(newUser.age)   ,
                 newUser.isEnable        ,
             ]).then(function (res)
             {
               console.log(res)
                //  var dataItem = {
                //      id          : res.insertId              ,
                //      firstName   : newUser.firstName     ,
                //      lastName    : newUser.lastName      ,
                //      telephone   : newUser.telephone     ,
                //      email       : newUser.email         ,
                //      createDate  : newUser.createDate    ,
                //      age         : newUser.age           ,
                //      isEnable    : newUser.isEnable
                //  };
                //  contractList.push(dataItem);
             });

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
