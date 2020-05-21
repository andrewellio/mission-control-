# ENGR 301: Project Requirements Document
<!-- The aim of this document is to specify the requirements of the system your group is to build. The focus of a requirements document is the problem you are attempting to solve:  not a first attempt at a solution to that problem. This document should communicate clearly to the supervisor, client and course coordinator what the system you build is going to do, and what constraints it must meet while doing so. -->

<!-- The document should also demonstrate your understanding of the main analysis principles and quality guidelines, and applicable standards, using tools and notations as necessary to communicate the requirements precisely, unambiguously and clearly in a written technical document. Page specifications below are *limits not targets* and refer to the pages in the PDF generated from the markdown. Because the size of your document is necessarily limited, you should ensure that you focus your efforts on those requirements that are most important to completing a successful system: if sections are at their page limit, indicate how many items would be expected in a complete specification. -->

<!-- The ENGR 301 project proposal and requirements document should be based on the standard ISO/IEC/IEEE 29148:2011(E), primarily sections 8.4 and 9.5, plus section 9.4 for projects involving hardware and ISO 25010 SQuaRE for systemic requirements. While excerpts from the standard have been quoted within the template, to understand what is required it will be necessary to read earlier sections of the standards themselves. A supplementary treatment of requirements gathering in engineering projects may be found in [Requirements in Engineering Projects](https://victoria.rl.talis.com/items/F166DA94-DAD8-FBDB-0785-7A63C9BA3603.html?referrer=%2Flists%2F5886F297-2506-1F17-45D9-7F04CEE284EE.html%23item-F166DA94-DAD8-FBDB-0785-7A63C9BA3603) (Talis). The requirements document should contain the sections listed below, and conform to the formatting rules listed at the end of this brief. -->

<!-- All team members are expected to contribute equally to the document and list their contributions in section 7 of the document. You should work on your document in your team's GitLab repository. While collective contributions are expected to be the exception rather than the rule, if more than one team member has contributed to a particular commit then all those team member IDs should be included in the first line of the git commit message. `git blame`, `git diff`, file histories, etc. will be tools used to assess individual contributions, so everyone is encouraged to contribute individually, commit early and commit often. Any team wishing to separate individually contributed sections into a single file before collation into the single proposal document for submission is welcome to do so. -->

---

<div style="page-break-after: always;"></div>

# ENGR 301 Project *NN* Project Proposal and Requirements Document
#### Author list, a comma-separated list of the names of each member of the team.

## 1. Introduction

<!-- One page overall introduction including sections 1.1 and 1.2. -->

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

\[2\] "Gyrogliders and Parasails,Unmanned Aircraft (including Balloons), Kites, and Rockets – Operating Rules". [Online]. Available: https://www.aviation.govt.nz/assets/rules/consolidations/Part_101_Consolidation.pdf. [Accessed: 21-May-2020].

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

<!-- TODO
- At least 5 use cases
  - Go / No Go
    - Hardware state check
      - all sensors working
      - input seams sensible  
      - Simulation
    - Weather check
      - cloud coverage
      - wind speed
  - Launch
    - ready for launch
    - launch
  - Perhaps include stakeholder requirements to support the use cases.
-->

This is typically the longest subsection in the document. List up to fifty use cases (in order of priority for development), and for at least top ten focal use cases, write a short goal statement and use case body (up to seven pages).  Identify the use cases that comprise a minimum viable product.

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


**Mid-flight analysis**

The mid-flight portion is where the main use will be for our product. During flight, our product will display real time data from the rocket to a laptop in the field. This data will be used by our client to analyse the rocket's flight
and help diagnose the current state/s of the rocket flight should there be any issues.


### 3.3 Usability Requirements
<!-- See 9.5.12. for most systems this will be around one page. -->

> **9.5.12 Usability requirements**<br>
> Define usability (quality in use) requirements. Usability requirements and objectives for the software system include measurable effectiveness, efficiency, and satisfaction criteria in specific contexts of use.

<!-- TODO  
<<<<<<< project_requirement/project-requirement.md
=======
- bold the titles for clarity
- formatting issues
>>>>>>> project_requirement/project-requirement.md
- mention personas
  i.e., usability requirements are derived from user personas goals and context scenarios
- spelling and grammar: aim for clarity - unecessary/unnecessary
-->

#### Goal

The goal is to create a system that can control the flight of a rocket, ensuring stability and safe flight. The system must also be able to display real time data from the rocket on a laptop such as height, location etc.


#### Scenarios

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

> **9.5.13 Performance requirements** <br>
> Specify both the static and the dynamic numerical requirements placed on the software or on human interaction with the software as a whole.
>
> Static numerical requirements may include the following:
>
> a) The number of terminals to be supported;  
> b) The number of simultaneous users to be supported;  
> c) Amount and type of information to be handled.
>
> Static numerical requirements are sometimes identified under a separate section entitled Capacity.
>
> Dynamic numerical requirements may include, for example, the numbers of transactions and tasks and the amount of data to be processed within certain time periods for both normal and peak workload conditions. The performance requirements should be stated in measurable terms.
>
>  For example, "_95 % of the transactions shall be processed in less than 1 second._" rather than, "An operator shall not have to wait for the transaction to complete."
>
> NOTE Numerical limits applied to one specific function are normally specified as part of the processing subparagraph description of that function.


