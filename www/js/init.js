(function($){
  $(function(){

    //$('.parallax').parallax();
    $('select').formSelect();
    

  }); // end of document ready
})(jQuery); // end of jQuery name space
document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    //LoginButton onclick function
    $("#loginButton").click(function(){
      let pin = $("#pin").val();
      let pinList = [1234,1111];
      let sToken;
      //We identify the API to be used
      let usedAPI;
      let isValid= false;
      //Pin check
      for(let i = 0;i<pinList.length;i++){
        if (pinList[i]==pin){
          isValid=true;
        }
      }
      if(isValid){
        window.location.assign('emulator.html');
      }else{
        alert("Error: Introdueix el pin correcte");
      }
      
      
      //Page reload prevention
      return false;
      });
}
