Intentions Manifest & wishlist
----------

 - Mobile First playground   
 -  Modular and composable
 -  Should promote separation of concerns
 -  Should promote module/code reuse
 - Unit Testable 
 -  Buildless development
 -  Transpile friendly
 -  Multi superset ready (Es6,Typescript,traceur,coffeeScript,etc)
 - Simple
 - Super fast protoyping
 - Experiment friendly
 - Should be fairly straight forward to make it a  Chrome App Cordova,NodeWebKit,ect...
 - Editor/IDE/OS agnostic
 

HOW?
----

**Mobile first:** 

- Amount of on screen Items kept to a minimum in the single main center content area
- Single Collapsible  Main left side  Main Menu 
- optional Contextual right side,  collapsible menu
- fixed Top bar
- fixed modular functional footer

All this pretty much achieved by using [mobile-angular-u](https://github.com/mcasimir/mobile-angular-ui) alone  
While Angular-UI or plain Bootstrap could have been used , MAUI DEMO has the right layout out of the box. and with  a almost minimalist approach MAUI gets out of the way providing faster prototyping speeds.
The official Demo IMMO is only missing the chance to accentuate modularity  at file level component reuse, but clearly wasn't authors goal.

**Modular**

- angularjs 
- requirejs 

Winning combo: Trading in script tags for main config files and extra module complexity,  shifts the workflow to script first mechanics.
It Promotes  resusable angular agnostic business logic, ([systemjs](https://github.com/systemjs/systemjs), [amdefine](http://requirejs.org/docs/node.html))
Pushing single-responsibility, we will certainly end up having to too many files,while many might think this that a problem, From the development point of view this should be a good thing, think about source control, clearer intentions , broken down smaller problems. Yes we would like to have fewer files when deploying , and we can minify, concatenate, optimize the whole while thing with a couple grunt tasks for that purpose if needed be and if the prototype makes it to production.
Having too many files its also not god for the browser, too many http request, in practice, at this level and for this purpose its still not a biggy.
	- Testing setup with Karma/Mocha and Requirejs is not extremely well documented, spread all across the nternet , uncommon, with too much ceremony for my liking, ....until you get your head around , then is Ok,.

TODO: Lots of things

**Conventions:**
Capitalized file name for transpiled files, to distinguish them when looking at file system changes(you can't ignore *.js, or the path, I'm not sure about .es6.js, *.ts.js , etc ) , with the exception of definition files which are gitignored 

Minimum names, file system based  namespace,  /app/moduleName/controller.js ,/app/moduleName/module.js ,

module = angular module

Routes declared per module