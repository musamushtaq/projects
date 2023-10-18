import inquirer from  "inquirer";
type anyType={
    userGuess:number
}
const systemGeneratedNo=Math.floor(Math.random()*10)

const answer=await inquirer.prompt([
     {
        type:"number",
        name:"userGuess",
        message:"guess the number:",
}
])

const {userGuess}=answer;
console.log(userGuess,"userGuess",systemGeneratedNo,"sys");

if(userGuess===systemGeneratedNo){
    console.log("your anser is correct");
}else{
    console.log("try again")
}

