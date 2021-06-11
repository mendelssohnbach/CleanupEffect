import { ClickHandler } from './components/ClickHandler';
import Greeting from './components/Greeting';
import MapList from './components/MapList';
import Picture from './components/Picture';
import Role from './components/Role';

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Greeting />
      <Picture />
      <Role name="Jack" age={20}>
        React internal reference.
      </Role>
      <MapList />
      <ClickHandler />
    </div>
  );
}

export default App;
