import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Weather from "./Weather";

configure({ adapter: new Adapter() });

describe("<Weather />  with no props", () => {
  const container = shallow(<Weather />);

  it("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  it("should have two input fields, latitude and longitude", () => {
    expect(container.find('input[type="int"]').length).toEqual(2);
  });

  it("should have kelburn park longitude as placeholder", () => {
    expect(container.find('input[id="lonId"]').prop("placeholder")).toEqual(
      "e.g. 174.7731"
    );
  });

  it("should have kelburn park latitude as placeholder", () => {
    expect(container.find('input[id="latId"]').prop("placeholder")).toEqual(
      "e.g. -41.2769"
    );
  });

  it("should have the correct props for the longitude field", () => {
    expect(container.find('input[id="lonId"]').props()).toEqual({
      id: "lonId",
      onChange: expect.any(Function),
      placeholder: "e.g. 174.7731",
      type: "int",
      value: 0
    });
  });

  it("should have the correct props for the longitude field", () => {
    expect(container.find('input[id="latId"]').props()).toEqual({
      id: "latId",
      onChange: expect.any(Function),
      placeholder: "e.g. -41.2769",
      type: "int",
      value: 0
    });
  });

  it("should have three buttons", () => {
    expect(container.find("button").length).toEqual(3);
  });

  it("should have an initial longitude of 0 degrees", () => {
    expect(container.find('input[id="lonId"]').prop("value")).toEqual(0);
  });

  it("should have an initial latitude of 0 degrees", () => {
    expect(container.find('input[id="latId"]').prop("value")).toEqual(0);
  });

  it("should update the latitude on a change event", () => {
    container.find('input[id="lonId"]').simulate("change", {
      target: {
        value: 100
      }
    });
    expect(container.find('input[id="lonId"]').prop("value")).toEqual(100);
  });

  it("should update the latitude on a change event", () => {
    container.find('input[id="latId"]').simulate("change", {
      target: {
        value: 100
      }
    });
    expect(container.find('input[id="latId"]').prop("value")).toEqual(100);
  });
});
