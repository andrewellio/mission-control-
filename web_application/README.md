# Web Application

Mission Control Interface made using React.

## Install

This install the libraries for a local machine.

```bash
$ npm install
```

## Run

We can run the application on a local server.

```bash
$ npm start
```

## Test

Once test are written, they can be run with:

```bash
$ npm test
```

## CI

Uninstalls the node modules, and reinstalls them on a clean build.

```bash
$ npm CI
```

## Offline usage

In order to use the application offline extra installation is needed in order to load an offline map onto the dashboard. It displays the Mapfile through the WMS service using Leaflet when there is no internet connection.

### Prerequisites

There are some pre-requisites required to run a MapServer. These include a server to server hosted on localhost and utility scripts needed to run `mapserv`. The following packages are needed:

- apache2
- cgi-bin
- cgi-mapserver

Apache2 needs to be configured to run cgi-bin.
[Instructions found here](https://code-maven.com/set-up-cgi-with-apache)

### Configuration

In the Offline component in the `Map.js` class there is a variable called map-file. This needs to be set to location of your map-file on your local machine.
