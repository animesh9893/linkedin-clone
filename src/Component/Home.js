// import styled from 'styled-components'
import './home/home.css';
import SideBar from './home/sidebar';

// import useWindowSize from './context';


function Home() {

  // const [width,height]=useWindowSize();

  return (
    <div className="home-window">
      <div className="main-content">
        <div className="sidebar"><SideBar/></div>
        <div className="main-bar">Main</div>
        <div className="asidebar">aSidebar</div>
      </div>
    </div>
  );
}

export default Home;

