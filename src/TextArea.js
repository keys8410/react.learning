import React from 'react';

const TextArea = () => {
  const [text, setText] = React.useState('');
  return (
    <form>
      <textarea
        value={text}
        onChange={({ target }) => setText(target.value)}
        name=""
        id=""
        cols="30"
        rows="10"
      />

      <br />
      <p>{text}</p>
    </form>
  );
};

export default TextArea;
