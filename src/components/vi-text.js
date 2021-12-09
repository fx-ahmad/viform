function ViText (opts) {
    this.opts = opts;
    var container = 
        vi.create("div", {class:"container", id:this.opts.name},
            [
                vi.create("div", {class:"col-6 mx-auto"}, 
                    [
                        vi.create("h2", {}, this.opts.title),
                        vi.create("p", {}, this.opts.subtitle)
                    ]
                ),
                vi.create("div", {class:"mt-3 col-6 mx-auto"}, 
                    vi.create("button", {type:"button", id: "next_slide"}, this.opts.next_button_label)
                )
            ]
        )
    container.setAttribute("hidden", "");
    return container;
}
