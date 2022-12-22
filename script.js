function $(query) {
  return document.querySelector(query);
}
window.onload = function() {
  if (localStorage.name) {
    say(`Hi, ${localStorage.name}`)
  }
  else {
    say('Hello, new player.Enter the name in the box below.')
    ask('name')
  }
  $("#name_submit").onclick = function() {
    var name = $("#name_value").value;
    localStorage.name = name;
    $("#name_ask").remove();
    isay(`My name is ${name}.`)
    say(`Hi ${name}!Nice to meet u.`)
  }
}
function isay(text) {
  var section = document.createElement("section");
  section.classList.add("message", "left");
  section.innerHTML = `
          <i class="nes-bcrikko"></i>
          <div class="nes-balloon from-left is-dark">
            <p>${text}</p>
          </div>
          `
  $('#main').appendChild(section)
}
function say(text) {
  var section = document.createElement("section");
  section.classList.add("message", "-right");
  
  section.innerHTML = `
          <div class="nes-balloon from-right is-dark">
            <p>${text}</p>
          </div>
          <i class="nes-bcrikko"></i>`
  $('#main').appendChild(section)
}
function ask(thing) {
  var section = document.createElement("section");
  section.classList.add("message", "-right");
  section.id = thing+'_ask'
  section.innerHTML = `
          <div style="background-color:#212529; padding: 1rem;"         class="nes-field is-inline">
            <label for="dark_field" style="color:#fff;">${thing}:</label>
            <input type="text" id="${thing}_value" class="nes-input is-dark" placeholder="Enter here">
            <a class="nes-btn" id="${thing}_submit">Submit</a>
          </div>`
  $('#main').appendChild(section)
}