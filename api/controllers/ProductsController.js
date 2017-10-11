'use strict';
var mongoose = require('mongoose'),
    Products = mongoose.model('Products');

// // to get all the Territories
exports.GetProducts_By_PrescriberID_MarketID = (req, res) => {
    //RepEmail: req.params.RepEmail, MarketID: req.params.MarketID, TerritoryID: req.params.TerritoryID
    Products.find({}, 
    { IsDefault: 0, JobCode: 0, AddDate: 0, AddUser: 0, ChangeDate: 0, ChangeUser: 0, Deleted: 0 }, function (err, _products) {
        if (err)
            res.send(err);
        else {
            res.json(_products);
        }
    });
};