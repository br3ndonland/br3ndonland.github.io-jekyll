---
layout: page
title: Udacity project review
permalink: /review/
---
Udacity project review
===============================================

<p align="left">
    <a href="https://www.udacity.com/">
        <img src="https://s3-us-west-1.amazonaws.com/udacity-content/rebrand/svg/logo.min.svg" width="300">
    </a>
</p>

**Udacity Full Stack Web Developer Nanodegree program**

Part 01. Programming fundamentals and the web

Project 02. Build a portfolio site

Brendon Smith

br3ndonland

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Initial submission](#initial-submission)
- [Resubmission](#resubmission)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Initial submission

### Summary from me

I based the webpage on [Bootstrap](http://getbootstrap.com/) v4.0.0-beta. In the main webpage *index.html*, I linked to the Bootstrap core CSS through their Content Delivery Network (CDN), and created *portfolio.css* for additional custom styling. 

I provided a toggle button in the footer that uses jQuery JavaScript to change the page color scheme.

The repository for this project is available at [https://github.com/br3ndonland/udacity-fsnd01-p02-portfolio](https://github.com/br3ndonland/udacity-fsnd01-p02-portfolio).

I used the webpage design to create a full website with Jekyll, and hosted the site with GitHub Pages at [https://br3ndonland.github.io/udacity-fsnd01-p02-portfolio](https://br3ndonland.github.io/udacity-fsnd01-p02-portfolio). The website has three pages: "Home," an "About" page explaining how I built the site in detail, and a "Rubric" page providing the Udacity project documentation.


### Summary from reviewer
[(back to top)](#top)

**Project looks fantastic and you’re almost there to meeting specifications, so keep up the great effort!**  :star:

**There is only a little more work to be done on the layout architecture and making sure you have complete separation of styles before your project can fully meet specifications.** :smiley:


### Project review
[(back to top)](#top)

#### Design

* Required Elements
  - Images: Two png thumbnails, three svg logos
  - Logo: svg for easy scaling
  - Header text
  - Paragraph text
* Semantic HTML
  - All divs have CSS classes.
  - Reviewer comments:
    > **Well done using some semantic elements to mark up appropriate content in your HTML. I have left you some additional suggestions in the code review.**
    > **Having semantic code can go a long way to making it more understandable to both the programmer and in terms of accessibility.**
    > **You can see on this [page](https://www.w3schools.com/html/html5_semantic_elements.asp) the list of new semantic elements in HTML5.**
* Custom Design
  - Custom images and text
  - Custom CSS
  - Custom jQuery JavaScript to toggle HTML and CSS changes.
* Grid-Based Layout
  - Website built with Bootstrap. All grids wrapped in `container` class elements.
  - Reviewer comments:
    > **The Bootstrap grid layout needs a little more work in order to fully conform with the spec and intended use, with reference to the framework docs. Please see the code review for further guidance.**


#### Responsiveness

* Cross-Device Compatibility
  - All content responsive. Tested on Desktop, Mobile: Google Nexus 5, Tablet: Apple iPad
  - Reviewer comments:
    > **Site is responsive across all required viewports!** :star:
* Provide All Content
  - All content rendered on all three devices. 
* Viewport `meta` tag included in HTML
* Responsive features
  - `img-thumbnail` Bootstrap class used for responsive portfolio thumbnail images.
  - I created a media query to center align the text when the header grid reduces to one column. 
  - Reviewer comments:
    > **For future reference and/or learning on the use of responsive images and backgrounds in different contexts, you may find it useful to see this [page](https://www.w3schools.com/css/css_rwd_images.asp) from W3Schools and the MDN [docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).**


#### Separation of Concerns

* Styles Separated from HTML
  - Structure (HTML) separated from style (CSS). 
  - Reviewer comments:
    > **There is a style attribute remaining in your HTML. This style information will need to be moved to CSS in order to meet specifications. Please see the code review for details.**
* File Structure
  - Directory structure separates files based on functionality.
  `css/` for stylesheets
  `img/` for images
  `js/` for JavaScript
  - Reviewer comments
    > **Excellent project file organisation!** :thumbsup:


#### Code Quality

* HTML Formatting Rules
  - Two spaces used for indentation. Indentation for nested elements.
  - Elements on new lines. Child elements indented.
  - No trailing whitespace.
  - All HTML lowercase.
  - Alt text provided for image fallback
  - [Optional] Double quotation marks used for attributes.
  - Reviewer comments
    > **Code quality is excellent and a pleasure to parse!** :star:
* HTML Style Rules
  - HTML5 doctype.
  - Code passes HTML validators: Note that the Google Fonts stylesheet link contains a pipe. It returns an error in the HTML validator, but is proper formatting [according to Google](https://developers.google.com/fonts/docs/getting_started#specifying_font_families_and_styles_in_a_stylesheet_url).
  - [Optional] Code does not use entity references unless necessary.
  - [Optional] Code omits type attributes for style sheets and scripts.
  - Reviewer comments:
    > **Well done on submitting valid and CSS3 for review! The HTML5 validator complains about:**
    > 
    > Error: Bad value `https://fonts.googleapis.com/css?family=Lobster|Raleway:300` for attribute `href` on element link: Illegal character in query: `|` is not allowed.
    > From line 11, column 5; to line 11, column 94
    > `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster|Raleway:300">`
    > 
    > **The above issue is relatively easy to fix by substituting the equivalent HTML URL encoding (%7C) for the pipe.**
* CSS Formatting Rules
  - Two spaces used for indentation. Block content within curly braces indented.
  - No trailing whitespace.
  - All CSS lowercase.
  - Single space after `property-name:`, no space within `property-name`.
  - Single space after last selector and opening brace of the declaration block.
  - All declarations end with a semicolon.
  - New line for each selector and declaration.
  - Blank line between rules.
  - [Optional] Code uses double quotation marks for attribute selectors or property values.
  - Reviewer comments:
    > **Your CSS is neat and follows most best practices as presented in the Udacity [Styleguide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html). I have left you some pointers for what could be further improved.** :smiley:
* CSS Style Rules
  - Class-based styling for maximum flexibility.
  - Meaningful and short class names used.
  - Code passes CSS validators. This document validates as [CSS level 3](http://www.w3.org/Style/CSS/current-work.html).
  - [Optional] leading zeros included in decimal values for readability.
  - [Optional] hyphens used for class names with >1 word.
  - Reviewer comments:
    > **Well done naming your CSS classes semantically. Going forward, you may further be interested in looking into the [BEM](http://getbem.com/introduction/) CSS framework, which establishes a robust methodology for naming styles and can help you stay on top of progressively more complex projects through improved modularity, re-usability and maintainability of CSS code.**
* General Meta Rules
  - `UTF-8` encoding used
  -  [Optional] While I was building the site, I kept track of to-do items and tasks with comments:
  `<!-- TODO: [description of task] -->` for HTML
  `/* TODO: [description of task] */` for CSS


### Code review
[(back to top)](#top)

#### *index.html:*

```html
1 <!DOCTYPE html>
2 <html lang="en">
3   <head>
4    <title>Brendon Smith | Udacity</title>
```
AWESOME
Including a title for your portfolio page (well, every page actually...) is awesome! :smiley:

As a suggestion, consider adding some of the other meta tags available to you such as description, keywords and author. You can see an example of their suggested usage on the following [page](https://www.w3schools.com/tags/tag_meta.asp).


```html
5    <!-- Required meta tags -->
6    <meta charset="utf-8">
7    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```
AWESOME
Well done including the correct viewport meta tag to instruct the browser to render the page content responsively. :star:


```html
8    <!-- Bootstrap core CSS -->
9    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
```
AWESOME
Well done preferring the minified version of Bootstrap, which is smaller in size. :thumbsup:


```html
10    <!-- Google Fonts -->
11    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster|Raleway:300">
12    <!-- Custom styles for this page -->
13    <link rel="stylesheet" href="css/portfolio.css">
14  </head>
15  <body>
16    <!-- Header -->
17    <div class="container">
18      <header class="header">
19        <div class="row">
20          <div class="col-md-6">
21            <a href="https://udacity.com">
22              <img class="header-logo svg" src="img/udacity-long.svg" alt="Udacity logo svg">
23              <!-- Alternate version of header logo to display when dark theme is toggled -->
```
AWESOME
Great use of comments throughout your HTML to provide landmarks for other developers interpreting your code.


```html
24              <img class="header-logo svg" src="img/udacity-long-white.svg" alt="Udacity logo svg alt" style="display: none;">
```
REQUIRED
The rubric requires that:

> Portfolio completely separates structure (HTML) from design/style (CSS). There are no style attributes present in the body of the HTML document. There are no `<style>` elements in the document.

Please move this style information into a stylesheet in order to meet this spec.


```html
25            </a>
26          </div>
27          <div class="col-md-6">
28            <h1 class="header-title">
29              Brendon Smith
30            </h1>
31          </div>
32        </div>
33        <div class="row">
34          <div class="col">
35            <h2 class="header-subtitle">
36              Udacity portfolio
37            </h2>
38          </div>
39        </div>
40      </header>
41    </div>
42    <!-- Large center jumbotron container -->
43    <div class="container">
44      <div class="jumbotron background-udacity">
45        <h2 class="display-3">Hello, world!</h2>
46        <p class="lead font-weight-bold">This website showcases the Udacity work I have shared on GitHub. I built the site as a project for my Udacity Full Stack Nanodegree program.<br>Check it out, and Stay Udacious!</p>
47        <p class="lead font-weight-bold">Documentation for the project:</p>
48        <a href="#" class="btn btn-secondary btn-lg" role="button">About &raquo;</a>
49        <a href="#" class="btn btn-secondary btn-lg" role="button">Rubric &raquo;</a>
50      </div>
51    </div>
52    <!-- Portfolio thumbnails -->
53    <div class="container">
```
SUGGESTION
:bulb: Idea

Your project section is a perfect opportunity make use of the section and article tags to add further semantic meaning to the code. For more information on the semantic section element and other related elements, I recommend checking out the following [article](http://blog.teamtreehouse.com/use-html5-sectioning-elements).


```html
54      <h1 class="text-muted">
```
SUGGESTION
As a continuation of the above suggestion, section headings can also be wrapped in a header element for additional semantic value.


```html
55        Featured work
56      </h1>
```
SUGGESTION
:bulb: Idea

As a suggestion, consider using h2 for this heading instead of h1, which is best reserved for the most significant heading of the page unless you are adding additional semantic sectioning. For further reading on using headings in HTML5, I recommend checking out this great, in-depth [article](https://webdesign.tutsplus.com/articles/the-truth-about-multiple-h1-tags-in-the-html5-era--webdesign-16824).


```html
57      <div class="row">
58        <div class="col-sm-4">
59          <img src="https://cdn.worldvectorlogo.com/logos/udacity.svg" alt="Udacity U svg" class="img-thumbnail">
60          <h2>Udacity FSND</h2>
61          <p>General repository for Udacity Full Stack Nanodegree program (FSND) course notes and materials. Step right up and learn about the cool things I'm doing with Udacity!</p>
62          <p><a class="btn btn-secondary" href="https://github.com/br3ndonland/udacity-fsnd" role="button">GitHub &raquo;</a></p>
63        </div>
64        <div class="col-sm-4">
65          <img src="img/fresh-tomatoes-noir-thumbnail-square.png" alt="Movie site thumbnail" class="img-thumbnail">
66          <h2>Movie site</h2>
67          <p>Server-side code written in Python to store a list of my favorite movies, including artwork and trailers, then serve the data to a local webpage with HTML and CSS.</p>
68          <p><a class="btn btn-secondary" href="https://github.com/br3ndonland/udacity-fsnd01-p01-movies" role="button">GitHub &raquo;</a></p>
69        </div>
70        <div class="col-sm-4">
71          <img src="img/design-mockup-portfolio-thumbnail-square.png" alt="Portfolio site design mockup" class="img-thumbnail">
```
AWESOME
You have consistently presented descriptive alt attributes on all your imgs, which helps provide a fallback and improved accessibility. :thumbsup:



```html
72          <h2>Portfolio site</h2>
73          <p>This website! We were provided with a design mockup (screenshot) of a developer portfolio webpage, and had to replicate the design with HTML and CSS.</p>
74          <p><a class="btn btn-secondary" href="https://github.com/br3ndonland/udacity-fsnd01-p02-portfolio" role="button">GitHub &raquo;</a></p>
75        </div>
76      </div>
77    </div>
78    <!-- Footer -->
79    <div class="container">
```
REQUIRED
The rubric requires that the

> Page utilizes a grid-based layout with styles making use of the flexbox layout or a framework like Bootstrap, Foundation, etc.

If we refer to the Bootstrap [docs](https://getbootstrap.com/docs/4.0/layout/grid/#how-it-works) for the grid system, we can see that any content group within containers must be placed within `col` and `row`s , with correct use requiring that only `col`s be immediate children of `row`s.

The below code and any other applicable sections will need to conform with the intended use of the Bootstrap framework in order to fully meet this spec.


```html
80      <hr>
81      <footer class="footer">
82        <span class="text-muted px-2">
83          &copy; Brendon Smith 2017
84        </span>
85        <span class="px-2">
86          <a class="card-link" href="https://github.com/br3ndonland/">
87              <img class="social-icon svg" src="img/mark-github-light.svg" alt="GitHub">
```
AWESOME
Nice work adding some additional contact opportunities for user interaction. :star:

[FontAwesome](http://fontawesome.io/examples/) has a great selection of icons you can use for just this and more. I recommend checking it out!


```html
88          </a>
89        </span>
90        <span class="px-2">
91          <button type="button" class="btn btn-dark btn-theme-toggle">Theme toggle</button>
92        </span>
93      </footer>
94    </div>
95    <!-- Bootstrap core JavaScript -->
96    <!-- Placed at the end of the document so the pages load faster -->
97    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
98    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
99    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
100    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
101    <!-- JavaScript for this website -->
102    <script src="js/portfolio.js"></script>
103  </body>
104</html>
105​
```


#### *css/portfolio.css:*

```css
1/* Header and Headings */
2​
3h1, .h1 {
```
SUGGESTION
:grey_exclamation: Code Quality

The Udacity Styleguide recommends that we start a new line for each selector when grouping selectors for a rule-set, which can help to increase readability.


```css
4  font-family: "Lobster", cursive;
```
AWESOME
Providing at least one fallback font-family in case the primary font is not available to your user shows foresight and aligns with best practices!


```css
5}
6​
7.header {
8  margin-bottom: 0.5rem;
9  border-bottom: 0.2rem solid #7d97ad;
```
SUGGESTION
Good use of the border shorthand to simplify what would otherwise require multiple border-related declarations. :thumbsup:


```css
10 }
11​
12.header-logo,
13.svg {
14  max-width: 400px;
15}
16​
17.header-title {
18  font-family: "Raleway", sans-serif;
19  color: #02b3e4;
20  text-align: right;
21  text-transform: uppercase;
22  line-height: 1.5;
23  margin-bottom: 0px;
24}
25​
26.header-subtitle {
27  text-align: right;
28  font-family: "Lobster", cursive;
29  color: #7d97ad;
30}
31​
32/* Body */
33​
34body {
35  padding-top: 1rem;
36  padding-bottom: 1rem;
```

SUGGESTION
:bulb: Idea

We could streamline the above padding declarations.

:pencil2: Example

```css
/* top/bottom | left/right */
padding: 1rem 0;
```

There are a number of different ways shorthands like margin and padding can be specified, which I encourage you to learn more about via the following MDN docs [page](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) and this [one](https://developer.mozilla.org/en-US/docs/Web/CSS/padding), respectively.

Please see the following [page](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) from MDN for further learning about the different types of shorthands available in CSS, which help you to code more efficiently and produce code that is easier to parse. :smiley:


```css
37}
38​
39footer {
40  text-align: center;
41}
42​
43.social-icon {
44  height: 2rem;
45}
46​
47/* Side spacing for mobile first views */
48​
49.header,
50.marketing,
51.footer {
52  padding-right: 1rem;
53  padding-left: 1rem;
54}
55​
56/* Jumbotron */
57​
58.background-udacity {
59  background: linear-gradient(150deg, #02ccba 0%, #A951ED 100%);
60}
61​
62.jumbotron {
63  text-align: center;
64  padding: 0.75rem 1.5rem;
65  font-size: 1.2rem;
66  color: #212529;
```
SUGGESTION
:grey_exclamation: Code Quality

The Udacity [Styleguide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html#capitalization) recommends the use of lowercase for all selectors, property names and property values, which aligns with best practices and helps to improve the readability of our code.


```css
67}
68​
69/* Portfolio thumbnails */
70​
71.img-thumbnail {
72  max-height: 300px;
73}
74​
75/* Media queries for responsive text and images */
```
AWESOME
The comments used to provide organisation to your stylesheet are awesome. :thumbsup:


```css
76​
77 @media (max-width: 991px) {
```
AWESOME
Well done using media queries to provide further breakpoints for your responsive layout. For further reading, you may be interested in this blog [post](http://fredericgonzalo.com/en/2017/03/01/understanding-the-difference-between-mobile-first-adaptive-and-responsive-design/) on different modern design approaches.

Since you are using Bootstrap, if you wanted to exert more control over the layout at different viewport sizes, consider instead making use of the additional [prefixing and sizing](https://getbootstrap.com/docs/4.0/layout/grid/#grid-options) available through the framework.

```css
78  /* Shrink text */
79  html {
80    font-size: 0.7rem;
81  }
82  /* Match header logo size with text */
83  .header-logo {
84  width: 250px;
85  }
86}
87​
88@media (max-width: 767px) {
89  /* Center header for smaller viewports */
90  .header, .header-logo, .header-title, .header-subtitle {
91    text-align: center;
92  }
93  .header-logo {
94  max-width: 200px;
95  }
96  /* Shrink thumbnails */
97  .img-thumbnail {
98    max-height: 200px;
99  }
100  /* Remove padding */
101  .header,
102  .marketing,
103  .footer {
104    padding-right: 0;
105    padding-left: 0;
106  }
107}
108​
109/* Dark theme */
110.theme-dark {
111  background-color: #2d3c49;
112  color: #ddd;
113}
114​
```


#### *README.md*

AWESOME
Great job going beyond the requirements and providing a README for your project! :smiley:

Being able to write a strong README will help your projects be more approachable to other users and developers. In case you haven't yet, I recommend checking out Udacity's short [course](https://www.udacity.com/course/writing-readmes--ud777) on writing READMEs.

Also, [Dillinger](https://dillinger.io/) is a great online app for drafting documents with Markdown where you can see the results in real-time.


#### *js/portfolio.js:* 

```javascript
1// Theme toggle
2$( '.btn-theme-toggle' ).click(function() {
3    $( 'body' ).toggleClass( 'theme-dark' );
4    $( '.header-logo' ).toggle();
5});
```
AWESOME
Really cool additional customisation! :sparkles:


## Resubmission
[(back to top)](#top)

### Summary from me

Thank you for your comprehensive and helpful code review! I have pushed the changes to my GitHub repository. Here is a summary of my revisions, written in the imperative to match my Git commit message: 


#### *index.html:*

* Add `meta` tags
* Replace pipe `|` character in Google Fonts stylesheet link with HTML `%7C` equivalent.
* Remove `style="display: none;"` from HTML. This `style` tag was being used to toggle different versions of the Udacity header logo for light and dark themes, but was not necessary. Instead, use [Bootstrap `d-none` CSS class](https://getbootstrap.com/docs/4.0/utilities/display/#hiding-elements), and modify jQuery JavaScript to toggle `d-none` specifically for `header-logo` CSS class.
* Clarify page structure with HTML5 sectioning elements. Use `header`, `main`, and `footer` to divide `body`. Add `section`, `article`, and `header` tags to divide `main`.
* Convert "Hello, world!" and "Featured work" text to `h2`, and headers for each thumbnail to `h3`, reserving `h1` for name in header.
* Revise `footer` to be contained within Bootstrap grid.
* Incorporate Font Awesome CDN, and change GitHub icon to Font Awesome.
* Add `justify-content-center` class to nav.


#### *css/portfolio.css:*

* Add new line for each selector when grouping selectors for a rule-set.
* Simplify padding declarations with `1rem` for body.
* Use lowercase for all selectors, property names and property values.
* Modify media query to add break in footer before links.


#### *pages*

* Add "back to top" navigation under page headers.
