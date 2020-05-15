# ENGR 301: Project Requirements Document
The aim of this document is to specify the requirements of the system your group is to build. The focus of a requirements document is the problem you are attempting to solve:  not a first attempt at a solution to that problem. This document should communicate clearly to the supervisor, client and course coordinator what the system you build is going to do, and what constraints it must meet while doing so.

The document should also demonstrate your understanding of the main analysis principles and quality guidelines, and applicable standards, using tools and notations as necessary to communicate the requirements precisely, unambiguously and clearly in a written technical document. Page specifications below are *limits not targets* and refer to the pages in the PDF generated from the markdown. Because the size of your document is necessarily limited, you should ensure that you focus your efforts on those requirements that are most important to completing a successful system: if sections are at their page limit, indicate how many items would be expected in a complete specification.

The ENGR 301 project proposal and requirements document should be based on the standard ISO/IEC/IEEE 29148:2011(E), primarily sections 8.4 and 9.5, plus section 9.4 for projects involving hardware and ISO 25010 SQuaRE for systemic requirements. While excerpts from the standard have been quoted within the template, to understand what is required it will be necessary to read earlier sections of the standards themselves. A supplementary treatment of requirements gathering in engineering projects may be found in [Requirements in Engineering Projects](https://victoria.rl.talis.com/items/F166DA94-DAD8-FBDB-0785-7A63C9BA3603.html?referrer=%2Flists%2F5886F297-2506-1F17-45D9-7F04CEE284EE.html%23item-F166DA94-DAD8-FBDB-0785-7A63C9BA3603) (Talis). The requirements document should contain the sections listed below, and conform to the formatting rules listed at the end of this brief.

All team members are expected to contribute equally to the document and list their contributions in section 7 of the document. You should work on your document in your team's GitLab repository. While collective contributions are expected to be the exception rather than the rule, if more than one team member has contributed to a particular commit then all those team member IDs should be included in the first line of the git commit message. `git blame`, `git diff`, file histories, etc. will be tools used to assess individual contributions, so everyone is encouraged to contribute individually, commit early and commit often. Any team wishing to separate individually contributed sections into a single file before collation into the single proposal document for submission is welcome to do so.

---

<div style="page-break-after: always;"></div>

# ENGR 301 Project *NN* Project Proposal and Requirements Document
#### Author list, a comma-separated list of the names of each member of the team.

## 1. Introduction

One page overall introduction including sections 1.1 and 1.2.

### Client

**Contact details for our customer**

Name: Andre Geldenhuis

Email: andre.geldenhuis@vuw.ac.nz

Mattermost & Gitlab: @geldenan

**Customer introduction**

Andre has been involved in several rocket projects, as well as some past Victoria University projects. He has provided us with our MC project brief, some useful example slides and other resources to help us with our project execution. He is available for contact using the above details.


### 1.1 Purpose

Mission Control's purpose for the [Rocket Project](https://ecs.wgtn.ac.nz/foswiki/pub/Courses/ENGR301_2020T1/Project/2020_Rocket_Project_info.pdf) is to display the rocket's real-time data with additional (software based) launch requirements and operations.

### 1.2 Scope

Should provide rocket flight logging system to record flight data.

Should provide wireless control system.

Should provide rocket self-control system to control motor during the flight, and open parachute.


### 1.3 Product overview
#### 1.3.1 Product perspective

This project aims to vertical launch a rocket and keep rocket stable during the flight, also need display data from racket on the laptop such as height, location, flight time.
The project is a prototype of real rocket mission control system, this project will provide an experience of how mission control system works, and the relationships between avionics and simulations.

#### 1.3.2 Product functions

The mission control system should display all the data on laptop as graphical interface.

The mission control system needs Integrate with local weather condition, simulate flight flights can determine probable landing locations to decide if rocket can be launch.

Use the current wind profile and the Monte-Carlo simulation to determine an upwind trajectory for the rocket to follow to minimize its landing distance from the launch site.

Mission control device may not have internet connection all the time, so mission control system should be able to run in the absence of an internet connection.

#### 1.3.3 User characteristics   

<!--One page identifying the main classes of users and their characteristics (9.5.5)-->
Our mission control system is a simplified version of real mission control center, but our system will show core function of mission control system, the user will gain experience of how mission control works and what mission control system for.
User should be familiar with interact software by command line and GUI, also our system will be able to operate on major operating systems on market, so user need know how to install and run our software on different system.

#### 1.3.4 Limitations

The rocket will wireless monitoring with laptop, so the distance between the laptop and rocket will affect the monitoring effect, if rocket fly too height then laptop may not be able to receive signal from transmission unit on the rocket.
The terrain may also affect the data transmission effect, such as steep hill or woodland, those launch environment may lead data loss or unstable connection between laptop and rocket.

## 2. References

References to other documents or standards. Follow the IEEE Citation  Reference scheme, available from the [IEEE website](https://www.ieee.org/) (please use the search box). (1 page, longer if required)

\[1\] “Quality Assurance,” Quality Assurance " Software Quality Attributes. [Online]. Available: http://www.qasigma.com/2008/12/software-quality-attributes.html. [Accessed: 02-May-2020].

## 3. Specific requirements  

20 pages outlining the requirements of the system. You should apportion these pages across the following subsections to focus on the most important parts of your product.

### 3.1 External interfaces

See 9.5.10. for most systems this will be around one page.

**Laptop**

A laptop will be used on site to display data from the rocket. The data displayed on the laptop will include the current software state, current location, current altitude, local weather conditions (wind) and probable landing locations.
The laptop will include further operations/functionalities which will allow additional data to be displayed on the laptop. This will include landing locations within a certain bound, a go/no go functionality and the imminence of when a
rocket is to be launched. The laptop will also allow the rocket to be integrated with openRocket which allow the mission control system to be integrated with monte-carlo integration.

### 3.2 Functions

This is typically the longest subsection in the document. List up to fifty use cases (in order of priority for development), and for at least top ten focal use cases, write a short goal statement and use case body (up to seven pages).  Identify the use cases that comprise a minimum viable product.

**Use cases**



### 3.3 Usability Requirements

See 9.5.12. for most systems this will be around one page.

> **9.5.12 Usability requirements**<br>
> Define usability (quality in use) requirements. Usability requirements and objectives for the software system include measurable effectiveness, efficiency, and satisfaction criteria in specific contexts of use.

**Should work in the absence of an internet connection**

The site of launch will most likely be in an area where there will be no available internet connection. To make the mission control system effective for the user (so that the user doesn’t have to personally provide a internet connection),
it will be a requirement for the mission control system to work without the use of an internet connection.


**Display data using a coherent method**

When the data is displayed to the user, we want to make sure that it is displayed in a way that's understandable and easy to look at from the point of view of the user. We assume that the user of the mission control system will have some knowledge
of rockets, but that doesn't allow us to create a system that will make the user do unecessary operations to obtain a specific piece of data. This is why as opposed to displaying data in a command line (something which would be easier to develop),
creating a user interface (UI) will allow the data to be displayed in a more coherent manner.


### 3.4 Performance requirements

See 9.5.13. for most systems this will be around one page. Hardware projects also see section 9.4.6.

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

See 9.5.14. for most systems, a focus on d) and e) is appropriate, such as an object-oriented domain analysis. You should provide an overview domain model (e.g.  a UML class diagram of approximately ten classes) and write a brief description of the responsibilities of each class in the model (3 pages).

