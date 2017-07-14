/**
 * Created by jafarnaqvi on 12/07/17.
 */

var Bear=require('./models/bear');



//Database Connectivity with mongoose
var mongoose   = require('mongoose');
var dbName='bearsDb';

var connectionString='mongodb://localhost:27017/'+dbName;
mongoose.connect(connectionString,function(err){

    if(err)
        return console.log('Cant connect to Database');

    mongoose.connection.collections['bears'].drop( function(err) {
        if(err)
            return console.log(err);


        console.log('Database Cleared');

        process.exit();
    });

});

