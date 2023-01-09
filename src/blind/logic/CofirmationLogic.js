import ConfirmationPage from '../presentational/confirmation.js'
import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import { useParams } from "react-router-dom";
import confirm_emergency from '../sounds/confrim_emergency.mp3'
import confirm_high_severity from '../sounds/confirm_high_severity.mp3'
import confirm_low_severity from '../sounds/confirm_low_severity.mp3'
import confirm_medium_severity from '../sounds/confirm_medium_severity.mp3'
import confirm_predetermined_routes from '../sounds/confirm_predetermined_routes.mp3'
import confirm_detectcolor from '../sounds/confirm_findcolor_2.mp3'
import confirm_detectfood from '../sounds/confirm_detectfoodproduct_2.mp3'
import confirm_detectbanknotes from '../sounds/confirm_findbanknote_1.mp3'
import confirm_repeataction from '../sounds/confirm_repet_action.mp3'
import confirm_orderfood from '../sounds/confirm_orderfood.mp3'
import plublic_transport from '../sounds/random_bus.mp3'
import confirm_plublic_transport from '../sounds/confirm_publictransport.mp3'
import eventBus from '../notification/EventBus'

function CofirmationMenu() {

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    )

    const { option } = useParams();

    const [hadFinished,setFinished] = useState(true)

    const [playEmergencyConfirmation] = useSound(confirm_emergency, {
        interrupt: true,
        onend: () => setFinished(false)
    });

    const [playPublicTransport] = useSound(plublic_transport, {
        onplay: () => {
            setFinished(true)
        },
        onend: () => window.location.assign("/confirm/repeatTransport")
    });

    const [playConfirmRoutes] = useSound(confirm_predetermined_routes, {
        interrupt: true,
        onend: () => setFinished(false)
    });

    const [playConfirmRepeatAction] = useSound(confirm_repeataction, {
        interrupt: true,
        onend: () => setFinished(false)
    });


    const [playConfirmHighSeverity] = useSound(confirm_high_severity, {
        interrupt: true,
        onend: () => setFinished(false)
    });

    const [playConfirmLowSeverity] = useSound(confirm_low_severity, {
        interrupt: true,
        onend: () => setFinished(false)
    });

    const [playConfirmMediumSeverity] = useSound(confirm_medium_severity, {
        interrupt: true,
        onend: () => setFinished(false)
    });

    const [playConfirmOrderFood] = useSound(confirm_orderfood, {
        interrupt: true,
        onend: () => setFinished(false)
    });

    const [playConfirmdDetectColor] = useSound(confirm_detectcolor, {
        interrupt: true,
        onend: () => setFinished(false)
    });

    const [playConfirmDetectFood] = useSound(confirm_detectfood, {
        interrupt: true,
        onend: () => setFinished(false)
    });

    const [playConfirmDetectBankotes] = useSound(confirm_detectbanknotes, {
        interrupt: true,
        onend: () => setFinished(false)
    });

    const [playConfirmPublicTransport] = useSound(confirm_plublic_transport, {
        interrupt: true,
        onend: () => setFinished(false)
    });

    const [buttonClicks, setButtonClicks] = useState({
        pressedButton: -1,
        pressedTimes: 0
    })

    const onButtonClicked = async (value) => {
        if (value === buttonClicks.pressedButton) {
            setButtonClicks({
                "pressedButton": value,
                "pressedTimes": buttonClicks.pressedTimes + 1
            })
            if (buttonClicks.pressedButton === "yes") {
                await delay(1100)
                if (option === "emergency") {
                    window.location.assign("/emergency")
                }
                if (option === "1") {
                    window.location.assign("/travel")
                }
                if (option === "2") {
                    window.location.assign("/camera/detectColor")
                }
                if (option === "repeatDetectColor") {
                    window.location.assign("/camera/detectColor")
                }
                if (option === "6") {
                    window.location.assign("/camera/detectFood")
                }
                if (option === "repeatDetectFood") {
                    window.location.assign("/camera/detectFood")
                }
                if (option === "4") {
                    window.location.assign("/camera/detectBanknote")
                }
                if (option === "repeatDetectBanknote") {
                    window.location.assign("/camera/detectBanknote")
                }
                if (option === "medium" || option === "low" || option === "high") {
                    eventBus.dispatch("emergencyNotification", { severity: option, user: "Jane Doe" });
                    window.location.assign("/blindMenu")
                }
                if (option === "3") {
                    window.location.assign("/orderfood")
                }

                if (option === "repeatPredeterminedRoutes") {
                    window.location.assign("/travel")
                }

                if (option === "5") {
                   playPublicTransport()
                }
                if (option === "repeatTransport") {
                    playPublicTransport()
                }

            }
            if (buttonClicks.pressedButton == "no") {
                await delay(1100)
                window.location.assign("/blindMenu");
            }
        } else {
            setButtonClicks({
                "pressedButton": value,
                "pressedTimes": 1
            })
        }
    }


    useEffect(() => {
        console.log("am ajuns aici")
        if (option === "medium") {
            playConfirmMediumSeverity();
        }
        if (option === "low") {
            playConfirmLowSeverity();
        }
        if (option === "high") {
            playConfirmHighSeverity();
        }
        if (option === "emergency") {
            playEmergencyConfirmation()
        }
        if (option === "1") {
            playConfirmRoutes();
        }
        if (option === "2") {
            playConfirmdDetectColor()
        }
        if (option === "4") {
            playConfirmDetectBankotes()
        }
        if (option === "6") {
            playConfirmDetectFood()
        }
        if (option === "3") {
            playConfirmOrderFood()
        }
        if (option.includes("repeat")) {
            playConfirmRepeatAction()
        }
        if (option === "5") {
            playConfirmPublicTransport()
        }
    }, [playConfirmPublicTransport,playConfirmOrderFood,playConfirmRepeatAction,playConfirmDetectFood,playConfirmDetectBankotes, playEmergencyConfirmation, playConfirmHighSeverity, playConfirmLowSeverity, playConfirmMediumSeverity, playConfirmdDetectColor]);


    return (<ConfirmationPage d={hadFinished} onButtonClicked={onButtonClicked} />)

}

export default CofirmationMenu;


