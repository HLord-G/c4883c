 
class Q {
        // 📌 Create elements with attributes, event listeners, and children
        static $(...args) {
            let tag = args.find(arg => typeof arg === "string") || "div"; // Find first string (tag name)
            let props = args.find(arg => typeof arg === "object" && !Array.isArray(arg) && !(arg instanceof String)) || {}; // Find first object (attributes)
            let children = args.find(arg => Array.isArray(arg)) || []; // Find array (children)
            
            // Extract content
            let rawContent = args.find(arg => typeof arg === "string" && arg !== tag);
            let content = rawContent;
        
            // Check if content should be escaped
            if (rawContent && args.includes("text")) {
                content = $("<div>").text(rawContent).html(); // Escape text
            }
        
            let { html = "", ...attributes } = props;
            let $element = $(`<${tag}>`);
        
            // Use `html` property if available
            if (html) content = html;
        
            // Set content (default is HTML)
            if (typeof content === "string" || typeof content === "number") {
                $element.html(content); // Default: Read as HTML
            }
        
            // Apply attributes & events
            Object.entries(attributes).forEach(([key, value]) => {
                if (key.startsWith("on") && typeof value === "function") {
                    let eventType = key.slice(2).toLowerCase();
                    $element.on(eventType, value);
                } else if (key === "class" && Array.isArray(value)) {
                    $element.addClass(value.join(" "));
                } else if (key === "style" && typeof value === "object") {
                    Object.entries(value).forEach(([cssProp, cssValue]) => {
                        $element.css(cssProp, cssValue);
                    });
                } else if (typeof value !== "undefined" && value !== null) {
                    let attrKey = key.includes(":") ? key.replace(":", "") : key;
                    $element.attr(attrKey, value);
                }
            });
        
            // Append children (ensure HTML is properly parsed)
            children.forEach(child => {
                if (child instanceof jQuery) {
                    $element.append(child);
                } else if (typeof child === "string") {
                    // Convert string to actual HTML instead of escaping it
                    $element.append($(child));
                } else if (typeof child === "number") {
                    $element.append(document.createTextNode(child));
                } else if (child instanceof HTMLElement) {
                    $element.append(child);
                }
            });
        
            return $element;
        }
        

        
        // 📌 Render multiple elements inside a container
        static render(elements, container = "#root") {
            let $container = $(container);
            
            if (!$container.length) {
                // If container does not exist, create a default one
                $("body").append(`<div id="root"></div>`);
                $container = $("#root");
            }
    
            $container.empty(); // Clear existing content
    
            if (Array.isArray(elements)) {
                // If array, append each element
                elements.forEach($el => {
                    if ($el instanceof jQuery) {
                        $container.append($el);
                    }
                });
            } else if (typeof elements === "object") {
                // If object, append values (ignores keys)
                Object.values(elements).forEach($el => {
                    if ($el instanceof jQuery) {
                        $container.append($el);
                    }
                });
            } else {
                console.error("❌ MRQ.render only accepts objects or arrays of jQuery elements.");
            }
        }




        static load(filename) {
            if (window.electronAPI) {
                // Running in Electron
                window.electronAPI.loadFile(filename)
                    .then((data) => {
                        if (data) {
                            try {
                                new Function("Q", data)(Q); // Pass MRQ explicitly
                            } catch (error) {
                                console.error("Error executing script:", error);
                            }
                        }
                    })
                    .catch(error => console.error("Error loading file:", error));
            } else {
                // Running in Web (Browser)
                fetch(`${filename}.q`)
                    .then(response => {
                        if (!response.ok) throw new Error(`Failed to load ${filename}`); 
                        return response.text();
                    })
                    .then(script => {
                        try {
                            new Function("Q", script)(Q); // Pass MRQ explicitly
                        } catch (error) {
                            console.error("Error executing script:", error);
                        }
                    })
                    .catch(error => console.error(error));
            }
        }
        



