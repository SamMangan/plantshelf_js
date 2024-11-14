# 🌿PlantShelf  
In previous lessons you looked at the structure (HTML) and style (CSS) of the PlantShelf site. Although modern CSS allows some user interaction (like the flipping cards), JavaScript is a useful tool for making more complicated dynamic pages.

In this lesson, you will:   
* Be introduced to using browser develeoper tools to debug JavaScript code  
* Practice using JavaScript to modify HTML   
* Practice using JavaScript to respond to events like clicks   

## Web browser developer tools   
JavaScript runs in the user's web browser which means that we can use inbuilt browser tools to debug JavaScript, or even to run JavaScript directly.

##### ✅ Chrome DevTools: using the Console as a REPL   
- [ ] Open index.html in a Chrome* browser   
- [ ] Open the DevTools using `right click` > `Inspect`, and then navigate to the Console Panel    
![](/documentation/devtools/1-2.png "Opening DevTools Console Panel")   


The Console can be used as a JavaScript REPL. A REPL (Read-Evaluate-Print-Loop) is an interactive environment which can run code 1 line at a time and show you the result**.   

- [ ] Try running a few simple JavaScript lines in the Console like the ones below.   
![](/documentation/devtools/repl.png "Console Panel as a REPL")  

##### ✅ Chrome DevTools: using the Console for logging 
The Console Panel is also where JavaScript running on your page logs to.    

- [ ] Open `week5.js`. The only line of code logs "Welcome to Week 5".   
- [ ] Open `index.html` and link `week5.js` just below where the existing JavaScript file is linked.   
- Refresh your browser and make sure you see the log line in the Console:   
![](/documentation/devtools/logging.png "Console Panel as a log location")   
- [ ] Back in `week5.js`, complete **Exercise 1**.


## JavaScript: selecting and changing HTML elements    
JavaScript represents HTML using `Element` objects. You can get `Element`s representing parts of your page using `querySelector` with a CSS selector as the parameter:   
```
let footer = document.querySelector("footer");
let logo = document.querySelector("#heading > img");
```

The `querySelector` method can be called on either `document` (which represents the whole page), or an individual `Element` like below:
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
   

`Animate` is a powerful method, but one relatively simple usage is shown below:
```
let logo = document.querySelector("#heading img");
let startFrame = { transform: "rotate(0deg)" };
let endFrame = { transform: "rotate(-90deg)" };
logo.animate([startFrame, endFrame], 1000);
```
The array `[startFrame, endFrame]` represents how the logo should be rotated at the start and end of the animation. The 2nd argument says that the animation should take 1000ms.



## JavaScript: event handling   
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


##### ✅ JavaScript
- [ ] In `week5.js`, complete the remaining exercises.   



## Notes   
\* All major browsers have some version of Chrome's DevTools with a similar set of features, but we will stick with Chrome for simplicity.   
\** You might already be famililar with the Python REPL, IDLE.   
