# ENGR 301: Project Requirements Document
<!-- The aim of this document is to specify the requirements of the system your group is to build. The focus of a requirements document is the problem you are attempting to solve:  not a first attempt at a solution to that problem. This document should communicate clearly to the supervisor, client and course coordinator what the system you build is going to do, and what constraints it must meet while doing so. -->

<!-- The document should also demonstrate your understanding of the main analysis principles and quality guidelines, and applicable standards, using tools and notations as necessary to communicate the requirements precisely, unambiguously and clearly in a written technical document. Page specifications below are *limits not targets* and refer to the pages in the PDF generated from the markdown. Because the size of your document is necessarily limited, you should ensure that you focus your efforts on those requirements that are most important to completing a successful system: if sections are at their page limit, indicate how many items would be expected in a complete specification. -->

<!-- The ENGR 301 project proposal and requirements document should be based on the standard ISO/IEC/IEEE 29148:2011(E), primarily sections 8.4 and 9.5, plus section 9.4 for projects involving hardware and ISO 25010 SQuaRE for systemic requirements. While excerpts from the standard have been quoted within the template, to understand what is required it will be necessary to read earlier sections of the standards themselves. A supplementary treatment of requirements gathering in engineering projects may be found in [Requirements in Engineering Projects](https://victoria.rl.talis.com/items/F166DA94-DAD8-FBDB-0785-7A63C9BA3603.html?referrer=%2Flists%2F5886F297-2506-1F17-45D9-7F04CEE284EE.html%23item-F166DA94-DAD8-FBDB-0785-7A63C9BA3603) (Talis). The requirements document should contain the sections listed below, and conform to the formatting rules listed at the end of this brief. -->

<!-- All team members are expected to contribute equally to the document and list their contributions in section 7 of the document. You should work on your document in your team's GitLab repository. While collective contributions are expected to be the exception rather than the rule, if more than one team member has contributed to a particular commit then all those team member IDs should be included in the first line of the git commit message. `git blame`, `git diff`, file histories, etc. will be tools used to assess individual contributions, so everyone is encouraged to contribute individually, commit early and commit often. Any team wishing to separate individually contributed sections into a single file before collation into the single proposal document for submission is welcome to do so. -->

---

<div style="page-break-after: always;"></div>

# ENGR 301 Project 12 Project Proposal and Requirements Document

#### Elliott Andrews, Jesse Wood, Binke Xu, Alexander Saunders, Mason Yi, Marcus Rathod

## 1. Introduction

Amateur rockets are flown regularly worldwide. These rockets are typically
flown with off the shelf rocket motors with widely available propellant reloads.
These rockets often exceed the speed of sound, altitudes above 30 km are not
unheard of. These rockets are almost never controlled, they are stable due to
passive aerodynamic features.

While passively stable rockets are reasonably simple and reliable if well designed, they are susceptible to a variety of disturbances, particularly early in
flight. Unexpected winds can cause the rocket to weathercock; flexibility in the
launch tower/rail can cause railwhip, imparting a random launch angle to the
rocket; the thrust from the rocket motor is also never perfectly symmetrical.

The responsibility for this project's group is to develop software with appropriate functionality to
operate as a mission control station that runs on a laptop. 

### Client

**Contact details for our customer**

Name: Andre Geldenhuis

Email: andre.geldenhuis@vuw.ac.nz

Mattermost & Gitlab: @geldenan

**Customer introduction**

Andre has been involved in several rocket projects, as well as some past Victoria University projects. He has provided us with our MC project brief, some useful example slides and other resources to help us with our project execution. He is available for contact using the above details.

<!-- TODO
add background information here
- domain knowledge  
- 3 paragraphs
-->


### 1.1 Purpose

Mission Control's purpose for the [Rocket Project](https://ecs.wgtn.ac.nz/foswiki/pub/Courses/ENGR301_2020T1/Project/2020_Rocket_Project_info.pdf) is to display the rocket's real-time data with additional (software based) launch requirements and operations.

### 1.2 Scope

Our system should provide a rocket flight logging system to record flight data, and display this data on a graphic interface. Also, our system should provide a wireless control system to connect with the rocket.
To ensure the rocket launch is safe and under control, our system should be able to simulate the rocket flight with the intergrated similation software. This will be done before the rocket launch and display feedback data on the screen, so the mission control team can verify and confirm wether it is safe to launch the rocket or not.

<!-- TODO
a more report like flow,
rather than bullet points  
-->


### 1.3 Product overview

#### 1.3.1 Product perspective

This project aims to provide a simplified version of mission control system, this system contains the core functionality of a real mission control system, such monitoring and checking rocket states, displaying rocket data on user interface and providing rocket launch buttons, etc.
The user can understand how the mission control system works through this project. In additon the user will understand how to track the rocket throughout its flight and the process and checkes needed beforehand to launch a rocket.

<!-- TODO
- grammar checks
- more expansion
 -->

#### 1.3.2 Product functions

<!-- TODO
- use bullet points
 -->

* The mission control system should display all the data on the laptop as a graphical interface.

* The mission control system needs to integrate with the local weather conditions, simulate flight paths and can determine probable landing locations to decide if the rocket can be launched.

* Use the current wind profile and the Monte-Carlo simulation to determine an upwind trajectory for the rocket to follow to minimize its landing distance from the launch site.

* Mission control device may not have a internet connection available, so the mission control system should be able to run in the absence of an internet connection.

* Mission control software should run on any operating system.

#### 1.3.3 User characteristics   

<!-- TODO
- grammar
- multiple personas are uses to allow user characteristics to inform the design
- user technical experience / knowledge
-->

<!--One page identifying the main classes of users and their characteristics (9.5.5)-->
Our mission control system is a simplified version of real mission control center, but our system will show core function of mission control system, the user will gain experience of how mission control works and what mission control system for.
User should be familiar with interact software by command line and GUI, also our system will be able to operate on major operating systems on market, so user need know how to install and run our software on different system.

#### 1.3.4 Limitations

<!-- TODO
- spelling and grammar
- mention software limitations
  - bandwidth - software needs to operate in real-time
 -->

The rocket will perform wireless monitoring with a laptop, so the distance between the laptop and rocket may impact and have an unexpected effect on monitoring, if the rocket reaches a higher height than anticipated then the laptop may not be able to receive the signal from the transmission unit on the rocket.
The terrain may also affect the data transmission, such as a steep hill or trees/woodland. Considering this launch environment may lead to data loss or a unstable connection between the laptop and the rocket.
The bandwidth is a  important limitation since the software needs real-time data transmission to be consitent between the laptop and rocket, if the bandwith is too low between the laptop and the rocket, then the data transmission will suffer from delays.

## 2. References

<!-- TODO
- include reference to nz model rocket guidelines
 -->

References to other documents or standards. Follow the IEEE Citation  Reference scheme, available from the [IEEE website](https://www.ieee.org/) (please use the search box). (1 page, longer if required)

\[1\] “Quality Assurance,” Quality Assurance " Software Quality Attributes. [Online]. Available: http://www.qasigma.com/2008/12/software-quality-attributes.html. [Accessed: 02-May-2020].

\[2\]  “Rocket Safety,” NZ Rocketry Association. [Online]. Available: https://www.nzrocketry.org.nz/rocketry/rocket-safety. [Accessed: 18-May-2020].

\[3\] "A Guide to Dependencies, Constraints and Assumptions (Part 3): Project Assumptions", InLoox. [Online]. Available: https://www.inloox.com/company/blog/articles/a-guide-to-dependencies-constraints-and-assumptions-part-3-project-assumptions/ [Accessed: 22-May-2020]

## 3. Specific requirements  

<!-- 20 pages outlining the requirements of the system. You should apportion these pages across the following subsections to focus on the most important parts of your product. -->

### 3.1 External interfaces

<!-- See 9.5.10. for most systems this will be around one page. -->

<!-- TODO
- Spelling and Grammar
- Describe these external interfaces. Not how it will be implemented
  - Simulation Interface (XML / JSON)
  - Map Service Interface (XML Web Service)
  - Weather Service Interface  (XML Web Service)
-->

**Laptop**

A laptop will be used on site to display data from the rocket. The data displayed on the laptop will include the current software state, current location, current altitude, local weather conditions (wind) and probable landing locations.
The laptop will include further operations/functionalities which will allow additional data to be displayed on the laptop. This will include landing locations within a certain bound, a go/no go functionality and the imminence of when a
rocket is to be launched. The laptop will also allow the rocket to be integrated with openRocket which allow the mission control system to be integrated with monte-carlo integration.

**Simulation Interface**

A simulation interface will help provide an accurate representation of how a rocket flies with our integrated mission control system. The simulation interface that we will be using is called OpenRocket. OpenRocket is a software that
provides an accurate simulation of real life rocket flights. It allows the user the build and create their own rocket designs before flying them. By integrating a simulation interface, we are able to accurately assess how our mission
control system would work in the real world without having a real rocket launch. This allows us to do more testing to ensure that our system is fully working before we test it on the field.

**Map Service**

The integration of an external map service is required for the mission control system. A map service provides an accurate visual representation of the location of the rocket on a world map. This is vital for the system as this means
that we are able to use our current rocket coordinates to show where the rocket would be on a map. The mission control system requires the current location of the rocket to be displayed on the screen. A map service will display the
current location of the rocket on screen to the user of the mission control system. Other vital pieces of information, such as the current flight path of the rocket and the approximate landing location, will also be shown on screen
through the map service.

**Weather Service Interface**

For the mission control system to work correctly, the integration of an external weather service interface is required. An external weather service interface provides information about the current local weather conditions that we are
able to use to assess different situations throughout a rocket's flight. The system requires the local weather conditions for multiple uses, specifically the go/no go functionality and to help control the rocket mid flight. The main
use for the external weather service interface is the go/no go functionality, the local weather conditions are required to allow the system to assess the weather conditions are suitable for the rocket to proceed with launching or not.
Mid flight, the weather conditions are required to provide data such as the current wind speeds to help determine the current flight path of the rocket.


### 3.2 Functions

The primary function for our product is to serve as a diagnostics tool, providing data before and during a flight. This data from the rocket allows the user to analyse the flight of the rocket, checking that everything is working as
it should. For our client, the main use cases for our product would be: Launch, and mid-flight analysis.

#### Use cases

**Launch**

During the launch process, our client will be primarily using the product to notify whether the launch is imminent. This notifying is used to allow the avionics team to arm the parachute ejection charges. The primary use for the mission
control system during launch is to assure that every aspect of the rocket is ready for launch.

**Go/No Go Functionality**

Our mission control system has a go/no go funcitonality. This means that the system will analyse the current launch situation and our client will use this to assess whether the rocket should launch or not. The initial check for our
system will be to check the hardware of the rocket is all working properly. This is essential for the launch process of the rocket as the system will analyse all hardware, ensuring everything is working as intended before launch.


Another check that the go/no go functionality will make is for the weather before a launch. The weather must be assessed before the launch of a rocket to see whether there are any chance of the rocket flight going wrong. The main
weather components that are assessed for the go/no go functionality are the cloud coverage and wind speed.

The cloud coverage is an essential component of the assessment for the potential launch of a rocket. The weather needs to be relatively clear in order for a weather conditions to be viable to launch. This is because if the clouds
are too thick, it can create atmospheric temperatures that are too cold for a rocket to operate in.

Arguably the most important weather component that can affect a rocket's flight are the wind speeds of the surrounding area for the rocket launch. When wind speeds are too high for a rocket, it is able to put the rocket off course.
By putting the rocket off course, this means that the landing process is hugely affected and this already requires much precision.


### 3.3 Usability Requirements

####Goal

The goal is to create a system that can control the flight of a rocket, ensuring stability and safe flight. It must also be able to display real time data from the rocket on a laptop such as height, location etc.

####Scenarios

**Launch**

Before launch, the mission control system is required to notify when the launch is imminent so the avionics can arm the parachute ejection charges.

**Diagnostics**

During flight, the mission control system must run on a laptop in the field and display data from the rocket.

**Should work in the absence of an internet connection**

The site of launch will most likely be in an area where there will be no available internet connection. To make the mission control system effective for the user (so that the user doesn’t have to personally provide a internet connection),
it will be a requirement for the mission control system to work without the use of an internet connection.


**Display data using a coherent method**

When the data is displayed to the user, we want to make sure that it is displayed in a way that's understandable and easy to look at from the point of view of the user. We assume that the user of the mission control system will have some knowledge
of rockets, but that doesn't allow us to create a system that will make the user do unecessary operations to obtain a specific piece of data. This is why as opposed to displaying data in a command line (something which would be easier to develop),
creating a user interface (UI) will allow the data to be displayed in a more coherent manner.


### 3.4 Performance requirements

<!-- See 9.5.13. for most systems this will be around one page. Hardware projects also see section 9.4.6. -->

<!-- TODO
- section still needs to be done  
- hardware related example:
  - radio communication distance (500m, 1km, 2km, etc ...)
  - latency (delay between the software and the rocket)
  - bandwidth
-->

Performance requirements help to define the software that displays data from the rocket, the communication needed for the go/no go functinality and recieving/sending simulation data. 

When the rocket is first turned on, the software should be able to connect to the rocket's internal hardware data components from the maximum distance calculated by the avionics and simulation teams. Data retrived should include at least, windspeed, location co-ordinates and velocity. The data units will need to be consistent with the simulation software, and used to predict the landing locations defined by the simulation team. This data, when reported to the display, should be recorded in a logging format with the timestamp and a readable format (or file format which can be parsed). The display will need to show the data consitently, updated approximatley at least every second or as otherwise calculated. Such as the appropriate calulations for latency (the delay between the software and rocket) will need to be taken into consideration. Overall the performace requirments for the software while displaying the data should consistent, accurate and recorded/logged efficently.

The go/no go functionality should be incorporated into the software, preferaby within the same software package. The functionality needs to be programmed into a requirment checklist. This will involve gathering a report about the rocket and report it's status for a 'go' or 'no go.' The report will result in a success or a fail (fail will report which checks failed and why if applicable.) Overall the performace requirments for this functionality needs to complete the go/no go checklist at least under a minute and can be run mutiple times.

Sending and reciving data should be intergrated within the software package and the monte-carlo simulation (e.g OpenRocket). When first retriving the intial data, this should be sent automatically to be simulated (no manual data enterning is ideal). The simulation data received back would also be incorporated into the go/no go checklist. In additon with sending inital rocket data, current weather conditions should be fetched within a five minute time frame. This will ensure the most up to date data is used and will increase the accuracy of the simulations. Overall the performance requirements for the communication data is to be accurate and automated.


### 3.5 Logical database requirements

<!-- See 9.5.14. for most systems, a focus on d) and e) is appropriate, such as an object-oriented domain analysis. You should provide an overview domain model (e.g.  a UML class diagram of approximately ten classes) and write a brief description of the responsibilities of each class in the model (3 pages). -->

