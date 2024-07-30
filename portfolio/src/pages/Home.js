import '../App.css';
import Header from '../components/Header';
import ContentCard from '../components/ContentCard';
import IconFerrisWheel from '../components/IconFerrisWheel';

export const Home = () => {
    return (
        <div className="App">
          <div id='banner'><Header/></div>
          <div id='card'><ContentCard/></div>
          <IconFerrisWheel/>
        </div>
      );
}