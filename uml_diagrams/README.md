# Plant UML
The plantUML jar requires the `graphviz` package in order to run on Linux.

## Installation
Download the jar from the [internet](https://plantuml.com/download)

Install dependencies for Linux:
```bash
# Example for Debian Linux Distros
$ sudo apt-get install graphviz
```

## Usage
PlantUML can be used to generate a PNG as follows:
```bash
# Replace /path/to/file with the PlantUML file location
$ java -jar plantuml.jar /path/to/file
```
