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
    let pin = localStorage.getItem("pin");
    let VRexerciseID = localStorage.getItem("VRexID");
    //send VREMU data to server
    $("#sendValuation").click( function(){
        let passed_items = $("#passed_items").val();
        let failed_items = $("#failed_items").val();
        let score = $("#score").val();
        let feedback = $("#feedback").val();
        console.log(`passed_items: ${passed_items}`);
        console.log(`failed_items: ${failed_items}`);
        console.log(`score: ${score}`);
        console.log(`feedback: ${feedback}`);
        let inputAutograde = {
            "passed_items": passed_items,
            "failed_items": failed_items,
            "score": score,
            "comments": feedback
        }
        let dataS = {
            "inputPin": pin,
            "VRexerciseID": VRexerciseID,
            "autograde" : inputAutograde
        }
        
        $.ajax({
            headers: {
                'accept': 'application/json',
            },
            method: "POST",
            // AMS API
            url: "https://class-vr-room-api.herokuapp.com/api/finish_vr_exercise",
            // AWS API
            // url: "https://ietivroom.herokuapp.com/api/finish_vr_exercise",
            // processData: false,
            data: JSON.stringify(dataS),
            dataType: "json",
        }).done(function(response){
            console.log(response);
            alert("Puntuación del ejercicio guardada correctamente")
        }).fail(function(failed){
            console.log(failed);
            alert(JSON.stringify(failed))
        })
        alert("result")
        return false;
    });
      
  }