let eventBox = document.getElementById("event-box");
let eventLog = document.getElementById("event-log");

function logEvent(message) {
   eventLog.innerText = "Log: " + message;
}

eventBox.addEventListener("click", () => logEvent("Box clicked"));
eventBox.addEventListener("dblclick", () => logEvent("Box double clicked"));
eventBox.addEventListener("mouseenter", () => {
  logEvent("Mouse entered box");
  eventBox.style.background = "white";
});

eventBox.addEventListener("mouseleave", () => {
  logEvent("Mouse left box");
  eventBox.style.background = "orange";
});

window.addEventListener("resize", () => console.log("Window resized"));
window.addEventListener("scroll", () => console.log("Window scrolled, Y =", window.scrollY));