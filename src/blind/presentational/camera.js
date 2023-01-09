import '../styling/camera.css'

const CameraPage = ({ onChange, cameraImage, d }) => {

    return (
        <div className="camera">
            <div className="image-upload">
                <label for="file-input" className="label-input">
                    <img className="camera_image" src={cameraImage} />
                </label>
                <input disabled={d} id="file-input" className="file-input" type="file" capture="user" accept="image/*" onChange={onChange} />
            </div>
        </div>
    );
};

export default CameraPage;
