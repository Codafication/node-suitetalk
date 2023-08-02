"use strict";

const Record = require("./common/record");

class VendorBill extends Record {

    constructor() {
        super();
        this._type = "tranPurch";
        this._name = "VendorBill";
        this.nullFieldList = undefined;
        this.customFieldList = undefined;
    }
}

module.exports = VendorBill;
