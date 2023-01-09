import EmergencyPage from '../presentational/emergency'
import { useState, useEffect } from 'react';
import useSound from 'use-sound'
import emergency_intro from '../sounds/emergency_intro.mp3'
import heigh_severity from '../sounds/heigh_severity.mp3'
import low_severity from '../sounds/low_severity.mp3'
import medium_severity from '../sounds/medium_severity.mp3'


function EmergencyInputPage() {

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    )

    const [loaded, setLoaded] = useState(false)
    const [playEmergencyIntro, { stop }] = useSound(emergency_intro, {
        interrupt: true,
        onend: () => { setLoaded(true)}
    })
    const [playLowSeverity] = useSound(low_severity);
    const [playMediumSeverity] = useSound(medium_severity);
    const [playHighSeverity] = useSound(heigh_severity);
    const [selectedSeverity, setSelectedSeverity] = useState({
        selected:""
    })

    const onMouseDown = async (event) => {
/*        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        })*/
        stop();
        console.log(loaded)
        if (event.clientY * 1 < 250) {
            playLowSeverity();
            if (selectedSeverity.selected === "low") {
                await delay(2500)
                    window.location.assign("/confirm/low");
                } else {
                    console.log("am ajuns aici")
                     setSelectedSeverity({
                        selected: "low"
                    })
                }
            } else {
            if (event.clientY * 1 < 450) {
                playMediumSeverity();
                if (selectedSeverity.selected === "medium") {
                    await delay(2500)
                        window.location.assign("/confirm/medium");
                    } else {
                        setSelectedSeverity({
                            selected: "medium"
                        })
                    }
            } else {
                playHighSeverity();
                if (selectedSeverity.selected === "high") {
                    await delay(2500)
                        window.location.assign("/confirm/high");
                    } else {
                        setSelectedSeverity({
                            selected: "high"
                        })
                    }
                }
            }
    }

    useEffect(() => {
        window.addEventListener("mousedown", onMouseDown)
        return () => {
            window.removeEventListener(
                "mousedown", onMouseDown
            )
        };
    }, [selectedSeverity]);

    useEffect(() => {
        playEmergencyIntro();
    }, [playEmergencyIntro])


    return (<EmergencyPage />)

}

export default EmergencyInputPage;


