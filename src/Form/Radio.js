import React from 'react';

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map((option) => (
        <label
          key={option}
          htmlFor={option}
          style={{ textTransform: 'capitalize' }}
        >
          <input
            type="radio"
            name={option}
            value={option}
            id={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Radio;
