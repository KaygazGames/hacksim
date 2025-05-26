function openApp(app) {
  const frame = document.getElementById("appFrame");
  frame.src = `apps/${app}.html`;
  frame.hidden = false;
}
