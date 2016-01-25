# JSForce, Node.js, Angularjs, and Express Demo

## Overview
This demo is inspired by the MobilePack-AngularJS Demo pack released by developerforce, but instead of forcetk library, I am using JSForce which is pretty sweet. The app is very simple: it displays your org's accounts, let's you view them, and also let's you create new accounts (only the Name for now). It uses Oauth2 and single-sign on, making it part of the Salesforce experience, yet using the power of Node, Angular and Express. 

## Getting Started
Follow this link for a working demo connected to a dummy org: <a href="https://salesbrain.herokuapp.com/">SalesBrain</a>

Or if you have your own org and would like to try it out with node, just clone the respository then do 
<p> cd ...path to repository/SalesBrain </p>
<p> npm install </p>

To download all the node packages. Once you are ready, replace the oauth contents in index.js with those of your Connected App and then the command:

<p> npm start </p>

Your app should be running on <a href="http://localhost:3000/">local host<a/>. Good luck!!

#Commentary
As you look through the code, you will clearly see alot of poor design decisions, with routing being at the top of the list. However, the point of this sample was to create a quick sample while learning about jsforce and how to connect apps to Salesforce. So please, as you are navigating through the files, don't tear up my poorly structured code too much. But as I get more time I'll work it out and get another project up that is sleek and mindblowing.

## Routing
Ehhhhhhhh, my routing is done all on server-side express except for two exceptions with use angular's $window.location method to send the user to a contact detail page or back to a list. Given more time, I would have learned angular's ui-router better and how to incorporate it with an express backend. State-like routing is awesome, but who got time for that. As of now it's pretty much just sending you through a labrinth of express routes that don't make a ton of sense. But have no fear, if you use this template just scratch all that and do some sweet client side routing with angular (or use express, people seem to argue about it alot).

## Data
You could put anything in the detail page, just alter the queries for the sobject in the contact.js router. 
