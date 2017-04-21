import React, {PropTypes, Component} from "react";
import Notifications from "react-notify-toast";

class Home extends Component {

    render() {
        const props = this.props;
        const {checked, value} = props;
        return (
            <div>
                {/**/}
                <Notifications />
                {/**/}
                <h1>Hello <a href={"https://github.com/electrode-io"}>{"Electrode"}</a></h1>
                <div>
                    <h2>Managing States with Redux</h2>
                    <label>
                        <input onChange={props.onChangeCheck} type={"checkbox"} checked={checked}/>
                        Checkbox
                    </label>
                    <div>
                        <button type={"button"} onClick={props.onDecrease}>-</button>
                        &nbsp;{value}&nbsp;
                        <button type={"button"} onClick={props.onIncrease}>+</button>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    checked: PropTypes.bool,
    value: PropTypes.number.isRequired
};
Home.defaultProps = {
    checked: false,
    value: 1
};

export default Home;