<!-- You should use right tools, preferabley PlantUML, to draw your URL diagrams which can be easily embedded into a Markdown file (PlantUML is also supported by GitLab and Foswiki). -->

<!-- TODO
- Put Sandy's UML diagram's in this section.
- Explain each diagram below.
-->

### 3.6 Design constraints

The information provided by external interfaces limits the design. The simulation, rocket and weather service are the external interfaces. These each provides our system with information. Which our system then represents in a graphical interface. Our software has to communicate with _any_ simulation or rocket system. To do so, we implement a generic interface.

The system requires radio communication through LoRa. We use to communicate with the rocket. LoRa is a low-power wide-area network protocol. LoRa offers wireless technology that offers a long-range. Our system must process the incoming transmissions in real-time. Our GUI must be able to represent the real-time nature of these transmissions. Updating the current view at regular frequencies.

The system interacts with data provided by external simulation software. We parse this through a generic data-interchange format. Examples include XML or JSON. JSON is a Javascript Object Notation. It is straightforward for both machines and humans to read and write (we discuss XML next.) The system can process the chosen format.


### 3.7 Nonfunctional system attributes

We list the important non-functional system attributes below. They are in order of their priority \[1\].

#### Reliability
First the quality attribute of _Reliability_. It is the probability that the system fulfils its function. We can calculate the error rate. That is the frequency of inputs that produce an error compared to the total input frequency. The mission control system relies on input from sensors. GPS, altimeters, accelerators, barometer, and radio transmission, to name a few. Each of these sensors has a certain degree of both precision and accuracy. For example, GPS coordinates can only be accurate to +/- XYZ degrees of precision. The sensors on the rocket that provide information to our mission control system. They also operate at different frequencies. The system must be capable to check for redundancy. It must also provide error handling. Which leads to our next quality attribute.

