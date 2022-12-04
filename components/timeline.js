import React, { useEffect, useState } from 'react'


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
    if(orientation == "left"){
        txt = "Studies"
    }else{
        txt = "Works"
    }
  
    if (width < 1280) {
        orientation = "right"
    }


    return <div className="xl:flex xl:pt-24">
        {orientation == "right" ?
            <h1 className="sm:pt-24 sm:pb-12 xl:py-0 flex items-center justify-center title-gradient font-bold text-4xl mx-8">
                {txt}
            </h1> : <></>}
        <div className="sm:mx-4 sm:ml-8 lg:mr-8 lg:ml-24 xl:mx-20">
            <div className={orientation == "left" ? "timeline tl-left" : "timeline tl-right"}>
                {children.map(c =>
                    <div key={c.id} className="date">
                        <div className="date-content"> {/*bg_gradient_hm*/}
                            {c}
                        </div>
                    </div>)}
            </div>
        </div>
        {orientation == "left" ?
            <h1 className="xl:flex items-center justify-center title-gradient font-bold text-4xl">
                {txt}
            </h1> : <></>}
    </div>

}