### 3.5 Logical database requirements

<!-- See 9.5.14. for most systems, a focus on d) and e) is appropriate, such as an object-oriented domain analysis. You should provide an overview domain model (e.g.  a UML class diagram of approximately ten classes) and write a brief description of the responsibilities of each class in the model (3 pages). -->

<!-- You should use right tools, preferabley PlantUML, to draw your URL diagrams which can be easily embedded into a Markdown file (PlantUML is also supported by GitLab and Foswiki). -->

<!-- TODO
- Put Sandy's UML diagram's in this section.
- Explain each diagram below.
-->

### 3.6 Design constraints

<!-- see 9.5.15 and 9.5.16. for most systems, this will be around one page. -->

> 9.5.15 Design constraints<br>
> Specify constraints on the system design imposed by external standards, regulatory requirements, or project limitations.
>
> 9.5.16 Standards compliance<br>
> Specify the requirements derived from existing standards or regulations, including:
>
> a) Report format;<br>
> b) Data naming;<br>
> c) Accounting procedures;<br>
> d) Audit tracing.
>
> For example, this could specify the requirement for software to trace processing activity. Such traces are needed for some applications to meet minimum regulatory or financial standards. An audit trace requirement may, for example, state that all changes to a payroll database shall be recorded in a trace file with before and after values.

<!-- TODO
- Ask Miru about this

Miru's Examples:
- the number of graphs that the software can display at one time

N.B We will ask the other teams what they have done
-->

### 3.7 Nonfunctional system attributes

<!-- Present the systemic (aka nonfunctional) requirements of the product (see ISO/IEC 25010).
List up to twenty systemic requirements / attributes.
Write a short natural language description of the top nonfunctional requirements (approx. five pages). -->

<!-- TODO
- proofread this section for grammatical issues
- formatting - sub headings for each section
-->

The important non-functional system attributes are listed below in order of their priority.

First the quality attribute of _Reliability_. It is the probability that the system fulfils its function. We can calculate the error rate. That is the frequency of inputs that produce an error compared to the total input frequency.
The mission control system relies on input from sensors. GPS, altimeters, accelerators, barometer, and radio transmission, to name a few. Each of these sensors has a certain degree of both precision and accuracy. For example, GPS
coordinates can only be accurate to +/- XYZ degrees of precision. The sensors on the rocket that provide information to our mission control system. They also operate at different frequencies. The system must be capable to check for
redundancy. It must also provide error handling. Which leads to our next quality attribute.

_Robustness_. The effects of operational mistakes, erroneous input data and hardware errors. Take the following hypothetical situation: GPS readings are changing, whereas the accelerometer readings say the rocket is stationary. The
system has "sanity checks", to maintain reliability. Operational mistakes such as an accidental launch should be reversible. While it is not within the scope of our system to fix hardware errors. We design it in such a way to check for
hardware errors. In some situations, hardware errors have drastic impacts. We may prevent actions like launches from happening. We include these pre-flight checks with the "go/no go" functionality. Monitoring important factors like
the battery temperature, voltage and current. Checking that all sensors are operational and transmitting data to our system. These are all practice steps that we can take to ensure a robust system.

_Portability_ represents an important attribute for our system. This is because it is an explicit requirement. The software must run on a laptop. Presumably at the launch site, or at least within the radio frequency range. This laptop
is not team property. We can deploy the system on _any_ laptop. The software has to be hardware-agnostic; it must run on any operating system. This effects the chosen language and development framework. The framework and language we
chose must support CI/CD. Through tests, we build the system on another machine. Through an integrated pipeline.

The _correctness_ is another important quality attribute. Does the code meet its specifications? We use the goal-directed design and agile development to ensure this. The goal-directed design relies on the requirements definition and
business objectives. We start with the requirements of the customer. We derive all the predominant aspects of the design from those requirements. Nothing more, nothing less. Also through the agile development process, we involve the
customer in the process. We have constant feedback and throughput from the client. So we can stay on course with their desired trajectory.

