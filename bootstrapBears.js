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

    for(var i=0;i<100;i++) {
        var bear=new Bear();
        bear.name="Bear_"+i;
        bear.save();
    }

    setTimeout(function(){

        console.log('All bears saved, exiting now');
        process.exit();
    },10000)
});



