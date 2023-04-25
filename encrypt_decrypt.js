"use strict";

/*

Author: Ian Flanagan Tricentis Devops 2023

*/

const crypto = require('crypto');
const { argv } = require('process');


let values = {

  cipheralgorithm:'aes-256-cbc',
  encoding:'utf8',
  hashtype:'hex'

};

let args = [];

function encrypt(text,password){

let cipher, crypted;

try {

  text = args[0];
  password = args[1];
  cipher = crypto.Cipher(values.cipheralgorithm,password);
  crypted = cipher.update(text,values.encoding,values.hashtype);
  crypted += cipher.final('hex');
  return crypted;

}
catch(err) {

    console.log('Can\'t Encrypt the data ' +err);
    return;
}

}

function decrypt(encryptedText, password) {

  let dec,decipher;

  try {

  encryptedText = args[0];
  password = args[1];
  decipher = crypto.Decipher(values.cipheralgorithm,password);
  dec = decipher.update(encryptedText,values.hashtype,values.encoding);
  dec += decipher.final(values.encoding);
  return dec;
    
  }
  catch(err) {
   console.log('Can\nt Decrypt data ' +err);
   return;
  }
  
}

 args = process.argv.slice(2); 

if (args.length !== 3)  {

 console.log('Syntax: node encrypt_decrypt.js  <stringtoencrypt> <password> <1 (encrypt) / 0 (decrypt)>');

} else {

  if (args[2] == 1) {


    console.log('let\'s encrypt the data!!!!');
    let encryptedTxt = encrypt();
    console.log(`Input data was ${args[0]} Encrypted Data is: ${encryptedTxt}`);
 
  } else {

    console.log('let\'s decrypt the data!!!!');
    let decryptedTxt = decrypt();
    console.log(`Input data was ${args[0]} decrypted Data is: ${decryptedTxt}`);
  }

}




