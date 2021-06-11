import PropTypes from 'prop-types';

const people = [
  { id: 1, name: 'Jack', age: 22 },
  { id: 2, name: 'Peter', age: 33 },
  { id: 3, name: 'John', age: 44 },
];

const MapList = () => {
  return people.map((person) => {
    return <Person key={person.id} {...person} />;
    // return <Person key={person.id} name={person.name} age={person.age} />;
  });
};

const Person = ({ name, age }) => {
  return (
    <h1>
      Name: {name} : Age: {age}
    </h1>
  );
};

Person.propsTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  age: PropTypes.number,
};

Person.defaultProps = {
  id: 100,
  name: 'John Doe',
  age: 0,
};

export default MapList;
