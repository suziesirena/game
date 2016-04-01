
function initDatabase($ngData) {

  $ngData.model('AppSettings', {
      tableName: 'settings',
      properties: {
          phoneActivated  : Boolean,
          authProvider    : String,
          unreadMails     : Number
      }
  });

  $ngData.model('PNJ', {
      tableName: 'pnj',
      properties: {
          gender        : String,
          firstName     : String,
          lastName      : String,
          dead          : String,
          infos         : String,
          city          : String,
          email         : String,
          cellPhone     : String,
          title         : String
      },
      methods:{
         picture: function(){
             return 'pnj' + this.id + '.jpg'
         }
     }
  });

  $ngData.model('Event', {
      tableName: 'event',
      properties: {
          type          : String,
          senderID      : Number,
          scheduledTime : Number,
          subject       : String,
          abstract      : String,
          content       : String,
          config        : Array
      },
      methods:{
         triggerDate  : function(){
             return Date.now() + this.scheduledTime;
         },
      },
      statics:{
        senderName : function(pnj, id){
            return pnj.findOne({id});
        }
     }
  });

  $ngData.model('Action', {
      tableName: 'action',
      properties: {
          type          : String,
          beginTime     : Number,
          EndTime       : Number,
          completed     : String,
          config        : Array
      }
  });

  $ngData.model('Mail', {
    tableName: 'mail',
    properties: {
       senderName       : String,
       senderId         : Number,
       subject          : String,
       abstract         : String,
       content          : String,
       createDate       : Number,
       read             : String,
       answered         : String
     }
  });

  $ngData.model('User', {
      tableName: 'user',
      properties: {
          firstName    : String,
          lastName     : String,
          telephone    : String,
          email        : String,
          createDate   : Date,
          age          : Number,
          phoneActivated : Boolean
      }
  });

  $ngData.model('Scenario', {
      tableName: 'scenario',
      properties: {
          title         : String,
          firstEvent    : String

      }
  });

  console.log('Schemas initialized')

  $ngData.initialize().then(function(results) {
      console.log(results);

  }).catch(function(error) {
      console.log(error);
  });



}
