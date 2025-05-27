
// redraw all the hidden nodes
function loadFloorMarkers() {
  const mapContainer = document.querySelector(".map-container");
  document.querySelectorAll(".marker").forEach(el=>el.remove());

  // swap out the background image
  const floor = +document.getElementById("floor-select").value;
  document.getElementById("campus-map").src = floors[floor].image;

  Object.values(roomData).forEach(r => {
    if (r.floor !== floor) return;
    const marker = document.createElement("div");
    marker.className = "marker";
    marker.style.left = `${r.coordinates.x}px`;
    marker.style.top  = `${r.coordinates.y}px`;
    mapContainer.appendChild(marker);
  });
}

// draw the red path lines
function drawPath(path) {
  const mapContainer = document.querySelector(".map-container");
  document.querySelectorAll(".guideline").forEach(el=>el.remove());
  document.querySelectorAll(".node-label").forEach(el=>el.remove());

  for (let i = 0; i < path.length - 1; i++) {
    const s = roomData[path[i]].coordinates;
    const e = roomData[path[i+1]].coordinates;
    const dx = e.x - s.x, dy = e.y - s.y;
    const len = Math.hypot(dx,dy);
    const ang = Math.atan2(dy,dx) * 180/Math.PI;

    const line = document.createElement("div");
    line.className = "guideline";
    line.style.width     = `${len}px`;
    line.style.left      = `${s.x}px`;
    line.style.top       = `${s.y}px`;
    line.style.transform = `rotate(${ang}deg)`;
    mapContainer.appendChild(line);
  }

  // start label
  const start = roomData[path[0]].coordinates;
  const lbl1 = document.createElement("div");
  lbl1.className = "node-label";
  lbl1.style.left = `${start.x}px`;
  lbl1.style.top  = `${start.y}px`;
  lbl1.innerText = "You’re Here";
  mapContainer.appendChild(lbl1);

  // end label
  const end = roomData[path[path.length-1]].coordinates;
  const lbl2 = document.createElement("div");
  lbl2.className = "node-label";
  lbl2.style.left = `${end.x}px`;
  lbl2.style.top  = `${end.y}px`;
  lbl2.innerText = "Ends Here";
  mapContainer.appendChild(lbl2);
}

// fill in the From/To lists
function populateRoomOptions() {
  const floor = +document.getElementById("floor-select").value;
  const S = document.getElementById("start-room"),
        E = document.getElementById("end-room");
  S.innerHTML = '<option value="">Select Start</option>';
  E.innerHTML = '<option value="">Select End</option>';

  Object.values(roomData).forEach(r => {
    if (r.floor !== floor) return;
    [S,E].forEach(sel => {
      const o = document.createElement("option");
      o.value = r.id; o.text = r.name;
      sel.appendChild(o);
    });
  });
}

function getDistance(a,b) {
  const A = roomData[a].coordinates, B = roomData[b].coordinates;
  return Math.hypot(A.x-B.x, A.y-B.y);
}

// A* pathfinder
function findPath(startId, endId) {
  if (startId === endId) return [startId];
  const openSet = [startId], closedSet = [];
  const cameFrom = {}, gScore = {}, fScore = {};
  gScore[startId]=0; fScore[startId]=getDistance(startId,endId);

  while (openSet.length) {
    let current = openSet.reduce((a,b)=>fScore[a]<fScore[b]?a:b);
    if (current === endId) {
      const path=[current];
      while(cameFrom[current]) {
        current = cameFrom[current];
        path.unshift(current);
      }
      return path;
    }
    openSet.splice(openSet.indexOf(current),1);
    closedSet.push(current);

    roomData[current].connections.forEach(nb=>{
      if (closedSet.includes(nb)) return;
      const tg = gScore[current] + getDistance(current,nb);
      if (!openSet.includes(nb)) openSet.push(nb);
      else if (tg >= (gScore[nb]||Infinity)) return;
      cameFrom[nb]=current;
      gScore[nb]=tg;
      fScore[nb]=tg + getDistance(nb,endId);
    });
  }
  return null;
}

function handlePathSearch() {
  const S = document.getElementById("start-room").value,
        E = document.getElementById("end-room").value;
  if (!S||!E||S===E) {
    return alert("Select two different rooms.");
  }
  const path = findPath(S,E);
  if (!path) return alert("No valid path.");
  drawPath(path);
}

function swapPathEnds() {
  const S = document.getElementById("start-room"),
        E = document.getElementById("end-room"),
        tmp = S.value;
  S.value=E.value; E.value=tmp;
  toggleFindBtn();
}

function resetPath() {
  document.querySelectorAll(".guideline, .node-label").forEach(el=>el.remove());
  document.getElementById("start-room").value="";
  document.getElementById("end-room").value="";
  toggleFindBtn();
}

function toggleFindBtn() {
  const S = document.getElementById("start-room").value,
        E = document.getElementById("end-room").value;
  document.getElementById("find-btn").disabled = !(S&&E&&S!==E);
}

window.onload = ()=>{
  loadFloorMarkers();
  populateRoomOptions();
  toggleFindBtn();

  document.getElementById("floor-select")
    .addEventListener("change", ()=>{
      loadFloorMarkers();
      populateRoomOptions();
      toggleFindBtn();
    });
  document.getElementById("start-room")
    .addEventListener("change", toggleFindBtn);
  document.getElementById("end-room")
    .addEventListener("change", toggleFindBtn);
  document.getElementById("swap-btn")
    .addEventListener("click", swapPathEnds);
  document.getElementById("reset-btn")
    .addEventListener("click", resetPath);
};

