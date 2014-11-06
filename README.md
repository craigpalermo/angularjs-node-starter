AngularJS & NodeJS Starter
========
This is a blank project you can use to get started quickly with AngularJS
and a Node backend.

# Tech Used
I don't like HTML, CSS, or JavaScript, so I don't use them. I encourage you
to do the same.

This project is already set up to serve Jade, Stylus, and CoffeeScript, so
as you make changes to those files, they'll automatically be reflected as
soon as you refresh the page.


# Build Scripts
Since NodeJS middlware handles the heavy lifting for comipiling the stuff
mentioned above, the only build script you need is for compiling Jade
to HTML for AngularJS to use to populate views.

```
> grunt jade
```


# Getting Started
Run these commands to get things set up:

```
> sudo npm install
```

# Start Your Server
At this point, you should be able to run

```
> coffee server.coffee
```

If that doesn't work, install CoffeeScript globally by running and 
starting your server again.

```
> sudo npm install -g coffee-script
```

If you don't see any output in the terminal, that means the server is probably
running. Point a web browser to http://localhost:3000 and you should see words.