#### Robustness
_Robustness_. The effects of operational mistakes, erroneous input data and hardware errors. Take the following hypothetical situation. GPS readings are changing, whereas the accelerometer readings say the rocket is stationary. The system has "sanity checks", to maintain reliability. Operational mistakes like an accidental launch should be reversible. While it is not within the scope of our system to fix hardware errors. We design it in such a way to check for hardware errors. In some situations, hardware errors have drastic impacts. We may prevent actions like launches from happening. We include these pre-flight checks with the "go/no go" functionality. Monitoring important factors like the battery temperature, voltage and current. Checking that all sensors are operational and transmitting data to our system. These are all practice steps that we can take to ensure a robust system.

#### Portability
_Portability_ represents an important attribute for our system. This is because it is an explicit requirement. The software must run on a laptop. Presumably at the launch site, or at least within the radio frequency range. This laptop is not team property. We can deploy the system on _any_ laptop. The software has to be hardware-agnostic; it must run on any operating system. This effects the chosen language and development framework. The framework and language we chose must support CI/CD. Through tests, we build the system on another machine. Through an integrated pipeline.

#### Correctness
The _correctness_ is another important quality attribute. Does the code meet its specifications? We use the goal-directed design and agile development to ensure this. The goal-directed design relies on the requirements definition and business objectives. We start with the requirements of the customer. We derive all the predominant aspects of the design from those requirements. Nothing more, nothing less. Also through the agile development process, we involve the customer in the process. We have constant feedback and throughput from the client. So we can stay on course with their desired trajectory.

