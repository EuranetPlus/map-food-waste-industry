import { writable } from 'svelte/store';
export const mapConfig = writable({
  "title": "How much food waste is caused by the food industry?",
  "subtitle": "In the EU27, the food industry generated an average of 24 kg of food waste per person in 2023, with Denmark recording the highest level at 124 kg per capita, followed by Cyprus with 70 kg and Ireland with 57 kg, while Portugal had the lowest value at 5 kg",
  "colourSchemeClasses": 7,
  "data": "country,id,value,extraInfo,text_content\nBelgium,BE,53,false,\nBulgaria,BG,24,false,\nCzechia,CZ,13,false,\nDenmark,DK,124,false,\nGermany,DE,23,false,\nEstonia,EE,17,false,\nIreland,IE,57,false,\nGreece,EL,47,false,\nSpain,ES,11,false,Estimated value\nFrance,FR,34,false,\nCroatia,HR,11,false,\nItaly,IT,10,false,\nCyprus,CY,70,false,Estimated value\nLatvia,LV,15,false,\nLithuania,LT,19,false,Estimated value\nLuxembourg,LU,18,false,\nHungary,HU,18,false,\nMalta,MT,10,false,\nNetherlands,NL,48,false,\nAustria,AT,22,false,\nPoland,PL,15,false,Estimated value\nPortugal,PT,5,false,Estimated value\nRomania,RO,22,false,\nSlovenia,SI,10,false,\nSlovakia,SK,15,false,\nFinland,FI,26,false,\nSweden,SE,29,false,Estimated value",
  "parsedData": [
    {
      "country": "Belgium",
      "id": "BE",
      "value": 53,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Bulgaria",
      "id": "BG",
      "value": 24,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Czechia",
      "id": "CZ",
      "value": 13,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Denmark",
      "id": "DK",
      "value": 124,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Germany",
      "id": "DE",
      "value": 23,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Estonia",
      "id": "EE",
      "value": 17,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Ireland",
      "id": "IE",
      "value": 57,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Greece",
      "id": "EL",
      "value": 47,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Spain",
      "id": "ES",
      "value": 11,
      "extraInfo": false,
      "text_content": "Estimated value"
    },
    {
      "country": "France",
      "id": "FR",
      "value": 34,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Croatia",
      "id": "HR",
      "value": 11,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Italy",
      "id": "IT",
      "value": 10,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Cyprus",
      "id": "CY",
      "value": 70,
      "extraInfo": false,
      "text_content": "Estimated value"
    },
    {
      "country": "Latvia",
      "id": "LV",
      "value": 15,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Lithuania",
      "id": "LT",
      "value": 19,
      "extraInfo": false,
      "text_content": "Estimated value"
    },
    {
      "country": "Luxembourg",
      "id": "LU",
      "value": 18,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Hungary",
      "id": "HU",
      "value": 18,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Malta",
      "id": "MT",
      "value": 10,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Netherlands",
      "id": "NL",
      "value": 48,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Austria",
      "id": "AT",
      "value": 22,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Poland",
      "id": "PL",
      "value": 15,
      "extraInfo": false,
      "text_content": "Estimated value"
    },
    {
      "country": "Portugal",
      "id": "PT",
      "value": 5,
      "extraInfo": false,
      "text_content": "Estimated value"
    },
    {
      "country": "Romania",
      "id": "RO",
      "value": 22,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Slovenia",
      "id": "SI",
      "value": 10,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Slovakia",
      "id": "SK",
      "value": 15,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Finland",
      "id": "FI",
      "value": 26,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Sweden",
      "id": "SE",
      "value": 29,
      "extraInfo": false,
      "text_content": "Estimated value"
    }
  ],
  "datasetType": "values",
  "datasetUnit": "fullNumbers",
  "percentRounded": false,
  "colourSchemeType": "sequential",
  "colourScheme": "purple-red",
  "colourSchemeReverse": false,
  "headlineAvailable": true,
  "subheadlineAvailable": true,
  "tooltipAvailable": true,
  "scaleBarAvailable": true,
  "overrideScaleValues": true,
  "legendAvailable": true,
  "textSourceAvailable": true,
  "textSourceDescription": "Source",
  "textSource": "Eurostat (2026)",
  "textNoteAvailable": true,
  "textNoteDescription": "Note",
  "textNote": "",
  "textDataAccessAvailable": true,
  "linkDataAccessDescription": "Access the data",
  "linkDataAccess": "https://ec.europa.eu/eurostat/databrowser/view/env_wasfw/default/table?lang=en",
  "legend1": "No data available",
  "legend1Color": "#E0E0E0",
  "colorBarFirstValue": "20",
  "colorBarLastValue": "125",
  "customUnitLabelAvailable": true,
  "customUnitLabel": "kilograms per capita",
  "tooltipExtraInfoLabel": "Click here",
  "translate": {
    "title": "How much food waste is caused by the food industry?",
    "subtitle": "In the EU27, the food industry generated an average of 24 kg of food waste per person in 2023, with Denmark recording the highest level at 124 kg per capita, followed by Cyprus with 70 kg and Ireland with 57 kg, while Portugal had the lowest value at 5 kg",
    "textNoteDescription": "Note",
    "textNote": "",
    "textSourceDescription": "Source",
    "textSource": "Eurostat (2026)",
    "linkDataAccessDescription": "Access the data",
    "legend1": "No data available",
    "tooltipExtraInfoLabel": "Click here",
    "extraInfo_ES": "Estimated value",
    "extraInfo_CY": "Estimated value",
    "extraInfo_LT": "Estimated value",
    "extraInfo_PL": "Estimated value",
    "extraInfo_PT": "Estimated value",
    "extraInfo_SE": "Estimated value"
  },
  "clusters": [],
  "colorScale": null,
  "extraInfo_CY": "Estimated value",
  "extraInfo_EL": "Estimated value",
  "extraInfo_ES": "Estimated value",
  "extraInfo_HR": "Estimated value",
  "extraInfo_PT": "Estimated value",
  "extraInfo_SK": "Estimated value",
  "extraInfo_SE": "Estimated value",
  "extraInfo_LT": "Estimated value",
  "extraInfo_PL": "Estimated value"
});