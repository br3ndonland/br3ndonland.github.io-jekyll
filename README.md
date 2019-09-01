# README

[br3ndonland.github.io](https://br3ndonland.github.io)

:computer: :house: Responsive, mobile-first GitHub portfolio site

Brendon Smith

[![license](https://img.shields.io/badge/license-CC--BY--4.0%20-blue.svg?longCache=true&style=for-the-badge)](https://creativecommons.org/licenses/by/4.0/)

- [Stack](#stack)
- [Building the site locally](#building-the-site-locally)
- [Code style](#code-style)

## Stack

- The homepage is [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML).
- Other pages are [Markdown](https://www.markdownguide.org/).
- [Bootstrap](https://getbootstrap.com/) 4 provides styling and responsive design.
- [AnchorJS](https://www.bryanbraun.com/anchorjs/) generates header anchors for deep linking.
- [Prism](http://prismjs.com/) syntax highlighting is included for display of code blocks.
- [Font Awesome](https://fontawesome.com/) provides icons.
- [Jekyll](https://jekyllrb.com/) is a static site generator that builds the site.
- [GitHub Pages](https://pages.github.com/) hosts the site.
- [CC-BY-4.0 license](https://creativecommons.org/licenses/by/4.0/), which is commonly used for open-access scientific publications. If you adapt these materials, please **attribute me** and **explain what you changed**.

## Building the site locally

- [Clone](https://help.github.com/en/articles/cloning-a-repository) (or [fork](https://help.github.com/en/articles/about-forks) then clone) this repo.
- Install Ruby v2.6+ as explained in the [Jekyll docs](https://jekyllrb.com/docs/installation/) for your operating system (via [rbenv](https://github.com/rbenv/rbenv), for example).
- Install the Bundler and Jekyll Ruby gems:
  - Make sure both the installed Ruby version and RubyGems are on your path, as explained in the docs for [Jekyll](https://jekyllrb.com/docs/installation/) and [rbenv](https://github.com/rbenv/rbenv).
  - Run `gem install bundler jekyll`.
- Install the site and generate [Gemfile.lock](https://jekyllrb.com/docs/ruby-101/#gemfile): `bundle install`
- Serve the site: `bundle exec jekyll serve`
- View the site in a browser at [localhost:4000](http://localhost:4000).

## Code style

### Python <!-- omit in toc -->

- Python code chunks are formatted for Python 3 and [PEP 8](http://pep8.org/).
- When permitted, I amend PEP 8 to permit a line length of 100 characters.

### HTML and CSS <!-- omit in toc -->

- Two space indentations.
- Standard [HTML nesting](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics).
- [Bootstrap grid](https://getbootstrap.com/docs/4.1/layout/grid/) and classes

### Markdown <!-- omit in toc -->

- Standardized Markdown formatting as described by [markdownlint](https://github.com/DavidAnson/markdownlint) and [Markdown Style Guide](http://www.cirosantilli.com/markdown-style-guide/).
- Two space indentations.
- Dashes for unordered lists.
