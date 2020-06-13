### JSON

| Status        | Data | Endpoint                                                                     | URL                                                      |
| ------------- | ------------------------------------------------------------------------- | -------------------------------------------------------- |-------------------------------------------------------- |
| &#10003; | Zone level : Time series, Confirmed cases, recovered cases, Hospitalized cases, and Deceased cases |cases | [https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai](https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai/cases)              |
| &#10007; | ~~Patient Level : Deceased patient data~~ | ~~deceased~~              | ~~[deprecated ](https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai/deceased)~~ 
| &#10003; | Patient Level : Deceased patient data |         | [https://sheet.best/api/sheets/5e33898f-a876-4186-9277-6103ef824266](https://sheet.best/api/sheets/5e33898f-a876-4186-9277-6103ef824266)
| &#10003; | Zone and ward level : Containment zones | containmentZones       | [https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai](https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai/containmentZones)  
| &#10003; | Zone and ward level : ward names, households, and population | demographics            | [https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai](https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai/demographics)
| &#10003;  | District level : Samples tested and tests per million | testing         | [https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai](https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai/testing)  

----------------------------------------------

### CSV

| Status     | Data                                                                                               | CSV |
|------------|----------------------------------------------------------------------------------------------------|-----|
| &#10003; | Zone level : Time series, Confirmed cases, recovered cases, Hospitalized cases, and Deceased cases | [https://github.com/elseasama/covid19chennai/blob/gh-pages/chennai_data/cases.csv](https://github.com/elseasama/covid19chennai/blob/gh-pages/chennai_data/cases.csv)    |
| &#10003; | Patient Level : Deceased patient data                                                              | [https://github.com/elseasama/covid19chennai/blob/gh-pages/chennai_data/deceased.csv](https://github.com/elseasama/covid19chennai/blob/gh-pages/chennai_data/deceased.csv)    |
| &#10003; | Zone and ward level : Containment zones                                                            |   [https://github.com/elseasama/covid19chennai/blob/gh-pages/chennai_data/ContainmentZones.csv](https://github.com/elseasama/covid19chennai/blob/gh-pages/chennai_data/ContainmentZones.csv)  |
| &#10003; | Zone and ward level : ward names, households, and population                                       | [https://github.com/elseasama/covid19chennai/blob/gh-pages/chennai_data/ContainmentZones.csv](https://github.com/elseasama/covid19chennai/blob/gh-pages/chennai_data/demographics.csv) 
| &#10003;  | District level : Samples tested and tests per million | [https://github.com/elseasama/covid19chennai/blob/gh-pages/chennai_data/testing.csv](https://github.com/elseasama/covid19chennai/blob/gh-pages/chennai_data/testing.csv)

----------------------------------------------

### RAW DATABASE

| Status        | Data                                                                      | URL                                                      |
| ------------- | ------------------------------------------------------------------------- | -------------------------------------------------------- |
| &#10003; | Raw database : Zonal cases, containment zones, Demographics, sources, ward list  | [Raw database](https://docs.google.com/spreadsheets/d/1-SUs7yJeJzYQMNbH6ERPReV0ua9bDHZtb_uHqbEPeI8/edit?usp=sharing)



# API Documentation

### Zone level : Time series, Confirmed cases, recovered cases, Hospitalized cases, and Deceased cases

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
To retrieve records perform a GET request to the endpoint (you can find the URL for the endpoint in project settings). This will return all records.

To retrieve records perform a GET request to the endpoint (you can find the URL for the endpoint in project settings). This will return all records.

https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai/cases/

If you want to return a specific record, append the record ID to the endpoint URL.

https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai/cases/3

------------------------------------------------------------------------------------

### Patient Level : Deceased patient data

**Note: A null string represents that there is no data for that field.**
**The boolean value "true" or "TRUE" represents the presence of the disease or condition. The boolean value "false" or "FALSE" represents the abscence of the disease or condition.**

