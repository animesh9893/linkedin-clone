import './home/home.css';
import SideBar from './home/sidebar/sidebar';
import Main from './home/main/main';

function Home() {


  return (
    <div className="home-window">
      <div className="main-content">
        <div className="sidebar"><SideBar/></div>
        <div className="main-bar"><Main /></div>
        <div className="asidebar">aSidebar</div>
      </div>
    </div>
  );
}

export default Home;

