
// Ian Flanagan Devops Tricentis 2023

let mysql = require('mysql');
let config = require('./config.js');
let args = [];


function checkifModuleExists(module) {

	const { exec } = require('child_process');

// define the module name to check and install
const moduleName = module;

// check if the module is installed
exec(`npm list ${moduleName}`, (err, stdout, stderr) => {
  if (err) {
    // the module is not installed, so install it
    console.log(`Installing ${moduleName}...`);
    exec(`npm install ${moduleName}`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error installing ${moduleName}: ${err}`);
      } else {
        console.log(`${moduleName} installed successfully`);
      }
    });
  } else {
    // the module is already installed
    console.log(`${moduleName} is already installed`);
  }
});

}

function dbConnect() {


args = process.argv.slice(2); 

if (args.length !== 3)  {

 console.log('Syntax: node connectdb.js <username> <password> <database>')
 // throw new Error('Not enough arguments specified');
	
} else {

// console.log(args.length);
//console.log(`Hello ${args}`);


let connection = mysql.createConnection({

  host     : 'demo.c6joaom3qefu.us-east-2.rds.amazonaws.com',
  port      : '3306',
  user     : args[0],
  password : args[1],
  database : args[2]

});

connection.connect(function(err) {

  if (err) {

    return console.error('error: ' + err.message);
  }

  console.log(`Successfully Connected to the MySQL server using username:${args[0]} password:${args[1]} DBname:${args[2]}`);
  connection.destroy();

});

}

}

checkifModuleExists('mysql');
dbConnect();
