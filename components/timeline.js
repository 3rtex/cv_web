import React, { useEffect, useState } from 'react'
import TimelineCard from './timeline_card';


export default function Timeline({ orientation = "left", children }) {
    const [width, setWidth] = useState(0);


    const handleResize = () => {
        setWidth(window.innerWidth)
        // console.log(window.innerWidth)
    };

    useEffect(() => {
        // update the size
        handleResize()
        window.addEventListener('resize', handleResize) // ideally you need to throttle this event

        // cleanup component
        return () => {
            window.removeEventListener("resize", handleResize)
        };

    }, []);

    var txt;
    if (orientation == "left") {
        txt = "Studies"
    } else {
        txt = "Works"
    }

    if (width < 1280) {
        orientation = "right"
    }


    return <div className="pt-24 xl:flex xl:pt-36">
        {orientation == "right" ?
            <h1 className="pb-12 xl:py-0 flex items-center justify-center title-gradient font-bold text-4xl sm:mx-8">
                {txt}
            </h1> : <></>}
        <div className="-ml-2 -mr-8 pt-4 sm:mx-4 sm:ml-8 lg:mr-8 lg:ml-24 xl:mx-20">
            <div className={orientation == "left" ? "timeline tl-left" : "timeline tl-right"}>
                {children.map(c =>
                    <div key={c.id} className="date">
                        <TimelineCard orientation={orientation}>
                            {c}
                        </TimelineCard>
                    </div>)}
            </div>
        </div>
        {orientation == "left" ?
            <h1 className="xl:flex items-center justify-center title-gradient font-bold text-4xl">
                {txt}
            </h1> : <></>}
    </div>

}