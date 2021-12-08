var vi = {
    prepare_btn_next: function () {
        var btn_next_slide = document.querySelectorAll("#next_slide");
        for (var i = 0; i < btn_next_slide.length; i++) {
            (function(btn_el){
                btn_el.addEventListener("click", function(){
                    var current = vi.current_slide_index;
                    var next = vi.current_slide_index + 1;
                    vi.current_slide_index = next;
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
    current_slide_index : 0
}