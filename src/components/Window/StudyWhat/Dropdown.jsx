import { useState } from "react";
import './assets/Dropdown.css';

const Dropdown = ({ options, type, handle_option, disable_val }) => {
  const [selectedOption, setSelectedOption] = useState("select");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    handle_option(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <label htmlFor="dropdown" className="dropdown_type">{type}</label>
      <select
        className="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
        disabled={!disable_val}
      >
        <option hidden value={"Select " + type}>
          Select {type.toLowerCase()}
        </option>
        {
          options.map((option) => {
            return (
              <option value={option}>{option}</option>
            )
          })
        }
      </select>
    </div>
  );
}

export default Dropdown;