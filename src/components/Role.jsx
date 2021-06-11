function Role({ name, age, children }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <p>{children.toUpperCase()}</p>
    </div>
  );
}

Role.TypeProps = {
  name: 'John Done',
  age: 0,
  children: undefined,
};

export default Role;
