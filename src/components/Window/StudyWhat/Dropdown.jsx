import { useEffect, useState } from "react";
import './assets/Dropdown.css';

const Dropdown = ({ options, type, handle_unit, filled_type }) => {
  const [selectedOption, setSelectedOption] = useState("select");
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    setFilled(filled_type);
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    handle_unit(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <label htmlFor="dropdown" className="dropdown_type">{type}</label>
      <select
        className={filled ? "dropdown unFilled" : "dropdown"}
        value={selectedOption}
        onChange={(e) => {
          handleOptionChange(e);
          setFilled(false);
        }}
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