You should use right tools, preferabley PlantUML, to draw your URL diagrams which can be easily embedded into a Mardown file (PlantUML is also supported by GitLab and Foswiki).

### 3.6 Design constraints

see 9.5.15 and 9.5.16. for most systems, this will be around one page.

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

### 3.7 Nonfunctional system attributes

<!-- Present the systemic (aka nonfunctional) requirements of the product (see ISO/IEC 25010).
List up to twenty systemic requirements / attributes.
Write a short natural language description of the top nonfunctional requirements (approx. five pages). -->

We list the important non-functional system attributes below. They are in order of their priority.

1. _reliability_,
1. _portability_,
1. _robustness_,
1. _correctness_,
1. _efficiency_,
1. _Learnability_
1. _Maintainability_
1. _testability_,
1. _readability_,
1. _Extensibility_

We derive each of these software quality attributes from the requirements definition.

First the quality attribute of _Reliability_. It is the probability that the system fulfils its function. We can calculate the error rate. That is the frequency of inputs that produce an error compared to the total input frequency. The mission control system relies on input from sensors. GPS, altimeters, accelerators, barometer, and radio transmission, to name a few. Each of these sensors has a certain degree of both precision and accuracy. Take for example GPS, coordinates can only be accurate to +/- XYZ degrees of precision. The sensors on the rocket that provide information to our mission control system. They also operate at different frequencies. The system must be able to check for redundancy. It must also provide error handling. Which leads to our next quality attribute.

