const {encrypt, decrypt} = require("./script");

const payload = {userId: 123, role: "admin"};

const token = encrypt(payload);
console.log("Generated Token:",token);

const decoded = decrypt(token);
console.log("Decoded Token",decoded)