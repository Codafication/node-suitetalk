"use strict";

const Line = require("./common/line");

class InvoiceItem extends Line {

    constructor() {
        super();
        this._type = "tranSales";
        this._name = "InvoiceItem";
        this._listName = "item";
    }
}

module.exports = InvoiceItem;
