import './Background.css';
import {useEffect} from "react";

function Background() {
    useEffect(() => {
        const blob = document.getElementById('blob');

        const handleMouseMoveEvent = (event: MouseEvent) => {
            const {clientX, clientY} = event;
            const scrollX = window.scrollX;
            const scrollY = window.scrollY;
            blob?.animate({
                left: `${clientX + scrollX}px`,
                top: `${clientY + scrollY}px`
            }, {duration: 30000, fill: "forwards"});
        }

        document.addEventListener('mousemove', handleMouseMoveEvent);

        return () => {
            document.removeEventListener('mousemove', handleMouseMoveEvent);
        };
    }, []);

    return (
        <>
            <div id="blob"></div>
            <div id="blur"></div>
        </>
    )
}

export default Background;