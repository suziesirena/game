
function initDatabase($ngData) {

  $ngData.model('Book', {
      tableName: 'books',
      properties: {
          name: String,
          author: Object,
          isbn: {
              type: String,
              required: true,
              unique: false
          }
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
          title        : String
      }
  });

  $ngData.model('Event', {
      tableName: 'scenario',
      properties: {
          title        : String,
          Date          ; Number
      }
  });


  $ngData.initialize().then(function(results) {
      console.log(results);

  }).catch(function(error) {
      console.log(error);
  });

}
