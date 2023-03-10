import React, { useRef, useState } from "react";
import './index.css'


import SlideTrack from "../SlideTrack";

const Hero = () => {
    const ref = useRef(null);
    const [size, setSize] = useState('transparent 5%, rgba(0, 0, 0) 15%');

    let style = {};

    const updateSpotlight = (e) => {
        // console.log(ref.current.backgroundImage);

        let x = ((e.pageX / window.innerWidth) * 100).toFixed(0);
        let y = ((e.pageY / window.innerHeight) * 100).toFixed(0);

        // console.log(x, y)

        // console.log(e.pageX, e.pageY);

        // console.log(e.target.style.backgroundImage);

        e.target.style.background = `radial-gradient(circle at ${x}% ${y}%, ${size}`
    };

    const mouseMove = (e) => {
        updateSpotlight(e);
    }

    // const mouseUp = (e) => {
    //     setSize('transparent 5%, rgba(0, 0, 0) 30%');
    //     updateSpotlight(e);
    // }

    // const mouseDown = (e) => {
    //     setSize('transparent 10%, rgba(0, 0, 0) 35%');
    //     updateSpotlight(e);
    // }
    return (
        <>
            <div className="hero relative flex overflow-hidden">
                <SlideTrack forward={true} />
                <SlideTrack />
                <SlideTrack forward={true} />
                <SlideTrack />
                <SlideTrack forward={true} />
                <SlideTrack />
                <SlideTrack forward={true} />
                <SlideTrack />
                <SlideTrack forward={true} />
                <SlideTrack />
                <SlideTrack forward={true} />
                <SlideTrack />
            </div>
            <div
                ref={ref}
                style={style}
                className="absolute h-full w-full top-0 left-0 spotlight opacity-100"
                onMouseMove={(e) => {
                    mouseMove(e);
                }}
            // onMouseUp={(e) => {
            //     mouseUp(e);
            // }}
            // onMouseDown={(e) => {
            //     mouseDown(e);
            // }}

            >

            </div>
        </>
    )
}

export default Hero;