import NavBar from '../../molecules/NavBar/NavBar';
import Fylo from '../Fylo/Fylo';
import GetStarted from '../GetStarted/GetStarted';
import SignUp from '../SignUp/SignUp';
import Footer from '../Footer/Footer';

const DisplayContent = () => {
    return (
      <>
        <NavBar />
        <GetStarted />
        <Fylo />
        <SignUp />
        <Footer />
      </>
    );
};
  
  



export default DisplayContent;
