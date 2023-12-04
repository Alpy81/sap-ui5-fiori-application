sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        rootView: {
          viewName: "sap.ui.demo.walkthrough.view.App",
          type: "XML",
          async: true,
          id: "app",
        },
      },
      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments); // "arguments" statt "argument"

        let oData = {
          recipient: {
            name: "",
          },
        };
        let oModel = new JSONModel(oData);
        this.setModel(oModel); // "this.getView()" durch "this" ersetzt

        // set i18n
        let i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
          supportedLocales: [""],
          fallbackLocales: "",
        });
        this.setModel(i18nModel, "i18n"); // "this.getView()" durch "this" ersetzt
      },
    });
  }
);
