function ViSelect (a) {
    var a = a || {};
    var container = 
        vi.create("div", {id: a.name, class: "container"}, 
            vi.create("div", {class: "col-6 mx-auto"}, 
                [
                    vi.create("h2", {}, a.title),
                    vi.create("select", {class:"p-2"}, 
                        [vi.create("option", {value:""}, a.placeholder)].concat(
                            a.options.map(function(opt) {
                            return vi.create("option", {value: opt.value}, opt.label)
                        })
                        )
                    ),
                    vi.create("div", {class:"mt-3"}, 
                        vi.create("button", {type: "button"}, a.next_button_label)
                    )
                ]
            )
        )
    container.setAttribute("hidden", "");
    return container;
}