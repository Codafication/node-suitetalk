"use strict";

const List = require("./common/list");

class VendorAddressbook extends List {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "VendorAddressbookList";
        this._listName = "addressbookList";
    }
}

module.exports = VendorAddressbook;
