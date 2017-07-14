/**
 * Created by jafarnaqvi on 12/07/17.
 */

var Bear = require('./../models/bear');


//Database Connectivity with mongoose
var mongoose = require('mongoose');
var dbName = 'bearsDb';

var connectionString = 'mongodb://localhost:27017/' + dbName;
mongoose.connect(connectionString, function (err) {

    if (err)
        return console.log('Cant connect to Database');

    PrintBears();
});


function PrintBears() {

    Bear.findOne({name: 'Bear_0'}, function (err, bear0) {

        if (err)
            return console.log(err);

        console.log(bear0);

        Bear.findOne({name: 'Bear_1'}, function (err, bear1) {
            if (err)
                return console.log(err);

            console.log(bear1);

            Bear.findOne({name: 'Bear_2'}, function (err, bear2) {
                if (err)
                    return console.log(err);

                console.log(bear2);

                Bear.findOne({name: 'Bear_3'}, function (err, bear3) {
                    if (err)
                        return console.log(err);

                    console.log(bear3);

                    Bear.findOne({name: 'Bear_4'}, function (err, bear4) {
                        if (err)
                            return console.log(err);

                        console.log(bear4);

                        Bear.findOne({name: 'Bear_5'}, function (err, bear5) {
                            if (err)
                                return console.log(err);

                            console.log(bear5);
                        })
                    })
                })
            })
        })

    });
}
