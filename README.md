# README

[br3ndonland.github.io](https://br3ndonland.github.io)

:computer: :house: Responsive, mobile-first GitHub portfolio site

Brendon Smith

[![license](https://img.shields.io/badge/license-CC--BY--4.0%20-blue.svg?longCache=true&style=for-the-badge)](https://creativecommons.org/licenses/by/4.0/)

This repository is provided under the terms of the [CC-BY-4.0 license](https://creativecommons.org/licenses/by/4.0/). If you adapt these materials, please **attribute me** and **explain what you changed**.

- [Stack](#stack)
- [Building the site locally](#building-the-site-locally)
- [Code style](#code-style)

## Stack

- The homepage is [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML).
- Other pages are [Markdown](https://www.markdownguide.org/).
- [Bootstrap](https://getbootstrap.com/) 4 provides styling and responsive design.
- [AnchorJS](https://www.bryanbraun.com/anchorjs/) generates header anchors for deep linking.
- [Prism](http://prismjs.com/) syntax highlighting is included for display of code blocks.
- [Jekyll](https://jekyllrb.com/) is a static site generator that builds the site.
- [GitHub Pages](https://pages.github.com/) hosts the site.
- The [Keybase](https://keybase.io/) proof helps verify my online identity. I had to use a workaround to set it up:

  - I don't have access to DNS records on GitHub Pages, so I have to use HTTPS.
  - Keybase requires the page to be at _/keybase.txt_, and the contents of the file can't be altered.
  - Jekyll requires pages to be Markdown files, but layouts to be HTML files.
  - The solution was to save _keybase.md_ with only the YAML front matter, then change the _keybase.txt_ file extension to _keybase.html_ and save in _\_layouts_.

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

- HTML, CSS, JavaScript, and YAML are formatted with [Prettier](https://prettier.io/), using `--semi=false`.
- Python code chunks are formatted for Python 3 and [PEP 8](http://pep8.org/). When permitted, I amend PEP 8 to permit a line length of 100 characters.
