const task = [{
    title: "Playing",
    dueTime: 2, 
    priority: 2, 
}];

const addTask = (collections, task) => {
    collections.push(task);
};

addTask(task,{title: "Reading",
              dueTime: 3, 
              priority: 1})
addTask(task,{title: "dancing",
              dueTime: 2, 
              priority: 1})
addTask(task,{title: "Swimming",
              dueTime: 1, 
              priority: 3})        

function sortTasksByPriority() {
    
    task.sort((a, b) => a.priority- b.priority);
    console.log("Tasks sorted by priority:");
}   

sortTasksByPriority();
console.log(task);

function getTasksDueWithin(minutes) {
    const now = 0; 
    const dueTasks = task.filter(task => task.dueTime <= now + minutes);
    console.log(`Tasks due within ${minutes} minutes:`, dueTasks);
    return dueTasks;
}

getTasksDueWithin(10);
console.log(task);

function scheduleReminders() {
    task.forEach(task => {
        setTimeout(() => {
            console.log(`Reminder: Task "${task.title}" is due now!`);
        }, task.dueTime * 60000); 
    });
}
scheduleReminders();
try {
    addTask({ title: "Incomplete Task" }); 
} catch (error) {
    console.error("Error adding task:", error.message);
}

