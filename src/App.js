import logo from './logo.png';
//import './assets/imgaes/logo.png';
import './assets/css/style.css';
import Header from './layout/header/header';
import Banner from './layout/banner/banner';
import Section from './layout/section/section';
import Expert from './layout/experts/expert';


function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Banner/>
      <Section/>
      <Expert/>
	  
    </div>
  );
}

export default App;
