function ViRadio (opts) {
    this.opts = opts;
    var container = document.createElement("div");
    container.id = opts.name;
    container.classList.add("container");
    container.innerHTML = "<div class='col-6 mx-auto'><h2>" + this.opts.title + "</h2> " + (this.opts.subtitle ? "<p>" + this.opts.subtitle + "</p></div>" : "");

    var radio_container = document.createElement("div");
    radio_container.classList.add("radio-container");
    var radio_id = Math.floor(Math.random() * 1000);
    for (var i = 0; i < this.opts.options.length; i++) {
        var input_el = document.createElement("input");
        var label = document.createElement("label");

        input_el.setAttribute("type", "radio");
        input_el.name = this.opts.name + "--" + radio_id;
        input_el.value = this.opts.options[i].value
        var span = document.createElement("span")
        span.textContent = this.opts.options[i].label
        label.appendChild(input_el);
        label.appendChild(span)
        radio_container.appendChild(label)
    }

    container.firstElementChild.appendChild(radio_container)    
    
    var button_container = document.createElement("div");
    button_container.classList.add("mt-3");
    button_container.innerHTML = "<div class='col-6 mx-auto'><button type='button' id='next_slide'>" + this.opts.next_button_label +"</button></div>"
    container.appendChild(button_container);
    container.setAttribute("hidden", "");
    return container;
}