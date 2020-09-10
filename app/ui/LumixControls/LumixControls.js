(function() {
    "use strict";
    
    const btnWifiConnect= document.querySelector("#btn-wifi-connect");
    const btSdShoot= document.querySelector("#btn-sd-shoot");
    const btnWideFast= document.querySelector("#btn-focus-wide-fast");
    const btnWideSlow = document.querySelector("#btn-focus-wide-slow");
    const btnTeleFast= document.querySelector("#btn-focus-tele-fast");
    const btnTeleSlow = document.querySelector("#btn-focus-tele-slow");
    const btnOptions = document.querySelector("#btn-options");


    class LumixControls {
        static setListeners() {
            btnWifiConnect.addEventListener("click", function() {
                console.log("connect");
                global.lumixCamera.connect();
            });
            btSdShoot.addEventListener("click", function() {
                console.log("shhhoooot");
                global.lumixCamera.take();
            });
            btnWideFast.addEventListener("click", function() {
                global.lumixCamera.focus("wide","fast");
            });
            btnWideSlow.addEventListener("click", function() {
                global.lumixCamera.focus("wide","normal");
            });
            btnTeleFast.addEventListener("click", function() {
                global.lumixCamera.focus("tele","fast");
            });
            btnTeleSlow.addEventListener("click", function() {
                global.lumixCamera.focus("tele","normal");
            });            
            btnOptions.addEventListener("click", function() {
                global.lumixCamera.options();
            });                                    
        
        
        }
    }

    module.exports = LumixControls;
}());