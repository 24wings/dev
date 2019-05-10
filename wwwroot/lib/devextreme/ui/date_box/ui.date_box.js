/**
 * DevExtreme (ui/date_box/ui.date_box.js)
 * Version: 18.2.8
 * Build date: Tue Apr 23 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var registerComponent = require("../../core/component_registrator"),
    DateBoxMask = require("./ui.date_box.mask");
registerComponent("dxDateBox", DateBoxMask);
module.exports = DateBoxMask;