#### Efficiency
_Efficiency_ makes the system a practicable solution. The systems ability to use its resources to their capacity. Despite all the bells and whistles, our system must operate in real-time. If not our system is redundant. Instead, we would store the information on the rocket and then retrieve it afterwards. So the interface must run with minimal overhead. Also, it must deliver all the necessary functionality. The 80/20 rule is applicable here. 20% of its features produce 80% of the output. We develop a system that meets the requirements. It processes the information quickly. Then display it in the simplest and most readable format. It is important here to remove excise.

#### Learnability
_Learnability_ depends on two things. The design on the interfaces; and, the clarity and simplicity of the user instructions. We meet the users' personas goals and business objectives. That's why we have chosen goal-oriented design. We use user personas and context scenarios to construct the requirements definition. That requirements definition is the base of the design framework. The system will have the user personas goals at the forefront of its design. An important user personas experience goals is _ease of use_. The goal-oriented design ensures the interface is easy to learn.

#### Maintainability
We derive _Maintainability_ from other attributes. _Readability_, _Extensibility_ and _Testability_. We discuss each of these attributes in detail later. A maintainable system is suitable for debugging, modification and extension. Given the size of the teams for this project, the system must be maintainable. Otherwise, the project will devolve into a monolith. With any future changes showing diminishing returns for the product.


#### Readability
_Readability_ depends on a variety of factors. These include
- the form of representation
- programming style
- consistency
- readability of the implementation of programming languages
- structureness of the system
- the quality of the documentation
- tools available for inspection

The programming style of the project will follow standard design principles and patterns. With a focus on convention over configuration. Given the system in a user interface. We adopt the MVC framework. That is the model, view, controller. We use interfaces for all communication with external systems. For example; we have a Weather Service, Map Service, and Simulation interfaces.

To ensure the programming languages are readable, we use linting. A predefined style convention for a programming language. We integrate linting into the automated pipelines. If the code does not meet the style guidelines, the pipeline fails. This ensures that all we write production code using the same conventions. This maintains the readability of the programming languages code.