_Robustness_. The effects of operational mistakes, erroneous input data and hardware errors. Take the following hypothetical situation. GPS readings are changing, whereas the accelerometer readings say the rocket is stationary. The system has "sanity checks, to maintain reliability. Operational mistakes like an accidental launch should be reversible. While it is not within the scope of our system to fix hardware errors. We design it in such a way to check for common hardware errors. In some situations, hardware errors will have drastic impacts. We may prevent actions such as launch from happening.

We include these pre-flight checks with the "go / no go" functionality. Monitoring important factors such as the battery temperature, voltage and current. Checking that all the sensors are operational and transmitting data to our system. These are all practice steps that we can take to ensure we have a robust system.

_Portability_ is an important attribute for our system. This is because it is an explicit requirement. The software must run on a laptop. Presumably at the launch site, or at least within the radio frequency range. This laptop is not team property. So we can deploy the system on _any_ laptop. The software has to be hardware-agnostic; it must run on any operating system. This effects the chosen language and development framework. The framework and language we chose must support CI / CD. Through tests, we can build the system on another machine. This uses an integrated pipeline.

The _correctness_ is another important quality attribute. Does the code meet its specifications? We use the goal-directed design and agile development to ensure this. The goal-directed design relies on the requirements definition and business objectives. We start with the requirements of the customer. We derive all the predominant aspects of the design from those requirements. Nothing more, nothing less. Also through the agile development process, we involve the customer in the process. We have constant feedback and throughput from the client. So we can stay on course with their desired trajectory.

The systems ability to use its resources to their capacity. _Efficiency_ makes the system a practice solution. Despite all the bells and whistles, our system must operate in real-time.
If not our system is redundant. Instead, we would store the information on the rocket and then retrieve it afterwards. So the interface must run with minimal overhead. Also, it must deliver all the necessary functionality. The 80/20 rule is applicable here. 20% of its features produce 80% of the output. We develop a system that meets the requirements. It processes the information quickly. Then displays it in the simplest and most readable format. It is important here to remove excise.

_Learnability_ depends on two things. The design on the interfaces; and, the clarity and simplicity of the user instructions.
We need to meet the users' personas goals and business objectives. That's why have chosen goal-oriented design. We use user personas and context scenarios to construct the requirements definition. That requirements definition is the base of the design framework. This ensures that the system will have the user personas goals at the forefront of its design. An important user personas experience goals is _ease of use_. The goal-oriented design ensures the interface is easy to learn.

We derive _Maintainability_ from other attributes.
_Readability_, _Extensibility_ and _Testability_. We discuss each of these attributes in detail later. A maintainable system is suitable for debugging, modification and extension. Given the size of the teams for this project, the system must be maintainable. Otherwise, the project will devolve into a monolith. With any future changes showing diminishing returns for the product.

