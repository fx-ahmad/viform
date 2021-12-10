function ViRadio (opts) {
    var self = this;
    this.opts = opts;
    var radio_id = Math.floor(Math.random() * 1000);
    var container = 
        vi.create("div", {class: "container", id: this.opts.name}, 
            [
                vi.create("div", {class:"col-6 mx-auto"},
                    [
                        vi.create("h2", {}, this.opts.title),
                        vi.create("p", {}, this.opts.subtitle)
                    ]
                ),
                vi.create("div", {class:"radio-container col-6 mx-auto"},
                    (this.opts.options.map(function(option){
                        return (vi.create("label", {}, 
                                    [
                                        vi.create("input", {type:"radio", value: option.value, name: self.opts.name + "--" + radio_id}),
                                        vi.create("span", {class:"radio-text"}, option.label)
                                    ]
                                ))
                        })
                    )
                ),
                vi.create("div", {class: "col-6 mx-auto"}, 
                    vi.create("button", {type:"button", id:"next_slide"}, this.opts.next_button_label)
                )
            ]
        );
    container.setAttribute("hidden", "");
    return container;
}