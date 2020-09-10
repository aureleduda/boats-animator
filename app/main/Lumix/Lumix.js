(function() {
  "use strict";
  const LumixControls = require("../../ui/LumixControls/LumixControls");
  var request = require('then-request');

  class Lumix {
    constructor() {
      this.ip= "192.168.10.155";
      this.port="";
      this.baseurl = "http://"+this.ip+"/cam.cgi"
      this.connected = false;

      // Add the event listeners
      LumixControls.setListeners();
    }
    connect() {
      console.log(this.baseurl);
      if (this.ip) {
        console.log("Connect to wifi camera at " + this.baseurl );
        var that = this;
        request("GET", this.baseurl+"?"+"mode="+"camcmd"+"&"+"value="+"recmode").done(function (res) {
          if (res.getBody().toString().includes("<result>ok</result>")) {
            console.log("appareil connecté");
            that.connected = true;
          }
          else {
            console.log("appareil non connecté");
          }
        
        });
      }
      else {
        console.log("no ip");
      }
      console.log("connection")
    }

    take() {
      if(this.connected==true) {
        request("GET", this.baseurl+"?"+"mode="+"camcmd"+"&"+"value="+"capture").done(function (res) {
          if (res.getBody().toString().includes("<result>ok</result>")) {
            console.log("photo prise");
          }
          else {
            console.log("photo non prise");
          }
        });
      }
    }
    focus(mode="tele",speed="normal") {
      if(this.connected==true) {
        var focusmode = mode+"-"+speed;
        request("GET", this.baseurl+"?"+"mode="+"camctrl"+"&"+"type="+"focus"+"&"+"value="+focusmode).done(function (res) {
          if (res.getBody().toString().includes("<result>ok</result>")) {
            console.log("focus "+focusmode);
          }
          else {
            console.log("focus râté "+focusmode);
          }
        });
      }
    }
    options() {
      if(this.connected==true) {
        request("GET", this.baseurl+"?"+"mode="+"getinfo"+"&"+"type="+"allmenu").done(function (res) {
          console.log(res.getBody().toString());
          if (res.getBody().toString().includes("<result>ok</result>")) {
            console.log(res.getBody().toString());
          }
          else {
            console.log("pas de menu");
          }
        });
      }
    }    
  }

  module.exports = Lumix;
})();

