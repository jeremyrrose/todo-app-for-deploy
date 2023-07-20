# todoApp
With the help of Express and JSX, we will build a simple and single web page application called todo-app, where the user performs a CURD operation. 

## Table of Contents 
* [Setup]
* [Dependency]
* [Story]
* [OutPut]


## Setup 
- Fork this repo to your GitHub
- Clone the forked copy locally
- Open it in VS code
  
## Dependency 
- run
    - npm init -y
    - npm install

## Story
- [ ] Server.js
   -  import the dependencies, configuration, then middleware
   -  Add the code for server listen on the port = 3000
     
- [ ] Model (Data.js)
      - Create an array of todos.
      //the task array with initial placeholders for added task
      var task = ["buy socks", "practise with nodejs"];
      var complete = ["finish jquery"];

- [ ] View  (index.jsx)
   -  use index.jsx to create your view. add a form for creating, editing, delete todo's. 
      
- [ ] Controller -> todo_controller
   -  create the routes respectively 
   -  Retrieve all Todos GET /todos
     -  Iterate the array to show the todos.   
   -  create a new Todo POST /todos/new
     -  Add the code to create new  todos and push them to  the array. 
   -  pull the  todo depends on the id  GET /todo/:todo_id
     - Retrieve  the todo matching on the id from the array.
   -  Edit todos PUT or POST  /todo/:{todo_id}/edit
     -  Retrieve the todo and add the code to edit and update the respective todo. 
   -  Delete a Todo of a user DELETE /todos/{todo_id}
     -  Delete the todo respective of id from the array.
     

-[ ] OutPut 

![Screenshot 2023-07-20 at 1 42 43 AM](https://github.com/CodeSTACKE/todoApp/assets/48188772/ba2f045e-ce2e-4ae8-9b75-224a018a5118)





      
       