_Readability_ depends on a variety of factors. These include:
- form of representation
- programming style
- consistency
- readability of the implementation of programming languages
- structureness of the system
- quality of the documentation
- tools available for inspection

The programming style of the project will follow standard design principles and patterns. With a focus on convention over configuration. Given the system in a user interface. We adopt the MVC framework. That is the model, view, controller. We use interfaces for all communication with external systems. For example; we have a Weather Service, Map Service, and Simulation interfaces.

To ensure the programming languages are readable, we use linters. A predefined style convention for a programming language. We integrate linters into the automated pipelines. If the code does not meet the style guidelines, the pipeline fails. This ensures that all we write production code using the same conventions. This maintains the readability of the programming languages code.

Quality documentation for the entire code base is mandatory. The entire team reviews each of the merge requests before approving them. We review the functionality and documentation of the code. The contributor of the issue explains what the contribution does. We check if the documentation is easy to understand. Or if it even exists. If not the team does not approve the request. We revise the documentation and then reassess later. This process ensures that all production code is well documented.

We use A variety of tools can be for inspection of the codebase. The automated pipeline provides test reports. They describe coverage, static analysis, and individual results. The Gitlabs version control system allows us to view the history of the project. We keep every version of the system. We can view each iteration on the repository. Any user can download and open the repository on an IDE of their choice with the `git clone` command. Since the project is open source, we only use tools that are available to anyone for development. So there is no paywall required to inspect all aspects of the project.

This ties into the _testability_. This is dependent on the modularity and structuredness of the system. We can ensure the system is testable. Through thorough architecture planning and following design patterns. We can also reduce coupling and increase modularity. We separate it into modular components using abstractions and interfaces. This avoids the monolithic spaghetti code. The system employs unit testing and aims for high coverage. We run these tests on each commit, through an automated pipeline. These tests will involve linting, static analysis, unit tests and integration tests.

_Extensibility_ is how easy it is to refactor the codebase. Without causing any side effects. This depends on the
- structuredness of the system
- possibilities that implementation language provides for this purpose
- readability
- availability of comprehensible program documentation

### 3.8 Physical and Environmental Requirements

For systems with hardware components, identify the physical characteristics of that hardware (9.4.10) and environment conditions in which it must operate (9.4.11).  Depending on the project, this section may be from one page up to 5 pages.

### 3.9 Supporting information

see 9.5.19.

## 4. Verification
<!--
3 pages outlining;
how you will verify that the product meets the most important specific requirements.
The format of this section should parallel section 3 of your document (see 9.5.18).
Wherever possible (especially systemic requirements) you should indicate testable acceptance criteria.
-->
#### 4.1 External Interfaces

#### 4.2 Functions

#### 4.3 Usability Requirements

#### 4.4 Performance Requirements

#### 4.5 Domain Model Requirements

#### 4.6 Design Constraints

#### 4.7 Software System Attributes
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

## 5. Development schedule.

### 5.1 Schedule

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

(Basic facts, will need to be more detailed. Also quite a broad topic, could be worth re-writing with more specific risks)

**COVID-19 Lockdown and Restrictions** (Thursday 26th March and currently ongoing)

Type: Government announcement and National State of Emergency

Likelihood: High and Likely that University will be closed

Impact: Will delay any physical lab course work, will affect students living situations and job wages

Mitigation Strategies: Will continue team work virtually and online

Course and Univeristy announcement: to pause all effective project work for ENGR 301 and lecture teaching until the 28th of April