_Efficiency_ makes the system a practicable solution. The systems ability to use its resources to their capacity. Despite all the bells and whistles, our system must operate in real-time. If not our system is redundant. Instead, we
would store the information on the rocket and then retrieve it afterwards. So the interface must run with minimal overhead. Also, it must deliver all the necessary functionality. The 80/20 rule is applicable here. 20% of its features
produce 80% of the output. We develop a system that meets the requirements. It processes the information quickly. Then display it in the simplest and most readable format. It is important here to remove excise.

_Learnability_ depends on two things. The design on the interfaces; and, the clarity and simplicity of the user instructions. We meet the users' personas goals and business objectives. That's why we have chosen goal-oriented design.
We use user personas and context scenarios to construct the requirements definition. That requirements definition is the base of the design framework. The system will have the user personas goals at the forefront of its design. An
important user personas experience goals is _ease of use_. The goal-oriented design ensures the interface is easy to learn.

We derive _Maintainability_ from other attributes. _Readability_, _Extensibility_ and _Testability_. We discuss each of these attributes in detail later. A maintainable system is suitable for debugging, modification and extension.
Given the size of the teams for this project, the system must be maintainable. Otherwise, the project will devolve into a monolith. With any future changes showing diminishing returns for the product.

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

We use A variety of tools can be for inspection of the codebase. The automated pipeline provides test reports. They describe coverage, static analysis, and individual results. The Gitlabs version control system allows us to view the history of the project. We keep every version of the system. We can view each iteration on the repository. Any user can download and open the repository on an IDE of their choice with the `git clone` command. The project is open source. We use tools available to anyone. So there is no paywall required to inspect all aspects of the project.

This ties into the _testability_. This is dependent on the modularity and structuredness of the system. We can ensure the system is testable. Through thorough architecture planning and following design patterns. We can also reduce coupling and increase modularity. We separate it into modular components using abstractions and interfaces. This avoids the monolithic spaghetti code. The system employs unit testing and aims for high coverage. We run these tests on each commit, through an automated pipeline. These tests will involve linting, static analysis, unit tests and integration tests.

_Extensibility_ is how easy it is to refactor the codebase. Without causing any side effects. This depends on the:
- structuredness of the system
- possibilities that implementation language provides for this purpose
- readability
- availability of comprehensible program documentation

### 3.8 Physical and Environmental Requirements

<!-- TODO
- just needs to done
Examples:   
  - any operating system
  - laptop
  - limited ram and storage capacity
  - power limitations
  - CAA / Local council guidelines
-->

<!-- For systems with hardware components, identify the physical characteristics of that hardware (9.4.10) and environment conditions in which it must operate (9.4.11).  Depending on the project, this section may be from one page up to 5 pages. -->

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

<!-- TODO
- Wireframe testing
- Testing prototypes on user personas
- Test users who have no knowledge of the system
- spelling and grammar checks
- formatting, subsections for each requirement -- same as section 3.3
-->

In order to achieve the usability requirement, the mission control software needs to run on any operating system, also it should not require any installation or internet connection. The software should have a graphicical interface to display data, it should also have buttons to make the user interaction with the mission control software easier.
All buttons and graphical interfaces should be easy to understand by the user, such as buttons and should show text on it. Ths will help to show the function of this button, and the graphical area should also have a label to show what data is displayed in this area.
As long as the user can easily understand how to use this software the usuability requirement is met.

#### 4.4 Performance Requirements

<!-- TODO
We need to do this section
- research performance expectations for the hardware
- perhaps store information in logs necessary to verify performance requirements
 -->

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
The _reliability_ of the system can be verified through the testing framework. We add error prone or nonsensical input to the mock data. Through integration testing we observe how the system responds to this data. The system can produces unwanted side effects because of error-prone data. This shows us where redundancy checks and sanitisation of external input is needed. The system is improved to handle each test using error-prone data. Through this process we can verify and improve the reliability of the system.

#### Robustness
The testing framework provides verification for the _robustness_ of the system. Take each of the probable operational mistakes, erroneous input data and hardware errors. If possible, there is a test case which demonstrates this scenario and all the probable variations. Through test driven development (TDD), we write test for what we need, not what we expect. Each of these tests exposes unwarranted side effects in the system. The system is improved to become robust to these edge case scenarios. These tests still stand in place. All future changes during the development also have to withstand these errors.

