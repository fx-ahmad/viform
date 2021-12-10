var vi = {
    prepare_btn_next: function () {
        var btn_next_slide = document.querySelectorAll("#next_slide");
        for (var i = 0; i < btn_next_slide.length; i++) {
            (function(btn_el){
                btn_el.addEventListener("click", function(){
                    var current = vi.current_slide_index;
                    var next = vi.current_slide_index + 1;
                    vi.current_slide_index = next;
                    if (!vi.slides[next]) {
                        return;
                    }
                    document.getElementById(vi.slides[next]).removeAttribute("hidden");
                    document.getElementById(vi.slides[current]).setAttribute("hidden", "");
                })
            })(btn_next_slide[i])
        }
    },
    render : function (opts) {
        var opts = opts || {};
        this.slides = [];
        var target_el = document.querySelector(opts.target);
        //target_el.hidden = true;
        for (var i = 0; i < opts.components.length; i++) {
            target_el.appendChild(opts.components[i])
            this.slides.push(opts.components[i].id);
        }
        target_el.removeAttribute("hidden")
        this.prepare_btn_next();
    },
    slides : [],
    current_slide_index : 0,

    /*  
        vi.create("div", {class: "container"}, [
            vi.create("h1", { class: "text-center" }, "Hello World!"),
            vi.create("button", { class: "btn btn-outline-primary" }, "Submit")
          ]
        )   
    */
    create: function (tag_name, props, child) {
        this.fragment = new DocumentFragment();
        var el = document.createElement(tag_name);
        var child;
        for (var prop in props) {
            el.setAttribute(prop, props[prop]);
        }
        if (typeof child == "string") {
            el.textContent = child;
        }
        
        if (child instanceof HTMLElement) {
            el.appendChild(child)
        }
        if (Array.isArray(child)) {
            for (var i = 0; i < child.length; i++) {
                el.appendChild(child[i])
            }
        }
        return el;
    }
}