Quality documentation for the entire code base is mandatory. The entire team reviews each of the merge requests before approving them. We review the functionality and documentation of the code. The contributor of the issue explains what the contribution does. We check if the documentation is easy to understand. Or if it even exists. If not the team does not approve the request. We revise the documentation and then reassess later. This process ensures that all production code is well documented.

We use a variety of tools can be for inspection of the codebase. The automated pipeline provides test reports. They describe coverage, static analysis, and individual results. The Gitlabs version control system allows us to view the history of the project. We keep every version of the system. We can view each iteration on the repository. Any user can download and open the repository on an IDE of their choice with the `git clone` command. The project is open source. We use tools available to anyone. So there is no paywall required to inspect all aspects of the project.

#### Testability
This ties into the _testability_. This is dependent on the modularity and structuredness of the system. We can ensure the system is testable. Through thorough architecture planning and following design patterns. We can also reduce coupling and increase modularity. We separate it into modular components using abstractions and interfaces. This avoids the monolithic spaghetti code. The system employs unit testing and aims for high coverage. We run these tests on each commit, through an automated pipeline. These tests will involve linting, static analysis, unit tests and integration tests.

#### Extensibility
_Extensibility_ is how easy it is to refactor the codebase. Without causing any side effects. This depends on the:
- structuredness of the system
- possibilities that implementation language provides for this purpose
- readability
- availability of comprehensible program documentation

### 3.8 Physical and Environmental Requirements

**Operating Systems**

The ability to run the mission control system from any different operating system is an essential requirement for our product. This is because the system must be able to run on any type of operating system that the user may have.

**Portability**

Similar to operating systems, it is necessary that our mission control system is able to be run from any type of laptop/computer. Our mission control system must be portable as our client may choose to use the system on multiple
devices and such.

**CAA / Local council guidelines**

Our mission control system is required to follow the Civil Aviation Authority guidelines. Part 101 of the regulations specifies the rules for flying unmanned aircrafts, and more specifically includes rockets which is relevant to our project.

Subpart D, 101.155 of CAA's Part 101 rules state that:
- A person shall not operate a rocket on or within 4 km of an aerodrome boundary.
- A person shall not operate a rocket between 4 and 8 km of an aerodrome boundary above 400 feet AGL.

Subpart D, 101.157 of CAA's Part 101 rules state that:
- A person shall not operate a rocket at any altitude where: there are clouds or obscuring phenomena of more than foureighths coverage, or the horizontal visibility is less than 8 km.
- A person shall not operate a rocket into cloud.


### 3.9 Supporting information

<!-- see 9.5.19. -->

<!-- TODO
- reference to NZ model rocketry guidelines
- laws surrounding model rockets
- CAA guidelines
 -->

## 4. Verification
<!--
3 pages outlining;
how you will verify that the product meets the most important specific requirements.
The format of this section should parallel section 3 of your document (see 9.5.18).
Wherever possible (especially systemic requirements) you should indicate testable acceptance criteria.
-->
#### 4.1 External Interfaces

<!-- TODO
- Laptop
  - propriety software requires to run the project
  - specific releases of browsers required to use react
- Weather
  - internet connection required for this point
- Simulation
  - valid XML / JSON files parsed
 -->

#### 4.2 Functions

<!-- TODO
Process:
  User personas -> Context Scenarios and Goals -> Requirements Definition -> Testing Framework

Our testing framework covers what we need.
  - Tesing framework is integrated into our CI / CD
  - Each branch must pass all of the requirements tests, before it can be pushed to the master branch
  - Each tests verifies that a requirement has been met
  - We write the tests first, then the production code which provides that functionality
  - generate test coverage reports, e.g., 80% of the class XYZ has been tested
-->

#### 4.3 Usability Requirements

In order to achieve the usability requirement, the mission control software needs to run on any operating system, also it should not require any installation or internet connection. The software should have a graphicical interface to display data, it should also have buttons to make the user interaction with the mission control software easier.
All buttons and graphical interfaces should be easy to understand by the user, such as buttons and should show text on it. Ths will help to show the function of this button, and the graphical area should also have a label to show what data is displayed in this area.
As long as the user can easily understand how to use this software the usuability requirement is met.

#### 4.4 Performance Requirements

In order to achieve the performace requirment, the mission control software needs to be able to store and review logs from the data displayed, go/no go futionality checks and data from simulations run. These logs that have been stored will help verify the performace requirements for the mission control software. Verification in particular will confirm wether not the performace of a process is obsevred to be in a timely, efficent and conistent manner. 

A process may be pulled from the stored logs to be futher reviewed if it fails to perform at its expected level, as defined in section 3.4. The process that this review will take, will be:

*  What went wrong
*  Why it went wrong
*  Fixes/issues that need to be implemented
*  Perform these fixes
*  Test the process again

These steps will make sure that the process has been reviewed, and can now be verified.

#### 4.5 Domain Model Requirements

<!-- TODO
- generate UML diagrams from codebase and compare it to the original UML diagrams
 -->

#### 4.6 Design Constraints

<!-- TODO
Usability tests
- try different resolutions and aspect ratios
- try different browsers
- make sure the design is consistent different platforms
 -->

The verification discussed refers to the design constraints mentioned in 3.6. We utilize mock data in our testing framework to verify the functionality. This includes mock data from a rocket, weather service and simulation.