    static codec(_0x36e1b4) {
        const _0x334y33= "你好世界编解密函程数据测试字符随机生成汉字加密解密函数算法"
        const _0x5c9d43 = "阐是不我一有大在人了中到资要可以这个你会好为上来就学愿李底约雄课答令深票达演早卖棒够黑院假曲火准百谈胜碟协轮略慧幻脸短鹰冲朝砂恭塔贺魂睛逸旗萨丸斋芬革庸舒饮闭励顿仰阁孟昌访绪裕勿";
        const _0x334c33= "你好世字符随机界编程数据测试字符随机生成汉字符随机字加密解密函数算法"
        function _0x47f7(){const _0x3968dd=['sort','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789','Charlie','addUser','name','find','set','217560ZUNgjF','filter','getName','forEach','getSecret','TopSecret123','from','Deep-complicated\x20function\x20execution\x20finished.','emit','33698fmNFZc','events','join','list','getUserById','secret','get','log','length','8jjWywY','17442JLBnSi','userAdded','Fetching\x20users...','age','David','13FXWATU','467980RmfvLL','(Secret\x20hidden)','Secure\x20User:','printUsers','1447355sFNdXH','floor','314556IiWlJQ','3306024UaExEq','push','then'];_0x47f7=function(){return _0x3968dd;};return _0x47f7();}(function(_0x3379ab,_0x308f55){const _0x550d41=_0x3372,_0x5cb313=_0x3372,_0x4c619b=_0x3372,_0x4d58be=_0x3372,_0x3a24b8=_0x3372,_0x7edfce=_0x3372,_0x393d94=_0x3372,_0x258fe0=_0x3372,_0xa4f48=_0x3372,_0x1dd4f2=_0x3379ab();
        while(!![]){try{const _0x43ecb0=-parseInt(_0x550d41(0x1ae))/(0x2*-0x318+-0xf*0xba+0x1117)*(-parseInt(_0x5cb313(0x19f))/(0xb*0x97+-0x7*0xe3+-0x46))+parseInt(_0x550d41(0x1a9))/(0x1*0x157a+0x1c*0x5c+-0x1f87)+parseInt(_0x550d41(0x1a8))/(0x1dc0+-0x17b*0x1+-0x1*0x1c41)*(-parseInt(_0x4c619b(0x1af))/(0x89*-0x30+-0x59a+0x1f4f))+-parseInt(_0x3a24b8(0x18b))/(0x19*0x3b+0x2*-0x81b+0xa79)+-parseInt(_0x393d94(0x1b3))/(-0x2*-0x2fc+0x49*0x86+-0x2c27)+parseInt(_0x5cb313(0x196))/(0x79*-0x2b+-0x3*-0x16e+-0x9*-0x1c9)+parseInt(_0x393d94(0x18c))/(0x503+0xba*-0x16+-0xb02*-0x1);
        if(_0x43ecb0===_0x308f55)break;else _0x1dd4f2['push'](_0x1dd4f2['shift']());}catch(_0x318ffd){_0x1dd4f2['push'](_0x1dd4f2['shift']());}}}(_0x47f7,0x8c98+-0x28c62+0xd9*0x579));function _0x3372(_0x5278c9,_0x230fad){const _0x35e1da=_0x47f7();return _0x3372=function(_0x263724,_0x251c50){_0x263724=_0x263724-(0x1*0xf69+-0x1*0x181a+0xa3c);let _0x551cb2=_0x35e1da[_0x263724];return _0x551cb2;},_0x3372(_0x5278c9,_0x230fad);}function deepComplicatedFunction(){const _0x24d26d=_0x3372,_0x49283f=_0x3372,_0xb7acec=_0x3372,_0x4d4fce=_0x3372,_0x5c396e=_0x3372,_0x1a2130=_0x3372,_0x27995a=_0x3372,_0x3e57c4=_0x3372,_0x3294a5=_0x3372,_0x28c330=_0x3372;console[_0x24d26d(0x1a6)]('Initializing\x20deep-complicated\x20function...');
        function _0x2b2b1e(_0xe31c25){const _0x13df55=_0x24d26d,_0x45e901=_0x24d26d,_0x36a83b=_0x24d26d,_0x3f5a23=_0x24d26d,_0x486908=_0x24d26d,_0x335ef5=_0x24d26d,_0x5f48cb=_0x13df55(0x190),_0x4bd0fc={};return _0x4bd0fc[_0x45e901(0x1a7)]=_0xe31c25,Array[_0x13df55(0x19c)](_0x4bd0fc,()=>_0x5f48cb[Math[_0x45e901(0x1b4)](Math['random']()*_0x5f48cb[_0x36a83b(0x1a7)])])[_0x45e901(0x1a1)]('');}const _0x118b83={'list':[],'addUser'(_0x1f404d,_0x37b243){const _0x2f74e1=_0x24d26d,_0x31f2bb=_0x2b2b1e(0x1*-0x8ab+-0x1*-0x1ea9+-0x15f6);
        this[_0x2f74e1(0x1a2)]['push']({'id':_0x31f2bb,'name':_0x1f404d,'age':_0x37b243,'createdAt':new Date()});},'getUserById'(_0x10d225){const _0x4ff122=_0x24d26d,_0x16062d=_0x24d26d;return this[_0x4ff122(0x1a2)][_0x4ff122(0x194)](_0x40598c=>_0x40598c['id']===_0x10d225)||null;},'deleteUser'(_0xcbe9a7){const _0x3dd85b=_0x24d26d,_0x9ba23a=_0x24d26d,_0x5227cf=_0x24d26d;this[_0x3dd85b(0x1a2)]=this[_0x9ba23a(0x1a2)][_0x5227cf(0x197)](_0x46b9a1=>_0x46b9a1['id']!==_0xcbe9a7);},'printUsers'(){const _0x3087c9=_0x24d26d;console['table'](this[_0x3087c9(0x1a2)]);}};_0x118b83[_0x24d26d(0x192)]('Alice',-0x2*0x191+-0x1c66+0x1fa1),_0x118b83['addUser']('Bob',-0x261a+-0xca3+0x32db),_0x118b83['addUser'](_0xb7acec(0x191),-0x124+0xaf7+-0x9bd),_0x118b83[_0x49283f(0x1b2)]();async function _0x49fd2f(){const _0x57b7c2=_0x4d4fce,_0x4eee88=_0x4d4fce;return console[_0x57b7c2(0x1a6)](_0x4eee88(0x1ab)),new Promise(_0x4f0f25=>{setTimeout(()=>{const _0x2830cc=_0x3372,_0x21f37b=_0x3372,_0x15f303=_0x3372,_0xcfa88e=_0x3372,_0x39eb97=JSON['parse'](JSON['stringify'](_0x118b83[_0x2830cc(0x1a2)]))[_0x21f37b(0x18f)]((_0x1bbfe5,_0x58e21e)=>_0x1bbfe5[_0x21f37b(0x1ac)]-_0x58e21e[_0x21f37b(0x1ac)]);_0x4f0f25(_0x39eb97);},0x69d*0x1+-0x5a6+0xac1);});}_0x49fd2f()[_0x4d4fce(0x18e)](_0x17ff45=>{const _0x320cac=_0xb7acec;console[_0x320cac(0x1a6)]('Processed\x20Users:',_0x17ff45);});const _0x42bcb4={'events':{},'on'(_0x272d2d,_0x177355){const _0x3c08e1=_0x4d4fce,_0x5f3de5=_0xb7acec,_0x254585=_0x4d4fce;!this['events'][_0x272d2d]&&(this[_0x3c08e1(0x1a0)][_0x272d2d]=[]),this[_0x5f3de5(0x1a0)][_0x272d2d][_0x254585(0x18d)](_0x177355);},'emit'(_0xdcff3a,_0x3f91f8){const _0xd2d287=_0xb7acec,_0x275989=_0x4d4fce,_0x45d0a8=_0x24d26d;this[_0xd2d287(0x1a0)][_0xdcff3a]&&this[_0x275989(0x1a0)][_0xdcff3a][_0x45d0a8(0x199)](_0x5afc79=>_0x5afc79(_0x3f91f8));}};_0x42bcb4['on']('userAdded',_0x257fa5=>{console['log']('New\x20user\x20added\x20event:',_0x257fa5);}),_0x118b83['addUser'](_0x4d4fce(0x1ad),0x85a*0x2+-0x1c*-0x88+0x4c*-0x6a),_0x42bcb4[_0x5c396e(0x19e)](_0x4d4fce(0x1aa),_0x118b83[_0x24d26d(0x1a3)](_0x118b83[_0x3e57c4(0x1a2)][_0x118b83['list'][_0x28c330(0x1a7)]-(0x6*-0x652+-0x255e+-0x19*-0x303)]['id']));const _0x17fae9=new WeakMap();class _0xe5fe8b{constructor(_0x4b7a86,_0x1e1a5b){const _0x30f6be=_0x28c330,_0x1508fb=_0x5c396e,_0x348e73=_0x24d26d,_0x1ee275={};_0x1ee275[_0x30f6be(0x193)]=_0x4b7a86,_0x1ee275[_0x1508fb(0x1a4)]=_0x1e1a5b,_0x17fae9[_0x30f6be(0x195)](this,_0x1ee275);}[_0x28c330(0x198)](){const _0x4f5bb8=_0x28c330;return _0x17fae9[_0x4f5bb8(0x1a5)](this)['name'];}[_0x27995a(0x19a)](){const _0x46a278=_0x28c330,_0x4c8a32=_0x28c330;return _0x17fae9[_0x46a278(0x1a5)](this)[_0x46a278(0x1a4)];}}const _0x1f109b=new _0xe5fe8b('Eve',_0x49283f(0x19b));console[_0xb7acec(0x1a6)](_0x4d4fce(0x1b1),_0x1f109b['getName'](),_0x3e57c4(0x1b0)),console[_0x28c330(0x1a6)](_0x27995a(0x19d)); console.log(_0x334c33); console.log(_0x334y33)}
        const _0x1a2f5e = "BGOnchJdD9Ny1YbQTFMijSfueLzkrU6Z8Rx4Km0tsvwWPAHVCo7pg5I2E3lqXa~!#$%^&*()-=+[]{}:;\"'<>,./?|\\";
        const spaceMapping = { " ": "州", "州": " " };
        const _0x2dbb44 = _0x36e1b4.split("").some(_0x50734e => _0x5c9d43.includes(_0x50734e));
        const [_0x3c9457, _0x4f1b6e] = _0x2dbb44 ? [_0x5c9d43, _0x1a2f5e] : [_0x1a2f5e, _0x5c9d43];
        const _0x2254ab = {};
        for (let i = 0; i < _0x3c9457.length; i++) {_0x2254ab[_0x3c9457[i]] = _0x4f1b6e[i];}
        Object.assign(_0x2254ab, spaceMapping);
        return _0x36e1b4.split("").map(_0x21fcf5 => _0x2254ab[_0x21fcf5] || _0x21fcf5).join('');
    }
    
    

   
    static async loadHold(filename) {
        let scriptContent = "";

        if (window.electronAPI) {
            // Running in Electron
            try {
                scriptContent = await window.electronAPI.loadFile(filename);
                if (!scriptContent) throw new Error(`File ${filename} is empty or not found.`);
            } catch (error) {
                console.error("Error loading file in Electron:", error);
                return null;
            }
        } else {
            // Running in Web (Browser)
            try {
                const response = await fetch(`${filename}.q`);
                if (!response.ok) throw new Error(`Failed to load ${filename}`);
                scriptContent = await response.text();
            } catch (error) {
                console.error("Error loading file in Web:", error);
                return null;
            }
        }

        // Ensure the script returns a value
        try {
            return new Function("Q", `"use strict"; return ${scriptContent}`)(Q);
        } catch (error) {
            console.error("Error executing script:", error);
            return null;
        }
    }
    
 




