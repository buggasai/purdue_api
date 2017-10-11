'use strict';
var mongoose = require('mongoose'),
    Prescriber = mongoose.model('RepToTerrPresc');

// // to get all the Territories
exports.GetPrescriber_By_Email_MarketID_TerritoryID = (req, res) => {
    Prescriber.find({ RepEmail: req.params.RepEmail, MarketID: req.params.MarketID, TerritoryID: req.params.TerritoryID },
        { id: 0, RepEmail: 0 }, function (err, _territory) {
            if (err)
                res.send(err);
            else {
                res.json(_territory);
            }
        });
};