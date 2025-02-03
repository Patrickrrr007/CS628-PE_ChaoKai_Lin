- Input

This ToDo List app kicks off when users type in a task in the input field and hit the "Add Task" button. The task gets captured as a string and stored using React’s useState hook, which keeps track of all tasks dynamically.  

- Process

Once a task is added, it’s stored in an array that holds all the to-dos. Thanks to React’s useState, whenever a new task is added or removed, the UI updates automatically. The app loops through the list using .map() to display each task neatly. Each task comes with a "Delete" button, so if a user decides to remove a task, the app filters it out from the list and refreshes the display.  

- Output

The output is a clean, interactive to-do list that updates in real time. Users can add and remove tasks as they please, and the list stays fresh without needing a page reload!