We employ mock LoRa data in our integration tests. We base the mock data of transmissions sent by rockets in previous launches. The testing framework accurately simulates that same rocket launch again. It transmits that data to the Mission Control System at the same frequency. The testing framework verifies that the data parsed by the system is the same as its original input.

To verify the weather service interface we employ mock data. We store an XML response from the weather service. The testing framework parses this mock data through the system. Next, we compare the parsed output to its original input. To check for irregularities.

Should the simulation team choose JSON. We ask the simulation teams to provide us with mock output data. This is data that their system generates in a data-interchange format. The testing framework parses mock data from simulation teams. Once more, we compare the parsed output from our system to the original input. Checking for possible discrepancies between the two.

#### 4.7 Software System Attributes
<!-- TODO
- update to match 3.7
- testing framework
- test driven development
- code coverage reports
- linting
-->
The verification discussed refers to the software system attributes in 3.6. Again, we list the important non-functional system attributes below. They are in order of their priority \[1\].

#### Reliability
We verify the _reliability_ of the system can through the testing framework. We add error-prone or nonsensical input to the mock data. Through integration testing, we observe how the system responds to this data. The system produces undesirable side effects because of error-prone data. This shows us where we need redundancy checks and sanitisation of external input. We improve the system to handle each test using error-prone data. Through this process, we can verify and improve the reliability of the system.

#### Robustness
The testing framework verifies the _robustness_ of the system. Take each of the probable operational mistakes, erroneous input data and hardware errors. We have a test case that demonstrates the scenario. And, and all the probable variations. Through test-driven development (TDD), we write a test for what we need, not what we expect. Each of these tests exposes unwarranted side effects in the system. We improve the system to become robust to these edge-case scenarios. These tests still stand in place. All future changes during the development also have to withstand these errors.

#### Portability
We verify the _portability_ of the system using our automated pipeline. We run our build and test pipes on different operating systems. We can do these using matrices of virtual machines. Each running different operating systems and their respective versions. Furthermore, the team develops the system on the major different operating systems. We check in-person that the current version of the build is running on everyone's machine. This provides peace of mind but by no means a replacement to the automated pipeline.

#### Correctness
We verify the _correctness_ of the system through the testing framework. We follow the goal-directed design process and test-driven development. Our tests verify what we need, not what we expect. We derive the functionality verified by each test from the requirements definition. We construct the requirements definition from the customer's specifications. It is the primary focus of the testing framework to prove that the system does what it needs to. We run these tests after every iteration of the development. This ensures new changes do not have unintended side effects. Every iteration will meet the system requirements.

#### Efficiency
We verify the _efficiency_ of the system through test-driven development. We mentioned before, we write tests for what we need. We specify these needs in the requirements definition. Then we write the production code to pass these tests. And only those tests. So if a test does not exist for a feature. We will not develop code for it. If it is not a requirement of the system, it will not exist. This follows the goal-directed design process. As developers, we do not let our _cool_ features dilute the vision for the product. We verify the efficiency. We track the delay between external interfaces transmissions and our system.

#### Learnability
We can verify the _learnability_ through prototype testing and thorough documentation procedures. We construct a prototype of the GUI. We test on users who have no previous experience without system. We ask them to complete tasks along with the key path scenarios. The tests observe the users expectations of the system. They verify the usability of the interface. We can verify the learnability of the system. To do this we provide thorough documentation of the code. This includes installation, testing and development instructions for any operating system. As well as a comprehensive explanation for each method and class. We use the wiki to provide domain knowledge and justification behind design decisions. Take, for example, the review of a user story. The team assesses the quality of documentation provided for a code contribution. If members of the team don't grasp what the code does from its documentation. We will revise until we do follow it. At that point, we add it to the master branch.

#### Maintainability
We can verify the _maintainability_ of the system through the testing framework. The testing framework provides an extensive reproducible capability for debugging. Gitlab issue boards provide a structured framework for documenting these bugs. Our system is open source. We design the system to be modifiable and extensible. We can verify this through analysing UML diagrams generated from production code. Here we can view the coupling, cohesion and modularity of the code. Comparing the actual system architecture to the UML diagrams, we had planned.

#### Readability
The _readability_ of the system depends on a variety of attributes discussed in 3.7. We can verify the MVC framework. By comparing UML generated from production code to our original UML diagrams. We verify the programming style through linting checks in the automated pipeline. These ensure we write each commit containing production code in the same style. For example; indentation style, the format of methods, commenting style, etc. We verify redundancy in the code by adding static analysis to the automated pipeline. This checks for parts of code we can simplify or could cause unintended side effects. Removing redundant code makes the production code easier to understand. We verify when we introduced changed. Through the history of the repository stored with VCS. This makes it easy to see where we introduced problematic changes and revert them.

#### Testability
We use test-driven development. This means that for all functionality, there is a test that verifies it. Our automated pipeline performs these tests before we merge any branch with master. We additionally provide integration tests. These employ mock data to mimic the external interfaces. The testing framework and VCS pipeline verify that our system is _testable_.

