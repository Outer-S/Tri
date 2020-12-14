import { NavigationBar } from "./components/navigation";
import Discover from './components/Discover';
import Popular from './components/Popular';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Discover />
      <Popular/>

    </div>
  );
}

export default App;
