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
    $("#loginButton").click( function(){
      let pin = $("#pin").val();
      $.ajax({
        method: "GET",
        // AMS API
        url: "https://class-vr-room-api.herokuapp.com/api/start_vr_exercise",
        // AWS API
        // url: "https://ietivroom.herokuapp.com/api/start_vr_exercise",
        //AMS API
        data: {"PIN": pin},
        // AWS API
        // data: {"pin": pin},
        dataType: "json",
      }).done(function(response){
        console.log(response);
        alert(response)
        if(response.status === "OK"){
          localStorage.setItem("pin", pin);
          localStorage.setItem("VRexID", response.VRexerciseID);
          window.location.assign('emulator.html');
        }else{
          alert(`${response.status}: ${response.message}`);
        }
      }).fail(function(failed){
        console.log(failed);
        alert(JSON.stringify(failed));
      });
        
      //Page reload prevention
      return false;
      
    });
}
