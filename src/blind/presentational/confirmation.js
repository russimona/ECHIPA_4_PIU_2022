import { BsCheck2 } from 'react-icons/bs'
import '../styling/confirmation_page.css'
import yes from '../sounds/yes.mp3'
import no from '../sounds/no.mp3'
import useSound from 'use-sound';

const ConfirmationPage = ({ d, onButtonClicked }) => {

    const [playNo] = useSound(no)
    const [playYes] = useSound(yes)

    return (
        <div className="content-confirm">
            <div className="title-section-conf">
                <p className="title-confirm">Confirm choice</p>
            </div>
            <button disabled={d} onClick={e => { playNo(); onButtonClicked("no") }} className="button-confirm x">X</button>
            <button disabled={d} onClick={e => { playYes(); onButtonClicked("yes") }} className="button-confirm v"><BsCheck2 /></button>
        </div>
    );
};
export default ConfirmationPage;