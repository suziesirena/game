wakandaServerURL = 'http://b5bf4cd4.ngrok.io/';
nodeServerURL = 'http://fcb09765.ngrok.io/';

reponses = $('.input');

for (var i=0 ; i<reponses.length ; i++) {
  reponse = reponses[i].value.split(' ');
  soluce = solution[i].split(' ');
  result ='';
  for (var j = 0 ; j < reponse.length ; j++){
    
    if (reponse[j] == soluce[j]) {
      result+= '<span style="color:green">' + reponse[j] + '</span> ';

    } else {
      result+= '<span style="color:red">' + reponse[j] + '</span> ' + '<span style="color:green">' + soluce[j] + '</span> ';
    }
    
  }
  
  
}
