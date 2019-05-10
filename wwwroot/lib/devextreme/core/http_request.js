/**
 * DevExtreme (core/http_request.js)
 * Version: 18.2.8
 * Build date: Tue Apr 23 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var windowUtils = require("./utils/window");
var window = windowUtils.getWindow();
var injector = require("./utils/dependency_injector");
var nativeXMLHttpRequest = {
    getXhr: function() {
        return new window.XMLHttpRequest
    }
};
module.exports = injector(nativeXMLHttpRequest);
