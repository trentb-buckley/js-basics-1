/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
console.log(`Problem 1`);

var gitDefinition = ('Git is a program we use to run code and access files on our Computer.');
console.log(gitDefinition);

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
console.log(`Problem 2`);

var gitHubDefinition = (`GitHub is a hub for our code we run through Git-Bash. It is how we have been storing our work. It is a bridge between us and our teacher.`;
console.log(gitHubDefinition);
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
    */
   
   //////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
console.log(`Problem 3`);

const init = {code: `git init`, definition: `The first step to pushing our code. "git init" is a command we use to initialize git, 
to prepare it for adding and committing.`};

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
console.log(`Problem 4`);

const clone = {code: `git clone "url"`, definition: `We use the clone command to create a clone of an existing repository.`};

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
console.log(`Problem 5`);

const status = {code: `git status`, definition: `Used to check status of your current branch and which files that are not up to date.`};

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
console.log(`Problem 6`);

const add = {code: `git add . or git add "file name"`, definition: `Used to add files that are ready to commit.`};

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
console.log(`Problem 7`);

const commit = {code: `git commit -m "message"`, definition: `Used to commit files to be pushed. The message will appear in GitHub to confirm the final push.`};

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
console.log(`Problem 8`);

const push = {code: `git push "url" or git push`, definition: `This is the final step for commition. We use git push initially to push the file to
GitHub, otherwise we use it to push our updated files. These files will appear in GitHub with our message and time stamp.`};