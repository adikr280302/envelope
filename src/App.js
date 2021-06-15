import { CSSTransition,Transition} from 'react-transition-group';
import { Fragment,useState } from 'react';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './App.css';
import { red } from '@material-ui/core/colors';
function App() {

  const [start,kick] = useState(false);
  function kicker(){
    kick(true);
    doner(false);
  }
  const [start2,kick2] = useState(false);
  const [done,doner] = useState(true);
  function removeCover(){
    console.log("entered");
    setTimeout(() => {
      console.log("kickedoff");
      kick(false);
    }, 3000)
    setTimeout(()=>{
      console.log("current time must be now");
      kick2(true);
    },6000);
  }
  return (
      <Fragment>
        {done && <Button variant="outlined" onClick={kicker} color="secondary">PRESS ME!!</Button>}
        <CSSTransition in={start} onEntered={removeCover} onExited={console.log("finshed")} timeout={3000} mountOnEnter unmountOnExit classNames="cover-animation">
                <div id="cover-container" className="container-s">
                  <div className="cover"><div>TO,<div>XXXX</div></div></div>
                </div>
          </CSSTransition>   
      <Transition in={start2} timeout={0} mountOnEnter>
            <div className="container">
              <div id="flipper" className="top-half"/>
              <div className="lower-half"/>
              <div className="left-half"/>
              <div className="right-half"/>
              <div className="behind"></div>
              <div id="greeting" className="card"> <div>THANK YOU! </div><FavoriteIcon style ={{color:red}}fontSize="large" /></div>
            </div>
            </Transition>
      </Fragment>      
            );
}

export default App;