#### Portability
We verify the _portability_ of the system using our automated pipeline. We run out build and test pipes on multiple operating systems. This can be done through using a matrices of virtual machines running different operating systems and their respective versions. Also the team develops the system on all of the major different operating systems. We check in person that the current version of the build is working on everyone's machine. This provides additional peace of mind, but by no means a replacement to the automated pipeline.

#### Correctness
We provide verification for the _correctness_ of the system through the testing framework. We follow the goal-directed design process and test driven development. Naturally our tests verify what we need, not what we expect. The functionality verified by each test is derived from the requirements definition. The requirements definition is derived from the user personas goals and the customers specifications. It is the primary focus of the testing framework to prove that the system does what it needs to. These tests are run after every iteration of the development. This ensures new changes do not have unintended side effects on the system meeting its requirements.

#### Efficiency
The _efficiency_ of the system is verified through test driven development. As previously mentioned, we write tests for what we need. These needs are specified in the requirements definition. Production code is written to pass these tests. And only those tests. So if a test does not exist for a feature. It will not be developed. Or put simply. If it is not a requirement of the system, it will not exist. This follows the goal-directed design process. As developers we do not let our own _cool_ features dilute the vision for the product.

#### Learnability
<!-- _Learnability_ depends on two things. The design on the interfaces; and, the clarity and simplicity of the user instructions. We meet the users' personas goals and business objectives. That's why we have chosen goal-oriented design. We use user personas and context scenarios to construct the requirements definition. That requirements definition is the base of the design framework. The system will have the user personas goals at the forefront of its design. An important user personas experience goals is _ease of use_. The goal-oriented design ensures the interface is easy to learn. -->

#### Maintainability
<!-- We derive _Maintainability_ from other attributes. _Readability_, _Extensibility_ and _Testability_. We discuss each of these attributes in detail later. A maintainable system is suitable for debugging, modification and extension. Given the size of the teams for this project, the system must be maintainable. Otherwise, the project will devolve into a monolith. With any future changes showing diminishing returns for the product. -->

#### Readability
<!-- _Readability_ depends on a variety of factors. These include
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

We use a variety of tools can be for inspection of the codebase. The automated pipeline provides test reports. They describe coverage, static analysis, and individual results. The Gitlabs version control system allows us to view the history of the project. We keep every version of the system. We can view each iteration on the repository. Any user can download and open the repository on an IDE of their choice with the `git clone` command. The project is open source. We use tools available to anyone. So there is no paywall required to inspect all aspects of the project. -->

##### Reliability
<!-- The probability that this system fulfils a function (determined by the specifications) for a specified number of input conditions in a specified time interval (assuming that hardware and input are free of errors).

A software system can be seen as reliable if this test produces a low error rate (i.e., the probability that an error will occur in a specified time interval.)

The error rate depends on the frequency of inputs and on the probability that an individual input will lead to an error. [sqa] -->

##### Robustness
<!-- Robustness reduced the impact of operational mistakes, erroneous input data, and hardware errors.

A software system is robust if the consequences of an error in its operation, in the input, or in the hardware, in relation to application, are inversely proportional to the probability of the occurrence of this error in the given application.

- Frequent errors (e.g. erroneous commands, typing errors) must be handled with particular care.

- Less frequent errors (e.g. power failure) can be handled more laxly, bust still must no lead to irreversible consequence. [sqa] -->

##### Testability
<!-- Suitability for allowing the programmer to follow program execution (runtime behaviour under given conditions) and for debugging. The testability of a software system depends on its:
- modularity
- structuredness: System-dependent elements are collected in easily interchangeable program components.

Modular, well-structured programs prove more suitable for systematic, stepwise testing than monolithic, unstructured programs.

Testing tools and the possibility of formulating consistency conditions (assertions) in the source code reduce the testing effort and provide important prerequisites for the extensive, systematic testing of all system components. [sqa] -->

##### Efficiency
<!-- Ability of a software system to fulfil its purpose with the best possible utilization of all necessary resources (time, storage, transmission channels, and peripherals). -->

##### Portability
<!-- The ease with which a software system can be adapted to run on computers other than the one for which it was designed.

The portability of a software depends on:
- Degree of hardware independence
- Implementation language
- Extent of exploitation of specialized system functions
- Hardware properties
- Structuredness: System-dependent elements are collected in easily interchangeable program components. [sqa] -->

##### Correctness
<!-- The correctness of a software system refers to:
- Agreement of program code with specifications
- Independence of the actual application of the software system -->

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

<!-- TODO
- spelling and grammar checks
- whole team to review  
 -->

**Architectural Prototype**

