import '../App.css';
import Header from '../components/Header';
import CertList from '../components/CertList';

export const Certs = () => {
    return (
       <div className='App'>
            <div id='banner'><Header/></div>
            <CertList/>
       </div>
    );
}