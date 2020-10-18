# ENGR 301: Architectural Design and Proof-of-Concept

<!--## Proof-of-Concept-->

<!--The aim of an architectural proof-of-concept (spike or walking skeleton) is to demonstrate the technical feasibility of your chosen architecture, to mitigate technical and project risks, and to plan and validate your technical and team processes (e.g., build systems, story breakdown, Kanban boards, acceptance testing, deployment).-->

<!--A walking skeleton is an initial technical attempt that will form the architectural foundation of your product. Since a walking skeleton is expected to be carried into your product, it must be completed to the quality standards expected for your final product. A walking skeleton should demonstrate all the technologies your program will rely on "end-to-end" &mdash; from the user interface down to the hardware.-->

<!--In the context of ENGR 301, a walking skeleton does not need to deliver any business value to your project: the aim is technical validation and risk mitigation.-->

<!--## Document-->

<!--The aim of the architectural design document is to describe the architecture and high-level design of the system your group is to build, to identify any critical technical issues with your design, and to explain how you have addressed the highest rated technical and architectural risks. The architecture document should also demonstrate your understanding of architectural techniques and architectural quality, using tools and associated notations as necessary to communicate the architecture precisely, unambiguously and clearly in a written technical document.-->

<!--Page specifications below are *limits not targets* and refer to the pages in the PDF generated from the markdown. Because the size of your document is necessarily limited, you should ensure that you focus your efforts on those architectural concerns that are most important to completing a successful system: if sections are at their page limit, indicate how many items would be expected in a complete specification.-->

