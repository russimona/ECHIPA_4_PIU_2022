import FoodMenu from '../presentational/food_menu'
import { useState, useEffect } from 'react';
import useSound from 'use-sound'
import intro from '../sounds/intro_orderfood.mp3'


function OrderFoodPage() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [hadPlayed, setHadPlayed] = useState(true);

    const [playIntro, { stop }] = useSound(intro, {
        onplay: () => {
            setIsPlaying(true);
            setHadPlayed(false)
        },
        onend: () => setIsPlaying(false)
    })

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    )

    const utterThis = new SpeechSynthesisUtterance()

    const [buttonClicks, setButtonClicks] = useState({
        pressedButton: "",
    })

    const [menuCode, setMenuCode] = useState({
        code:""
    })

    const [presedConfirm, setPresedConfirm] = useState({
        nr:0
    })

    const playMessage = (message) => {
        let text = message
        let synth = window.speechSynthesis
        utterThis.text = text
        synth = synth.speak(utterThis)
    }

    const onButtonClicked = async (value) => {
        if (isPlaying) {
            stop();
            setIsPlaying(false)
        }
        console.log(value)
        if (value === "confirm") {
            await delay(2000)
            if (presedConfirm.nr === 0) {
                if (menuCode.code === "") {
                    playMessage("You need to insert first  the code of the menu  you want to order")
                } else {
                    if (menuCode.code * 1 <= 6 && menuCode.code * 1 > 0) {
                        if (menuCode.code === "1") {
                            playMessage("Do you want to order the burger menu?")
                        }
                        if (menuCode.code === "2") {
                            playMessage("Do you want to  order the soup menu?")
                        }
                        if (menuCode.code === "3") {
                            playMessage("Do you want to order peperoni pizza?")
                        }
                        if (menuCode.code === "4") {
                            playMessage("Do you want to order  carbonara pasta?")
                        }
                        if (menuCode.code === "5") {
                            playMessage("Do you want to order the salad?")
                        }
                        if (menuCode.code === "6") {
                            playMessage("Do you want to order  pancakes?")
                        }
                        setPresedConfirm({
                            "nr":1
                        })
                    } else {
                        playMessage("There is  no menu with  this  code. Try  again")
                        setMenuCode({
                            "code":""
                        })
                    }
                }
            }
            if (presedConfirm.nr === 1) {
                playMessage("Now insert the number of portions you want to order")
                setMenuCode({
                    "code": ""
                })
                setButtonClicks({
                    "pressedButton":""
                })
                setPresedConfirm({
                    "nr":2
                })
            }
            if (presedConfirm.nr === 2) {
                if (menuCode.code === "") {
                    playMessage("You haven't entered the number of portions")
                } else {
                    playMessage("Do you want to order" + menuCode.code + "portions?")
                    setPresedConfirm({
                       "nr":3
                    })
                }
            }
            if (presedConfirm.nr === 3) {
                playMessage("your order will arive soon")
                await delay(1100)
                window.location.assign("/blindMenu")
            }
        } else {
            if (presedConfirm.nr === 1) {
                console.log("am ajuns aici")
                setPresedConfirm({
                    "nr":0
                })
                setMenuCode({
                    "code":""
                })
                setButtonClicks({
                    "pressedButton": ""
                })
            } else {
                if (presedConfirm.nr === 3) {
                    setPresedConfirm({
                        "nr":2
                    })
                    setMenuCode({
                        "code": ""
                    })
                    setButtonClicks({
                        "pressedButton": ""
                    })
                } else {
                    if (value === buttonClicks.pressedButton) {
                        setMenuCode({
                            code: menuCode.code + value
                        })
                        if (buttonClicks.pressedButton === "restart") {
                            await delay(1100)
                            playIntro()
                        }
                        if (buttonClicks.pressedButton === "0") {
                            window.location.assign("/blindMenu")
                        }
                    } else {
                        setButtonClicks({
                            "pressedButton": value,
                        })
                    }
                }
            }
        }
    }

    useEffect(() => {
        playIntro()
    }, [playIntro]);


    return (<FoodMenu onButtonClicked={onButtonClicked} d={hadPlayed} />)

}

export default OrderFoodPage;





