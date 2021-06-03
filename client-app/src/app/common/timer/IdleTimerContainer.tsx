import React, { useRef } from "react";

import IdleTimer from "react-idle-timer";


function IdleTimerContainer() {
    const ideleTimerRef: any = useRef(null)


    const onIdle = () => {
        console.log("order ")
    }

    return (<div>

        <IdleTimer ref={ideleTimerRef} timeout={5000} onIdle={onIdle} ></IdleTimer>
    </div>)
}

export default IdleTimerContainer;