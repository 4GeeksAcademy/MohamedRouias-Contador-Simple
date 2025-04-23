import React from 'react'
import PropTypes from "prop-types";


const Digit = (props) => {
    let digitStyle = {
        width: "14rem"
    }
    return (
        <>
            <div className="sixth">
                {props.digitSixth % 10}
            </div>
            <div className="fifth">
                {props.digitFifth % 10}
            </div>
            <div className="fourth">
                {props.digitFourth % 10}
            </div>
            <div className="third">
                {props.digitThird % 10}
            </div>
            <div className="second">
                {props.digitSecond % 10}
            </div>
            <div className="first">
                {props.digitFirst % 10}
            </div>
        </>
    );

};

Digit.PropTypes = {
    digitSixth: PropTypes.number,
    digitFifth: PropTypes.number,
    digitFourth: PropTypes.number,
    digitThird: PropTypes.number,
    digitSecond: PropTypes.number,
    digitFirst: PropTypes.number,
}


export default Digit;
