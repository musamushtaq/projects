import inquirer from "inquirer";
type operationType={
    num1:number;
    num2:number;
    operation:string;
}
inquirer
.prompt([
    {
        type:"number",
        name:"num1",
        message:"enter 1st number",
    },
    {
        type:"number",
        name:"num2",
        message:"enter 2nd number"
    },
    {
        type:"list",
        name:"operation",
        message:"select oeration",
        choices:["+","-","/","*"],
    }
    
]
)
.then((answer:operationType)=>{
    if (answer.operation =="+") {
        const result=answer.num1 + answer.num2;
        console.log("sum",result);
    }else if (answer.operation == "-") {
        const result = answer.num1 - answer.num2;
        console.log("Subtract", result);
      } else if (answer.operation == "*") {
        const result = answer.num1 * answer.num2;
        console.log("Multiple", result);
      } else if (answer.operation == "/") {
        const result = answer.num1 / answer.num2;
        console.log("Division", result);
      }
    })
   
    .catch((error:any)=>{
        if (error.isTtyError) {
          console.log("could not be rendered")  
        
    }else{

console.log("something else went wrong")
    }
    });
    


