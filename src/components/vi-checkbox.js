function ViCheckbox (opts = {}) {
    var container = 
        vi.create("div", {id: opts.name, class: "container col-6 mx-auto"},
            [
                vi.create("h1", {}, opts.title),
                vi.create("p", {}, (opts.subtitle ? opts.subtitle : "")),
                vi.create("div", {class: "checkbox-container"}, 
                    opts.options.map(function(a, i){
                            return (
                                    vi.create("div", {class:"mt-2"}, 
                                        [
                                            vi.create("input", {type:"checkbox", class: "checkbox me-2", value: a.value, id: a.value + "--" + i}),
                                            vi.create("label", {type:"checkbox", class: "checkbox-label", for: a.value + "--" + i}, a.label)
                                        ]
                                    )
                                )
                    }))
            ]
        );
        container.setAttribute("hidden", "");
        return container;
}