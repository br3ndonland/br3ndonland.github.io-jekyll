portfolio website project notes
===============================

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

## Table of Contents

[TOC]
 
---

## Development environment

I wrote the code in Sublime Text, as usual. See [br3ndonland_computing_setup.mdown](https://github.com/br3ndonland/general/blob/master/br3ndonland_computing_setup.mdown) for more on my setup. I typically had two windows open: a double pane window, with left side for the core files I was creating (like this one, and the HTML and CSS), and right side for the Bootstrap core files for reference, and a separate window for my Udacity reference materials. I usually had three Chrome browser windows open: one for Udacity, one for reference sites like Bootstrap, and a third to preview my site with Developer Tools.


## Bootstrap

I based the site on [Bootstrap](http://getbootstrap.com/) v4.0.0-beta. 


### Bootstrap installation and use options

I explored the different ways to use Bootstrap.

* Content Delivery Network (CDN): servers provide cached versions of the compiled CSS and JS. This is the easiest option, used in the Bootstrap starter HTML template. If you need to customize the CSS, add another file and reference it below the core CSS in the HTML.
* Direct download: it can be helpful to have a local copy, but it is simplest to link to the CDN.
* Package manager: package managers are convenient, but note that they may pull in Bootstrap source files, which must then be compiled and minified. I used `yarn` to install, but didn't end up using the package-managed Bootstrap.
    - Installed [`yarn`](https://yarnpkg.com/en/) with [Homebrew](https://brew.sh/): `brew install yarn`
    - Installed `Bootstrap` with `yarn`: `yarn add bootstrap@4.0.0-beta` and dependencies `jquery` and `popper.js`
    - Bootstrap can then be called using the package manager.
* Bootstrap is compiled and minified before use. 
    - It is written using Sass (Syntactically Awesome Style Sheets), which must be converted to regular CSS before use.
    - the `.min` extension indicates minified. This removes all unnecessary characters from source code.


### Using Bootstrap

* I used the Boostrap CDN option to link out to cached versions of the compiled CSS and JS, as described in the [Bootstrap getting started docs](https://getbootstrap.com/docs/4.0/getting-started/introduction/). 
* Modifying Bootstrap’s core files is not recommended. See [Theming Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/theming/). I created an additional CSS file called *portfolio.css* to modify and extend the Bootstrap core CSS when necessary. 
* I kept the core Bootstrap CSS open in Sublime Text for reference. It was also helpful to open the [Bootstrap template examples](https://getbootstrap.com/docs/4.0/examples/) in Chrome, then inspect with developer tools.
* I frequently referred to the [Bootstrap docs](https://getbootstrap.com/docs/4.0/getting-started/introduction/) and [Bootstrap GitHub readme](https://github.com/twbs/bootstrap).
* **Bootstrap was difficult to use.** The documentation is not comprehensive enough, so it lacks detailed explanations of class definitions and web elements. There are online [Bootstrap editors](https://bootstrapbay.com/blog/bootstrap-editors/) like [Codeply](https://www.codeply.com/) and [Bootply](https://www.bootply.com/) that can make development easier. There are also templates available (like the [premium themes from Bootstrap](https://themes.getbootstrap.com/)) from [WrapBootstrap](https://wrapbootstrap.com/) and [BootstrapBay](https://bootstrapbay.com/). **It was helpful to work directly with the Bootstrap code as a learning experience, but it would be too slow for professional web development.**


## General webpage style and structure

See the **Rubric comparison** section of README.md for details.

* I first focused on building basic structure with HTML. In parallel, I created CSS styling for each new HTML element I added.
    <img src="https://www.dropbox.com/s/2vbja9wj340r76z/Screen-Shot-2017-10-24-at-10.38.52-AM.png?dl=1">
* I used some elements from [narrow-jumbotron](https://getbootstrap.com/docs/4.0/examples/narrow-jumbotron/).
* I used [Google Fonts](https://fonts.google.com). Font weights are specified when referencing the CSS, for example:
    ```html
    <!-- Google fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster|Raleway:300|Roboto" type="text/css">
    ```
* I kept code as concise as possible, and used CSS shorthand wherever possible.
* *Responsive design:* Bootstrap is mobile-first, meaning that the site structure is designed for extra small devices (portrait phones, less than 576px), and the media queries use `min-width` to scale up. In this case, I had to design desktop-first. I had to design the site based on a desktop markup, then adjust it for smaller sizes. See below for responsive design of each section.

## Header

* *[Container](https://getbootstrap.com/docs/4.0/layout/overview/#containers):* I placed the `header` inside a `container` to keep it in line with other elements, as shown in the portfolio site mockup. A `container` should usually be the top-level div, but not always. For example, in the Bootstrap [docs](https://getbootstrap.com/docs/4.0/content/typography/), `header` is not in a `container`, and is outside the margins of the container below.
* *[Grid](https://getbootstrap.com/docs/4.0/layout/grid/):* I created a grid in the header to show the Udacity logo and the text as two columns in the same row. Bootstrap has most of the optimal [flexbox formatting](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) built in already. There are 12 columns by default. I also tried including header elements as spans, but they did not align vertically.
* *Udacity logo:* I set `max-width: 400px;` in the CSS to limit size of the svg file. I also hyperlinked the image to the Udacity website.
* *Responsive text horizontal alignment:* I created a media query to center align the text when the header reduces to one column. Bootstrap provides text alignment classes like `text-right` and `text-uppercase` that I could reference directly in the HTML, but this makes things more complicated, because I would have to coordinate style between CSS and HTML, so I opted to align the text with my own CSS.
* *Header text vertical alignment:* I wanted the "Brendon Smith" text at the right side of the header to be centered with the Udacity logo svg text. 
    - I tried `vertical-align: middle;` and the [Bootstrap vertical alignment](https://getbootstrap.com/docs/4.0/utilities/vertical-align/) class `align-middle` to no avail. 
    - I searched the Bootstrap documentation and found the [text section](https://getbootstrap.com/docs/4.0/utilities/text/#text-alignment), but that didn't fix it either. 
    - I found a [Stack Overflow question](https://stackoverflow.com/questions/20547819/vertical-align-with-bootstrap-3#20548578) that addressed this issue, but the solution didn't work for me.
    - I temporarily squashed the bug by inspecting the text with Chrome Developer Tools, and looking at the inherited properties. I found `line-height: 1.1;` switched it off, and... text centered! 
        <img src="https://www.dropbox.com/s/19zdupti2cj2n8o/Screen-Shot-2017-10-27-at-11.56.32-AM.png?dl=1">
    - Now to change the code. It took a long time to find the solution. Like, days. I eventually realized that, when I turned off `line-height: 1.1;` with Developer Tools, the text was reverting to the previously applied style. After searching through the Bootstrap core CSS with the query line-height, I eventually found that the default for `body` is 1.5.
    - **I had to set the header text to `line-height: 1.5;`:**
    ```css
    .header-title {
      font-family: 'Raleway', sans-serif;
      color: #02b3e4;
      text-align: right;
      text-transform: uppercase;
      line-height: 1.5;
    }
    ```


## Jumbotron

* *Background:* I used the signature Udacity gradient. I also liked the simple gray default, and tried using different background images, such as the ones from the [Google Material Design guidelines](https://material.io/guidelines/material-design/introduction.html).
* *Responsive design:* I noticed that the jumbotron `h1` text had strange breakpoints. At viewport width <534px it was on two lines, then between 534px and 575px one line, then between 576px and 767px it broke onto two lines again, then ≥768 back to one line. I wanted to eliminate the break point between 576px and 767px. I first got rid of the Bootstrap CSS that put in a breakpoint at `48em`, then 


## Portfolio thumbnails

* *Responsive images:* 
    - `img-thumbnail` Bootstrap class used for responsive portfolio thumbnail images.
    - All images same height: Bootstrap gives the images `max-width: 100%` and `height: auto`, which means they are not the same height. I created alternate thumbnail versions of the images, and cropped and resized them so they were 300px square (the largest they will be is 276px).
    - Smaller images on mobile: added `max-height: 200px;` to the media query mentioned above.
* *Link buttons:* I want to vertically align the three link buttons below the thumbnail descriptions. If I moved the buttons onto a separate row, they would not stay with the rest of the column when the site resizes for small viewports.
* *PDF rendering:* I wanted to use the design mockup as a thumbnail for my portfolio site, but it was a PDF. PDF rendering in browsers requires plugins and may not be consistent. I just converted it to an image.

**Here is a screenshot after finishing the [Jumbotron](#jumbotron) and [Portfolio thumbnails](#portfolio-thumbnails):**

<img src="https://www.dropbox.com/s/i8earqnecs6fnti/Screen-Shot-2017-10-30-at-9.54.35-PM.png?dl=1">

## Color schemes

I prefer dark themes, like many developers. Dark themes are becoming more popular. DuckDuckGo now has a dark theme option. I followed the guidelines from [design shack](https://designshack.net/articles/css/lightsoff/) to create the dark theme toggle. 

[TODO dark theme toggle]
use tomorrow and tomorrow night colors

USE THE GRAY FROM UDACITY #2d3c49


## Website hosting with GitHub Pages and Jekyll

I used this project as an opportunity to expand my skills from building single webpages to building multi-page websites. I used GitHub Pages and Jekyll.

[Jekyll GitHub README](https://github.com/jekyll):

> Jekyll is a simple, blog-aware, static site generator perfect for personal, project, or organization sites. Think of it like a file-based CMS, without all the complexity.

### [Jekyll and Ruby installation](https://jekyllrb.com/docs/installation/)

* [Install Ruby on command line with Homebrew](https://www.ruby-lang.org/en/documentation/installation/#homebrew): `$ brew install ruby`
* [Install RubyGems](https://rubygems.org/pages/download): RubyGems is a Ruby package manager. A gem is a Ruby software package. `$ gem install rubygems-update`, then `update_rubygems`. Can also just use `$ gem update --system`. 
* Verified that GCC and Make already installed: `gcc -v` `make -v`
* Install Jekyll and bundler: `gem install jekyll bundler`
* Optional Extras: I kept the default [Rouge](http://rouge.jneen.net/) highlighting.


### [Jekyll website creation](https://jekyllrb.com/docs/quickstart/#options-for-creating-a-new-site-with-jekyll)

* Create Jekyll website
    `$ jekyll new /Users/br3ndonland/Dropbox/Computing/br3ndonland.github.io`
    - Jekyll automatically creates a *.gitignore* and its directory structure. There is no need to manually build the directory structure as described in the [GitHub Pages guide from Jonathan McGlone](http://jmcglone.com/guides/github-pages/).
* Locally preview Jekyll website: 
    `$ cd /Users/br3ndonland/Dropbox/Computing/br3ndonland.github.io`
    `$ bundle exec jekyll serve`
* [Automatic sitemap generation for GitHub Pages](https://help.github.com/articles/sitemaps-for-github-pages/): add `jekyll-sitemap` to the `plugins` section of *_config.yml*.
* Build pages
    - [YAML front matter](https://jekyllrb.com/docs/frontmatter/)


### [GitHub Pages](https://pages.github.com/)

* [Deploying Jekyll to GitHub Pages](https://jekyllrb.com/docs/github-pages/#deploying-jekyll-to-github-pages)
* Create GitHub Pages website
    - Repository content must be pushed to GitHub before the page can be created.
    - Activate GitHub pages as described [here](https://pages.github.com/)
        + Click on the Settings tab and scroll down to the GitHub Pages section. 
        + Then select the master branch source and click on the Save button.
    - I made this repository into a project page at **br3ndonland.github.io/udacity-fsnd01-p02-portfolio**
    - I also built a personal site to expand on the Udacity portfolio site at **br3ndonland.github.io**. 


### Resources

* [GitHub Pages docs](https://pages.github.com/)
* [Jekyll docs](https://jekyllrb.com/)
* [Jekyll YAML front matter](https://jekyllrb.com/docs/frontmatter/)
* [Jekyll on GitHub](https://github.com/jekyll)
* [GitHub Pages guide from Jonathan McGlone](http://jmcglone.com/guides/github-pages/)
* [GitHub Pages guide from Anna Debenham at 24 ways](https://24ways.org/2013/get-started-with-github-pages/)
* [GitHub Pages guide from Thinkful](https://www.thinkful.com/learn/a-guide-to-using-github-pages/)


## Future plans

<!-- APIs -->

<!-- TODO use GitHub API to pull in info from repos, instead of using static text. JavaScript? 
THEY DO THIS ON PACKAGE CONTROL!!!
https://packagecontrol.io/packages/GitSavvy

-->
