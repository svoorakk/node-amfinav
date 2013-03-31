node-amfinav
============

#### Fetches NAVs of Indian mutual funds published by AMFI and reformats data into JSON

Data can be read as a JSON Array

Usage
<pre>
amfi = require('amfi');
amfiNavs = new amfi(options);
</pre>

using with an event listener with refresh every 3600 seconds
<pre>
var amfiNavs = new amfi({refreshInterval : 3600});
amfiNavs.on('dataready', callback);
</pre>
using with a callback with refresh every 3600 seconds
<pre>
var amfiNavs = new amfi({callback: callback, refreshInterval : 3600});
</pre>

using with a callback with no refresh
<pre>
var amfiNavs = new amfi();
amfiNavs.on('dataready', callback);
</pre>

##### Options

- callback : function which handles NAV Data
- refreshInterval : Interval in seconds. Data is refreshed at this interval. 

##### Events

- dataready : Emitted after data is fetched and processed into JSON. 

##### Objects & properties
- amfi.status : String, 'Acquiring Data' or 'Data Ready'
- amfi.updateDate : Date, When last time data was updated
- amfi.data : Object, NAV Data 
	<pre>{funds:[fund1, fund2...], fundManagers: [fundManager1, fundManager2..], 
fundTypes: [fundType1, fundType2...], updateDate : Date}
</pre>
- fundManager : String, name of the fund manager
- fundType : String, fund type
- fund : Object
<pre>
{ 'Scheme Code': 'NNNNNNNN',
  'ISIN Div Payout/ ISIN Growth': 'Code1',
  'ISIN Div Reinvestment': 'Code2',
  'Scheme Name': 'Scheme XXXXXX',
  'Net Asset Value': '10.6113',
  'Repurchase Price': '10.5052',
  'Sale Price': '10.6113',
  'Date': '28-Mar-2013',
  'Type': 'Type1',
  'Manager': 'Manager1' }
</pre>