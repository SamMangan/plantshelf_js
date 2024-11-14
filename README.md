# 🌿PlantShelf
PlantShelf is a webpage that shows image/information cards for different plants.

![](/documentation/plantshelf.png "Plant image cards (left), and the image cards again with one flipped to show the back (right)")

In previous lessons you looked at the structure (HTML) and style (CSS) of PlantShelf. Although modern CSS allows some user interaction (like the flipping cards), JavaScript is a useful tool for making more complicated dynamic pages.

In this lesson, you will:   
* Be introduced to using browser develeoper tools to debug JavaScript code  
* Practice using JavaScript to modify HTML   
* Practice using JavaScript to respond to events like clicks   


### Chrome DevTools   
JavaScript runs in the user's web browser, which means that we can use inbuilt browser tools to debug JavaScript, or even to run JavaScript directly. All major browsers have some version of Chrome's DevTools with a similar set of features, but we will stick with Chrome for simplicity.

##### ✅ Using the Console as a REPL
- [ ] ONLY IF you don't already have a fork of `12se-plantshelf`: make a fork on the GitHub website.   
- [ ] In GitHub Desktop, switch to the branch `week5-js-chromedevtools`.   
- [ ] In Visual Studio Code, open the folder for your fork.   
- [ ] Open `index.html` in Chrome.   
- [ ] Open the DevTools using `right click` > `Inspect`, and then navigate to the Console Panel.

![](/documentation/devtools/1-2.png "Opening DevTools Console Panel")   

The Console can be used as a JavaScript REPL. A REPL (Read-Evaluate-Print-Loop) is an interactive environment which can run code 1 line at a time and display the result (you might have used the Python REPL, IDLE).

- [ ] Try running a few simple JavaScript lines in the Console like the ones below:

![](/documentation/devtools/repl.png "Console Panel as a REPL")   

##### ✅ Using the Console for logging
The Console Panel is also where any JavaScript running on your page logs to.    

- [ ] Open `week5.js`. The only line of code that is not comment logs "Welcome to Week 5".   
- [ ] Open `index.html` and link `week5.js` just below where `main.js` is already linked.   
- [ ] Refresh your browser and make sure you see the log line in the Console:   
![](/documentation/devtools/logging.png "Console Panel as a log location")   
- [ ] Back in `week5.js`, complete **Exercise 1**.


### JavaScript   
The `js` folder contains two JavaScript files:
* `main.js` contains the code that makes the dark/light mode toggling work. It is linked to the webpage at the very bottom of the `body` element in `index.html`:
    ```
    ...
      </footer>

      <script src="js/main.js"></script>
    </body>

    </html>
    ```
* `week5.js` contains a single line of code, plus some `/**comments**/` describing the JavaScript exercises. When working through these exercises, the DevTools Console might be helpful: you can use it quickly test code snippets, and to see logs and errors.

#### Selecting and changing HTML elements
JavaScript represents HTML using `Element` objects. You can get `Element`s representing parts of your page using `querySelector`, with a CSS selector as the parameter:   
```
let footer = document.querySelector("footer");
let logo = document.querySelector("#heading > img");
```

The `querySelector` method can be called on either `document` (which represents the whole page) as above, or an individual `Element` like below:
```
footer.querySelector("a");
```

If you want to get all matching `Element`s, you can use `querySelectorAll`:
```
let footer = document.querySelector("footer");
let links = footer.querySelectorAll("a");
console.log(links[0]); // Log the first link
```

Some useful methods of `Element` objects are `style`, `textContent`, and `animate`:

```
let footer = document.querySelector("footer");   
footer.style.backgroundColor = "orange";

let plantName = document.querySelector(".card h2");
plantName.textContent = "Green Leaves"
```
Note that CSS attributes are converted to *camelCase* when used with `Element.style`, so `background-color` becomes `backgroundColor`.   

`animate` is a powerful method, but one relatively simple usage is shown below:
```
let logo = document.querySelector("#heading img");
let startFrame = { transform: "rotate(0deg)" };
let endFrame = { transform: "rotate(-90deg)" };
logo.animate([startFrame, endFrame], 1000);
```
The array `[startFrame, endFrame]` represents how the logo should be rotated at the start and end of the animation. The 2nd argument says that the animation should take 1000ms.

##### ✅ Selecting and changing HTML elements
- [ ] In `week5.js`, complete **Exercises 2** and **3**.     


#### Event handling
JavaScript has many ways of writing functions. One way is using the `function` keyword:
```
// Declare function
function toggleDarkMode() {
  let body = document.querySelector("body");
  body.classList.toggle("darkmode");
}

// Call function
toggleDarkMode();  
```

As well as calling a function directly (like above), we can tell our page to run a function when an event occurs (like a user clicking something):
```
let themeButton = document.querySelector("button#darkmodetoggle");
themeButton.addEventListener("click", toggleDarkMode);   
```

##### ✅ Event handling   
- [ ] In `week5.js`, complete **Exercises 4**, **5**, and **6**.   