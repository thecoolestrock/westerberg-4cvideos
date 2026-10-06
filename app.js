const playBtn = document.getElementById("play-btn");
playBtn.addEventListener("click", () => {
  const iframe = document.createElement("iframe");
  const videoContainer = document.getElementById("video-container");
  iframe.setAttribute(
    "src",
    "https://www.youtube.com/embed/daP5md9eSLc?&autoplay=1&mute=1",
  );
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  );
  iframe.setAttribute("allowfullscreen", "1");
  iframe.style.width = "640px";
  iframe.style.height = "360px";
  videoContainer.innerHTML = "";
  videoContainer.appendChild(iframe);
});

function toggle(id) {
  var x = document.getElementById(id);
  if (!x) alert("error: not found!");
  else {
    if (x.style.display == "none") x.style.display = "block";
    else x.style.display = "none";
  }
}
function showhide(id, stat) {
  var x = document.getElementById(id);
  if (!x) alert("error: not found!");
  else x.style.display = stat;
}

function showhideall(stat) {
  const totalCount = 35; // or totalElements.length if totalElements is an array

  for (let i = 1; i <= totalCount; i++) {
    showhide(String(i), stat);
  }
}

function showhidestart(stat) {
  showhideall("block");
  let start = [2, 7, 10, 13, 22, 26, 29];
  for (let i = 0; i < start.length; i++) {
    showhide(start[i], stat);
  }
}
