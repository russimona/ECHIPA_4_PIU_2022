import { BsArrowRepeat } from "react-icons/bs"
import { BsCheck2 } from 'react-icons/bs'
import '../styling/principal_menu.css'
import '../styling/routes_menu.css'
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
import confirm from '../sounds/confirm.mp3'

const RoutesMenu = ({ onButtonClicked, d }) => {
    const [playOne] = useSound(one, { interrupt: true });
    const [playZero] = useSound(zero, { interrupt: true });
    const [playTwo] = useSound(two, { interrupt: true });
    const [playThree] = useSound(three, { interrupt: true });
    const [playFour] = useSound(four, { interrupt: true });
    const [playFive] = useSound(five, { interrupt: true });
    const [playSix] = useSound(six, { interrupt: true });
    const [playSeven] = useSound(seven, { interrupt: true });
    const [playEight] = useSound(eight, { interrupt: true });
    const [playNine] = useSound(nine, { interrupt: true });
    const [playRepeat] = useSound(repeat, { interrupt: true });
    const [playConfirm] = useSound(confirm, { interrupt: true });

    return (
        <div className="routes_content">
            <nav className="title-section_routes">
                <p className="title_routes">Travel Options</p>
            </nav>
            <audio src="repeat" autoPlay="true" className="audio" />
            <div className="menu-section">
                <div className="buttons-group" >
                    <button id="1" className="button b1r br" disabled={d} onClick={e => { playOne(); onButtonClicked(e.target.id) }} >1</button>
                    <button id="2" className="button b2r br" disabled={d} onClick={e => { playTwo(); onButtonClicked(e.target.id) }}>2</button>
                    <button id="3" className="button b3r br" disabled={d} onClick={e => { playThree(); onButtonClicked(e.target.id) }}>3</button>
                </div>
                <div className="buttons-group" >
                    <button id="4" className="button b4r" disabled={d} onClick={e => { playFour(); onButtonClicked(e.target.id) }}>4</button>
                    <button id="5" className="button b5r" disabled={d} onClick={e => { playFive(); onButtonClicked(e.target.id) }}>5</button>
                    <button id="6" className="button b6r" disabled={d} onClick={e => { playSix(); onButtonClicked(e.target.id) }}>6</button>
                </div>
                <div className="buttons-group">
                    <button id="7" className="button b7r br" disabled={d} onClick={e => { playSeven(); onButtonClicked(e.target.id); }}>7</button>
                    <button id="8" className="button b8r br" disabled={d} onClick={e => { playEight(); onButtonClicked(e.target.id) }}>8</button>
                    <button id="9" className="button b9r br" disabled={d} onClick={e => { playNine(); onButtonClicked(e.target.id) }}>9</button>
                </div>
                <div className="buttons-group">
                    <button id="restart" className="button bresr br" disabled={d} onClick={e => { playRepeat(); onButtonClicked(e.target.id) }}><BsArrowRepeat /></button>
                    <button id="0" className="button b0r br" disabled={d} onClick={e => { playZero(); onButtonClicked(e.target.id) }}>0</button>
                    <button id="confirm" className="button bemr br" disabled={d} onClick={e => { playConfirm(); onButtonClicked("confirm") }}><BsCheck2/></button>
                </div>
            </div>
        </div>
    );
};

export default RoutesMenu