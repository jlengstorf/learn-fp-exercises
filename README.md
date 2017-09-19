# Learn Functional Programming

This is a collection of exercises to accompany a half-day workshop on the basics of functional programming.

**NOTE:** This is not a way to learn hardcore, mathematically correct “functional programming”. This is a collection of exercises to help teach common functional programming techniques that will make your code easier to debug and maintain, regardless of whether or not you have any idea [what the fuck a monad is](https://git.io/vyzvq).

## Quickstart

```sh
# Clone the exercises
git clone https://github.com/jlengstorf/learn-fp-exercises.git

# Move into the exercise directory
cd learn-fp-exercises/

# Open the first exercise
open exercises/01-map-array.html
```

In your favorite code editor, open the JavaScript for the exercise (`src/01-map-array.js`), read the instructions, and refactor away!

If you get stuck, the refactored code is available in `src/solutions/`. This isn’t a test, so don’t feel guilty if you need to see a solution to finish a given exercise. However, **please actually write the code for each solution by hand — typing things out helps them stick.**

## Using Chrome Developer Tools

If you'd like to use Chrome’s Developer Tools to do the exercises, follow these steps:

1.  Open the Developer Tools: `command` + `option` + `I` or, in the menu, 
    View > Developer > Devleoper Tools

2.  Click the "Sources" tab.

3.  `control` + `click` in the file panel at the left and choose "Add folder 
    to workspace"

4.  DevTools will request full access to the folder. Click "Allow"

5.  `control` + `click` the file `01-map-array.html` and choose "Map to File 
    System Resource..."

    <img src="http://cl.ly/maK1/screencap-by-jlengstorf%2031.png"
         alt="DevTools map to file system resource"
         style="max-width: 450px;">

6.  Choose `01-map-array.html` from the dropdown.

Now you can modify and save changes right from DevTools — no editor required!
