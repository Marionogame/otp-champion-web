// React
import React, { useRef } from "react";

// Libraries
import { Form, Select, Button } from "semantic-ui-react";
import { isEmpty } from "lodash";
import optionSearch from "./staticData";

// Styles
import styles from "./styles.module.css";
// interface IOptionSearch {
//   key: number;
//   text: string;
//   value: string;

// }

interface InputProps {
  isPassword: boolean;
  name: string;
  value: string;
  className: string;
  icon: string;
  disabled: boolean;
  rounded: boolean;
  onChange: () => {};
  onKeyPress: () => {};
  dropdown: {
    className: string;
    onChange: () => {};
    value: string;
  };
  fluid: boolean;
  big: boolean;
}

const InputOtp: React.FC<InputProps> = ({ name, value, className, icon, disabled, rounded, onChange, onKeyPress, dropdown, fluid, big }) => {
  const input = useRef(null);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    if (key === "Enter") {
      e.preventDefault();
    }
  };

  // const validProps = omit(props, ["ref", "icon", "children", "onKeyPress", "name", "value", "onChange", "disabled", "className", "rounded", "isPassword"]);

  return (
    <>
      <Form.Input
        className={`${styles.input} ${className}`}
        onChange={onChange}
        name={name}
        value={value}
        {...(isEmpty([]) ? { iconPosition: "left" } : {})}
        autoComplete="off"
        fluid={fluid}
        onKeyPress={onKeyPress || handleEnter}
        action>
        {!isEmpty([]) && <Select {...dropdown} options={optionSearch} />}
        {isEmpty([]) && !isEmpty(icon)}
        <input ref={input} />
      </Form.Input>
      <Select options={optionSearch} iconPosition="left" />
    </>
  );
};

export default InputOtp;
