// DEPENDENCIES
const React = require('react')

// VIEW
function Home ({ tasks, complete }) {
    // console.log("TASKS:", tasks)
    // console.log("COMPLETE:", complete)

    return (
        <html>
            <head>
                <title>TodoApp</title>
            </head>
            <body>
                <h1>A Simple ToDo List App</h1>
                <form action="/todos" method="POST">
                    <input type="text" id="add" name="add" placeholder="add new task"></input>
                    <button type="submit">Add Task</button>
                </form>
                <h2>Added Tasks</h2>
                <ul>
                    {tasks.map((item, index) => {
                        return (
                            <li key={index}>
                                <input type="checkbox" value={index} />
                                {item}
                                <form action={`/todos/${index}?_method=PUT`} method="POST">
                                    <button type="submit">&#10003;</button>
                                </form>
                            </li>
                        )
                    })}
                </ul>
                <h2>Completed Tasks</h2>
                <ul>
                    {complete.map((item, index) => {
                        return (
                            <li key={index}>
                                <input type="checkbox" defaultChecked />
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </body>
        </html>
    )
}

module.exports = Home