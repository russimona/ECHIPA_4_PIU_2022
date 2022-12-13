import { BsArrowRepeat } from "react-icons/bs"
import '../styling/principal_menu.css'
import useSound from 'use-sound'
import one from '../sounds/one.mp3'
import zero from '../sounds/zero.mp3'
import two from '../sounds/two.mp3'
import three from '../sounds/three.mp3'
import four from '../sounds/four.mp3'
import five from '../sounds/five.mp3'
import six from '../sounds/six.mp3'
import seven from '../sounds/seven.mp3'
import eight from '../sounds/eight.mp3'
import nine from '../sounds/nine.mp3'
import repeat from '../sounds/repeat.mp3'
import emergency from '../sounds/emergency.mp3'

const MainMenu = () => {
    const [playOne] = useSound(one);
    const [playZero] = useSound(zero);
    const [playTwo] = useSound(two);
    const [playThree] = useSound(three);
    const [playFour] = useSound(four);
    const [playFive] = useSound(five);
    const [playSix] = useSound(six);
    const [playSeven] = useSound(seven);
    const [playEight] = useSound(eight);
    const [playNine] = useSound(nine);
    const [playRepeat] = useSound(repeat);
    const [playEmergency] = useSound(emergency);

    return (
        <div className="content">
            <nav className="title-section">
                <p className="title">Be my eyes</p>
            </nav>
            <div className="menu-section">
                <div className="buttons-group" >
                    <button id="1" className="button b1" onClick={playOne} >1</button>
                    <button id="2" className="button b2" onClick={playTwo}>2</button>
                    <button id="3" className="button b3" onClick={playThree}>3</button>
                </div>
                <div className="buttons-group" >
                    <button id="4" className="button b4" onClick={playFour}>4</button>
                    <button id="5" className="button b5" onClick={playFive}>5</button>
                    <button id="6" className="button b6" onClick={playSix}>6</button>
                </div>
                <div className="buttons-group">
                    <button id="7" className="button b7" onClick={playSeven}>7</button>
                    <button id="8" className="button b8" onClick={playEight}>8</button>
                    <button id="9" className="button b9" onClick={playNine}>9</button>
                </div>
                <div className="buttons-group">
                    <button id="restart" className="button bres" onClick={playRepeat}><BsArrowRepeat /></button>
                    <button id="0" className="button b0" onClick={playZero}>0</button>
                    <button id="emergency" className="button bem" onClick={playEmergency}>!</button>
                </div>
            </div>
        </div>
    );
};

export default MainMenu