[Victoria Univeristy of Wellington COVID-19 Information for Students](https://www.wgtn.ac.nz/covid-19/students)

Identify the ten most important project risks to achieving project goals: their type, likelihood, impact, and mitigation strategies (3 pages).

If the project will involve any work outside the ECS laboratories, i.e. off-campus activities, these should be included in the following section.

### 5.4 Health and Safety

Document here project requirements for Health and Safety. All teams must state in this section:

1. How teams will manage computer-related risks such as Occupational Over Use, Cable management, etc.  

2. Whether project work requires work or testing at any external (off-campus) workplaces/sites. If so, state the team's plans for receiving a Health and Safety induction for the external workplaces/sites. If the team has already received such an induction, state the date it was received.

3. Whether project work requires the team test with human or animal subjects? If so, explain why there is no option but for the team to perform this testing, and state the team's plans for receiving Ethics Approval _prior_ to testing.

Also document in this section any additional discussions with the School Safety Officer regarding Health and Safety risks. Give any further information on relevant health and safety regulations, risks, and mitigations, etc.


#### 5.4.1 Safety Plans

Safety Plans may be required for some projects, depending on project requirements. Safety Plan templates are available on the course Health & Safety page. Two questions all teams must answer are:

**Do project requirements involve anything that can cause serious harm or death?**  
Examples: building/modifying devices using voltages > 60 V, chemicals, large moving machinery, flying devices, bodies of water.

If so, you will have to write a separate Safety Plan as part of project requirements, and the Safety Plan must be referenced in this section. For health and safety risks involving serious harm or death, you must first contact the School Safety Officer and Course Coordinator first to discuss the Safety Plan and project requirements.

**Do project requirements involve anything that can cause harm or injury?**  
Examples: building/modifying things with voltages <= 60V, small moving machinery, wearable devices.

If so, you will have to write a separate Safety Plan as part of project requirements, and the Safety Plan must be referenced in this section. For health and safety risks involving harm or injury, you should write a draft of the Safety Plan before contacting the School Safety Officer and Course Coordinator to discuss the Safety Plan and project requirements.

If a safety plan is required, list in this section the date the School Safety officer accepted your Health and Safety plan (if accepted by submission date).

_If the project is purely software and requires no contact risks involving physical harm, then state "Project requirements do not involve risk of death, serious harm, harm or injury." in this section._


## 6. Appendices
### 6.1 Assumptions and dependencies

One page on assumptions and dependencies (9.5.7).

### 6.2 Acronyms and abbreviations

MC or MCS (Mission Control or Mission Control System/Software): Reference to Mission Control's part in the project (our team's part).

## 7. Contributions

A one page statement of contributions, including a list of each member of the group and what they contributed to this document.

| Team Member | Section Contributions |
| ------ | ------ |
| Elliott Andrews | (1) - 1.1, (5) - 5.1, 5.2, 5.3, (6) - 6.2 |
| Binke Xu | 1.2, 1.3.1, 1.3.2, 1.3.4, 1.3.3 |
| Sandy (Alexander Saunders) | cell |
| Jesse Wood | 3.7, 4.7 |
| Marcus Rathod | 3.1, 3.3 |
| Mason Yi | cell |
---

## Formatting Rules

 * Write your document using [Markdown](https://gitlab.ecs.vuw.ac.nz/help/user/markdown#gitlab-flavored-markdown-gfm) and ensure you commit your work to your team's GitLab repository.
 * Major sections should be separated by a horizontal rule.


## Assessment  

The goal of a requirements document is the problem you are attempting to solve:  not a first attempt at a solution to that problem. The most important factor in the assessmernt of the document is how will it meet that goal. The document will be assessed for both presentation and content.

The presentation will be based on how easy it is to read, correct spelling, grammar, punctuation, clear diagrams, and so on.

The content will be assessed according to its clarity, consistency, relevance, critical engagement and a demonstrated understanding of the material in the course. We look for evidence these traits are represented and assess the level of performance against these traits. While being comprehensive and easy to understand, this document must be reasonably concise too. You will be affected negatively by writing a report with too many pages (far more than what has been suggested for each section above).

We aim to evaluate ENGR301 documents and projects as if they were real projects rather than academic exercises &mdash; especially as they are real projects with real clients. The best way to get a good mark in a document is to do the right thing for your project, your client, and your team. We encourage you to raise questions with your tutor or course staff, as soon as possible, so you can incorporate their feedback into your work.

---
