'use strict';
module.exports = function (app) {
    var territory = require('../controllers/TerritoryController');
    var market = require('../controllers/MarketController');
    var prescriber = require('../controllers/PrescriberController');
    var products = require('../controllers/ProductsController');
    var messageType = require('../controllers/MessageTypeController');
    var messagePlans = require('../controllers/MessagePlansController');

    // Territory Routes
    app.route('/GetTerritories/:RepEmail/:MarketID')
        .get(territory.GetTerritories_By_Email_MarketID);

    // Market Routes
    app.route('/GetMarket/:RepEmail')
        .get(market.GetMarkets_By_EmailID);

    // Prescriber Routes
    app.route('/GetPrescribers/:RepEmail/:MarketID/:TerritoryID')
        .get(prescriber.GetPrescriber_By_Email_MarketID_TerritoryID);

    // Products Routes
    app.route('/GetProducts/:PrescriberID/:MarketID')
        .get(products.GetProducts_By_PrescriberID_MarketID);

    // MessageType Routes
    app.route('/GetMessageTypes/:PrescriberID/:ProductName')
        .get(messageType.GetMessageTypes_By_PrescriberID_ProductName);

         // MessagePlans Routes
    app.route('/GetMessagePalns/:PrescriberID/:ProductName/:MsgCategory')
        .get(messagePlans.GetMessagePlans_By_PrescriberID_ProductName_MsgCategory);

}
