Elliott Andrews 

Resource from NWEN 243 2019 Victoria University of Wellington (Educational use only)

This is the readme to setup the webserver client that reads weather parameters

It has been tested to run in Eclipse but should run in other IDE's


Follow instructions from [here](https://beginnersbook.com/2017/06/how-to-configure-apache-tomcat-server-in-eclipse-ide/) to install Apache Tomcat

This web server uses Tomcatv6 but may work with newer versions

1. Download and install contents [Tomcat v6.0.53](https://archive.apache.org/dist/tomcat/tomcat-6/v6.0.53/bin/) save in a good location (e.g. programfiles)
2. Download and install server for Eclipse [Tomcat Adapter](https://beginnersbook.com/2017/06/solution-no-apache-tomcat-adapter-option-in-eclipse-ide/)
3. Import the java folder 'MyWebServer' through the method 'Import Projects from File System or Archive'
4. This should appear a new project 'MyWebService', make sure that Apace Tomcat v6.0 and JRE System Library are both within the project
5. You may notice a 'need solutions' dialogue page, you should continue with 'show solutions and install the 'Java Enterpise Web Development'
6. After this you should have three libraries, an extra one called 'Web App Libraries (also the project icon should show a little web globe icon)
7. Remove any servers under the 'Servers' tab
3. Create a new server with the new servers tab > (right click) > New > Server
4. Under Apache > Select Tomcat v6.0 Server > (Next)
5. Browse to where you installed Tomcat in step 1 > (Next)
6. Add the MyWebService resource from Avaliable to Configured > (Finish)
7. The server should be properly installed if you can click on the server drop down arrow thats shows 'MyWebService'

You must first start the webserver (Run on Server) from WebserverClient.java (the localhost and webpage should show)

Then run the application also from the same WebserverClient.java

Enter required infomation and should display realtime data (currently only implemented in console as text)
