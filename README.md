# [Ghosditor](https://github.com/durgesh-priyaranjan/ghosditor): Ghost Markdown Editor


### Background


[Ghost](http://ghost.org/) is the new hotness of the town. And one of the game changer aspect is its editor. A very simple, elegant and yet powerful markdown editor with realtime preview.

A lot of markdown editors are present with live preview, how is [Ghost](http://ghost.org/) editor different.
> Ghost markdown editor not just allows user to upload image, it also gives you luxury to have image placeholders. So that you can focus on writing in your flow.


**Ghosditor** is an attempt to create a similar standalone markdown editor from the open source [repo of Ghost](https://github.com/tryghost/Ghost) itself.

The original attempt to extract out editor from [Ghost]() was done by [Tim Badolato](https://github.com/timsayshey) which can be found [here](https://github.com/timsayshey/Ghost-Markdown-Editor).


### Demo

Live demo can be found [here](http://ghosditor.herokuapp.com/) with image upload and image placeholder. Its a [node.js](http://nodejs.org/) app built over [sails.js](http://sailsjs.org/).

### Getting started

```
npm install
grunt
node app.js
```

Note: you may have to install grunt-cli globally in order to run grunt. The
grunt command will run a set of tasks, including grunt copy, to set up the
server.

### Implementation notes

ghostdown.js appears to be a combination of:

* codemirror.js - CodeMirror version 3.15
* showdown.js - A javascript port of Markdown by John Fraser
* an immediately invoked function expression that does setup for the above

It looks like it is from https://github.com/timsayshey/Ghost-Markdown-Editor
which ghosditor is based on.

