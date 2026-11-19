let history = [];
function saveHistory(action, task){
    
    let event ={
        action: action,
        task: task,
        date: new Date().toLocaleString()

    };
    history.push(event);
    localStorage.setItem(
        "taskHistory",
        JSON.stringify(history)
    );
}
saveHistory("LisLisätty", "tehtävä");