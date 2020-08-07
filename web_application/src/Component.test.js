//const weather = require("./Weather");
//const { default: WeatherProvider } = require("./Weather");

// ComponentName.test.js

import React from 'react';
import Adapter from 'enzyme-adapter-react-16.1';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

import ComponentName from './ComponentName';

describe("ComponentName", () => {
  it("should render my component", () => {
    const wrapper = shallow(<ComponentName />);
  });
});


