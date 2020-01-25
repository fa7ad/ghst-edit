# [Ghosditor](https://github.com/durgesh-priyaranjan/ghosditor): Ghost Markdown Editor


### Background

This Markdown editor is based on an early version of the popular
[Ghost](http://ghost.org/) CMS. It is a simple Markdown editor
with realtime preview. It supports image file upload and placeholders
for images.

**Ghosditor** is an attempt to create a similar standalone markdown editor from the open source [repo of Ghost](https://github.com/tryghost/Ghost) itself.

Its a [node.js](http://nodejs.org/) app
built over [sails.js](http://sailsjs.org/).

This implementation of ghosditor is based on [the work of
durgesh-priyaranjan](https://github.com/durgesh-priyaranjan/ghosditor). All 
dependencies have been updated to current, as of Jan 2020. 

The original attempt to extract out editor from [Ghost]() was done by [Tim Badolato](https://github.com/timsayshey) which can be found [here](https://github.com/timsayshey/Ghost-Markdown-Editor).


### Demo

Live demo of the original implementation can be found
[here](http://ghosditor.herokuapp.com/).


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

