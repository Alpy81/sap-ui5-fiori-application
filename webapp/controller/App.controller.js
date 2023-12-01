sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict"
    return Controller.extend("sap.ui.demo.wakthrough.App", {
        onShowHello : function () {
            // Show a native or Vanilla JS Alert
           alert("Hello there!");
        }
    });
});
            