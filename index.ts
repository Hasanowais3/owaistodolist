#! /usr/bin/env node

import inquirer from "inquirer";
let todos: string[] = [];
let loop = true;

while(loop){
    const answer:{
        TODO:string,
        addMore: boolean
    } = await inquirer.prompt([
      {  type: "input",
        name:"TODO",
        message:"what do you want to add in your Todo?"
    },
    {
        type:"confirm",
        name:"addMore",
        message:"do you want to add in your Todo?"
    },
    ]);
    const{TODO,addMore} = answer;
    loop = addMore;
    if(TODO){
        todos.push(TODO);
    }else{
        console.log("kindly add valid input");
    }

}
if (todos.length>0){
    console.log("your todo list is: ");
    todos.forEach(todo=>{
        console.log(todo);
        
    });
}   
else{
        console.log("no todos found");
        
    }
