'use strict';
var mongoose = require('mongoose'),
    MessagePlans = mongoose.model('RepToPrescMsg');

exports.GetMessagePlans_By_PrescriberID_ProductName_MsgCategory = (req, res) => {
    MessagePlans.aggregate([
        {
            $lookup:
            {
                // from: "RepToPrescMsgPlans",
                // localField: "PrescriberID",
                // foreignField: "PrescriberID",
                // as: "join_output"
                from: "MessageType",
                localField: "MessageCategory",
                foreignField: "MessageKey",

                from: "RepToPrescMsgPlans",
                localField: "PrescriberID, MessageCode",
                foreignField: "PrescriberID, MessageCode",

                as: "join_output"
            }
        },
        { $match: { 'PrescriberID': parseInt(req.params.PrescriberID), 'ProductName': req.params.ProductName, 'MessageCategory': req.params.MsgCategory } }
    ], function (err, _plans) {
        if (err)
            res.send(err);
        else {
            res.json(_plans);
        }
    });
};

