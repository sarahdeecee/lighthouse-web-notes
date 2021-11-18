# 11/18 W4D4 Responsive Design
- What is responsive Design
- relative units
- media queries
- responsive images
- font scale
- grid systems
- SASS

### Mobile accounts for 50.8% of traffic worldwide
- we cannot ignore mobile

## What is responsive design?
- a **multitude of different screen sizes** exist acrross phones, "phablets", tablets, desktops, gamae consoles, TVs, and even wearables
- Responsive design means that your web app can **adapt to any screen size** and provide a **good user experience**
- With responsive web design, the serrver always send the **same HTML code to all devices**, and **CSS is used to alter the rendering** of the page on the device

#### Content is like water
- it adapts to any size container

## Mobile-First Design
- create the layout for mobile first (bc more restrictions)
- then extend the layout for a larger screen after

### Responsive design tools
- relative units
- media queries (change CSS to screen size)
- responsive images
- font scale
- flexible grid-based layout

## View Port and Units
### View Port
- the meta **viewport** tag instructs the browser *how to adjust the page* to the width of each device
- when meta viewport absent, mobile browsers display pages with **default desktop settings**.
  - results in zoomed out, unresponsive experience

### Units - absolute units
Unit | Name
--- | ---
cm | centimenters
mm | millimetes
in | inches
pt | points
px | pixels
- px doesn't translate well (not the same on each screen) so shouldn't be your go-to

### Units - relative units
Unit | Relative to
--- | ---
em |  size of the parent
rem | size of the root element
vw | 1% of the viewport width
vh |1% of the viewport height
% | % of the parent size (width, height, font-size)

### Media Queries
- media queries will allow you to use **different CSS style rules** according to various screen sizes
  - e.g. @media only screen and (max-width: 600px) {sized-based CSS rules} 
- desktop vs screen vs print
```css
  @media only screen and (max-width: 450px) {
    .top-nav {
      background-color: lightcoral;
      display: flex;
      flex-direction: column;
    }
  }
  @media only screen and (min-width: 450px) and (max-width: 600px) {

  }
  @media only screen and (min-width: 375px) and (max-width: 667px) {
    body {
      body: 2px solid pink;
    }
    #top-nav .social {
      display: none;
    }
    .label {
      display: none;
    }
    .footer {
      flex-wrap: wrap;
    }
  }
```
Much easier to design mobile first than go back and fix a desktop layout
element element | div p | Selects all <p> inside <div> elements
element > element | div > p | selects all <p> elements where the parent is a <div> element

## Responsive Images
Images should change sizes according to screen resolution.
- image tags, background images
### Picture tag
Loading only the appropriate size↓
```html
<section class="container splash">
  <picture>
    <source srcset="http://..." media="(max-width: 200px)">
    <source srcset="http://..." media="(max-width: 400px)">
    <source srcset="http://..." media="(max-width: 600px)">
    ^ only loads the small image when needed
    <img src="http://...">
  </picture>
</section>
```
### Media Queries with Background Images
```css
@media only screen and (max-width: 200px) {
  #bgimage {
    background-image: url('./images/cats_200.jpg');
  }
}
```
### Type Scale
- collection of carefully picked font sizes used to represent different text elements
  - helps with balanced composition
- consistently using the same font sizes from our own type scale -> automatically instills **uniformity** in our design
  - also avoid a product that looks all over the place

## Grid Systems

### Bootstrap Grid System
- uses Flexbox
- 4-grid system has 5 classes

Class | Device Size | Screen Width
--- | --- | ---
.col- | extra small | <576px
.col-sm- | small | >=576px
.col-md- | medium | >=768px
.col-lg- | large | >=992px
.col-xl- | xlarge | >=1200px

# SASS
- allows for more efficient CSS
- can use variables for your CSS -> SASS will output it into a CSS file
- features
  - variables, nesting, partials, mixins (like a function), extend/inheritance
    - partials: - split your CSS into multiple .scss files
- npm i sass -g
- npm run sass 