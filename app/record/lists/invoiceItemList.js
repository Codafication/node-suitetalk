"use strict";

const List = require("./common/list");

class InvoiceItemList extends List {

    constructor() {
        super();
        this._type = "tranSales";
        this._name = "InvoiceItemList";
        this._listName = "itemList";
    }
}

module.exports = InvoiceItemList;
