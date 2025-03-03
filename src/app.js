import './lib/ui/new_ui.css';
import './lib/ui/new_ui.js';
import './lib/ui/themes.css';

import './lib/matrix/matrix-quary-1-0-1.js';
import './lib/matrix/matrix-quary-1-0-2.js';

import { JSX, Util } from "./lib/jsx/jsx.js";

/* Component Area */ 
import "./component/nav/nav.js"




 
  // ✅ Sample Data Array
globalThis.data = [
      { name: "Harold", contact: "0923429384", message: "Hi world" },
      { name: "Mark", contact: "00923872874", message: "Hi hello" }
  ];










  // ✅ Custom Component Definition
  gb["mycomponent"] = ({ x, b }) => JSX.hold`
      <section>
          <h2 id="">${x}</h2>
          <p>${b}</p>
      </section>
  `;


 

 

 let result2 = Util.map("data", item => (
    JSX.rn(gb["mycomponent"]({ x: item.name, b: item.message }))
 ))


 let result3 = Util.map("data", item => item.name);
 console.log(result3);
 



  // ✅ Convert Direct Component <mycomponent ... />
  let singleComponent = JSX.rn(gb["mycomponent"]({ x: "Welcome", b: "User" }));

  // ✅ JSX-like App component (Now everything works!)
  const app = JSX.hold`
      <div>
          <h2>Multiple Components Example</h2>
          ${  JSX.rn(gb["mycomponent"]({
                x: "Direct Component",
                b: "This is a direct component"
            }))} <!-- Now works correctly! -->

        ${result2}


        ${JSX.rn(gb["nav"]({
            x: "Home",
            b: "back"
        }))}
      </div>

      <br>

  `;
 
 






  


  // ✅ Render inside #root using jQuery
  $(document).ready(() => {
      JSX.render(app, '#root');
  });


 