<!--The ENGR 301 project architecture design document should be based on the standard ISO/IEC/IEEE 42010:2011(E) _Systems and software engineering &mdash; Architecture description_, plus appropriate sections from ISO/IEC/IEEE 29148:2018(E) _Systems and software engineering &mdash; Life cycle processes &mdash; Requirements engineering_; ISO/IEC/IEEE 15289:2017 _Systems and software engineering &mdash; Content of life-cycle information items (documentation)_; ISO/IEC/IEEE 15288:2015 _Systems and software engineering &mdash; System life-cycle processes_; ISO/IEC/IEEE 12207:2017 _Systems and software engineering &mdash; Software life cycle processes_ and ISO 25010 SQuaRE; with notations from ISO/ISE 19501 (UML). In particular, Annex F of ISO/IEC/IEEE 15288 and Annex F of ISO/IEC/IEEE 12207. These standards are available through the Victoria University Library subscription to the [IEEE Xplore Digital Library](https://ieeexplore.ieee.org/) (e.g., by visiting IEEE Xplore from a computer connected to the University network).-->

<!--The document should contain the sections listed below, and conform to the formatting rules listed at the end of this brief.-->

<!--All team members are expected to contribute equally to the document and list their contributions in the last section of the document (please make sure that your continued contribution to this document can be traced in GitLab). You should work on your document in your team's GitLab repository in a directory called "M2_Architecture". If more than one team member has contributed to a particular commit, all those team member IDs should be included in the first line of the git commit message. ``git blame``, ``git diff``, file histories, etc. will be tools used to assess individual contributions, so everyone is encouraged to contribute individually (your contribution should be made to many sections of the document, rather than focusing on just a single section), commit early and commit often.-->

<!------->

# ENGR 301 Project 12 Architectural Design and Proof-of-Concept

#### Elliott Andrews, Jesse Wood, Binke Xu, Alexander Saunders, Mason Yi, Marcus Rathod

## 1. Introduction

One page overall introduction including sections 1.1 and 1.2 (ISO/IEC/IEEE 42010:2011(E) clause 5.2)

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

### 1.3 Changes to requirements

If the requirement have changed significantly since the requirements document, outline the changes here. Changes must be justified and supported by evidences, i.e., they must be substantiated. (max one page, only if required)

## 2. References

References to other documents or standards. Follow the IEEE Citation Reference scheme, available from the [IEEE website](https://ieee-dataport.org/sites/default/files/analysis/27/IEEE%20Citation%20Guidelines.pdf) (PDF; 20 KB). (1 page, longer if required)

\[1\] Civil Aviation Authority of New Zealand, Civil Aviation Rules 101, Part 101 Gyrogliders and Parasails, Unmanned Aircraft (including Balloons), Kites, and Rockets Operating Rules [Online]. Available at: https://www.aviation.govt.nz/rules/rule-part/show/101. [Accessed May. 22, 2020]

\[2\] "A Guide to Dependencies, Constraints and Assumptions (Part 3): Project Assumptions", InLoox. [Online]. Available: https://www.inloox.com/company/blog/articles/a-guide-to-dependencies-constraints-and-assumptions-part-3-project-assumptions/ [Accessed: 22-May-2020]

## 3. Architecture

Describe your system's architecture according to ISO/IEC/IEEE 42010:2011(E), ISO/IEC/IEEE 12207, ISO/IEC/IEEE 15289 and ISO/IEC/IEEE 15288.

Note in particular the note to clause 5 of 42010:

_"The verb include when used in Clause 5 indicates that either the information is present in the architecture description or reference to that information is provided therein."_

This means that you should refer to information (e.g. risks, requirements, models) in this or other documents rather than repeat information.

### 3.1 Stakeholders

<!--See ISO/IEC/IEEE 42010 clause 5.3 and ISO/IEC/IEEE 12207 clause 6.4.4.3(2).-->

<!--For most systems this will be about 2 pages, including a table mapping concerns to stakeholder.-->

**Customer/Client**

- Software should be compiled into a executable format
- Software should be as portable to run as possible
- Software should be able to run on any modern operating system
- Software should display all required data with consistent units
- Software should be displayed as a GUI with mapping features
- Software should include the go/no go functionality with various checks

**Software Developers/Engineers**

- Shall be able to communicate with other teams to share ideas with suggestions and solutions
- Shall work as a team while being respectful and listen to everyone's ideas
- Shall comment and use 'approval feature' for feedback on contributions

**Software Testers**

- Shall use both testing methods of blackboy testing and white-box testing
- Shall have a well defined testing process, with goals, requirements and results for each test
- Relate back to user experiences while testing, such as personas and use cases

**Victoria University of Wellington: Engineering and Computer Science**

- Abide to the health and safety standards set by the ECS while in labs
- Licensing should be educational and open source as defined by the project code agreement signed

**Rocket enthusiasts and communities within New Zealand**

- Encourage and promote the open source license of the code, to allow extensions and resuability for people who are looking to implement a similar system. However make sure to include a no responsibility clause, with a short terms of use and appropriate warnings listed.

**Wellington City Council (WCC)**

- Should comply with regulations and laws according to those with relation to 'model rockets' and comply with CAANZ.
- The software shall be used and used only for the model rocket, no copyright or trademarks need registering by the council.

**Wellington business and residential zones**

- Depending on the environment, nearby business's / resident's may need to be informed of the rocket launch if they are near the launch site. They must accept and give their permission for the launch to continue. If they field is large enough, this will likely not be required.

**Civil Aviation Authority of New Zealand (CAANZ)**

- This project should follow all related CAA regulations, particularly those in regulations; part 101 [1]

(Still needs a table mapping concerns to stakeholder)

### 3.2 Architectural Viewpoints

(1 page, 42010 5.4)

Identify the architectural viewpoints you will use to present your system's architecture. Write one sentence to outline each viewpoint. Show which viewpoint frames which architectural concern.

### 4. Architectural Views

(5 sub-sections of 2 pages each sub-section, per 42010, 5.5, 5.6, with reference to Annex F of both 12207 and 15288)

Describe your system's architecture in a series of architectural views, each view corresponding to one viewpoint.

You should include views from the following viewpoints (from Kruchten's 4+1 model):

- Logical
- Development
- Process
- Physical
- Scenarios - present scenarios illustrating how two of your most important use cases are supported by your architecture

As appropriate you should include the following viewpoints:

- Circuit Architecture
- Hardware Architecture

Each architectural view should include at least one architectural model. If architectural models are shared across views, refer back to the first occurrence of that model in your document, rather than including a separate section for the architectural models.

### 4.1 Logical

The primary concern with a logical view is to show the functionality that a system provides. Typically, UML diagrams are used to represent the logical view of a program as they are able to be
displayed through many depictions, for example, class and state diagrams.

A UML diagram has the purpose of visually representing the system, typically using boxes and arrows to display relationships between the different entities within a system. The boxes of a UML
diagram are used to show the different functional components of a system, such as the classes, enums and interfaces. The arrows portray the different relationships between the components of the
system.

A UML class diagram is the most common way of portraying a software system's different classes and their attributes. A class diagram shows each class within a software system and how they relate
to other different classes. Each box within a class diagram represents a class and their different attributes/behaviours. The arrows of a class diagram represent the relationship between two
different classes of a system. Although the information given by the arrows of a class diagram convey useful information, they have a tendency to be imprecise when it comes to explaining, in
depth, the specificity of the arrow's meaning.

<!-- Images have been written in this format so they will update if they change. However the exact filenames and locations must stay the same -->

**Class Diagram**

This diagram shows the proposed UML class layout. Currently the diagram shows four classes (C), one enum (E) and three interfaces (I).

![A image of the Class Diagram](uml_diagrams/class_diagram/class_diagram.png)

### 4.2 Development

The development process has primarily been deveoped in Node JS, using React. This means that the project takes form of a web_application that is run in an internet browser.

Pair programming has been a key part in deveopment, as well as the design. The web_application has been planned into a few main pages, these consist of:

1. Home Page (Landing Page)
2. Dashboard - features a summary of all aspects of Mission Control and Rocket Intergation
3. Simulation - Will produce a CSV file based on the input values for general, atmospheric and others.
4. Go/NoGo - Based on threshold values, will determine the ultimate decision for rocket launch.
5. Graphs - Partially implemented graphs to monitor rocket sensors.
6. Serial Port - Stream of serial port data through LoWra.
7. Weather - Fetches weather data from Open Weather API, based on longitude and latitude co-ordinates.

### 4.3 Process

A process is defined as 'a series of actions or steps taken in order to achieve a particular end.' It is important to know the different processes of a system as it helps create a better
understanding of how the system works together and what is needed in order for the system to be relatively functional. If the understanding of a system's processes is thorough enough, there is
potential to automate said processes as this would improve the efficiency of a system.

The process architecture of a system should, at the minimum, show how a system works as a single unit. It should show how the different processes integrate with one another and
outline what is going on for each of those processes.

This diagram shows the proposed state diagram for the main processes that the software and rocket will stage through.
It should be noted that the mission control software will primarily take place in the Pre-Launch section.

![A image of a Tree View](uml_diagrams/state_diagram/MCS_State_Diagram.png)

This diagram shows the proposed tree view for the main processes that the software package should interpret.

![A image of a Tree View](uml_diagrams/tree_view/tree-view.png)

### 4.4 Physical

The 'physicality' of Mission Control is rather known as software components. However, physical objects will include certain requirments, in order to run the software.

- Laptop
- Physical Communication Device from Serial Port to LoWra
-USB to carry software if capacity is limited

### 4.5 Scenarios

Scenarios are essentially brief explanations of expected system use cases for the user and developers. Scenarios seek to provide insight to how the system reacts to different use contexts.
In essence, scenarios should cover all the different expected ways that a user could interact with a system.

Typically, a UML use case diagram is used to represent the different scenarios that a system has. Use case diagrams aim to show what different classes a user may have access to whilst
using the system. They are a basic representation of how the user and system interact with one another and as a result, a weakness is that it is not able to show the order in which steps
are taken to reach certain use cases.

A UML use case diagram usually includes actors, associations, use cases and a system boundary. Actors represent the different users that can interact with a system, be it a user or developer.
Typically shown through a figure of sorts e.g. stick figure. Associations are the connections between the user and different use cases. These are usually represented by arrows pointing from
the actor to the arrow. Use cases, as touched on above, are the different ways that one can interact with the system. Use cases are usually expressed as a bubble/ellipse. The system boundary
is used to divide the user and the system. When an association passes through the system boundary, we know that the user is interacting with the system. Usually represented as a box around the use cases.

This diagram shows the different classes and what the user may have access to.

![A use case diagram](uml_diagrams/use_case_diagram/use_case_diagram.png)

## 5. Development Schedule

_For each subsection, make clear what (if anything) has changed from the requirements document._ If unchanged, these sections should be copied over from the requirements document, not simply cross-referenced.

Schedules must be justified and supported by evidences; they must be either direct client requirements or direct consequences of client requirements. If the requirements document did not contain justifications or supporting evidences, then both must be provided here.

### 5.1 Schedule

**Architectural Prototype**

The Architectural Prototype and the supporting Architecture Design document is currently scheduled to be completed by the end of June 2020. The approximate aim for a date completion is the 15th of June.

**Minimum Viable Product**

The Minimial Viable Product is currently scheduled to be near the beginning of July (end of Trimester 1), but may be delayed until approximately the 13th of July (start of Trimester 2).

**Further releases**

The Final Prototype will be completed by the end of October (approximately by the 15th) and refined/tested until the end of November (approximately the day before the launch)

More details for the Project Schedule can be seen on the [Project Charter](https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/-/wikis/Project%20Charter).

### 5.2 Budget and Procurement

#### 5.2.1 Budget

Is it assumed that MC will not need to use any funds from the project budget.
More explanation for this can be found in the [Project Charter](https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/-/wikis/Project-charter) budget information.

#### 5.2.2 Procurement

Present a table of goods or services that will be required to deliver project goals and specify how they are to be procured (e.g. from the School or from an external organisation). These may be software applications, libraries, training or other infrastructure, including open source software. Justify and substantiate procurement with reference to fulfilment of project goals, one paragraph per item.
(1 page).

### 5.3 Risks

| Risk                                                       | Type                     | Likelihood                               | Impact    | Mitigation Strategies                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------------------------------------- | ------------------------ | ---------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Failure to produce Mission Control software by launch date | Practical/deliverable    | Even (subject to change)                 | Low       | Consistent retrospectives and sprints should indicate a long term plan to prevent project fallout. Some deliverable or prototype should be produced, even if the resulting product is not functional yet.                                                                                                                                                                                                                 |
| Unexpected University shutdown/course changes              | Operations               | Very unlikely                            | High      | Remain in contact with primary channel of communication; Mattermost for announcements related to course or university changes. Concerns to be taken up with class reps, tutors, lecturer, course co-ordinator or ECS dean. Follow any given instructions accordingly. Prepare for any temporary project pauses or overall termination.                                                                                    |
| Laptop battery dies and/or software fails to run           | Technical                | Unlikely (preparation/testing dependent) | High      | With regards to the battery, if available bring a secondary battery. Checks before hand should take place for battery charge levels. If the software fails to run, have several packages with troubleshooting options (i.e. compatibility modes). It also should be considered to take a secondary laptop which has been tested.                                                                                          |
| Location of Mission Control Station                        | Locational/Environmental | Very unlikely                            | Low       | Mission Control Station should be reasonably mobile to allow a approximate radius range of where the rocket may land. Mission Control should not be placed near the launchpad or inside the probable landing locations. Range testing and data transmission should ensure that the data can be received from the rocket at a safe distance.                                                                               |
| Weather conditions                                         | Environmental            | Even (subject to change)                 | High      | If predicted weather conditions are unfavourable on the day, there should be a postponement day scheduled, if applicable. If there is a sudden weather change, the resources taken to travel to launch site should be as minimal as possible, to allow a launch retry on the postponement day.                                                                                                                            |
| Rocket launch injury                                       | Safety & health          | Very unlikely                            | Very high | Following the strict safety and health requirements, the likelihood of this risk should remain as low as possible. Launch site should be secured and all operations should pass the go functionality for a safe launch.                                                                                                                                                                                                   |
| Rocket in-flight injury                                    | Safety & health          | Very unlikely                            | Very high | Following the strict safety and health requirements, the likelihood of this risk should remain as low as possible. Rocket flight should approximately follow simulation predictions and data should be received consistently, including flight time, max height and max velocity.                                                                                                                                         |
| Rocket return injury                                       | Safety & health          | Very unlikely                            | Very high | Following the strict safety and health requirements, the likelihood of this risk should remain as low as possible. Various landing mitigations should be in place. The parachute with air friction and the probable landing zone. The parachutes should have various measures and testing to keep the deployment at a high probability success level. In addition, everyone is well distanced from the landing zone area. |
| Rocket loses communication within flight                   | Technical                | High                                     | Medium    | Testing the capability of various rocket ranges, turbulence simulations and height distance (if possible) should decrease the chances of communication loss. Exception handling/logs should programmed to report when, how and what error occurred during rocket being in-flight.                                                                                                                                         |
| Rocket refuses communication before launch                 | Technical                | High                                     | Medium    | If possible, data should have the capability to be run offline. If other teams and requirements allow this, there may be a bypass method for real-time data and other alterations with the go/no go assessment to ensure health and safety requirements are still upheld.                                                                                                                                                 |

For more information about the health and safety risks outlined here, follow the link in section 5.4 below

### 5.4 Health and Safety

Link to the document highlighting the health and safety aspects of this project:

https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/-/blob/master/health_and_safety/heatlh_and_safety.md

We will follow the following website [2] as a guide to conduct procedures to make sure that person(s) associated with this project stays safe from risks highlighted in the health_and_safety.md (the link above). More information found in the link above.

#### 5.4.1 Safety Plans

Safety Plans may be required for some projects, depending on project requirements.

| **Risk**                                  | **Safety Plan**                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| High Wind Speeds                          | The weather condition will be assessed through multiple sources prior to the launch. A judgement call will be made by the team based on the data available at the time. Launch will not take place during these conditions                                                                                                                                                                                          |
| Low Visibility                            | If there is more than 50% cloud coverage or other objects obscuring view, less than 8km horizontal visibility, or it is night time. The launch will not take place.                                                                                                                                                                                                                                                 |
| Combustion                                | The rocket will only launch if the launcher incorporates a blast defector device to prevent impinging on flammable materials. As a team, we will also check that the rocket includes a previously tested ignition scheme which has demonstrated capability of igniting all rocket motors intended for launch                                                                                                        |
| Explosion                                 | The rocket will only launch if it has no flammable or explosive payload inside. This will prevent the rocket to enter into an explosive state.                                                                                                                                                                                                                                                                      |
| Rocket Falling Over                       | The rocket will only be launched if there is a recovery system such as a streamer or parachute to ensure that the rocket can return safely and undamaged once launched. Also it will be checked if the wadding in the rocket is fireproof, if not then the rocket will not be launched                                                                                                                              |
| Rocket Not Flying Straight                | Before launch, we will organise a plan to specify the positions of everyone involved in the launch. The stability of the rocket will also be checked before launch, and a warning will be made to possible spectators to spectating at a safe distance.                                                                                                                                                             |
| Unsuccessful Launch                       | Before launch, there will be a high amount of testing done to ensure that launch is successful. This means making sure there are no issues with the system which would cause the launch to fail.                                                                                                                                                                                                                    |
| Collision with Property and/or Persons    | A plan will be organised so that people involved in the launch are standing at a safe distance from the launcher. A warning will be made to any possible spectators so that they are spectating at a safe distance. The rocket will only be launched if there are not any obstacles/targets in the way of launch, and that there is a recovery system within the rocket to prevent it to fall when fuel is run out. |
| Eye Damage                                | Launchers will be placed so that the end of the launch rod is above eye level. Also people near the launch will be required to wear safety goggles.                                                                                                                                                                                                                                                                 |
| Moderate to Severe Burns                  | A plan will be set in place so that the people involved in the launch are at a safe distance. A warning will also be made to spectators so that they are spectating at a safe distance. Launch will not take place unless a radius of at least 3m from the launcher is clear of brown grass, dry weeds or other easy to burn materials that are likely to be ignited by the exhaust of the rocket                   |
| Interference with Aerodrome and/or Planes | We will not launch the rocket into clouds and check for near aeroplanes to ensure that the rocket is launch-able. The mission control system will also include a function which will detect things like aeroplanes or aerodromes so that we ensure with more certainty whether launch can take place or not.                                                                                                        |

## 6. Appendices

### 6.1 Assumptions and dependencies

Below is a list of the assumptions for this project listed in ascending priority order \[3\]:

- Level 2 lifted: The current lock-down level will be lifted as some point making it safe for practical applications of the software
- Performance of developing equipment: the team has access to all necessary developing hardware and software they need
- Human resource availability: All key project team members are available and have the necessary skills and knowledge to work on the project.
- Scheduling accuracy: The set deadlines and milestones are achievable and the project can be finished on time.
- Budget availability: The determined budget is accurate and covers all project expenses.
- ECS support: we will have the support and buy-in from the customer and tutor, who will back you up when issues arise.

### 6.2 Acronyms and abbreviations

- **MC** or MCS (Mission Control or Mission Control System/Software): Reference to Mission Control's part in the project (our team's part).
- **DD**: Test-driven development
- **CAA**: Civil Aviation Authority
- **IEEE**: The Institute of Electrical and Electronics Engineers
- **JSON**: JSON (JavaScript Object Notation) is a lightweight data-interchange format
- **LoRa**: low-power wide-area network protocol
- **UML** The Unified Modelling Language (UML)
- **XML**: Extensible Markup Language (XML) is a markup language

## 7. Contributions

| Team Member                | Section Contributions   |
| -------------------------- | ----------------------- |
| Elliott Andrews            | 2, 3.1, 4.2, 4.4                  |
| Binke Xu                   |                         |
| Sandy (Alexander Saunders) |                         |
| Jesse Wood                 | 4.1, 4.3, 4.5, 6.1, 6.2 |
| Mason Yi                   | 4.1, 4.3, 4.5           |
| Marcus Rathod              | 5.4, 5.4.1              |

---

<!--## Formatting Rules -->

<!-- * Write your document using [Markdown](https://gitlab.ecs.vuw.ac.nz/help/user/markdown#gitlab-flavored-markdown-gfm) in your team's GitLab repository.-->
<!-- * Major sections should be separated by a horizontal rule.-->

<!--## Assessment -->

<!--This document will be weighted at 20% on the architectural proof-of-concept(s), and 80% on the architecture design.-->

<!--The proof-of-concept will be assessed for coverage (does it demonstrate all the technologies needed to build your project?) and quality (with an emphasis on simplicity, modularity, and modifiability).-->

<!--The document will be assessed by considering both presentation and content. Group and individual group members will be assessed by identical criteria, the group mark for the finished PDF and the individual mark on the contributions visible through `git blame`, `git diff`, file histories, etc. -->

<!--The presentation will be based on how easy it is to read, correct spelling, grammar, punctuation, clear diagrams, and so on.-->

<!--The content will be assessed according to its clarity, consistency, relevance, critical engagement and a demonstrated understanding of the material in the course. We look for evidence these traits are represented and assess the level of performance against these traits. Inspection of the GitLab Group is the essential form of assessing this document. While being comprehensive and easy to understand, this document must be reasonably concise too. You will be affected negatively by writing a report with too many pages (far more than what has been suggested for each section above).-->

---
