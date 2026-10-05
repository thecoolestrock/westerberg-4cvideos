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
  // let totalElements = 35;
  // for (let element = 1; element <= totalElements.length; element++) {
  //   showhide(element, stat);
  // }
  //

  showhide("1", stat);
  showhide("2", stat);
  showhide("3", stat);
  showhide("4", stat);
  showhide("5", stat);
  showhide("6", stat);
  showhide("7", stat);
  showhide("8", stat);
  showhide("9", stat);
  showhide("10", stat);
  showhide("11", stat);
  showhide("12", stat);
  showhide("13", stat);
  showhide("14", stat);
  showhide("15", stat);
  showhide("16", stat);
  showhide("17", stat);
  showhide("18", stat);
  showhide("19", stat);
  showhide("20", stat);
  showhide("21", stat);
  showhide("22", stat);
  showhide("23", stat);
  showhide("24", stat);
  showhide("25", stat);
  showhide("26", stat);
  showhide("27", stat);
  showhide("27", stat);
  showhide("28", stat);
  showhide("29", stat);
  showhide("30", stat);
  showhide("31", stat);
  showhide("32", stat);
  showhide("33", stat);
  showhide("34", stat);
  showhide("35", stat);
}
function showhidestart(stat) {
  showhideall("block");
  let start = [2, 7, 10, 13, 22, 26, 29];
  for (let i = 0; i < start.length; i++) {
    showhide(start[i], stat);
  }
}