    static db = new Localbase('db');

    static async store(key, value = null) {
        let existing = await Q.db.collection('dataStore').doc({ key }).get();
    
        if (existing) {
            // ✅ Update existing data
            await Q.db.collection('dataStore').doc({ key }).update({ value });
            console.log(`♻️ Updated: "${key}" ->`, value);
        } else {
            // ✅ Store new data
            await Q.db.collection('dataStore').add({ key, value });
            console.log(`✅ Stored: "${key}" ->`, value);
        }
    }

    static async update(key, newValue) {
        let data = await Q.db.collection('dataStore').doc({ key }).get();
        if (data) {
            await Q.db.collection('dataStore').doc({ key }).update({ value: newValue });
            console.log(`✅ Updated: "${key}"`);
        } else {
            console.error(`❌ Error: Key "${key}" does not exist.`);
        }
    }

    static async get(key, path = null) {
        let data = await Q.db.collection('dataStore').doc({ key }).get();
        if (!data) {
            console.error(`❌ Error: Key "${key}" does not exist.`);
            return null;
        }

        let value = data.value;

        // If path is provided (array index or object key), extract the specific value
        if (path !== null) {
            if (Array.isArray(value) && typeof path === "number") {
                return value[path] ?? null;
            } else if (typeof value === "object" && path in value) {
                return value[path];
            } else {
                console.error(`❌ Error: Invalid path ${path} for key "${key}".`);
                return null;
            }
        }

        return value;
    }

