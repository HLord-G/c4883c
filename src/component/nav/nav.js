import { JSX, e } from "../../lib/jsx/jsx.js"; // Import JSX
import "./style/nav.css";



gb["nav"] = ({ x, b }) => JSX.hold`
<nav>
    <ul>
        <li><a href="#" id="nav">${x}</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">${b}</a></li>
    </ul>
</nav>

`;




e.click("#nav", () => {
    alert("Nice!");
});

