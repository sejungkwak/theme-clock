# Theme Clock

![screen recording](https://media.giphy.com/media/BFyLpViXl7c20T3fXp/giphy.gif)

#### project notes

1. HTML
- button: Dark mode, Light mode
- Analog clock
- time, date

2. CSS
- hour hand, minute hand, second hand
- background colour change

3. JavaScript
- get time, date
- click event

+ Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

#### Takeaways from the instructor

1. HTML
- 1 button with class="toggle"
- date in an element

2. CSS
- set custom property for colours
```
:root {
    --primary-color: #000;
    --secondary-color: #fff;
}

html.dark {
    --primary-color: #fff;
    --secondary-color: #000;
}
```
- transition: ease-in
- adding center to transform-origin i.e. left center. I wouldn't need to set top position?

3. JavaScript
- in eventListener, function(e) and e.target.innerHTML = 'Dark mode' or 'Light mode'