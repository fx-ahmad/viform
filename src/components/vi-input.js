function ViInput (opts) {
    this.opts = opts;
    var container = 
        vi.create("div", {id: this.opts.name, class: "container"}, 
            [
                vi.create("div", {class:"col-6 mx-auto"}, 
                    [
                        vi.create("h2", {}, this.opts.title),
                        vi.create("p", {}, this.opts.subtitle),
                        vi.create("input", {class: "d-block mt-3 p-2 w-100", placeholder: this.opts.placeholder})
                    ]
                ),
                vi.create("div", {class: "col-6 mx-auto mt-3"}, 
                    vi.create("button", {id:"next_slide", type:"button"}, "OK"
                    )
                )
            ]
        )
    container.setAttribute("hidden", "");
    return container;
}