# COVID-19 Chennai


![](https://i.postimg.cc/Y9RmrSZh/image.png)

-----------------------------------

### WEBSITE
| Status        | URL                                                      |
| ------------- | -------------------------------------------------------- |
| :thumbsup: | https://elseasama.github.io/covid19chennai/

-----------------------------------
### JSON

| Status        | Data | Endpoint                                                                     | URL                                                      |
| ------------- | ------------------------------------------------------------------------- | -------------------------------------------------------- |-------------------------------------------------------- |
| :thumbsup: | Zone level : Time series, Confirmed cases, recovered cases, Hospitalized cases, and Deceased cases |cases | [https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai](https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai/cases)              |
| :thumbsdown: | ~~Patient Level : Deceased patient data~~ | ~~deceased~~              | ~~[deprecated ](https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai/deceased)~~ 
| :thumbsup: | Patient Level : Deceased patient data |         | [https://sheet.best/api/sheets/5e33898f-a876-4186-9277-6103ef824266](https://sheet.best/api/sheets/5e33898f-a876-4186-9277-6103ef824266)
| :thumbsup: | Zone and ward level : Containment zones | containmentZones       | [https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai](https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai/containmentZones)  
| :thumbsup: | Zone and ward level : ward names, households, and population | demographics            | [https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai](https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai/demographics)
| :thumbsup: | District level : Samples tested and tests per million | testing         | [https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai](https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai/testing)  

-----------------------------------------

### CSV
| Status     | Data                                                                                               | CSV |
|------------|----------------------------------------------------------------------------------------------------|-----|
| :thumbsup: | Zone level : Time series, Confirmed cases, recovered cases, Hospitalized cases, and Deceased cases | https://github.com/elseasama/covid19chennai/blob/gh-pages/chennai_data/cases.csv    |
| :thumbsup: | Patient Level : Deceased patient data                                                              | https://github.com/elseasama/covid19chennai/blob/gh-pages/chennai_data/deceased.csv    |
| :thumbsup: | Zone and ward level : Containment zones                                                            |   https://github.com/elseasama/covid19chennai/blob/gh-pages/chennai_data/ContainmentZones.csv  |
| :thumbsup: | Zone and ward level : ward names, households, and population                                       | https://github.com/elseasama/covid19chennai/blob/gh-pages/chennai_data/demographics.csv 
| :thumbsup: | District level : Samples tested and tests per million                                       | https://github.com/elseasama/covid19chennai/blob/gh-pages/chennai_data/testing.csv    |

----------------------------------------------

### RAW DATABASE

| Status        | Data                                                                      | URL                                                      |
| ------------- | ------------------------------------------------------------------------- | -------------------------------------------------------- |
| :thumbsup: | Raw database              | https://docs.google.com/spreadsheets/d/1-SUs7yJeJzYQMNbH6ERPReV0ua9bDHZtb_uHqbEPeI8/edit?usp=sharing
  

# API Documentation

| Field          | Type   | Description                                        |
|----------------|--------|----------------------------------------------------|
| id             | number | Serial number                                      |
| date           | number | Date and time expressed according to ISO 8601      |
| zoneNo         | string | The zone number expressed in roman numeral format. |
| zoneName       | string | The name of the zone                               |
| confirmedCases | number | The cumulative number of confirmed cases.          |
| recovered      | number | The cumulative number of recovered cases.          |
| hospitalized   | number | The number of active cases currently hospitalized. |
| deceased       | number | The cumulative number of deceased cases.           |

### URL Structure

https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai/endpointName

### Getting records
To retrieve records from your sheet, perform a GET request to the endpoint (you can find the URL for the endpoint in project settings). This will return all records in your sheet.

To retrieve records from your sheet, perform a GET request to the endpoint (you can find the URL for the endpoint in project settings). This will return all records in your sheet.

https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai/cases/

If you want to return a specific record, append the record ID to the endpoint URL.

https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai/cases/3


