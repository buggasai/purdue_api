'use strict';
var mongoose = require('mongoose'),
    MessageType = mongoose.model('MessageType');

exports.GetMessageTypes_By_PrescriberID_ProductName = (req, res) => {
    MessageType.aggregate([
        {
            $lookup:
            {
                from: "RepToPrescMsg",
                localField: "MessageKey",
                foreignField: "MessageCategory",
                as: "join_output"
            }
        },
        { $match: { 'join_output.PrescriberID': parseInt(req.params.PrescriberID), 'join_output.ProductName': req.params.ProductName } }
    ],
        function (err, _MessageType) {
            if (err)
                res.send(err);
            else {
                res.json(_MessageType);
            }
        });
};
