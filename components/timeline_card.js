import React, { useState } from 'react'


export default function TimelineCard({ orientation, init, children }) {
    const [open, setOpen] = useState(init)

    // var styleSVG = orientation == "right" ? "absolute right-4 top-3 md:top-4 text-gray-300" : "absolute left-4 top-3 md:top-4 text-gray-300"
    var styleSVG = "absolute right-4 top-3 md:top-4 text-gray-300"

    return <a><div key={children.id} onClick={() => setOpen(!open)} className={open ? "cursor-pointer max-h-screen date-content": "cursor-pointer max-h-12 sm:max-h-14 date-content"}> 
        <svg style={{transform: open ? "rotate(180deg)" : "rotate(0deg)"}} className={styleSVG} width="24px" height="24px" viewBox="0 0 24 24" fill="None" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 9L12 17L20 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {children}
    </div></a>

}