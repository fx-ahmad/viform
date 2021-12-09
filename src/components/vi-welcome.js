function ViWelcome (opts) {
    this.opts = opts;
    var container = 
        vi.create("div", {id: opts.name, class:"container"}, 
            [
                vi.create("div", {class:"col-6 mx-auto"}, 
                    [
                        vi.create("h1", {}, this.opts.title),
                        vi.create("p", {}, this.opts.subtitle)
                    ]
                ),
                vi.create("div", {class:"col-6 mt-3 mx-auto"}, 
                    vi.create("button", {type:"button", id: "next_slide"}, this.opts.next_button_label)
                )
            ]
        );
    return container;
}