sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast"
], (Controller, JSONModel, Filter, FilterOperator, MessageToast) => {
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
        },

        // Filter the product list as the user types in the search field.
        onSearchProducts(oEvent) {
            const sQuery = oEvent.getParameter("query") || oEvent.getParameter("newValue") || "";
            const oList = this.byId("productList");
            const oBinding = oList.getBinding("items");
            const aFilters = sQuery
                ? [new Filter("name", FilterOperator.Contains, sQuery)]
                : [];
            oBinding.filter(aFilters);
        },

        // Show the selected product name when a list item is pressed.
        onProductPress(oEvent) {
            const oContext = oEvent.getSource().getBindingContext();
            const sName = oContext.getProperty("name");
            MessageToast.show(this.getView().getModel("i18n").getResourceBundle()
                .getText("productSelected", [sName]));
        }
    });
});