/**
 * DevExtreme (integration/angular/action_executors.js)
 * Version: 18.2.8
 * Build date: Tue Apr 23 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var Action = require("../../core/action");
Action.registerExecutor({
    ngExpression: {
        execute: function(e) {
            if ("string" === typeof e.action) {
                e.context.$eval(e.action)
            }
        }
    }
});
