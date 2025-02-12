"use strict";

const Field = require("./common/field");

class DateTimeRef extends Field {

    constructor() {
        super();
        this._fieldType = "string";
    }
}

module.exports = DateTimeRef;