The Architectural Prototype and the supporting Architecture Design document is currently scheduled to be completed by the end of June 2020. The approximate aim for a date completion is the 15th of June.

**Minimum Viable Product**

The Minimial Viable Product is currently scheduled to be near the beginning of June (end of Trimester 1), but may be delayed until approximatley the 13th of July (start of Trimester 2).

**Further releases**

The Final Prototype will be completed by the end of October (approximatley by the 15th) and refined until the end of November (approximatley the day before the launch)

More details for the Project Schedule can be seen on the [Project Charter](https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/-/wikis/Project%20Charter) and this repository [Milestones](https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/-/milestones).


### 5.2 Budget

Is it assumed that MC will not need to use any funds from the project budget.
More explanation for this can be found in the [Project Charter](https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/-/wikis/Project-charter) budget information.

### 5.3 Risks

<!-- TODO
- spelling and grammar checks
-->

| Risk | Type | Likelihood | Impact | Mitigation Strategies |
| ------ | ------ | ------ | ------ | ------ |
| Failure to produce Mission Control software by launch date | Practical/deliverable | Even (subject to change) | Low | Consistent retrospectives and sprints should indicate a long term plan to prevent project fallout. Some deliverable or prototype should be produced, even if not functional yet. |
| Unexpected univeristy shutdown/course changes | Operations | Very unlikely | High | Remain with primary channel of communication; Mattermost for announcments of course or university changes. Concerns to be taken up with class reps, tutors, lecturer, course co-ordinator or ECS dean. Follow any given instructions accordingly. Prepare for project halt or termination. |
| Laptop battery dies and/or software fails to run | Technical | Unlikely (preperation/testing dependent) | High | With regards to the battery, if available bring a secondary battery. Checks before hand should take place for battery levels. If software fails to run, have several packages with troubleshooting options (i.e. compatability). To assist with with, take a secondary laptop which has been tested. |
| Placement of Mission Control | Locational/Enviromental | Very unlikely | Low | Mission Control Station should be reasonably mobile to allow a approximate radius range of where the rocket may land. Mission Control should not be placed near the launchpad and outside the landing locations. Range testing should ensure that the data can be recieved from the rocket at a safe distance. |
| Weather conditions | Environmental | Even (subject to change) | High | If predicted weather conditions are unfavourable on the day, there should be a postponement day scheduled, if applicable. If there is a sudden weather change, the resources taken to travel to launch site should be as minimal as possible, to allow a launch retry on the postponement day. |
| Rocket launch injury | Safety & health | Very unlikely | Very high | Following the strict safety and health requirements, this likelihood of this risk should remain as low as possible. Launch site should be secured and all operations should pass the go functionality for a safe launch. |
| Rocket in-flight injury | Safety & health | Very unlikely | Very high | Following the strict safety and health requirements, this likelihood of this risk should remain as low as possible. Rocket flight should approximately follow simulation predictions and data being received in consistent, including flight time, max height and max velocity. |
| Rocket return injury | Safety & health | Very unlikely | Very high | Following the strict safety and health requirements, this likelihood of this risk should remain as low as possible. There should be two landing mitigations, the parachute with air friction and the landing zone. The parachutes should have various measures and testing to keep the deployment at a high level, and everyone is well distanced from the landing zone area. |
| Rocket loses communication within flight | Technical | High | Medium | Testing with rocket range, turbulance and height (if possible) should decrease the loss of communication. Exception handling/logs should programmed to report when, how and what error occurred. |
| Rocket refuses communication before launch | Technical | High | Medium | If possible, data should have the capability to be run offline. If other teams and requirements allow this, there can be a bypass for real-time data and continue with the go/no go assessment. |

### 5.4 Health and Safety

<!-- TODO
- add link to health and safety document
-->

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

<!-- One page on assumptions and dependencies (9.5.7). -->

### 6.2 Acronyms and abbreviations

MC or MCS (Mission Control or Mission Control System/Software): Reference to Mission Control's part in the project (our team's part).

## 7. Contributions

<!-- A one page statement of contributions, including a list of each member of the group and what they contributed to this document. -->


| Team Member | Section Contributions |
| ------ | ------ |
| Elliott Andrews | 1.1, 5.1, 5.2, 5.3, 6.2 |
<<<<<<< project_requirement/project-requirement.md
| Binke Xu | 1.2, 1.3.1, 1.3.2, 1.3.4, 1.3.3, 4.3 |
| Sandy (Alexander Saunders) | 5.3 |
| Jesse Wood | 3.7, 4.7 |
| Marcus Rathod | 3.1, 3.3 |
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
