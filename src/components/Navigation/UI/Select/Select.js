import React from 'react'

const style = {
    display: "block",
    boxSizing: "border-box",
    border: "1px solid #bebebe",
    margin: "0 0 5px",
    height: "29px",
    width: "100%",
    outline: "none,",
    transition: "all 300ms ease-in-out",
}

const Select = props => {
    const htmlFor = `${props.label}-${Math.random()}`
    return (
      <div className="Select">
        <label htmlFor={htmlFor}>{props.label}</label>
        <select
          style={style}
          id={htmlFor}
          value={props.value}
          onChange={props.onChange}
        >
          {props.options.map((option, index) => {
            return (
              <option value={option.value} key={index}>
                {option.text}
              </option>
            );
          })}
        </select>
      </div>
    );
}

export default Select