import { useEffect, useState } from 'react';

function IncreaseValue() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    document.title = `New value: ${value}`;
  }, [value, setValue]);

  return (
    <div>
      <button onClick={() => setValue(value + 1)}>PLUS</button>
    </div>
  );
}

export default IncreaseValue;
