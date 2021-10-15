console.log("Welcome to the password validator tool");

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("Please put in your password:")
reader.question("Please put in your Password:"), function(input){
    tokens = input.split(' ');

    password = [1];

    console.log('password',  password);

    for(i = 0; i<tokens.length; i++){
        if(tokens[i] === password);
        console.log("Password is correct, you may enter");
    } else {
        console.log("Correct");
    };
    reader.close()
};


// ***This does not function. I was trying to use our calculator format for this password validator but it hasn't worked yet***