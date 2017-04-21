import React, {PropTypes} from "react";
import * as eventsActions from "../actions/events";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {IntlProvider} from "react-intl";

class HomeContainer extends React.Component {
  render() {
    return (
      <IntlProvider locale="de">
        <div>
          {React.cloneElement(this.props.children)}
        </div>
      </IntlProvider>
    );
  }
}

export default connect(
  (state) => ({
    events: state.events,
  }),
  (dispatch) => ({
    ...bindActionCreators(eventsActions, dispatch)
  })
)(HomeContainer);
