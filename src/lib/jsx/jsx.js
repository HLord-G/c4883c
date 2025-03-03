globalThis.gb = {}; // Global storage

// ✅ JSX Component System
class JSX {
    // 📌 Convert template literals to jQuery elements
    static hold(strings, ...values) {
        return $(strings.reduce((acc, curr, i) => acc + values[i - 1] + curr));
    }

    // 📌 Render jQuery elements into a container
    static render($element, container) {
        $("body").html(`<div id="root"></div>`)
        $(container).html($element);
    }

    // 📌 Convert jQuery elements into an HTML string
    static rn($element) {
        return $element.prop('outerHTML');
    }

    // 📌 Display a tutorial in the console
    static help() {
        console.clear();
        console.log("%c🚀 JSX.js - Lightweight JSX Renderer!", "color: cyan; font-size: 18px; font-weight: bold;");
        console.log("%cCreate dynamic HTML components using JavaScript and jQuery.", "color: yellow; font-size: 16px;");
        
        console.log("%c\n📌 JSX.hold() - Create JSX-like Components", "color: orange; font-size: 14px;");
        console.log(`%c const component = JSX.hold\`
    <div>
        <h2>Hello, World!</h2>
    </div>
\`;`, "color: white; background: black; padding: 4px;");
        
        console.log("%c\n📌 JSX.render() - Render Components", "color: orange; font-size: 14px;");
        console.log(`%c JSX.render(component, "#root");`, "color: white; background: black; padding: 4px;");

        console.log("%c\n📌 JSX.rn() - Convert to HTML String", "color: orange; font-size: 14px;");
        console.log(`%c const html = JSX.rn(component);`, "color: white; background: black; padding: 4px;");
        
        console.log("%c\nType %cJSX.help()%c for this guide anytime!", "color: yellow; font-size: 14px;", "color: lightblue; font-weight: bold;", "color: yellow; font-size: 14px;");
    }
}

// ✅ Event Helper Class
class e {
    static on(event, selector, callback) {
        $(document).on(event, selector, callback);
    }

    static click(selector, callback) { this.on("click", selector, callback); }
    static dblclick(selector, callback) { this.on("dblclick", selector, callback); }
    static hover(selector, callbackIn, callbackOut) { this.on("mouseenter", selector, callbackIn); this.on("mouseleave", selector, callbackOut); }
    static keydown(selector, callback) { this.on("keydown", selector, callback); }
    static keyup(selector, callback) { this.on("keyup", selector, callback); }
    static focus(selector, callback) { this.on("focus", selector, callback); }
    static blur(selector, callback) { this.on("blur", selector, callback); }
    static change(selector, callback) { this.on("change", selector, callback); }
    static input(selector, callback) { this.on("input", selector, callback); }
    static submit(selector, callback) { this.on("submit", selector, callback); }
    static scroll(selector, callback) { this.on("scroll", selector, callback); }
    static resize(selector, callback) { this.on("resize", selector, callback); }

    // 📌 Display event usage tutorial
    static help() {
        console.clear();
        console.log("%c🚀 e.js - Event Helper", "color: cyan; font-size: 18px; font-weight: bold;");
        console.log("%cEasily manage DOM events using jQuery.", "color: yellow; font-size: 16px;");
        
        console.log("%c\n🖱️ Click Event:", "color: orange; font-size: 14px;");
        console.log(`%c e.click("#nav", () => alert("Nav clicked!"));`, "color: white; background: black; padding: 4px;");
        
        console.log("%c\n🖱️ Hover Event:", "color: orange; font-size: 14px;");
        console.log(`%c e.hover("#box", 
    () => console.log("Mouse entered!"), 
    () => console.log("Mouse left!")
);`, "color: white; background: black; padding: 4px;");

        console.log("%c\n⌨️ Keydown Event:", "color: orange; font-size: 14px;");
        console.log(`%c e.keydown("input", (e) => console.log("Key pressed:", e.key));`, "color: white; background: black; padding: 4px;");

        console.log("%c\n📩 Form Submit:", "color: orange; font-size: 14px;");
        console.log(`%c e.submit("#myForm", (e) => {
    e.preventDefault();
    alert("Form submitted!");
});`, "color: white; background: black; padding: 4px;");

        console.log("%c\n🚀 Type %ce.help()%c anytime for help!", "color: yellow; font-size: 14px;", "color: lightblue; font-weight: bold;", "color: yellow; font-size: 14px;");
    }
}








class Util {
    static map(dataKey, callback) {
        let ddrxWys = globalThis[dataKey]; // Access global data by key

        if (!ddrxWys) {
            console.error(`❌ Data "${dataKey}" not found in globalThis.`);
            return null;
        }

        if (Array.isArray(ddrxWys)) {
            return ddrxWys.map(callback); // 🔹 Always return as an array!
        } 
        
        if (typeof ddrxWys === "object") {
            return [callback(ddrxWys)]; // 🔹 Convert object output into an array
        } 

        console.error(`❌ Unsupported data type for "${dataKey}"`);
        return null;
    }

    static filter(dataKey, callback) {
        let ddrxWys = globalThis[dataKey]; // Access global data by key

        if (!ddrxWys) {
            console.error(`❌ Data "${dataKey}" not found in globalThis.`);
            return null;
        }

        if (Array.isArray(ddrxWys)) {
            return ddrxWys.filter(callback); // 🔹 Filters array based on condition
        } 
        
        if (typeof ddrxWys === "object") {
            return callback(ddrxWys) ? [ddrxWys] : []; // 🔹 Returns object as array if it passes the condition
        } 

        console.error(`❌ Unsupported data type for "${dataKey}"`);
        return null;
    }
}

























// ✅ Ensure This Runs First
document.addEventListener("DOMContentLoaded", () => {
    $("body").html(`<div id="root"></div>`)
    $("html").attr("data-theme","dark")
});


export { JSX, e, Util };
