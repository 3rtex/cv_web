import React, { useState } from 'react'


export default function TimelineContent({ title, date, children }) {
    return <>
        <h2 className="font-bold sm:text-lg md:text-xl lg:text-2xl text-gray-200 pb-4 lg:pb-2 pr-6 leading-8">{title}</h2>
        <p className="text-justify sm:text-lg md:text-xl lg:text-2xl text-gray-300 pb-2 leading-5">
            {date}
        </p>
        <p className="text-justify sm:text-lg md:text-xl lg:text-2xl text-gray-100 leading-4 tracking-tight">
            {children}
        </p>
    </>

}