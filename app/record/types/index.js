"use strict";

const Types = {
    BillingAccount: require("./billingAccount"),
    CashSale: require("./cashSale"),
    Contact: require("./contact"),
    CreditMemo: require("./creditMemo"),
    Customer: require("./customer"),
    CustomerStatus: require("./customerStatus"),
    CustomRecord: require("./customRecord"),
    CustomRecordRef: require("./customRecordRef"),
    EntityGroup: require("./entityGroup"),
    Estimate: require("./estimate"),
    File: require("./file"),
    InventoryItem: require("./inventoryItem"),
    Invoice: require("./invoice"),
    ItemFulfillment: require("./itemFulfillment"),
    ListOrRecordRef: require("./listOrRecordRef"),
    Opportunity: require("./opportunity"),
    Partner: require("./partner"),
    RecordRef: require("./recordRef"),
    SalesOrder: require("./salesOrder"),
    TransferOrder: require("./transferOrder"),
    Vendor: require("./vendor"),
    VendorBill: require("./vendorBill")
};

module.exports = Types;
