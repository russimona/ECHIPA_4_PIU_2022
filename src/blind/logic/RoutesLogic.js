import RoutesMenu from '../presentational/routes_menu'
import { useState, useEffect } from 'react';
import intro_routes from '../sounds/intro_predeterminedroutes.mp3'
import traseu_1 from '../sounds/traseu1.mp3'
import traseu1_bus from '../sounds/traseu1-bus.mp3'
import traseu_2 from '../sounds/traseu2.mp3'
import traseu2_bus from '../sounds/traseu2_bus.mp3'
import useSound from 'use-sound'


function RoutesdMenuLogic() {

    const [routes, setRoutes] = useState({
        routesList: [
            {
                name: " do you want to walk from home to the store ?",
                routeCode:"1"
            },
            {
                name: "do you want to walk from the store to home ?",
                routeCode:"2"
            },
        ]
    })

    const [finished, setFinished] = useState({
        disabled:true
    })

    const [playPredeterminedRoutes] = useSound(intro_routes, {
        onplay: () => setFinished({"disabled":true}),
        onend: () => setFinished({ "disabled": false })
    })

    const [playRoute1] = useSound(traseu_1, {
        onplay: () => setFinished({ "disabled": true }),
        onend: () => window.location.assign("/confirm/repeatPredeterminedRoutes")
    })
    const [playRoute2] = useSound(traseu_2, {
        onplay: () => setFinished({ "disabled": true }),
        onend: () => window.location.assign("/confirm/repeatPredeterminedRoutes")
    })
    const [playRoute1Bus] = useSound(traseu1_bus, {
        onplay: () => setFinished({ "disabled": true }),
        onend: () => window.location.assign("/confirm/repeatPredeterminedRoutes")
    })
    const [playRoute2Bus] = useSound(traseu2_bus, {
        onplay: () => setFinished({ "disabled": true }),
        onend: () => window.location.assign("/confirm/repeatPredeterminedRoutes")
    })

    const [code, setCode] = useState({
        insertedCode:""
    })

    const [buttonClicks, setButtonClicks] = useState({
        pressedButton: ""
    })

    const [presedConfirm, setPressedConfirm] = useState({
        nr:0
    })


    const utterThis = new SpeechSynthesisUtterance()

    const playMessage = (message) => {
        let text = message
        let synth = window.speechSynthesis
        utterThis.text = text
        synth = synth.speak(utterThis)
    }

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    )

    const onButtonClicked = async (value) => {
        if (value === "confirm") {
            await delay(2000)
            if (presedConfirm.nr === 0) {
                if (code.insertedCode === "") {
                    playMessage("First you need to insert the code of the route")
                } else {
                    let message = routes.routesList.filter(route => route.routeCode === code.insertedCode)[0]
                    if (message === undefined) {
                        playMessage("There is no route with  this code")
                        setButtonClicks({
                            "pressedButton":""
                        })
                        setCode({
                            "insertedCode":""
                        })
                    } else {
                        playMessage(message.name)
                        setPressedConfirm({
                            "nr": 1
                        })
                    }
                }
            } else {
                if (presedConfirm.nr === 1) {
                    playMessage("Do you want to take  the  bus to your destination?");
                    setPressedConfirm({
                        "nr": 2
                    })
                } else {
                    playMessage("Your instructions will start now")
                    await delay(1100)
                    if (code.insertedCode === "1") {
                        playRoute1Bus()
                    }
                    if (code.insertedCode === "2") {
                        playRoute2Bus()
                    }
                }
            }
        } else {
            if (presedConfirm.nr === 1) {
                setButtonClicks({
                    "pressedButton":""
                })
                setPressedConfirm({
                    nr:0
                })
                setCode({
                    "insertedCode":""
                })
            } else {
                if (presedConfirm.nr === 2) {
                    playMessage("Your instructions  will start  now")
                    await delay(1100)
                    if (code.insertedCode === "1") {
                        playRoute1()
                    }
                    if (code.insertedCode === "2") {
                        playRoute2()
                    }
                }
                if (value === buttonClicks.pressedButton) {
                    setCode({
                        "insertedCode": code.insertedCode + value
                    })
                    if (value === "0") {
                        await delay(1100)
                        window.location.assign("/blindMenu")
                    }
                    if (value === "restart") {
                        await delay(1100)
                        playPredeterminedRoutes()
                    }
                } else {
                    setButtonClicks({
                        "pressedButton": value,
                    })
                }
            }
        }
    }


    useEffect(() => {
        playPredeterminedRoutes()
    }, [playPredeterminedRoutes])

    return (<RoutesMenu onButtonClicked={onButtonClicked} d={finished.disabled} />)

}

export default RoutesdMenuLogic;

