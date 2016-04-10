function initDatabase($ngData) {

  $ngData.model('AppSettings', {
    tableName: 'settings',
    properties: {
      phoneActivated: Boolean,
      init: Boolean,
      authProvider: String,
      unreadMails: Number,
      unreadSMS: Number
    }
  });

  $ngData.model('PNJ', {
    tableName: 'pnj',
    properties: {
      gender: String,
      firstName: String,
      lastName: String,
      dead: String,
      infos: String,
      city: String,
      email: String,
      cellPhone: String,
      title: String
    },
    methods: {
      picture: function() {
        return 'pnj' + this.id + '.jpg'
      }
    }
  });

  $ngData.model('Event', {
    tableName: 'event',
    properties: {
      type: String,
      pnjID: Number,
      scheduledTime: Number,
      nextEventID: String,
      subject: String,
      abstract: String,
      content: String,
      config: Object,
      action: Object
    },
    methods: {
      triggerDate: function() {
        return Date.now() + this.scheduledTime;
      }
    }
  });

  $ngData.model('Action', {
    tableName: 'action',
    properties: {
      type: String,
      pnjID: Number,
      // beginTime: Number,
      // EndTime: Number,
      nextEventID: Object,
      audio: String,
      completed: Boolean

    }
  });

  $ngData.model('Mail', {
    tableName: 'mail',
    properties: {
      senderName: String,
      pnjID: Number,
      subject: String,
      abstract: String,
      content: String,
      createDate: Number,
      nextEventID: Number,
      read: String,
      answered: String
    }
  });


  $ngData.model('SMS', {
    tableName: 'sms',
    properties: {
      senderName: String,
      pnjID: Number,
      content: String,
      createDate: Number,
      read: String,
      answered: String
    }
  });

  $ngData.model('User', {
    tableName: 'user',
    properties: {
      serverID: String,
      token: String,
      displayName: String,
      picture: String,
      firstName: String,
      lastName: String,
      telephone: String,
      email: String,
      createDate: Date,
      age: Number,
    }
  });

  $ngData.model('Scenario', {
    tableName: 'scenario',
    properties: {
      title: String,
      firstEvent: String

    }
  });

  console.log('Schemas initialized')

  $ngData.initialize().then(function(results) {
    console.log(results);

  }).catch(function(error) {
    console.log(error);
  });



}