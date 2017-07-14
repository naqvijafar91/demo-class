/**
 * Created by jafarnaqvi on 12/07/17.
 */
var Bear = require('./../models/bear');


//Database Connectivity with mongoose
var mongoose = require('mongoose');
var dbName = 'bearsDb';

mongoose.Promise = require('bluebird');


var connectionString = 'mongodb://localhost:27017/' + dbName;
mongoose.connect(connectionString, function (err) {

    if (err)
        return console.log('Cant connect to Database');

    PrintBears();
});

function PrintBears() {

    Bear.findOne({name: 'Bear_0'})
        .then(function (bear0) {

            console.log(bear0);

            return Bear.findOne({name: 'Bear_1'})
        }).then(function (bear1) {

            console.log(bear1);

            return Bear.findOne({name: 'Bear_2'})
        }).then(function (bear2) {

            console.log(bear2);

            return Bear.findOne({name: 'Bear_3'})
        }).then(function (bear3) {

            console.log(bear3);

            return Bear.findOne({name: 'Bear_4'})
        }).then(function (bear4) {

            console.log(bear4);

            return Bear.findOne({name: 'Bear_5'})
        }).then(function (bear5) {

            console.log(bear5);

        })
        .catch(function (err) {

            console.log(err);
        })
}