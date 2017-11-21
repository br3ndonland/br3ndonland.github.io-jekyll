---
layout: page
title: About
permalink: /about/
---
About me
========

Brendon Smith

br3ndonland

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Intro](#intro)
- [Full Stack Web Developer Nanodegree program](#full-stack-web-developer-nanodegree-program)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Intro

I am a molecular nutrition scientist building skills in web development to create a more efficient, reproducible, and sustainable research culture. This website showcases the Udacity work I have shared on GitHub. I am currently working on the [Full Stack Web Developer Nanodegree program](https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004).


## Full Stack Web Developer Nanodegree program

**My goal with Udacity is not to finish as quickly as possible, but to learn as much as possible, and to become the best programmer possible.** Throughout the Full Stack Web Developer Nanodegree program, I went beyond the requirements to strengthen my skills. 

Examples:


### Part 1, Programming Fundamentals

#### Lesson 05, functions

[Udacity FSND](https://github.com/br3ndonland/udacity-fsnd) File: *fsnd01_05_functions*

**This was my first milestone as a computer programmer.** 

I began my transition into web development with background info about computing history, operating systems, and programming, mostly from [Harvard cs50](https://cs50.harvard.edu/), [Udacity cs101](https://www.udacity.com/course/intro-to-computer-science--cs101), and [David Evans cs4414](http://rust-class.org/index.html). When I began learning Python syntax, progress was slow, and I wasn't able to express myself. It felt very much like the mental exhaustion of learning a spoken language. For example, while I was in Spain, although I was already fluent in Spanish, it required more mental effort to do simple things like go to a store or order food at a restaurant. The Udacity introductory materials actually recommended that I start with a beginner Nanodegree program first, but I knew that with my motivation and education, I could fill in the gaps in my knowledge and competency. 

I launched into the Full Stack Web Developer Nanodegree program and kept at it. I got to an exercise where we had to create a break timer. The timer opens a YouTube video every two hours, to encourage people to take a break while working on the computer. I wrote the code independently, then checked the instructor's solution. **When adding a loop to the break counter, I came up with a more efficient way to program it** by using a `for` loop instead of a `while` loop, reducing the required amount of code from eight lines to five. 

*My code:*

```python
# break timer
import time
import webbrowser

for i in range(3):
    time.sleep(7) # try 7 seconds. For 2 hours, use 2*60*60.
    webbrowser.open_new_tab("https://www.youtube.com/watch?v=IuGO6WHcruU")
```


*Instructor's code:*

```python
import time
import webbrowser

total_breaks = 3
break_count = 0 # starting point 

while(break_count < total_breaks):
    time.sleep(7) # try 7 seconds
    webbrowser.open_new_tab("https://www.youtube.com/watch?v=IuGO6WHcruU")
    break_count = break_count + 1 
    # add 1 each time, to stop at 3 and avoid infinite loop
```

**I realized the significance of the thought process because I had taken time to learn about computing history.** I thought about how Bill Gates and Paul Allen's major accomplishment while at Harvard was writing a BASIC interpreter for the Altair in 3.2 kilobytes of text, leaving memory free to write other programs and launching the personal computing software industry. Walter Isaacson wrote an article on this topic, "[Dawn of a revolution](http://news.harvard.edu/gazette/story/2013/09/dawn-of-a-revolution/)," *Harvard Gazette* 201309, and the corresponding book, *The Innovators*. **My performance during this exercise demonstrated that I had moved beyond the rote completion of exercises to think independently in the most efficient and Pythonic way.** 

Computer memory is less limiting today, but we still have to be conscious of file sizes. This is why we use code minification for web distribution.


#### Lesson 06, classes: turtle graphics mini-project

[Udacity FSND](https://github.com/br3ndonland/udacity-fsnd) File: *fsnd01_06_classes_turtles*

Instead of just drawing a shape, I imported a gif for the background, and looped through a colorspace to create a psychedelic effect. 


#### Lesson 08, classes: profanity checker

[Udacity FSND](https://github.com/br3ndonland/udacity-fsnd) File: *fsnd01_08_classes_checker*

In the profanity checker mini-project, I adapted the code for Python 3.6.2 and made it as concise as possible. When I realized there was a more effective way to write the program with the `Requests` module, I learned about it and rewrote my code.


#### [Project 01: Movie trailer website](https://github.com/br3ndonland/udacity-fsnd01-p01-movies)

For my first project, I created a movie trailer website. I personalized it with a film noir theme, and wrote a mini-review for each movie. I passed code review with only minor corrections.


#### [Project 02: Portfolio website](https://github.com/br3ndonland/udacity-fsnd01-p02-portfolio)

**Portfolio website project documentation:** [Methods]({{ "methods/" | relative_url }}) [Rubric]({{ "rubric/" | relative_url }}) [Review]({{ "review/" | relative_url }})

This was my second project for the Udacity Full Stack Web Developer nanodegree program. We were provided with a design mockup (screenshot) of a developer portfolio webpage, and had to replicate the design with HTML and CSS. I based the webpage on Bootstrap v4.0.0-beta, and gained experience integrating Bootstrap components and formatting. 

I included extensive customization, including CSS styles and a toggle button in the footer that uses jQuery JavaScript to change the page color scheme. I then built the webpage into a website with Jekyll, and hosted it with GitHub Pages.


[(back to top)](#top)
