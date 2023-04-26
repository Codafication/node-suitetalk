"use strict";

const Line = require("./common/line");

class VendorAddressbook extends Line {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "VendorAddressbook";
        this._listName = "addressbook";
    }
}

module.exports = VendorAddressbook;
