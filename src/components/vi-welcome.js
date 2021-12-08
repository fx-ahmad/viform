function ViWelcome (opts) {
    this.opts = opts;
    var container = document.createElement("div");
    container.id = opts.name;
    container.classList.add("container");
    container.innerHTML = "<div class='col-6 mx-auto'><h1>" + this.opts.title + "</h1> " + "<p>" + this.opts.subtitle + "</p></div>";
    var button_container = document.createElement("div");
    button_container.classList.add("mt-3");
    button_container.innerHTML = "<div class='col-6 mx-auto'><button type='button' id='next_slide'>" + this.opts.next_button_label +"</button></div>"
    container.appendChild(button_container);
    return container;
}