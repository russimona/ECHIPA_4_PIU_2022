import { BsCheck2 } from 'react-icons/bs'
import '../styling/confirmation_page.css'

const ConfirmationPage = () => {
    return (
        <div className="content-confirm">
            <div className="title-section-conf">
                <p className="title-confirm">Confirm choice</p>
            </div>
            <button className="button-confirm x">X</button>
            <button className="button-confirm v"><BsCheck2 /></button>
        </div>
    );
};
export default ConfirmationPage;