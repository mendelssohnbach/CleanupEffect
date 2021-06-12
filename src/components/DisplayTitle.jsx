import { useState } from 'react';

const DisplayTitle = () => {
  const [title, setTitle] = useState('This is the Title');

  const handleClick = () => setTitle('New Title');
  return (
    <div>
      <h1>{title}</h1>
      <button type="button" onClick={handleClick}>
        Change Title
      </button>
    </div>
  );
};

export default DisplayTitle;
