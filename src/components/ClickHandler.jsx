const clickHandler = () => {
  alert('Hello world');
};

const attachHandler = (message) => alert(message);

const eventHandler = (e) => alert(e.target);

export const ClickHandler = () => {
  return (
    <div>
      <h1>Welcome my World</h1>
      <button onClick={clickHandler}>Good Day!</button>
      <button onClick={() => alert('Good morning')}>Say Hi!</button>
      <button onClick={() => attachHandler('Make your code')}>Enjoy React</button>
      <button onClick={() => eventHandler('aaa')}>Say hello</button>
    </div>
  );
};
