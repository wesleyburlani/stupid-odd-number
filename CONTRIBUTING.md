# Contributing
> Contributing guidelines and orientations

Since this project was developed just to prove my skills, there is no reason to write this file, but I think that I can use it to explain about the code architeture.

So..

The code was separated in two main folders: `src` and `test`, where the first one has the source files to run the application and the second one has the unit test files. Inside of these folders, there are two foldes: `core` and `main` that has the follwing intention:

* core: contains development resources that could be used out of the application domain
* main: contains the resources about the application domain using explicit DDD folder structure without `infrastructure` because that one was unecessary.



