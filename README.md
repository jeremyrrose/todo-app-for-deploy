# todoApp

With the help of Express and JSX, we will build a simple and single-page web application called **todoApp**, where the user performs CRUD operations. 

## Table of Contents 

* [Setup](#Setup)
* [Dependency](#Dependency)
* [Story](#Story)
* [Output](#Output)

## Setup 

- Fork this repo to your GitHub
- Clone the forked copy locally
- Open it in VS Code
  
## Dependencies 

The required dependencies are already listed in `package.json`. Just run `npm install`!

## Story

- [ ] Server (`server.js`)

  - Import the dependencies, set configuration, then add middleware.
  - Add the code for server listen on the port 3000. You can use `.env` if you want!
  - Run `nodemon server.js` to look for issues as you go.
     
- [ ] Model (`models/data.js`)

  - Create an array of todos, and an array of completed todos.
      
    ```js
    var tasks = ["buy socks", "practise with nodejs", "eat pizza"];
    var complete = ["finish jquery"];
    module.exports = { tasks, complete }
    // when this file is required, it will export an object with a "tasks" key and a "complete" key
    ```

- [ ] View (`views/index.jsx`)

   - `require('react')` at the top of your file, and create a function called `Main` or `Home`, or whatever you like.
   - Your function will take in one parameter -- this will be an object that contains `tasks` and `complete` keys.
   - Start testing by just showing your lists of tasks. Use `.map()`! Then add functionality to complete or delete tasks. 
   - Don't forget to `module.exports` your function!
      
- [ ] Controller (`controllers/todo_controller`)

   - Import your data from `models`.
   - Create routes:
      - `GET /todos`: Retrieve all tasks and render the home view. Don't forget to send in your `tasks` and `complete` lists!
        - You can start testing in your browser once this route is set up.
      - `POST /todos`: Create a new task.
        - Add the code to create new  todos and push them to the array.
      - `PUT /todos/:todo_id`: Mark a task as complete. 
        - Retrieve the todo matching on the id from the `tasks` array and move it to `complete`.
      - `DELETE /todos/:todo_id`: Delete the todo respective of id from the `tasks` array.

## Output 

![Screenshot 2023-07-20 at 1 42 43 AM](https://github.com/CodeSTACKE/todoApp/assets/48188772/ba2f045e-ce2e-4ae8-9b75-224a018a5118)





      
       








