
      function countdown(id, eventDate) {
     function update() {
    let now = new Date().getTime();
    let diff = new Date(eventDate).getTime() - now;

    if (diff <= 0) {
      document.getElementById(id).textContent = "Event Started!";
      return;
    }

    let d = Math.floor(diff / (1000 * 60 * 60 * 24));
    let h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let m = Math.floor((diff / (1000 * 60)) % 60);
    let s = Math.floor((diff / 1000) % 60);

    document.getElementById(id).textContent = 
     ` ${d}d ${h}h ${m}m ${s}s`;
  }
  setInterval(update, 1000);
  update();
}
countdown("vb", "2025-11-11T17:00:00");
countdown("bb", "2025-12-20T16:00:00");
countdown("cr", "2025-09-29T10:00:00");
countdown("fb", "2025-12-12T19:00:00");

//////////////////////////////////
function filterTeams(sport) {
  let teams = document.querySelectorAll(".team-card");

  teams.forEach(team => {
    if (sport === "all" || team.dataset.sport === sport) {
      team.style.display = "block";
    } else {
      team.style.display = "none";
    }
  });
}
//////////////////