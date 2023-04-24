
/*

Author: Ian Flanagan Tricentis  2023
edit the apiConfig.js file to add your API token 
and testID, suiteID, and testPlanID and or lablels
*/

let config = require('./apiConfig.js');

const mysuiteID = 'yBDyWXOxwzbNkzRm';
const mytestID = 'Gntn7GdluocTtWyT';
const testURL = `${config.url}/tests/run/${config.mytestID}`;
const labelURL = `https://api.testim.io/labels/run/${config.myLabelID}`;


//const url = `${config.url}/suites/run/${mysuiteID}`;

//const url = `${config.url}test-plans/run/${config.myTestPlanID}`;
const url = labelURL;
config.myTestPlanID

let token = config.myAPIKey;

function runTestbyID(testID) {


const data = {

  // Data to be sent in the request body

  "branch": config.branch,
  "grid" : config.grid,
  "parallel": config.parallel,
  "retries": config.retries,
  "timeout": config.timeout,
  "turboMode": config.turbomode,
  "resultLabels": [
    "Smoke Suite"
  ]

};

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  },
  body: JSON.stringify(data)
})
.then(response => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error("There was an error:", error);
});

}

function runSuiteByID(mysuiteID) {

const data = {

  "branch": config.branch,
  "grid" : config.grid,
  "parallel": config.parallel,
  "retries": config.retries,
  "timeout": config.timeout,
  "turboMode": config.turbomode,
  "resultLabels": [
    "Smoke Suite"
  ]

};

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  },
  body: JSON.stringify(data)
})
.then(response => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error("There was an error:", error);
});


}


function runByLabelID(myLabelID) {

let url = `${config.runTestbyLabelID}/${myLabelID}`;

const data = {

  "branch": config.branch,
  "grid" : config.grid,
  "parallel": config.parallel,
  "retries": config.retries,
  "timeout": config.timeout,
  "turboMode": config.turbomode,
  "resultLabels": [
    "Smoke Suite"
  ]

};

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  },
  body: JSON.stringify(data)
})
.then(response => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error("There was an error:", error);
});


}


function runTestPlanID(myTestPlanID) {

let url = `https://api.testim.io/test-plans/run/${myTestPlanID}`;

const data = {

  "branch": config.branch,
  "grid" : config.grid,
  "parallel": config.parallel,
  "retries": config.retries,
  "timeout": config.timeout,
  "turboMode": config.turbomode,
  "resultLabels": [
    "Smoke Suite"
  ],
   "mode": "selenium"

};

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  },
  body: JSON.stringify(data)
})
.then(response => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error("There was an error:", error);
});


}

function getTests (projectID) {

  let url = 'https://api.testim.io/tests';

 fetch(url, {method: 'GET', headers: {
         'Accept': 'application/json',
         'Authorization': `Bearer ${token}`
     },
     timeout: 5000
 }).then(response => response.json())
 
 .then(function(data) {
 
     console.log('In Data portion of promise');
 
     // define a new array to add the testim test case IDS to for the next step
     let myTests = [];
      Object.values(data)[0].forEach(test => myTests.push(test._id));    
      // console.log('My Tests is  =' +myTests);

      console.log('tests old way print out');

      // https://app.testim.io/#/project/yUHggaUM53fuXM0PejOu/branch/master/test/ToPNnwbAIwm0xB1k
    
      myTests.forEach(testID => console.log(`https://app.testim.io/#/project/${projectID}/branch/master/automate/test/${testID}`));
    
 
  });
  
 };


function getBranches () {

  console.log('calling getBranches() method now....');
  
   let url = 'https://api.testim.io/branches';
  
   fetch(url, {method: 'GET', headers: {
           'Accept': 'application/json',
           'Authorization': `Bearer ${token}`
       },
       timeout: 5000
   }).then(response => response.json())
   
   .then(function(data) {
   
       console.log('In Data portion of promise' +JSON.stringify(data));
         
      
   
    });
    
   };


function testSearch(testName) {

  console.log('calling testSearch() method now....');
  
   let url = 'https://api.testim.io/tests/search?name=${testName}';
  
   fetch(url, {method: 'GET', headers: {
           'Accept': 'application/json',
           'Authorization': `Bearer ${token}`
       },
       timeout: 5000
   }).then(response => response.json())
   
   .then(function(data) {
   
       console.log('Test Search' +JSON.stringify(data));
         
   
    });
    
   };


function getRunsExecutions(testName) {

  console.log('calling testSearch() method now....');
  
   let url = 'https://api.testim.io/tests/search?name=${testName}';
  
   fetch(url, {method: 'GET', headers: {
           'Accept': 'application/json',
           'Authorization': `Bearer ${token}`
       },
       timeout: 5000
   }).then(response => response.json())
   
   .then(function(data) {
   
       console.log('Test Search' +JSON.stringify(data));
         
   
    });
    
   };

//getTests('yUHggaUM53fuXM0PejOu');
//runTestPlanID(config.myTestPlanID);
//runByLabelID(config.myLabelID);
//getBranches();
testSearch('addition two numbers ');

