/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import EventWidget from "src/components/event-widget";

describe("components/event-widget", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<EventWidget />);
      expect(component).to.not.be.null;
    });

  });

});
