---
layout: page
title: Website changelog
permalink: /changelog/
---
# Website changelog

Changes after completing Udacity project, in reverse chronological order. All changes have been committed with Git and pushed to GitHub.


## Add syntax highlighting

Date: 20180329

SHA:

* Update links
* Update to Bootstrap 4.0.0
* Add Prism syntax highlighting


## Add GWG and optimize with PageSpeed Insights

Date: 20180223

SHA: a679a1be5e463b1c787d33c468e5a85cfcf2be7e

* Add info about Udacity Grow with Google (GWG) program to homepage
* Optimize with recommendations from Google PageSpeed Insights:
	- Remove render-blocking JavaScript: Move Font Awesome JavaScript to footer
	- Optimize CSS delivery: Can't change the delivery of the Bootstrap or Google Fonts CSS. This site's CSS is too long to inline.
	- Leverage browser caching: Create .htaccess file to control caching.
	- Optimize images: Use smaller version of database analysis thumbnail


## Update links for new changelog page

Date: 20180203

SHA: a679a1be5e463b1c787d33c468e5a85cfcf2be7e


## Update home, about, header formatting, and colors

Date: 20180203

SHA: 1ca85be8358a19a89846e7411b00fb9fe87a27f3

* Update home page with database analysis project
* Update /about page with custom computing curriculum, Full Stack progress, and Grow with Google.
* Restore padding below Udacity logo in header
* Reduce body font size on mobile displays
* Change default color to light


## Add minor updates to index.html and about.md

Date: 20171127

SHA: ae59dc3d47a12c872b6b073699ea8ada7239fbda


## Complete Udacity project and add social links

Date: 20171121

SHA: d56d99cd6df55c05a21b5570f7f539a9e33b6a13

* Add documentation for Udacity code review to [Review]({{ "review/" | relative_url }}).
* Add line break after image in [Methods]({{ "methods/" | relative_url }}).
* Add LinkedIn and Facebook social links in header and footer.
* Update README.md to remove outdated link.