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
                        <div className="max-h-12 sm:max-h-14 date-content"> {/*bg_gradient_hm*/}
                            <svg className={orientation == "right" ?"absolute right-4 top-3 md:top-4 text-gray-300":"absolute left-4 top-3 md:top-4 text-gray-300"} width="24px" height="24px" viewBox="0 0 24 24"  fill="None" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 9L12 17L20 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
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