#### Extensibility
We specify interfaces to communicate between separate modules. This allows the testing framework to verify components work through integration testing. We steam mock data through these interfaces. This checks if each component works as intended. This is how we verify that the system is _extensible_.

#### 4.8 Physical and Environmental Requirements

<!-- TODO
- automated pipelines checks system can run on another machine
- we can check it runs on multiple other machines
- go / no go functionality will take CAA guidelines into consideration
- links to relevant documents on the site
- Perhaps a EULA - or suggestions for new users
 -->

## 5. Development schedule.

### 5.1 Schedule

**Architectural Prototype**

The Architectural Prototype and the supporting Architecture Design document is currently scheduled to be completed by the end of June 2020. The approximate aim for a date completion is the 15th of June.

**Minimum Viable Product**

The Minimial Viable Product is currently scheduled to be near the beginning of July (end of Trimester 1), but may be delayed until approximatley the 13th of July (start of Trimester 2).

**Further releases**

The Final Prototype will be completed by the end of October (approximatley by the 15th) and refined/tested until the end of November (approximatley the day before the launch)

More details for the Project Schedule can be seen on the [Project Charter](https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/-/wikis/Project%20Charter).


### 5.2 Budget

Is it assumed that MC will not need to use any funds from the project budget.
More explanation for this can be found in the [Project Charter](https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/-/wikis/Project-charter) budget information.

### 5.3 Risks

| Risk | Type | Likelihood | Impact | Mitigation Strategies |
| ------ | ------ | ------ | ------ | ------ |
| Failure to produce Mission Control software by launch date | Practical/deliverable | Even (subject to change) | Low | Consistent retrospectives and sprints should indicate a long term plan to prevent project fallout. Some deliverable or prototype should be produced, even if the resulting product is not functional yet. |
| Unexpected Univeristy shutdown/course changes | Operations | Very unlikely | High | Remain in contact with primary channel of communication; Mattermost for announcments related to course or university changes. Concerns to be taken up with class reps, tutors, lecturer, course co-ordinator or ECS dean. Follow any given instructions accordingly. Prepare for any temporary project pauses or overall termination. |
| Laptop battery dies and/or software fails to run | Technical | Unlikely (preperation/testing dependent) | High | With regards to the battery, if available bring a secondary battery. Checks before hand should take place for battery charge levels. If the software fails to run, have several packages with troubleshooting options (i.e. compatability modes). It also should be considered to take a secondary laptop which has been tested. |
| Location of Mission Control Station | Locational/Enviromental | Very unlikely | Low | Mission Control Station should be reasonably mobile to allow a approximate radius range of where the rocket may land. Mission Control should not be placed near the launchpad or inside the probable landing locations. Range testing and data transmission should ensure that the data can be recieved from the rocket at a safe distance. |
| Weather conditions | Environmental | Even (subject to change) | High | If predicted weather conditions are unfavourable on the day, there should be a postponement day scheduled, if applicable. If there is a sudden weather change, the resources taken to travel to launch site should be as minimal as possible, to allow a launch retry on the postponement day. |
| Rocket launch injury | Safety & health | Very unlikely | Very high | Following the strict safety and health requirements, the likelihood of this risk should remain as low as possible. Launch site should be secured and all operations should pass the go functionality for a safe launch. |
| Rocket in-flight injury | Safety & health | Very unlikely | Very high | Following the strict safety and health requirements, the likelihood of this risk should remain as low as possible. Rocket flight should approximately follow simulation predictions and data should be received consistently, including flight time, max height and max velocity. |
| Rocket return injury | Safety & health | Very unlikely | Very high | Following the strict safety and health requirements, the likelihood of this risk should remain as low as possible. Various landing mitigations should be in place. The parachute with air friction and the probable landing zone. The parachutes should have various measures and testing to keep the deployment at a high probability sucess level. In additon, everyone is well distanced from the landing zone area. |
| Rocket loses communication within flight | Technical | High | Medium | Testingthe cabalility of various rocket ranges, turbulance simulations and height distance (if possible) should decrease the chances of communication loss. Exception handling/logs should programmed to report when, how and what error occurred durining rocket being in-flight. |
| Rocket refuses communication before launch | Technical | High | Medium | If possible, data should have the capability to be run offline. If other teams and requirements allow this, there may be a bypass method for real-time data and other laterations with the go/no go assessment to ensure health and saftey requirements are still upheld. |

For more information about the health and safety risks outlined here, follow the link in section 5.4 below

### 5.4 Health and Safety

<!-- TODO
- add link to health and safety document
-->

Link to the document highlighting the health and safety apsects of this project: 

https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/-/blob/master/health_and_safety/heatlh_and_safety.md 

We will follow the following website [2] as a guide to conduct procedures to make sure that person(s) associated with this project stays safe from risks highlighted in the health_and_safety.md (the link above). More information found in the link above.

<!-- If the project will involve any work outside the ECS laboratories, i.e. off-campus activities, these should be included here.

Document here project requirements for Health and Safety. All teams must state in this section:

1. How teams will manage computer-related risks such as Occupational Over Use, Cable management, etc.  

2. Whether project work requires work or testing at any external (off-campus) workplaces/sites. If so, state the team's plans for receiving a Health and Safety induction for the external workplaces/sites. If the team has already received such an induction, state the date it was received.

