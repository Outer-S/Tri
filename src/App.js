import { NavigationBar } from "./components/navigation";
import Discover from './components/Discover';
import Popular from './components/Popular';
import Footer from './components/Footer' ;


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Discover />
      <Popular/>
      <Footer />

    </div>
  );
}

export default App;
