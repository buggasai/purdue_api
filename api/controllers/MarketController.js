'use strict';
var mongoose = require('mongoose'),
    mysql = require('mysql'),
    MarketType = mongoose.model('MarketType');
//mysqlMarketType = mysql.model('MarketType');

exports.GetMarkets_By_EmailID = (req, res) => {
    MarketType.aggregate([
        {
            $lookup:
            {
                from: "RepToTerritory",
                localField: "MarketID",
                foreignField: "MarketID",
                as: "join_output"
            }
        },
        { $match: { 'join_output.RepEmail': req.params.RepEmail } }
    ], function (err, _market) {
        if (err)
            res.send(err);
        else {
            res.json(_market);
        }
    });

};

var con = mysql.createConnection({
    host: "192.168.100.13",
    user: "sagarsoft",
    password: "sagarsoft123",
    database: "purdue"
});


exports.GetMarkets_By_EmailID1 = (req, res) => {
    con.connect(function (err) {
        con.query("select * from MarketType mt join RepToTerritory rt on mt.MarketID =  rt.MarketID where RepEmail = " + req.params.RepEmail, function (err, result, fields) {
            if (err)
                res.send(err);
            else {
                res.json(result);
            }
        });
    });
};
