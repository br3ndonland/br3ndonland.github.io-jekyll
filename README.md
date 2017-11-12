README
======

<p align="left">
    <a href="https://www.udacity.com/">
        <img src="https://s3-us-west-1.amazonaws.com/udacity-content/rebrand/svg/logo.min.svg" width="300">
    </a>
</p>

**Udacity Full Stack Web Developer Nanodegree program**

Part 01. Programming fundamentals and the web

Project 02. Build a portfolio site

Brendon Smith | br3ndonland

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Description](#description)
- [Repository contents](#repository-contents)
- [Rubric comparison](#rubric-comparison)
  - [Design](#design)
  - [Responsiveness](#responsiveness)
  - [Separation of Concerns](#separation-of-concerns)
  - [Code Quality](#code-quality)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

## Description

This was my second project for the Udacity Full Stack Web Developer nanodegree program. We were provided with a design mockup (screenshot) of a developer portfolio webpage, and had to replicate the design with HTML and CSS. 

![Portfolio website mockup](https://www.dropbox.com/s/jg2vals0hmqc1q0/design-mockup-portfolio-thumbnail-square.png?dl=1)

I based the webpage on [Bootstrap](http://getbootstrap.com/) v4.0.0-beta. In the main webpage *index.html*, I linked to the Bootstrap core CSS through their Content Delivery Network (CDN), and created *portfolio.css* for additional custom styling.

The repository for this project is available at https://github.com/br3ndonland/udacity-fsnd01-p02-portfolio. 

I used the webpage design to create a full website with Jekyll, and hosted the site with GitHub Pages at https://br3ndonland.github.io/udacity-fsnd01-p02-portfolio. 


## Repository contents

* css/
    - *portfolio.css:* CSS stylesheet for the webpage
* img/
    - Images used in the site
* info/
    - *notes.md*: detailed notes about how I built the webpage.
    - *udacity_docs.md*: project rubric and documentation from Udacity
* js/
    - *portfolio.js*: jQuery JavaScript
* *index.html*: main webpage
* *README.md*: concise description of the repository


## Rubric comparison

Also see *udacity_docs.md* for project rubric and documentation from Udacity

### Design

* Required Elements
    - Logo: linked to Udacity logo .svg for easy scaling
* Semantic HTML
* Custom Design
* Grid-Based Layout
    - Website built with Bootstrap. All grids wrapped in `container` class elements.

### Responsiveness

* Cross-Device Compatibility
    - All content responsive. Tested on Desktop, Mobile: Google Nexus 5, Tablet: Apple iPad
* Provide All Content
    - All content rendered on all three devices. 
* Viewport `meta` tag included in HTML
* Responsive Images
    - `img-thumbnail` Bootstrap class used for responsive portfolio thumbnail images.

Additional responsive features:

* Header: I created a media query to center align the text when the header grid reduces to one column. 

### Separation of Concerns

* Styles Separated from HTML
    - Structure (HTML) separated from style (CSS). 
* File Structure
    - Directory structure separates files based on functionality.
    `css/` for stylesheets
    `img/` for images

### Code Quality

* HTML Formatting Rules
    - Two spaces used for indentation. Indentation for nested elements. 
* HTML Style Rules
    - HTML5 doctype
    - *TODO HTML VALIDATORS*
* CSS Formatting Rules
    - Two spaces used for indentation. Block content within curly braces indented.
    - Single space after `property-name:`, no space within `property-name`.
    - All declarations ended with a semicolon.
* CSS Style Rules
    - Class-based styling for maximum flexibility
    - *TODO CSS VALIDATORS*
    - [Optional] leading zeros included in decimal values for readability.
    - [Optional] hyphens used for class names with >1 word.
    
* General Meta Rules
    - `UTF-8` encoding used
    -  While I was building the site, I kept track of to-do items and tasks with comments: 
    `<!-- TODO [description of task] -->` for HTML
    `/* TODO [description of task] */` for CSS