3. Whether project work requires the team test with human or animal subjects? If so, explain why there is no option but for the team to perform this testing, and state the team's plans for receiving Ethics Approval _prior_ to testing.

Also document in this section any additional discussions with the School Safety Officer regarding Health and Safety risks. Give any further information on relevant health and safety regulations, risks, and mitigations, etc.
-->

#### 5.4.1 Safety Plans

<!-- TODO
Mention any relevant safety plans
- Due to current circumstances this is not currently relevant
- we are not likely to launch this trimester
- closer to the time, when deployed we expect our software to be used in parallel with rocket launches
- A Launch plan will be developed before any launches take place
 -->

<!-- Safety Plans may be required for some projects, depending on project requirements. Safety Plan templates are available on the course Health & Safety page. Two questions all teams must answer are:

**Do project requirements involve anything that can cause serious harm or death?**  
Examples: building/modifying devices using voltages > 60 V, chemicals, large moving machinery, flying devices, bodies of water.

If so, you will have to write a separate Safety Plan as part of project requirements, and the Safety Plan must be referenced in this section. For health and safety risks involving serious harm or death, you must first contact the School Safety Officer and Course Coordinator first to discuss the Safety Plan and project requirements.

**Do project requirements involve anything that can cause harm or injury?**  
Examples: building/modifying things with voltages <= 60V, small moving machinery, wearable devices.

If so, you will have to write a separate Safety Plan as part of project requirements, and the Safety Plan must be referenced in this section. For health and safety risks involving harm or injury, you should write a draft of the Safety Plan before contacting the School Safety Officer and Course Coordinator to discuss the Safety Plan and project requirements.

If a safety plan is required, list in this section the date the School Safety officer accepted your Health and Safety plan (if accepted by submission date).

_If the project is purely software and requires no contact risks involving physical harm, then state "Project requirements do not involve risk of death, serious harm, harm or injury." in this section._
-->

## 6. Appendices
### 6.1 Assumptions and dependencies

Below is a list of the assumptions for this project listed in ascending priority order \[3\]:

- Level 2 lifted: The current lockdown level will be lifted as some point making it safe for practical applications of the software
- Performance of developing equipment: the team has access to all necessary developing hardware and software they need
- Human resource availability: All key project team members are available and have the necessary skills and knowledge to work on the project.
- Scheduling accuracy: The set deadlines and milestones are achievable and the project can be finished on time.
- Budget availability: The determined budget is accurate and covers all project expenses.
- ECS support: we will have the support and buy-in from the customer and tutor, who will back you up when issues arise.


### 6.2 Acronyms and abbreviations

- **MC** or **MCS** (Mission Control or Mission Control System/Software): Reference to Mission Control's part in the project (our team's part).
- **DD**: Test-driven development 
- **CAA**: Civil Aviation Authority
- **IEEE**: The Institute of Electrical and Electronics Engineers
- **JSON**: JSON (JavaScript Object Notation) is a lightweight data-interchange format
- **LoRa**:  low-power wide-area network protocol
- **UML** The Unified Modeling Language (UML)
- **XML**: Extensible Markup Language (XML) is a markup language


## 7. Contributions

<!-- A one page statement of contributions, including a list of each member of the group and what they contributed to this document. -->


| Team Member | Section Contributions |
| ------ | ------ |
| Elliott Andrews | 1.1, 5.1, 5.2, 5.3, 6.2, 3.4, 4.4 |
| Binke Xu | 1.2, 1.3.1, 1.3.2, 1.3.4, 1.3.3, 4.3 |
| Sandy (Alexander Saunders) | 5.3 |
| Jesse Wood | 3.6, 3.7, 3.8, 4.6, 4.7, 6.1, 6.2 |
| Marcus Rathod | 3.1, 3.3, 5.4 |
| Mason Yi | 3.1, 3.2, 3.3, 3.8 |

---

<!--  
## Formatting Rules

 * Write your document using [Markdown](https://gitlab.ecs.vuw.ac.nz/help/user/markdown#gitlab-flavored-markdown-gfm) and ensure you commit your work to your team's GitLab repository.
 * Major sections should be separated by a horizontal rule.


## Assessment  

The goal of a requirements document is the problem you are attempting to solve:  not a first attempt at a solution to that problem. The most important factor in the assessmernt of the document is how will it meet that goal. The document will be assessed for both presentation and content.

The presentation will be based on how easy it is to read, correct spelling, grammar, punctuation, clear diagrams, and so on.

The content will be assessed according to its clarity, consistency, relevance, critical engagement and a demonstrated understanding of the material in the course. We look for evidence these traits are represented and assess the level of performance against these traits. While being comprehensive and easy to understand, this document must be reasonably concise too. You will be affected negatively by writing a report with too many pages (far more than what has been suggested for each section above).

We aim to evaluate ENGR301 documents and projects as if they were real projects rather than academic exercises &mdash; especially as they are real projects with real clients. The best way to get a good mark in a document is to do the right thing for your project, your client, and your team. We encourage you to raise questions with your tutor or course staff, as soon as possible, so you can incorporate their feedback into your work.

---
-->
