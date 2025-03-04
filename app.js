import './public/lib/ui/daisyui.css';
import './public/lib/ui/daisyui.js';
import './public/lib/ui/themes.css';
import { Q } from "./public/lib/mrquery/mrquery.js";

 

globalThis.users = [
  { id: 1, name: "Harold" },
  { id: 2, name: "Jayson" }
];



let paragraph = (a, b) => Q.$("p", { 
  class: `text-3xl`,
  },(`Say Hello to Mr. ${a} and ${b}`));


// let names = MRQ.map(users, user => 
//   MRQ.rn(paragraph(`${user.id}`, `${user.name}`))
// );
 



  let links =  Q.$("a",{
    rel:"noopener noreferrer",
    href:"#",
    class:`px-8 py-3 font-semibold rounded btn btn-info`,
    onClick:function(){
      alert("hi")
    }},(`View More!`))



 let container = Q.$("div", {
  class: "container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md",
 },
 (`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-40 h-40 dark:text-gray-400">
			<path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
			<rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
			<polygon fill="currentColor" points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"></polygon>
			<polygon fill="currentColor" points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"></polygon>
		</svg>`),
 [
    links,
    paragraph("harold", "mrquary"),
    Q.$("input",{
      value:"nice"
    })
  ]
);



let $app = Q.$("section", {class: "flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800"},
  [container]
);


 

let result1 = Q.map(users, (num) => `<p>${num.name}</p>`);
console.log(result1); // "<p>1</p><p>2</p><p>3</p>" (HTML output)
  


/* ======================[start] Load [start]====================== */  
Q.load("./public/component/app/runner")
/* ========================[end] Load [end]======================== */  


/* ======================[start] LoadHold [start]====================== */  
let renderCode = "./public/component/render/reader"
let getdata = await Q.loadHold(renderCode);
// getdata.$sample
/* ========================[end] LoadHold [end]======================== */  



/* ======================[start] data storing [start]====================== */  
 // ✅ Store Data
await Q.store("data", "Hello, world!");
await Q.store("data2", ["one", "two", "three"]);
await Q.store("data3", { a: 1, b: 2 });


await Q.update("data3", { b: 29, nice:"good" });


// ✅ Get Data
console.log(await Q.get("data"));         // ➝ "Hello, world!"
console.log(await Q.get("data2", 1));     // ➝ "two"

let data3 = await Q.get("data3")
console.log(data3);   // ➝ 2

/* ======================[end] data storing [end]====================== */  


/* ======================[start] component [start]====================== */  

Q.component("Counter", () => {
  let count = 0;

  return Q.$("div", {
      class: "counter",
      onClick: (e) => {
        if (e.target.id === "increment") count++;
        if (e.target.id === "decrement") count--;
        document.querySelector("#count").innerText = count;
    }
    },
    (`<p>Count: <span id="count">${count}</span></p>
        <button class="btn" id="increment">+1</button>
        <button class="btn" id="decrement">-1</button>`)
  );
});

//pag output -  MRQ.renderComponent("Counter") 


// other example

Q.component("Card", (props) => {
  return Q.$("div", {
      class: ["card", "shadow"],
      },
      (`<h3>${props.title}</h3> <p>${props.content}</p>`)
  );
});

// Render Example
//  MRQ.renderComponent("Card", { title: "Hello", content: "This is MRQ!" })

 /* ======================[end] component [end]====================== */  






  // ✅ Render inside #root using jQuery
    $("html").attr("data-theme","light")
    Q.render([
      getdata.$sample,
      Q.rnComponent("Counter"),
      Q.rnComponent("Card", { title: "Hello", content: "This is MRQ!" }),
      $app,
      $btn
    ]);


 let arrayOne = [3,2,6,1,8]
 let arrayTwo = ["r","h","w","e","a"]


console.log(Q.combineUniq(arrayTwo, arrayOne))

// true


