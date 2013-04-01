AMFINavs = require('amfinav');

var cb = function (data) {
	console.log(data.funds.length);
	console.log('Completed');
}

//using an event listener with refresh every 3600 seconds
var amfi1 = new AMFINavs({refreshInterval : 3600});
amfi1.on('dataready', cb);

//using a callback with refresh every 3600 seconds
var amfi2 = new AMFINavs({callback: cb, refreshInterval : 3600});

//using a callback with no refresh
var amfi3 = new AMFINavs();
amfi3.on('dataready', cb);
