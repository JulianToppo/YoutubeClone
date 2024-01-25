import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import VideoShowcase from './components/VideoShowcase/VideoShowcase';

function App() {
  return (
    <div className='relative'>
     <Header/>
     {/* <Sidebar/> */}
     <VideoShowcase/>
    </div>
  );
}

export default App;
