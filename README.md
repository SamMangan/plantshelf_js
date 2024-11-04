# 🌿PlantShelf  
PlantShelf is a webpage which shows image/information cards for different plants. You can [see the full version (with the card flip extension) running here](https://s-mangan.github.io/plantshelf/).  

In these 2 lessons, you will:  
* Explore and modify the structure (HTML) and style (CSS) of PlantShelf.  
* Learn to use GitHub and git to back up and version-control your code.  

![Plant image cards on the PlantShelf webpage](/documentation/plantshelf.png "Plant image cards (left), and the image cards again with one flipped to show the back (right)")   
*LEFT: Plant image cards*  
*RIGHT: Plant image cards, with one flipped to show the back*
___
<br/>

## **⯈Part A** GitHub and HTML
### GitHub │ Forking a repository
GitHub is a website which stores files—all their past versions. The files for the PlantShelf webpage (including this README!) are stored in a folder (or *repository*) on GitHub. Your first step is to make your own copy (or *fork*) of this folder on GitHub.

- [x] Go to [GitHub.com](https://github.com/signup) and create a free account (or login if you already have one).  
![Screenshot of signup](/documentation/github_signup.png "Screenshot of signup")

- [ ] Go to [the PlantShelf repository](https://github.com/S-Mangan/plantshelf), click Fork, and accept all the defaults.  
![Screenshot of making a fork](/documentation/github_fork.png "Screenshot of making a fork")

- [ ] Now that you have your own copy, try making a small change to its README:  
![Screenshot of editing the README](/documentation/github_edit.png "Screenshot of editing the README")   

- [ ] When you click Commit Changes, you can write a short message about your change. Make it something descriptive that will help you remember what you changed later (e.g. "added my name to README heading")

- [ ] Now check that see your change in the README on the main page of your fork.

### Visual Studio Code | Making a local copy
The fork you created is a *remote* copy of the original repository. *Remote* means that it doesn't live on your computer—in this case it lives on GitHub's servers.

It will be easier to make changes to the website if you have a *local* copy on Windows. For now, we'll just manually download the code—we'll learn a better way later.

- [ ] Download a zip of your fork and save it in your home folder  
![Screenshot of downloading a zip](/documentation/download.png "Screenshot of downloading a zip")   

- [ ] Unzip the folder

- [ ] Open Visual Studio Code and then open the unzipped folder (File > Open Folder)  

### Visual Studio Code | Modifying the HTML  
Find the index.html file in the tree folder (View > Open View... Folders), and then:
   - [ ] Click and drag the index.html into a browser window to see PlantShelf website. Try hovering over the cards—they should change colour. Note that in this version, the cards don't flip.  
   - [ ] Double click index.html to see the HTML. Notice that the content has 3 main sections:  the header, the main content, and the footer.

Modify the HTML and refresh your browser to see how the website changes:  
   - [ ] Update the GitHub link in the footer to point to your fork.  
   - [ ] Replace some of the card images (see the images folder), and update the card headings to match.  
   - [ ] Change the main website heading

<br/>







## **⯈Part B** CSS and git (via GitHub desktop)  
### CSS
The main stylesheet, style.css, contains a few bits and pieces that may be new to you. None of these are vital to remember for the SE course, but they will make it easier to make interesting looking websites while keeping your CSS neat and easy to read.



#### Nesting
CSS rules can be nested to reduce repetition. For example, this:
```
header h1 {
  ...
}
header nav {
  ...
}
```

...can be rewritten as this:
```
header {
  h1 {
    ...
  }

  nav {
    ...
  }
}
```

<br/>

#### Variables  
Variables (a.k.a. *custom properties*) can be used in CSS to store and use values:
```
nav {
  --accent-color: gold;
  color: var(--accent-color);
}
```

A variable must be declared inside a rule (i.e. inside a `<selector> { ... }` block). Variables can be accessed inside the rule where they're created (like above), and they "cascade" just like normal properties. For example, `nav button` can also access `--accent-color`:

```
nav button {
  border: 2px solid var(--accent-color);
}
```

A common trick to make a variable accessible *everywhere* is to declare it inside the "fake" `:root` selector.

##### ✅ Activity   
- [ ] Change the colours assigned to the variables inside the `:root` selector in `style.css`

<br/>

#### Relative units and responsive typography
As well as the page colours, the `:root` selector declares variables for the width and height of the cards:
```
:root {
  ...
  --card-width: 11rem;
  --card-height: 16rem;
}
```
Unlike pixels (`px`), which sets an exact size, a `rem` is a *relative* unit. Specifically, `11rem` means `11 x <whatever the root element's font-size is>`, a.k.a. `11 x <the html element's font-size>`.  

If you look at the rest of the style.css, you'll see that exact sizes aren't used at all. This means that if we want to scale everything on the page, all we have to do is change one value: the html element's `font-size`.

So what is the html element's `font-size`? It depends how big the window is:
```
html {
  font-size: clamp(10px, 1.6vw, 16px);
}
```

The `clamp` function says "make `font-size` `1.6 x <the window width>`" — but no less than `10px` and no more than `16px`. The result is that everything on the page scales based on the window size, so the website also looks sensible on a phone screen:  
![Screenshot of PlantShelf on a phonescreen](/documentation/phone.png "Screenshot of PlantShelf on a phonescreen")   

##### ✅ Activity   
- [ ] Modify the arguments of the `clamp` function in style.css to change minimum and maximum scale of the page. Resize your browser window to test it out.

<br/>

#### flex and grid layouts
You may have used the `display` property before to make elements either stack on top of each other (`display: block`) or sit next to each other (`display: inline`).

Two other common `display` values are `flex` and `grid`, which are recent inventions intended to make laying out pages easier. There is a lot to say about both, but a very brief summary is:  

* if an element has `display: flex` set, its elements will grow and shrink based on the available space. For example, these rules mean that the `header`, `main`, and `footer` elements are stacked in a column fills the entire screen height. The `main` element expands to make sure this happens:
    ```
    body {
      display: flex;
      ...
      flex-direction: column;
      min-height: 100vh;
      ...

      main {
        flex: 1;
      }
    }
    ```

* if an element has `display: grid` set, its elements will be arranged in rows and colums. For example, these rules mean that the cards will be arranged in a grid with `1rem` of space between rows and columns, and with the number of columns depending on how much room there is:
    ```
    .container {
      ....
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(var(--card-width), 1fr));
      gap: 1rem;
    }
    ```

 flex-direction (column vs row)   

##### ✅ Activity   
- [ ] Change `flex-direction: column;` to `flex-direction: row;`, and explain what happens as a result.  
- [ ] Double the size of the grid `gap`.

<br/><br/>

## [optional] Card flipping extension
* In  index.html, uncomment all the `<div class="back side">` sections.  
* Also in index.html, link the additional `flip_extension.css` stylesheet.  
* What happens now when you hover over a card?  
* Investigate the TODOs in `flip_extension.css` and try to make the cards flip.  

## [optional] Further information and useful tools
#### Visual Studio Code │ Live Server extension
* Search and install the Live Server extension (View > Open View... Extensions).  
* Inside your index.html, right click and select "Open with Live Server". A new browser tab should open with your page, and will automatically reload whenever you save a change to the html or css (so you no longer have to refresh!)

#### Free games for learning flex and grid layouts
If you're interested in learning more about `flex` and `grid` layouts, [Flex Box Froggy](https://flexboxfroggy.com/) and [CSS Grid Garden](https://cssgridgarden.com/) are well-known free games for doing so.

#### Web Browser │ Developer Tools
* (TBA: if time allows) Using (Chrome?) devtools to debug html/css
