
function initDatabase($ngData) {

  $ngData.model('AppSettings', {
      tableName: 'settings',
      properties: {
          firstUse     : Boolean
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
          fromPNJ       : Number,
          scheduledTime : Number,
          content       : String
      },
      methods:{
         triggerDate  : function(){
             return Date.now() + this.scheduledTime;
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
          config        : Object
      }
  });

  $ngData.model('Mail', {
    tableName: 'mail',
    properties: {
       fromPNJ          : String,
       subject          : String,
       content          : String,
       createDate       : Number
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
          firstUse     : Boolean
      }
  });

  $ngData.model('Scenario', {
      tableName: 'scenario',
      properties: {
          title         : String,
          firstEvent    : String,

      }
  });

  console.log('Schemas initialized')

  $ngData.initialize().then(function(results) {
      console.log(results);

  }).catch(function(error) {
      console.log(error);
  });



}
