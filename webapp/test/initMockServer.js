sap.ui.define([
    "../localService/mockserver"
], function (mockserver) {
    "use strict";

    // init mock server
    mockserver.init();

    // init embbeded component on html page
    sap.ui.require(["sap/ui/core/ComponentSupport"]) 
})