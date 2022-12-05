import '../styling/emergency_page.css'

const EmergencyPage = () => {
    return (
        <div className="content-emergency">
            <div className="title-section-emergency">
                <p className="title-emergency">Emergency</p>
            </div>
                <div className="emergency-input-presenter">
                    <p className="low-emergency">Low</p>
                    <p className="high-emergency">High</p>
                </div>
        </div>
    );
};

export default EmergencyPage;