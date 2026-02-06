const completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

// Load Daily Tasks
fetch("data/personal_os_master.json")
  .then(res => res.json())
  .then(tasks => {
    const taskList = document.getElementById("tasks");
    const completedList = document.getElementById("completed");

    tasks.forEach(task => {
      const li = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = completedTasks.includes(task.id);

      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          completedTasks.push(task.id);
        } else {
          const index = completedTasks.indexOf(task.id);
          if (index > -1) completedTasks.splice(index, 1);
        }
        localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
        location.reload();
      });

      li.appendChild(checkbox);
      li.append(" " + task.task_name);

      if (completedTasks.includes(task.id)) {
        completedList.appendChild(li);
      } else {
        taskList.appendChild(li);
      }
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

function toggleSection(id) {
  const section = document.getElementById(id);
  section.style.display =
    section.style.display === "none" || section.style.display === ""
      ? "block"
      : "none";
}

