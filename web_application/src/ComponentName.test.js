
// ComponentName.test.js

//Uses npm i --save-dev enzyme enzyme-adapter-react-16
import React from 'react';
import Adapter from 'enzyme-adapter-react-16.1';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

import ComponentName from './ComponentName';
it("should render initial layout", () => {
    // when
    const component = shallow(<ComponentName />);
    // then
    expect(component.getElements()).toMatchSnapshot();
 });
 