// DEPENDENCIES
const React = require('react')

// VIEW
function Home ({ tasks, complete }) {
    console.log("TASKS:", tasks)
    console.log("COMPLETE:", complete)
    
    return (
        <html>
            <head>
                <title>TodoApp</title>
            </head>
            <body>
                <h1>A Simple ToDo List App</h1>
                <form>
                    <input type="text" placeholder="add new task"></input>
                    <button type="submit">Add Task</button>
                </form>
                <h2>Added Tasks</h2>
                <ul>
                    <li>bla bla</li>
                    <li>bla bla bla</li>
                </ul>
                <button>Remove</button>
                <h2>Completed Tasks</h2>
                <ul>
                    <li>bla bla</li>
                    <li>bla bla bla</li>
                </ul>
            </body>
        </html>
    )
}

module.exports = Home