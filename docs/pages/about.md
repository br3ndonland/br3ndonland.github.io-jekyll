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
- [My journey](#my-journey)
- [Custom computing curriculum](#custom-computing-curriculum)
- [Udacity Full Stack Web Developer Nanodegree program](#udacity-full-stack-web-developer-nanodegree-program)
- [Udacity Grow with Google program](#udacity-grow-with-google-program)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Intro

I am a molecular nutrition scientist building skills in web development to create a more efficient, reproducible, and sustainable research culture. This website showcases the Udacity work I have shared on GitHub. I am currently working on the [Full Stack Web Developer Nanodegree program](https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004).


## My journey

I got into web development while doing research in a molecular nutrition and metabolism lab. I have confidence in the power of science to teach us about the world, but I began to see that **the way we do scientific research now is not effective.** It's resulted in what we call the **reproducibility crisis.** The research published by one lab can't be repeated by other labs, so it's not real progress, and doesn't translate into treatments or cures for humans.

**Science needs to improve in three ways: efficiency, reproducibility, and sustainability.** We need better technology tools, like robotic automation and research management software, to make our work more efficient. We need to document our work so others can reproduce it. And we need to enable scientists to lead more balanced, rewarding lifestyles.

**When I realized this, I decided to dedicate myself to creating technologies that can improve science.** I had some statistics and data science training, but no development experience. I thought about different ways to learn, like code bootcamps or computer science grad school. I decided to put together my own custom computing curriculum, including the Udacity Full Stack Web Developer Nanodegree program. I've been working on it for the past few months, and have grown tremendously. Web development, like scientific research, engages the two major motivating outcomes in my life, focused personal growth and positive impact.


## Custom computing curriculum

* **Foundational**
    - [Harvard cs50](https://cs50.harvard.edu)
    - [How Computers Work, by Ron White](https://www.amazon.com/How-Computers-Work-Evolution-Technology/dp/078974984X)
    - [basecs](https://medium.com/basecs)
    - [CodeNewbie](https://www.codenewbie.org/)
* **Practical**
    - [Udacity Full Stack Web Developer Nanodegree program](https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004)
    - [Udacity Grow with Google scholarship](https://www.udacity.com/grow-with-google)
* **Historical**
    - [The Innovators, by Walter Isaacson](http://a.co/66iyBT1)
    - [Steve Jobs, by Walter Isaacson](http://a.co/6s7MekE)
* **Cultural**
    - [Halt and Catch Fire](http://www.imdb.com/title/tt2543312/)
    - [Silicon Valley](http://www.imdb.com/title/tt2575988/)
    - [Mr. Robot](http://www.imdb.com/title/tt4158110/)


## Udacity Full Stack Web Developer Nanodegree program

**My goal with Udacity is not to finish as quickly as possible, but to learn as much as possible, and to become the best programmer possible.** Throughout the Full Stack Web Developer Nanodegree program, I went beyond the requirements to strengthen my skills. 

Examples:


### Part 01. Programming Fundamentals

#### Lesson 05, functions

[Udacity FSND](https://github.com/br3ndonland/udacity-fsnd) File: *fsnd01_05_functions*

**This was my first milestone as a computer programmer.** 

I began my transition into web development with background info about computing history, operating systems, and programming, mostly from [Harvard cs50](https://cs50.harvard.edu/), [Udacity cs101](https://www.udacity.com/course/intro-to-computer-science--cs101), and [David Evans cs4414](http://rust-class.org/index.html). When I began learning Python syntax, progress was slow, and I wasn't able to express myself. It felt very much like the mental exhaustion of learning a spoken language. For example, while I was in Spain, although I was already fluent in Spanish, it required more mental effort to do simple things like go to a store or order food at a restaurant. The Udacity introductory materials actually recommended that I start with a beginner Nanodegree program first, but I knew that with my motivation and education, I could fill in the gaps in my knowledge and competency. 

I launched into the Full Stack Web Developer Nanodegree program and kept at it. I got to an exercise in lesson 5 in which we had to create a break timer. The timer opens a YouTube video every two hours, to encourage people to take a break while working on the computer. I wrote the code independently, then checked the instructor's solution. **When adding a loop to the break counter, I came up with a more efficient way to program it** by using a `for` loop instead of a `while` loop, reducing the required amount of code from eight lines to five. 

*My code:*

```python
# my break timer
import time
import webbrowser

for i in range(3):
    time.sleep(7) # try 7 seconds. For 2 hours, use 2*60*60.
    webbrowser.open_new_tab("https://www.youtube.com/watch?v=IuGO6WHcruU")
```


*Instructor's code:*

```python
# instructor's break timer
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

**I realized the significance of the thought process because I had taken time to learn about computing history.** I thought about how Bill Gates and Paul Allen's major accomplishment while at Harvard was writing a BASIC interpreter for the Altair in 3.2 kilobytes of text, leaving memory free to write other programs and launching the personal computing software industry. Walter Isaacson wrote an article on this topic, "[Dawn of a revolution](http://news.harvard.edu/gazette/story/2013/09/dawn-of-a-revolution/)," *Harvard Gazette* 201309, and the corresponding book, *The Innovators*. 

**My performance during this exercise demonstrated that I had moved beyond the rote completion of exercises to think independently in the most efficient and Pythonic way.** 

Computer memory is less limiting today, but we still have to be conscious of file sizes. This is why we use code minification for web distribution.


#### Lesson 06, classes: turtle graphics mini-project

[Udacity FSND](https://github.com/br3ndonland/udacity-fsnd) File: *fsnd01_06_classes_turtles*

Instead of just drawing a shape, I imported a gif for the background, and looped through a colorspace to create a psychedelic effect. 

```python
import turtle
import colorsys

def spiral_into_the_grid():

    turtle.setup(width = 1600, height = 900)
    turtle.speed(0)
    turtle.hideturtle()
    window = turtle.Screen()
    window.bgpic('/Users/brendonsmith/Pictures/TRON.gif')
    
    for i in range(1250):
        colors = colorsys.hsv_to_rgb(i/1250, 1.0, 1.0)
        turtle.color(colors)
        turtle.forward(i)
        turtle.left(115)
        
    turtle.done()
    
spiral_into_the_grid()
```

<img src="../img/turtles-final-small.png" alt="turtle mini-project final image" class="img-fluid">


#### Lesson 08, classes: profanity checker

[Udacity FSND](https://github.com/br3ndonland/udacity-fsnd) File: *fsnd01_08_classes_checker*

In the profanity checker mini-project, I adapted the code for Python 3.6.2 and made it as concise as possible. When I realized there was a more effective way to write the program with the `Requests` module, I learned about it and rewrote my code.


#### [Project 01: Movie trailer website](https://github.com/br3ndonland/udacity-fsnd01-p01-movies)

For my first project, I created a Python web server that serves a movie trailer website. The Python code stores a list of movies, including artwork and trailers, and serves the data to a local webpage with HTML and CSS. I personalized it with a film noir theme, and wrote a mini-review for each movie. I passed code review with only minor corrections.

<img src="../img/fresh-tomatoes-noir-thumbnail-square.png" alt="movie trailer website" class="img-fluid">

#### [Project 02: Portfolio website](https://github.com/br3ndonland/udacity-fsnd01-p02-portfolio)

**Portfolio website project documentation:** [Methods]({{ "methods/" | relative_url }}) [Rubric]({{ "rubric/" | relative_url }}) [Review]({{ "review/" | relative_url }})

This was my second project for the Udacity Full Stack Web Developer nanodegree program. We were provided with a design mockup (screenshot) of a developer portfolio webpage, and had to replicate the design with HTML and CSS. I based the webpage on Bootstrap v4.0.0-beta, and gained experience integrating Bootstrap components and formatting. 

I included extensive customization, including CSS styles and a toggle button in the footer that uses jQuery JavaScript to change the page color scheme. I then built the webpage into a website with Jekyll, and hosted it with GitHub Pages.


### Part 02. Developer Tools

Part 2 was technically optional, but I completed all the lessons anyway. We learned about bash, Git, HTTP protocols, and Python web servers.


### Part 03. The Backend

#### [Project 01. Logs Analysis](https://github.com/br3ndonland/udacity-fsnd03-p01-logs)

For this project, we wrote a Python program, containing SQL queries, to extract information from a database of news articles and return the results in plain text.

```
 Query 1: Most popular three articles
    Candidate is jerk, alleges rival  --  338647 views
    Bears love berries, alleges bear  --  253801 views
    Bad things gone, say good people  --  170098 views

 Query 2: Most popular authors
    Ursula La Multa  --  507594 views
    Rudolf von Treppenwitz  --  423457 views
    Anonymous Contributor  --  170098 views
    Markoff Chaney  --  84557 views

 Query 3: Days on which >1% HTTP requests returned 404 errors
    July 17, 2016  --  2.26% errors
```

I passed initial code review with no required corrections. The reviewer made some helpful suggestions, and I incorporated them into my code.


## Udacity Grow with Google program

<img src="../img/udacity-google-scholarship.png" alt="Udacity Grow with Google scholarship award" class="img-fluid" width="300px">

I was awarded a [scholarship](https://www.udacity.com/grow-with-google) from Udacity and Google. I was accepted to the intermediate web developer track to learn techniques for building progressive web apps. There is a three month challenge round, after which the top participants move on to a more advanced Mobile Web Specialist program. This program is a great next step.

I found out about the Grow with Google scholarship via Udacity's [Facebook](https://www.facebook.com/Udacity/posts/1250067568431912) and [Medium](https://medium.com/udacity/grow-with-google-50-000-new-scholarships-available-now-1aa0513430b6) posts, while on a bus to NYC for the [New York Coffee Festival](https://www.newyorkcoffeefestival.com/) in October.

[(back to top)](#top)
