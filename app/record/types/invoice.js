"use strict";

const Record = require("./common/record");

class Invoice extends Record {

    constructor() {
        super();
        this._type = "tranSales";
        this._name = "Invoice";
        this.nullFieldList = undefined;
        this.customFieldList = undefined;
    }
}

module.exports = Invoice;
