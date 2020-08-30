import React from 'react';

const Checkbox = ({ options, value, setValue, ...props }) => {
  const handleChange = ({ target }) => {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((itemValue) => itemValue !== target.value));
    }
  };
  return (
    <>
      {options.map((option) => (
        <label
          htmlFor={option}
          key={option}
          style={{ textTransform: 'capitalize' }}
        >
          <input
            type="checkbox"
            name={option}
            id={option}
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
