documentation
========================

<p align="left">
    <a href="https://www.udacity.com/">
        <img src="https://s3-us-west-1.amazonaws.com/udacity-content/rebrand/svg/logo.min.svg" width="300">
    </a>
</p>

**Udacity Full Stack Web Developer nanodegree**

Part 01. Programming fundamentals and the web

Project 02. Build a portfolio site

Brendon Smith | br3ndonland

---

## Table of Contents

* [Overview](#overview)
* [Details](#details)
* [Rubric](#rubric)
* [Submission](#submission)

## Overview

### Project Overview

For this project, you'll be building a portfolio website. You will be provided a design mockup as a PDF-file, and you must replicate that design in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete through the course of your Nanodegree program. Please note that while you should aim to recreate the mockup, you may also use your own custom images to personalize this project.

Once you've successfully replicated the design mockup, you are encouraged to continue tweaking and making customizations to the design to personalize it and make it your own! This is your living portfolio site, so make sure you're happy with it.


### Why this project?

**The first thing potential employers look for isn’t which school you attended or what your GPA was; they want to see what you’ve built!** You need a professional portfolio to show off your skills.

In this project you’ll build a great looking portfolio where you can show off images, descriptions and links to all of your projects. You'll do so by writing code that conforms to the [Udacity Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/).


### What will I learn?

You will learn how HTML is used to define the content of a web page and start to think of every web page as a number of boxes on the screen. You’ll then learn how to position those boxes and make them beautiful using CSS.

You'll accomplish this while conforming to a [style guide](http://udacity.github.io/frontend-nanodegree-styleguide/) which is an important constraint once you step into any existing development position.


### Why is this important to my career?

* **Without a portfolio, recruiters won’t even look at your resume much less interview you.**
* At their very foundation, web applications are just content delivery mechanisms; HTML defines how that language is structured.
* Reading poorly designed content is never an enjoyable experience; CSS empowers you to create beautiful content regardless of your user’s device.


### Note

If you were previously enrolled in our Intro to HTML and CSS single course and successfully completed this project prior to enrolling in the Nanodegree program (which entails having graduated from the course and having access to your course certificate), simply email us at frontend-project@udacity.com with your passing evaluation and we'll give you credit for this project.

The design mockup for this project is located [here](https://storage.googleapis.com/supplemental_media/udacityu/2655898586/design-mockup-portfolio.pdf).


* [Udacity HTML/CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/)
* [HTML Validator](http://validator.w3.org/#validate_by_input)
* [CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)


## Details

### How do I Complete this Project?

All of the lessons you'll need to help you build this can be found in the lessons in this part of your Nanodegree program.

Depending on your background knowledge of HTML and CSS, you may not need to complete all lessons to build this project. To evaluate what you'll need to know, start by downloading the mockup we've provided, and review the [Project Rubric](https://review.udacity.com/#!/rubrics/45/view).

Be sure to follow the [Project Rubric](https://review.udacity.com/#!/rubrics/45/view) closely when designing your page. For example, note that [HTML5 semantic (structural) elements](https://www.w3.org/wiki/HTML_structural_elements#Enter_HTML5_structural_elements) must be used to organize content.

### Instructions:

1. Download the design mockup file from the Downloadables section (in the lower right hand corner of your screen, just below this text) and review it.
2. Identify the various boxes you will need to build in order to recreate this design.
3. Write your HTML and CSS files, continue to iterate until your work is representative of the design mockup.
4. Take the time to personalize your portfolio with custom colors, additional content and your own images.
5. Validate your HTML and CSS against the [W3C's Validators](http://validator.w3.org/). *Note: the validators consider the following errors, whereas Udacity accepts these errors as acceptable:*

    1. HTML5: **Bad value X-UA-Compatible for attribute http-equiv on element meta** when using the X-UA-Compatible meta tag.
    2. CSS3: **Property [some property here] is an unknown vendor extension** when using vendor prefixed properties (like -moz-box-sizing).

### Additional resources
Here are some tools you will find useful in checking your work —

* [Udacity HTML/CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/)
* [HTML Validator](http://validator.w3.org/#validate_by_input)
* [CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

### Supporting Materials
[design-mockup-portfolio.pdf](https://www.udacity.com/api/nodes/2655898586/supplemental_media/design-mockup-portfoliopdf/download)

## Rubric

<html>
<div id="proj-spec-div" class="col-xs-offset-1 col-xs-10"> <h2 id="project-spec-headline" translate="" class="ng-scope">Project Specification</h2> <h3 id="project-name" ng-bind-html="localize(ctrl.rubric.project, 'name', markup=true)" class="ng-binding"><p>Build a Portfolio Site</p>
</h3>  <!-- ngRepeat: section in ctrl.rubric.sections --><div ng-repeat="section in ctrl.rubric.sections" class="ng-scope" style=""> <span class="rubric-section ng-binding" ng-bind-html="localize(section, 'name', markup=true)"><p>Design</p>
</span> <table class="table table-bordered section-table"> <thead> <tr> <!-- ngIf: !ctrl.hideCriteria --><th class="rubric-category criteria col-xs-3 ng-scope" ng-if="!ctrl.hideCriteria"> <span translate="" class="ng-scope">Criteria</span> </th><!-- end ngIf: !ctrl.hideCriteria --> <th class="rubric-category meets-specs" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4"> <span translate="" class="ng-scope">Meets Specifications</span> </th> <!-- ngIf: ctrl.reviewerTips --> </tr> </thead> <tbody>  <!-- ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Required Elements</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>The page at minimum includes all of the following:</p>
<ul>
<li>at least 4 images</li>
<li>title text (h1, h2, etc.)</li>
<li>regular (paragraph) text</li>
<li>a logo.</li>
</ul>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Semantic HTML</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>HTML5 semantic tags such as <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code> etc. are used to add meaning to the code.</p>
<p>No <code>&lt;div&gt;</code> or <code>&lt;section&gt;</code> tags are without a <code>CSS</code> class or id.</p>
<p>Check out the W3C documentation on <a href="https://www.w3.org/wiki/HTML_structural_elements" target="_blank">HTML Structural Elements</a> to learn more!</p>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Custom Design</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>Provide at least one of the following customizations:</p>
<ul>
<li>Customize images and text.</li>
<li>Customize placement of the elements on the page (grid layout) with <code>HTML</code>, <code>CSS</code> or both.</li>
<li>Customize <code>CSS</code> styles applied at minimum to paragraph and heading elements.</li>
</ul>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Grid-Based Layout</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>Page utilizes a grid-based layout with styles making use of the <code>flexbox</code> layout or a framework like <code>Bootstrap</code>, <code>Foundation</code>, etc.<br>If you're using <code>Bootstrap</code> or standard <code>HTML/CSS</code>: the rows and columns of the grid must be wrapped in an element with a <code>container</code> class.</p>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --> </tbody> </table> </div><!-- end ngRepeat: section in ctrl.rubric.sections --><div ng-repeat="section in ctrl.rubric.sections" class="ng-scope"> <span class="rubric-section ng-binding" ng-bind-html="localize(section, 'name', markup=true)"><p>Responsiveness</p>
</span> <table class="table table-bordered section-table"> <thead> <tr> <!-- ngIf: !ctrl.hideCriteria --><th class="rubric-category criteria col-xs-3 ng-scope" ng-if="!ctrl.hideCriteria"> <span translate="" class="ng-scope">Criteria</span> </th><!-- end ngIf: !ctrl.hideCriteria --> <th class="rubric-category meets-specs" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4"> <span translate="" class="ng-scope">Meets Specifications</span> </th> <!-- ngIf: ctrl.reviewerTips --> </tr> </thead> <tbody>  <!-- ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Cross-Device Compatibility</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>All content is responsive and displays on all display sizes. This includes:</p>
<ul>
<li>Desktop</li>
<li>Mobile: Google Nexus 5</li>
<li>Tablet: Apple iPad</li>
</ul>
<p>An image's associated title and text renders next to the image in all viewport sizes.</p>
<p><em>TIP</em>: Test responsiveness with Chrome Developer Tools device emulation by right-clicking anywhere on page, selecting ‘Inspect Element’, clicking the rectangle to the left of the Elements tab, select Apple iPad or Google Nexus 5 from Device drop-down list, and click reload.</p>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Provide All Content</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>All content is rendered on all three devices. No content should be hidden on mobile devices. </p>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Viewport meta Tag</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>Viewport <code>meta</code> tag is included in <code>HTML</code>. (i.e. <code>&lt;meta name=”viewport” …</code>)</p>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Responsive Images</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>If a CSS framework is used, classes provided by the CSS framework are used to make images responsive, otherwise media-queries are used to ensure responsiveness of images.</p>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --> </tbody> </table> </div><!-- end ngRepeat: section in ctrl.rubric.sections --><div ng-repeat="section in ctrl.rubric.sections" class="ng-scope"> <span class="rubric-section ng-binding" ng-bind-html="localize(section, 'name', markup=true)"><p>Separation of Concerns</p>
</span> <table class="table table-bordered section-table"> <thead> <tr> <!-- ngIf: !ctrl.hideCriteria --><th class="rubric-category criteria col-xs-3 ng-scope" ng-if="!ctrl.hideCriteria"> <span translate="" class="ng-scope">Criteria</span> </th><!-- end ngIf: !ctrl.hideCriteria --> <th class="rubric-category meets-specs" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4"> <span translate="" class="ng-scope">Meets Specifications</span> </th> <!-- ngIf: ctrl.reviewerTips --> </tr> </thead> <tbody>  <!-- ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>Styles Separated From HTML</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>Portfolio completely separates structure (<code>HTML</code>) from design/style (<code>CSS</code>). There are no <code>style</code> attributes present in the body of the <code>HTML</code> document. There are no <code>&lt;style&gt;</code> elements in the document.</p>
<p><em>Note</em>: It is acceptable to include <code>height</code> and <code>width</code> attributes in <code>&lt;img&gt;</code> elements.</p>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p>File structure</p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><p>Files are organized with a directory structure that separates files based on functionality. For example:<br>  <code>css/</code> for stylesheets<br>  <code>img/</code> for images<br>  <code>js/</code> for JavaScript files</p>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --> </tbody> </table> </div><!-- end ngRepeat: section in ctrl.rubric.sections --><div ng-repeat="section in ctrl.rubric.sections" class="ng-scope"> <span class="rubric-section ng-binding" ng-bind-html="localize(section, 'name', markup=true)"><p>Code Quality</p>
</span> <table class="table table-bordered section-table"> <thead> <tr> <!-- ngIf: !ctrl.hideCriteria --><th class="rubric-category criteria col-xs-3 ng-scope" ng-if="!ctrl.hideCriteria"> <span translate="" class="ng-scope">Criteria</span> </th><!-- end ngIf: !ctrl.hideCriteria --> <th class="rubric-category meets-specs" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4"> <span translate="" class="ng-scope">Meets Specifications</span> </th> <!-- ngIf: ctrl.reviewerTips --> </tr> </thead> <tbody>  <!-- ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p><strong>HTML Formatting rules </strong></p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><ul>
<li>All code ( <code>HTML</code> element names, attributes, attribute values) is lowercase (except <code>text/CDATA</code>).</li>
<li>Code does not have trailing white spaces.</li>
<li>Indentation is consistent (either all tabs or all 2 spaces or all 4 spaces etc).</li>
<li>Code uses a new line for every block, list or table element and indent every such child element (it's acceptable to put all <code>&lt;li&gt;</code> elements in one line).</li>
<li>[Optional] When quoting attribute values, code uses double quotation marks.</li>
</ul>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p><strong> HTML Style Rules</strong></p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><ul>
<li><code>HTML</code> documents use <code>HTML5</code> <code>&lt;!doctype html&gt;</code>.</li>
<li>Code passes <a href="https://validator.w3.org/#validate_by_input" target="_blank"><code>HTML</code></a> and <a href="https://jigsaw.w3.org/css-validator/#validate_by_input" target="_blank"><code>CSS</code></a> validators.<br>*[Optional] Code does not use entity references unless necessary e.g. characters with special meaning in <code>HTML</code> (like &lt; and &amp;) as well as control or “invisible” characters (like no-break spaces).</li>
<li>[Optional] Code omits type attributes for style sheets and scripts.</li>
</ul>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p><strong>CSS Formatting Rules</strong></p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><ul>
<li>Code does not have trailing white spaces.</li>
<li>Indentation is consistent (either all tabs or all 2 spaces or all 4 spaces etc).</li>
<li>Code indents all block content, that is rules within rules as well as declarations to reflect hierarchy and improve understanding.</li>
<li>Code uses a semicolon after every declaration for consistency and extensibility reasons.</li>
<li>Code always uses a space after a property name's colon, but no space between property and colon, for consistency reasons.</li>
<li>Code always use a single space between the last selector and the opening brace that begins the declaration block.</li>
<li>Code always start a new line for each selector and declaration.</li>
<li>Code always put a blank line (two line breaks) between rules.</li>
<li>[Optional] Code uses double quotation marks for attribute selectors or property values. Do not use quotation marks in <code>URI</code> values (<code>url()</code>).</li>
</ul>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p><strong>CSS Style Rules</strong></p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><ul>
<li>Code uses meaningful or generic ID and class names that are as short as possible but as long as necessary.</li>
<li>Code does not use element names in conjunction with IDs or classes.</li>
<li>Code uses shorthand properties where possible.</li>
<li>[Optional] Code omits unit specification after 0 values.</li>
<li>[Optional] Code includes leading 0s in decimal values for readability.</li>
<li>[Optional] Code uses 3-character hexadecimal notation where possible.</li>
<li>[Optional] Code separate words in ID and class names by a hyphen.</li>
<li>[Optional] Code avoids user agent detection as well as <code>CSS</code> "hacks"—try a different approach first.</li>
</ul>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --><tr ng-repeat="rubricItem in section.rubric_items" class="ng-scope"> <!-- ngIf: !ctrl.hideCriteria --><td class="rubric-item col-xs-3 ng-binding ng-scope" ng-if="!ctrl.hideCriteria" ng-bind-html="localize(rubricItem, 'criteria', markup=true)"><p><strong>General Meta Rules</strong></p>
</td><!-- end ngIf: !ctrl.hideCriteria --> <td class="rubric-item ng-binding" ng-class="ctrl.reviewerTips ? col-xs-7 : col-xs-4" ng-bind-html="localize(rubricItem, 'passed_description', markup=true)"><ul>
<li><code>HTML</code> templates and documents use <code>UTF-8</code> encoding. (no <code>BOM</code>) i.e. <code>&lt;meta charset="utf-8"&gt;</code>.<br>*[Optional] Mark todos and action items with <code>TODO</code></li>
</ul>
</td> <!-- ngIf: ctrl.reviewerTips --> </tr><!-- end ngRepeat: rubricItem in section.rubric_items --> </tbody> </table> </div><!-- end ngRepeat: section in ctrl.rubric.sections --> <!-- ngIf: ctrl.rubric.stand_out --><div id="stand-out" ng-if="ctrl.rubric.stand_out" class="col-xs-offset-1 col-xs-10 ng-scope" style=""> <h3 id="stand-out-headline" class="text-center ng-scope" translate="">Suggestions to Make Your Project Stand Out!</h3> <div id="stand-out-text" ng-bind-html="localize(ctrl.rubric, 'stand_out', markup=true)" class="ng-binding"><p>Use srcset in the img elements to provide optimized images to users on all device sizes.</p>
<p>Include additional JavaScript functionality, while maintaining required components. For example: Bootstrap Navbar, Polymer Components.</p>
</div> </div><!-- end ngIf: ctrl.rubric.stand_out --> </div>
</html>

## Submission

<html>
<div class="container-fluid index--container--1H1L7"><div class="index--body--2gqet layout--content--3Smmq layout--body--3U2qN"><h2 class="index--title--3eIzO">Project Submission</h2></div><div class="ltr"><div class="index--markdown--2I2Ir ureact-markdown "><p>You will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of your Nanodegree program.</p>
<p>The design mockup is located <a target="_blank" href="https://storage.googleapis.com/supplemental_media/udacityu/2655898586/design-mockup-portfolio.pdf">here</a>.</p>
<h2 id="evaluation">Evaluation</h2>
<p>Your project will be evaluated by a Udacity Code Reviewer according to the <strong><a target="_blank" href="https://review.udacity.com/#!/rubrics/45/view">Build a Portfolio Project Rubric</a></strong>. Be sure to review it thoroughly before you submit. All criteria must "meet specifications" in order to pass. </p>
<p>Submit <a target="_blank" href="https://review.udacity.com/#!/projects/45/start">here</a>.</p>
<p>Please note the HTML and CSS style guidelines below - following these is necessary to make sure your code passes the Code Quality rubric point.</p>
<h2 id="style-guidelines">Style Guidelines</h2>
<h3 id="css-guidelines">CSS Guidelines</h3>
<ul>
<li>CSS - Use consistent indentation (tabs or spaces).   (See: CSS General Formatting Rules-Indentation)</li>
<li>CSS - Selectors, properties and property values (with the exception of strings) should be lowercase, including letters in hexadecimal color values. For example #f06c13 instead of #F06C13 and #ccc rather than #CCC. (See: CSS-General Formatting Rules-Capitalization.)</li>
<li>CSS - Use IDs and class names that are meaningful or generic. (See: CSS-ID and Class Naming.)</li>
<li>CSS - Use ID and class names that are as short as possible but as long as necessary. (See: CSS-ID and Class Naming.)</li>
<li>CSS - Use Shorthand properties in all possible places for margin, border, padding, background. Examples: <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties">https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties</a>. (See: CSS Style Rules-Shorthand Properties.)</li>
<li>CSS - Indent block content between curly braces. (See: CSS Formatting Rules-Block Content Indentation.)</li>
<li>CSS - End all declarations with a semicolon. (See: CSS Formatting Rules-Declaration Stops.)</li>
<li>CSS - Add single spaces after each property name’s  colon (See: CSS Formatting Rules-Property Name Stops.)</li>
<li>CSS - Remove trailing white spaces from code. (See: CSS General Formatting Rules-Trailing Whitespace)</li>
<li>CSS - Include a single space before the opening curly brace. (See: CSS-Declaration Block Separation.)</li>
<li>CSS - ID and class names should not be used with type selectors. (See Style Guide: CSS Style Rules-Type Selectors.)</li>
<li>CSS - Separate style rules with a blank line. (See: CSS-Rule Separations.)</li>
<li>CSS - Remove units of measure after 0 values. (See: CSS Style Rules-0 and Units.)</li>
<li>CSS - Use leading zeros for values in the code. (See: CSS Style Rules-Leading 0s.)</li>
<li>CSS - Use 3 character hexadecimal notation for color in all possible places.  For example #ccc rather than #cccccc. (See: CSS Style Rules-Hexadecimal Notation.)</li>
<li>CSS - Separate words in ID and class names with a hyphen. (See: CSS Style Rules-ID and Class Name Delimiters.)</li>
<li>CSS - Remove CSS hacks or user detection from code. 
(See: CSS Style Rules-Hacks.)</li>
<li>CSS - Separate selectors and declarations with new lines. 
(See: CSS-Selector and Declaration Separation.)</li>
<li>CSS - Use double quotes for all attribute selectors and property values. 
(See: CSS Formatting Rules-CSS Quotation Marks.)</li>
<li>CSS - Identify groups of related style rules with section comments. 
(See: CSS Meta Rules-Section Comments.)</li>
</ul>
<h3 id="html-guidelines">HTML Guidelines</h3>
<ul>
<li>HTML - Element and attribute names should all be lowercase. (See: Capitalization.)</li>
<li>HTML - Use HTML5. (See: HTML Style Rules-Document Type.)</li>
<li>HTML - Use UTF-8 as character encoding. 
(See: General Meta Rules-Encoding.)</li>
<li>HTML - Place all block/list/table elements on a separate line and indent child elements. (See: HTML-General Formatting.)</li>
<li>HTML - Use semantic tags. (See: HTML Style Rules-Semantics.)</li>
<li>HTML - Provide alternate content for multimedia. 
(See: HTML Style Rules-Multimedia Fallback.)</li>
<li>HTML - Remove trailing white spaces from code. 
(See: HTML - General Formatting Rules - Trailing Whitespace.)</li>
<li>HTML - Use consistent indentation (tabs or spaces) 
(See HTML - General Formatting Rules - Indentation)</li>
<li>HTML - Use comments to explain the code. 
(See: General Meta Rules-Comments.)</li>
<li>HTML - Mark action items with TODO. 
(See: General Meta Rules-Action Items.)</li>
<li>HTML - Remove entity references. 
(See: HTML Style Rules-Entity References.)</li>
<li>HTML - Remove type attribute from link and script elements. 
(See: HTML Style Rules-Type Attributes.)</li>
<li>HTML - Use double rather than single quotation marks for attribute values. 
(See: HTML-HTML Quotation Marks.)</li>
</ul>
<h2 id="submission">Submission</h2>
<ol>
<li>The master branch is the default Github repository branch. If you wish to submit another branch, you'll need to set it as the <a target="_blank" href="https://help.github.com/articles/setting-the-default-branch/">new default branch</a> inside your Github repository.</li>
<li>When you're ready to submit your project go back to your <a href="https://www.udacity.com/me" target="_blank">Udacity Home</a>, click on Project 1, and we'll walk you through the rest of the submission process. Due to the high volume of submissions we receive, please allow up up to <strong>7 business days</strong> for your evaluation to be returned.</li>
<li>If you are having any problems submitting your project or wish to check on the status of your submission, please email us at <strong>frontend-project@udacity.com</strong> or visit us in the <a href="http://discussions.udacity.com" target="_blank">discussion forums</a>.</li>
</ol>
<h2 id="what-s-next-">What's Next?</h2>
<p>You will get an email as soon as your reviewer has feedback for you. In the meantime, review your next project and feel free to get started on it or the courses supporting it!</p>
</div></div><div class="ltr index--resources--vwqCB"><div><h4>Supporting Materials</h4><div class="resources--links--Dmbld"><div><a href="http://d2uz2655q5g6b2.cloudfront.net/2736698543/P1%3A%20Build%20a%20Portfolio%20Site%20Videos.zip" target="_blank" class="resources--resource-link--37SIs"><span class="ureact-glyph--icon-download-sm--1Ddlb ureact-glyph--icon--3AXgN" title=""><i></i></span><!-- react-text: 1483 --> <!-- /react-text --><!-- react-text: 1484 -->Videos Zip File<!-- /react-text --></a></div><div><a href="https://d17h27t6h515a5.cloudfront.net/topher/2016/August/57b22517_design-mockup-portfolio/design-mockup-portfolio.pdf" target="_blank" class="resources--resource-link--37SIs"><span class="ureact-glyph--icon-download-sm--1Ddlb ureact-glyph--icon--3AXgN" title=""><i></i></span><!-- react-text: 1489 --> <!-- /react-text --><!-- react-text: 1490 -->design-mockup-portfolio.pdf<!-- /react-text --></a></div></div></div></div></div></div>
</html>

