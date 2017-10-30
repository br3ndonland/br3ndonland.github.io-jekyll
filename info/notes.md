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

* [Website construction](#website-construction)
* [Website hosting](#website-hosting)
* [APIs](#apis)
 

## Development environment

I wrote the code in Sublime Text, as usual. See [br3ndonland_computing_setup.mdown](https://github.com/br3ndonland/general/blob/master/br3ndonland_computing_setup.mdown) for more on my setup. I typically had two windows open: a double pane window, with left side for the core files I was creating (like this one, and the HTML and CSS), and right side for the Bootstrap files I was referencing, and a separate window for my Udacity reference materials. I usually had three Chrome browser windows open: one for Udacity, one for reference sites like Bootstrap, and a third to preview my site with Developer Tools.


## Bootstrap

I based the site on [Bootstrap](http://getbootstrap.com/) v4.0.0-beta. 


### Bootstrap installation and use options

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

I began with the Bootstrap starter HTML template in the [Bootstrap docs](https://getbootstrap.com/docs/4.0/getting-started/introduction/). The template uses the Boostrap CDN option to link out to cached versions of the compiled CSS and JS. 

From [Theming Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/theming/):
> Whenever possible, avoid modifying Bootstrap’s core files. For Sass, that means creating your own stylesheet that imports Bootstrap so you can modify and extend it.

I created an additional CSS file called *portfolio.css* to modify and extend the Bootstrap core CSS when necessary.

It took me a while to figure out how to use Bootstrap properly. I needed to first examine the core CSS to find out which names they use for the class selectors, so I could reference the selectors in my HTML classes, and modify them in the separate CSS for the portfolio site.

Key Bootstrap files open in Sublime for reference:

* *bootstrap-4.0.0-beta/dist/css/bootstrap.css*
* *bootstrap-4.0.0-beta/docs/4.0/examples/jumbotron/index.html*
* *bootstrap/bootstrap-4.0.0-beta/docs/4.0/examples/jumbotron/jumbotron.css*

It was also helpful to open the [Bootstrap template examples](https://getbootstrap.com/docs/4.0/examples/) in Chrome, then inspect with developer tools.


### Resources

* [Bootstrap docs](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
* [Bootstrap GitHub readme](https://github.com/twbs/bootstrap)


## Building the basics

I first focused on building basic structure with HTML. In parallel, I created CSS styling for each new HTML element I added. 

### General CSS and HTML

I used some elements from [narrow-jumbotron](https://getbootstrap.com/docs/4.0/examples/narrow-jumbotron/).

I used [Google Fonts](https://fonts.google.com). Font weights are specified when referencing the CSS, for example:
    ```html
    <!-- Google fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster|Raleway:300|Roboto" type="text/css">
    ```

I used CSS shorthand wherever possible. I attempted to shorten some of the Bootstrap elements added directly to *portfolio.css*, but it was not always possible.

Example:
```css
/* CSS from the narrow-jumbotron Bootstrap template */
body {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
```
Could be shortened to 
```css
/* Shorthand */
body {
  padding: 1.5rem 0rem 1.5rem 0rem;
}
```
But would affect left and right padding values specified above it in the CSS.


### Notes on specific page sections

#### Header

* [Container](https://getbootstrap.com/docs/4.0/layout/overview/#containers): I was originally having an issue with the header sitting outside the containers below. I placed the header inside a `container` to keep it in line with other elements. It seems like `container` should be the top-level div.
* [Grid](https://getbootstrap.com/docs/4.0/layout/grid/): I created a grid in the header to show the Udacity logo and the text in the same row. Bootstrap has most of the optimal [flexbox formatting](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) built in already. There are 12 columns by default.
* Alignment: 
    - Vertical alignment in columns: The Udacity logo svg and the text in the column next to it were aligning top, but I wanted them to align center. I tried `vertical-align: middle;` to no avail. I searched the Bootstrap documentation and found the [text section](https://getbootstrap.com/docs/4.0/utilities/text/#text-alignment), but that didn't fix it either. I finally squashed the bug by inspecting the text with Chrome Developer Tools, and looking at the inherited properties. I found `line-height: 1.1;` switched it off, and... text centered! Now to change the code: <!-- TODO NOW, HOW TO FIX IN CSS? -->
    - Horizontal alignment in rows: I could get text in columns to align right, but not text in rows.
    - Responsive design changes in text alignment: I created a media query to center align the text when the header reduces to one column. Bootstrap provides text alignment classes like `text-right` and `text-uppercase` that I could reference directly in the HTML, but this makes things more complicated, so I opted to align the text with my own CSS.
* Some of the Bootstrap HTML organization was confusing:
    - Why include the navbars and headers in body? why use the same container for header and main?

#### Jumbotron

* Responsive design: I noticed that the jumbotron `h1` text had strange breakpoints. At viewport width <534px it was on two lines, then between 534px and 575px one line, then between 576px and 767px it broke onto two lines again, then ≥768 back to one line. I wanted to eliminate the two lines break point between 576px and 767px. 

<!-- TODO fix 768 px breakpoint, remove two line brendon smith text -->
<!-- TODO fix jumbotron h1 text breapoint-->
<!-- TODO make text more responsive -->

#### Portfolio thumbnails

* Link buttons: I wanted to vertically align the three link buttons below the thumbnail descriptions. If I moved the buttons onto a separate row, they would not stay with the rest of the column when the site resizes for small viewports.
* I wanted to use the design mockup as a thumbnail for my portfolio site, but it was a PDF.

## Color schemes

I prefer dark themes, like many developers. Dark themes are becoming more popular. DuckDuckGo now has a dark theme option. I followed the guidelines from [design shack](https://designshack.net/articles/css/lightsoff/) to create the dark theme toggle. 

[TODO dark theme toggle]
use tomorrow and tomorrow night colors

### Resources

* [design shack dark theme toggle guide](https://designshack.net/articles/css/lightsoff/)


## Website hosting with GitHub Pages and Jekyll

I used this project as an opportunity to learn how to expand from a simple webpage to a multi-page website. I used GitHub Pages and Jekyll.  

### [GitHub Pages](https://pages.github.com/)

* Create GitHub Pages repository
    - Create a new repository *username*.github.io (br3ndonland.github.io). No README needed.
* Clone repository
    - Click "Set up in Desktop"
    - Clone the repository into the desired local directory
* Create website in repository with Jekyll.

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


### Resources

* [GitHub Pages docs](https://pages.github.com/)
* [Jekyll docs](https://jekyllrb.com/)
* [Jekyll YAML front matter](https://jekyllrb.com/docs/frontmatter/)
* [Jekyll on GitHub](https://github.com/jekyll)
    - Jekyll GitHub README:
    > Jekyll is a simple, blog-aware, static site generator perfect for personal, project, or organization sites. Think of it like a file-based CMS, without all the complexity.
* [GitHub Pages guide from Jonathan McGlone](http://jmcglone.com/guides/github-pages/)
* [GitHub Pages guide from Anna Debenham at 24 ways](https://24ways.org/2013/get-started-with-github-pages/)
* [GitHub Pages guide from Thinkful](https://www.thinkful.com/learn/a-guide-to-using-github-pages/)


## Future plans

<!-- APIs -->

<!-- TODO use GitHub API to pull in info from repos, instead of using static text. JavaScript? 
THEY DO THIS ON PACKAGE CONTROL!!!
https://packagecontrol.io/packages/GitSavvy

-->