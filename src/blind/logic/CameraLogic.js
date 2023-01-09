import CameraPage from '../presentational/camera'
import { useEffect, useState } from 'react';
import defaultImage from "../images/camera.png"
import { FastAverageColor } from 'fast-average-color';
import { GetColorName } from 'hex-color-to-color-name';
import detect_color_intro from '../sounds/detect_color_intro.mp3'
import detect_food_product from '../sounds/intro_detectfoodproducts.mp3'
import food_product from '../sounds/food_product.mp3'
import detect_banknote from '../sounds/intro_detect_banknote.mp3'
import bancknote_name from '../sounds/banknote_name.mp3'
import useSound from 'use-sound'
import { useParams } from "react-router-dom";

function CameraLogic() {

    const [cameraImage, setImage] = useState({
        url : defaultImage
    })

    const [finishedIntro, setFinished] = useState({
        disabled:true
    })

    const [playDetectColorIntro] = useSound(detect_color_intro,{
        onend: () => setFinished({"disabled":false})
    })

    const [playDetectFoodIntro] = useSound(detect_food_product, {
        onend: () => setFinished({ "disabled": false })
    })

    const [playFoodProduct] = useSound(food_product, {
        onend: () => window.location.assign("/confirm/repeatDetectFood")
    })

    const [playDetectBanknoteIntro] = useSound(detect_banknote, {
        onend: () => setFinished({ "disabled": false })
    })

    const [playBanknoteName] = useSound(bancknote_name, {
        onend: () => window.location.assign("/confirm/repeatDetectBanknote")
    })

    const { action } = useParams();

    const onChange = (e) => {
        setImage({
            "url": URL.createObjectURL(e.target.files[0])
        })
        if (action === "detectColor") {
            let fac = new FastAverageColor();
            fac.getColorAsync(URL.createObjectURL(e.target.files[0])).then(
                color => {
                    console.log(color)
                    let synth = window.speechSynthesis
                    let ourText = "The color of the object you took a picture of is " + GetColorName(color.hex.replace("#", ""))
                    let utterThis = new SpeechSynthesisUtterance(ourText)
                    var filteredVoices = speechSynthesis.getVoices().filter(function (voice) {
                        return voice.name === 'Google UK English Female' || voice.name.includes("Jenny")//voice.default===true 6;
                    });
                    if (!filteredVoices.length) {
                        filteredVoices = speechSynthesis.getVoices().filter(function (voice) {
                            return voice.default === true;
                        });
                    };
                    console.log(filteredVoices)
                    utterThis.voice = filteredVoices[0];
                    utterThis.onend = function (event) {
                        window.location.assign("/confirm/repeatDetectColor")
                    };
                    synth.speak(utterThis)
                }
            )
        }
        if (action === "detectFood") {
            playFoodProduct()
        }
        if (action === "detectBanknote") {
            playBanknoteName()
        }
    }

    useEffect(() => {
        if (action === "detectColor") {
            playDetectColorIntro()
        }
        if (action === "detectFood") {
            playDetectFoodIntro()
        }
        if (action === "detectBanknote") {
            playDetectBanknoteIntro()
        }
    }, [playDetectBanknoteIntro,playDetectFoodIntro,playDetectColorIntro]);

    return (<CameraPage onChange={onChange} cameraImage={cameraImage.url} d={finishedIntro.disabled} />)

}

export default CameraLogic;




