sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("ns.html5module.controller.View1", {
        onInit() {
            // Load the products shown on the landing page into the default model.
            const oProductsModel = new JSONModel({
                products: [
                    { name: "Notebook Basic 15", category: "Laptops", price: "956.00 EUR" },
                    { name: "Wireless Mouse", category: "Accessories", price: "24.50 EUR" },
                    { name: "USB-C Hub", category: "Accessories", price: "39.90 EUR" }
                ]
            });
            this.getView().setModel(oProductsModel);
        }
    });
});