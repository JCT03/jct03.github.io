---
layout: post
title: "Jekyll Styling Reflection"
author:
- Jacob Collier-Tenison
---
I found styling the blog to be a very easy process. I had experiance with both components of this lab, css and jekyll, so it was just a matter of putting them together. This process was pretty seamless, although, not perfect. 

For the colors, I decided to go with a coral background and aqua text, based on the color scheme I found [here][color-scheme]. The coral color in this color scheme was too light for my liking, however. So, I went ahead and just used the default coral in css. 

To implement this style, I changed the colors in the body class using the file designated in the [lab description][lab-description]. This worked for the most part, except it did not change the text colors in the nav bar and it only changed some of the text color in the footer. So, I went into the _layout.scss to identify the variables that controlled these text colors and I changes those in the custom-variables.scss. Doing this was relatively easy and it took care of my problem. I am still not sure how I could have changed all the colors in the style.scss file, but I am glad that I found a method that works. 

After this, I also styled images with a colored border and width constraint. I have included before and after photos of my first post below to show the difference made by just a few simple changes! 

#### Before
![OldStyle]({{"/assets/img/OldBlogStyle.png"|relative_url}})

#### After
![NewStyle]({{"/assets/img/NewBlogStyle.png"|relative_url}})

[color-scheme]: https://www.color-hex.com/color-palette/75821
[lab-description]: https://hendrix-cs.github.io/csci340/labs/jekyllmods.html