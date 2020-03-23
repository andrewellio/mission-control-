# Mission Control Interface

We are creating an interface to display information and data received from a
rocket, based around this brief:

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