import MainMenu from '../presentational/principal_menu.js'
import { useState, useEffect } from 'react';
import useSound from 'use-sound'
import intro from '../sounds/intro.mp3'


function BlindMenu() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [hadPlayed, setHadPlayed] = useState(true);
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    )

    const [playIntro, { stop }] = useSound(intro, {
        onplay: () => {
            setIsPlaying(true);
            setHadPlayed(false)
        },
        onend: () => setIsPlaying(false)
    })

    const [buttonClicks, setButtonClicks] = useState({
        pressedButton: -1,
        pressedTimes: 0
    })

    const onButtonClicked = async (value) => {
        if (isPlaying) {
            stop();
            setIsPlaying(false)
        }
        if (value === buttonClicks.pressedButton) {
            setButtonClicks({
                "pressedButton":value,
                "pressedTimes": buttonClicks.pressedTimes + 1
            })
            if (buttonClicks.pressedButton === "restart") {
                setButtonClicks({
                    "pressedButton": "",
                    "pressedTimes": buttonClicks.pressedTimes + 1
                })
                await delay(500)
                playIntro()
            } else {
                await delay(1100)
                if (buttonClicks.pressedButton === "emergency" || buttonClicks.pressedButton * 1 <= 6) {
                    window.location.assign("/confirm/" + value);
                }
            }
        } else {
            setButtonClicks({
                "pressedButton":value,
                "pressedTimes":1
            })
        }
    }

    useEffect(() => {
        playIntro()
    }, [playIntro]);

    return (<MainMenu onButtonClicked={onButtonClicked} d={hadPlayed}/>)
        
}

export default BlindMenu;