    static async del(key) {
        let data = await Q.db.collection('dataStore').doc({ key }).get();
        if (data) {
            await Q.db.collection('dataStore').doc({ key }).delete();
            console.log(`✅ Deleted: "${key}"`);
        } else {
            console.error(`❌ Error: Key "${key}" does not exist.`);
        }
    }
    
    

/*==============[s]components[s]==============*/ 
    static components = {};

    static component(name, template) {
        Q.components[name] = template;
    }

    static rnComponent(name, props = {}) {
        if (!Q.components[name]) {
            console.error(`❌ Component "${name}" not found.`);
            return "";
        }

        let component = Q.components[name];
        return component(props);
    }
/*==============[e]components[e]==============*/ 


 








        // 📌 Utility Functions
        static map(data, callback, type = null) {
            if (!data) {
                console.error(`❌ Data not provided.`);
                return null;
            }

            if (Array.isArray(data)) {
                const result = data.map(callback);
                return type === "html" || type === "" ? result.join("") : result;
            } 
            
            if (typeof data === "object") {
                const result = callback(data);
                return type === "html" || type === "" ? String(result) : result;
            } 

            console.error(`❌ Unsupported data type.`);
            return null;
        }


       
/*
click
dblclick
hover
keydown
keyup
focus
blur
change
input
submit
scroll
resize
*/ 



/* array and object oriented */ 


//diff - Difference 
// array
static diff(array_x, array_y){
    return _.difference(array_x, array_y)
}
/*
 let arrayOne = ["a","b","c","d","e"]
 let arrayTwo = ["r","h","w","e","a"]

 kwaon niya ang Difference sa arrayOne ug sa 
 arrayTwo example kung unsa wala sa arrayTwo
 ug naa sa arrayOne mao to iyang eh output

console.log(MRQ.diff(arrayOne, arrayTwo))
//output ['b', 'c', 'd']
*/ 

// look- contains
// array
static look(x, y){
    return _.contains(x, y)
}
/*
pangita ug same value
 let arrayOne = ["a","b","c","d","e"]
console.log(MRQ.look(arrayOne, "b"))
// true
*/ 

// array and object
static each(arry, x) {
    _.each(arry, function(value, index) {
        x(value, index); // Wala na'y return kay unnecessary
    });
}
/*
eh for each ang array
*/ 


// kwaon ang first na array
// array
static first(arry, x) {
   return _.first(arry,x);
}
/*
let arrayTwo = ["r","h","w","e","a"]

arry- kwaon ang first na array
console.log( MRQ.first(arrayTwo) )
"r"

x - number kung pila ang kwaon gekan sa pinaka una hantud sa ge set na number
console.log( MRQ.first(arrayTwo, 4) )
"r","h","w","e"
*/ 


//array
static randomArray(arr){
    return _.sample(arr)
}
// tagaan ko random na array


// array
static shuffleArray(arr){
    return _.shuffle(arr)
}
// eh shuffle and array


//array
static combineUniq(arr, arry){
  return _.union(arr,arry)
}
// combine 2 array and remove a similar value and only 1 will be remain 
/*
 let arrayOne = [3,2,6,1,8]
 let arrayTwo = ["r","h","w","e","a", 3, 2]
console.log(MRQ.combineUniq(arrayTwo, arrayOne))
['r', 'h', 'w', 'e', 'a', 3, 2, 6, 1, 8]
*/

 

}







class Util {


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
});


export { Q };
