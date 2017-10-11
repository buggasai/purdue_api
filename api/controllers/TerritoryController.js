'use strict';
var mongoose = require('mongoose'),
    Territory = mongoose.model('RepToTerritory');

// // to get all the Territories
exports.GetTerritories_By_Email_MarketID = (req, res) => {
    Territory.find({ RepEmail: req.params.RepEmail, MarketID: req.params.MarketID },
        { TerritoryID: 1, TerritoryName: 1, MarketID: 1, Display_Market: 1 }, function (err, _territory) {
            if (err)
                res.send(err);
            else {
                res.json(_territory);
            }
        });
};


