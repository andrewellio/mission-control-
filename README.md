# Mission Control
[![pipeline status](https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/badges/master/pipeline.svg)](https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/-/commits/master)


## Web application
There are instructions for the web application in the README of the directory.

[Web application](https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/-/tree/master/web_application)

## Web application testing and automation
Here the wikipage explains the structure of our test cases and automation using Jest.

[Testing Web application](https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/-/wikis/Testing/JestCICD)

## Web server
This is a resource that is written in Java and uses Tomcat v6 to fetch and parse a XML HTTP URL from Openweather's API to report various weather conditions

[Web server](https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/-/tree/master/webserver_resource)
[Screenshots](https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/-/tree/master/webserver_resource/Screenshots)

## Balsamiq Interface Mockups
These are mockupsthat showcase the design an clickable protypes for the mission control software vision.

**First Iteration**
[Resource](https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/-/wikis/Interface/Balsamiq%201st%20Iteration)

## State Diagram
This aims to achieve clarity over the different states that our software program can undergo and the processes.

[State Diagram](https://drive.google.com/file/d/1_ZkzZwD_k9JGtFkdzznK4hVx9MtQip8o/view?usp=sharing)

## Wiki
[Project Wiki](https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/-/wikis/home)

## JSON parser
[JSON parser(JAVA)](https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/-/tree/master/JSONparser)

## Brief

*"The mission control will run on a laptop in the field and display data from
the rocket - such as the current software state and the current location and
altitude of the rocket. It will also need to let the rocket know when launch is
imminent so the avionics can arm the parachute ejection charges. Mission control
will also need a go/no go functionality. Integrating with the monte carlo rocket
simulation and adding local current weather conditions (primarily wind), many
simulated flights can determine probable landing locations- if these are within
the defined bounds of the landing area, the flight can proceed. The mission
control could suggest changing the launch rod angle into the wind to ensure the
rocket remains in bounds, provided the horizontal velocityat apogee is not too
high. A possible extension to the mission control would use the current wind
profile and the monte-carlo simulation to determine an upwind trajectory for the
rocket to follow to minimise it’s landing distance from the launch site."*

