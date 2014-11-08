var fs = require("fs");
fs.readFile("calculator.dat",{encoding : "utf8"}, function(err,data){
    if (err) console.log("some error");
    console.log(data);
});
