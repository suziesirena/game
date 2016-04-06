
function populateData($ngData){

  $ngData.models['Event'].create({
            id            : 1,
            type          : 'mail',
            senderID      : 1,
            scheduledTime : 4000,
            nextEvent     : 2,
            subject       : 'Your phone is activated',
            abstract      : 'Wait for instructions',
            content       : 'Suzie will contact you soon.',
  });

  $ngData.models['Event'].create({
            id            : 2,
            type          : 'sms',
            senderID      : 2,
            scheduledTime : 4000,
            config        : JSON.stringify([
              [2000, 'Appelez moi dès que tu es prêt'],
              [4000, 'Appelle moi']
            ])
  });

  // var EventsList = [
  //   ['mail', 1, 2000, 'Hello, You have been recruited to serve the cause of the agency. Connect to the Agency to activate your phone and wait for instructions.<button class="button button-block button-positive" ng-click="closeModal()">Connect to the Agency</button>']
  // ];
  //
  //   for (var i=0 ; i< EventsList.length ; i++) {
  //       var newEvent = {
  //                 type          : EventsList[i][0],
  //                 fromPNJ       : EventsList[i][1],
  //                 scheduledTime : EventsList[i][2],
  //                 content       : EventsList[i][3]
  //             }
  //     $ngData.models['Event'].create(newEvent);
  //   }

  var PNJsList =[
    ["M" , "The Agency" , "" , 0 , "Secret organization" , "Boston, MA" , "contact@theagency.com" , "617-000-0001" , "Secret organization"],
    ["F" , "Suzie" , "Sirena" , 0 , "PNJ principale" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "Sherlock" , "Holmes" , 0 , "détective, fils d'un gentilhomme campagnard (et petit-fils du peintre français Vernet)" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "Docteur" , "Watson" , 0 , "" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["F" , "Alfie" , "" , 0 , "Irrégulier de Baker Street, servant de caddie & Sherlock Holmes au golf" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "M." , "Amos" , 0 , "Vieux libraire" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "Robert" , "Barnett " , 0 , "Petit-neveu de sir Dexter Mannington, perdu de vue depuis longtemps et dont l'identité est revendiquée par cinq postulants. Gilmer : majordome de sir Dexter" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "Gilmer" , "" , 0 , "Majordome de sir Dexter" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "John" , "Gregg" , 0 , "Rival de sir Dexter au golf" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "Joe" , "" , 0 , "Caddie de John Gregg" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "Thomas" , "Malone" , 0 , "Vieil ami de sir Dexter" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "Sir Dexter" , "Mannington" , 0 , "Homme très fortuné qui essaie d'identifier son héritier perdu" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "Matthew" , "Mannington" , 0 , "Frère défunt de sir Dexter, grand-père de Robert Barnett" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["F" , "Sandy" , "" , 0 , "Caddie de sir Dexter" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "Andrew" , "Sinclair" , 0 , "Cousin de sir Dexter" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "Bruce" , "Sinclair" , 0 , "Cousin de sir Dexter" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "Charles" , "Sinclair" , 0 , "Cousin de sir Dexter" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "Dennis" , "Sinclair" , 0 , "Cousin de sir Dexter" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "Héritier 1" , "" , 0 , "" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "Héritier 2" , "" , 0 , "" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "Héritier 3" , "" , 0 , "" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "Héritier 4" , "" , 0 , "" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"],
    ["M" , "Héritier 5" , "" , 0 , "" , "Boston, MA" , "jking@fakemail.com" , "617-000-0001" , "President and CEO"]
  ];

  for (var i=0 ; i< PNJsList.length ; i++) {
      var newPNJ = {
                gender        : PNJsList[i][0],
                firstName     : PNJsList[i][1],
                lastName      : PNJsList[i][2],
                dead          : PNJsList[i][3],
                infos         : PNJsList[i][4],
                city          : PNJsList[i][5],
                email         : PNJsList[i][6],
                cellPhone     : PNJsList[i][7],
                title         : PNJsList[i][8]
            }
    $ngData.models['PNJ'].create(newPNJ);
  }



  console.log('Data pushed to database');

}
