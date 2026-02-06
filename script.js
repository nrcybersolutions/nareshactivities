// Load Daily Tasks
fetch("data/personal_os_master.json")
  .then(res => res.json())
  .then(tasks => {
    const taskList = document.getElementById("tasks");
    tasks.forEach(task => {
      const li = document.createElement("li");
      li.textContent = task.task_name;
      taskList.appendChild(li);
    });
  });

// Load Physical Activities
fetch("data/Physical_Activities.json")
  .then(res => res.json())
  .then(activities => {
    const activityList = document.getElementById("activities");
    activities.forEach(act => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = act.link;
      a.target = "_blank";
      a.textContent = `${act.activity_name} (${act.duration})`;
      li.appendChild(a);
      activityList.appendChild(li);
    });
  });