| Field                                                        | Type    | Description                                                                                                                      |
|--------------------------------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------|
| Death case No:                                               | Number  | Serial Number of the death case                                                                                                  |
| Age in years                                                 | Number  | Age of the deceased in years                                                                                                     |
| Age Group                                                    | String  | Age group of the deceased                                                                                                        |
| Sex                                                          | String  | Sex of the deceased                                                                                                              |
| Date of admission                                            | String  | Date of admission to the hospital                                                                                                |
| Time of admission                                            | String  | Time of the admission to the hospital                                                                                            |
| Date of Death                                                | String  | Date of death                                                                                                                    |
| Time of death                                                | String  | Time of death                                                                                                                    |
| Days At Hospital                                             | Number  | Number of days spent at the hospita                                                                                              |
| Date death was reported                                      | String  | The day when the death was reported to the public                                                                                |
| Date of sample                                               | String  | Date when the Nasopharyngeal swab specimen was taken from the patient to be analyzed for COVID-19                                |
| Date of result                                               | String  | Date when the results of the Nasopharyngeal swab specimen for COVID-19 was reported to be positive                               |
| Type Of Hospital                                             | String  | The type of hospital which can be either government or private hospital                                                          |
| Name of hospital                                             | String  | Name of the hospital                                                                                                             |
| a (IMMEDIATE CAUSE)                                          | String  | The final disease or injury causing the death                                                                                    |
| b                                                            | String  | Sequentially list of conditions, if any, leading to immediate cause.                                                             |
| c                                                            | String  | Sequentially list of conditions, if any, leading to immediate cause.                                                             |
| d                                                            | String  | Sequentially list of conditions, if any, leading to immediate cause.                                                             |
| e                                                            | String  | Sequentially list of conditions, if any, leading to immediate cause.                                                             |
| f                                                            | String  | Sequentially list of conditions, if any, leading to immediate cause.                                                             |
| Systemic Hypertension                                        | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Type 1 Diabetes Mellitus                                     | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Type 2 Diabetes Mellitus                                     | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Gestational Diabetes Mellitus                                | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Hypothyroidism                                               | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Morbid obesity                                               | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Bronchial Asthma                                             | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Rheumatoid Arthritis                                         | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Old Pulmonary Tuberculosis                                   | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Pulmonary Tuberculosis                                       | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Chronic Kidney Disease                                       | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Dependence on Renal Dialysis                                 | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Coronary Artery Disease                                      | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Presence of Aortocoronary Bypass Graft                       | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Coronary Angioplasty Status                                  | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Old Myocardial Infarction                                    | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Anemia                                                       | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Chronic Liver Disease                                        | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Chronic HCV infection                                        | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Chronic Obstructive Pulmonary Disease                        | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Chron's Disease                                              | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Bullous Pemphigoid                                           | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Pulmonary Tuberculosis Sequelae                              | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Acute Cerebrovascular Accident                               | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Old Cerebrovascular Accident                                 | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Seizure Disorder                                             | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Heart Failure                                                | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Bening Prostatic Hypertrophy                                 | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Personal History of Neoplasm of Prostate                     | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Adenocarcinoma of lung                                       | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Hepatitis B Infection                                        | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Meningioma                                                   | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Bipolar Disorder                                             | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Unilateral diaphragm paralysis                               | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Personal History of Malignant Neoplasm of Breast             | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Dyslypidemia                                                 | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Allergic Bronchitis                                          | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Malignant Neoplasm of Pancreas                               | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Diffuse Large B Cell Lymphoma                                | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Malignant Neoplasm of Cervix                                 | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Secondary Malignant Neoplasm of Lung                         | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Acute Pancreatitis                                           | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Parkinsonism                                                 | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Malignant Neoplasm of Larynx                                 | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Personal History of Irradiation                              | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Myasthenia Gravis                                            | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Liver Transplant Status                                      | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Ventricular Septal Defect                                    | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |
| Hydronephrosis with Renal and Ureteral Calculous Obstruction | Boolean | Any other important diseases or conditions that may have contributed to death but did not lead to the underlying cause of death. |

