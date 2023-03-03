import React, { useEffect } from 'react'
import Link from 'next/link'
import NavigatorBar from './navbar';

var i = 0;
var j = 0;
var subtitles;
var write = true;


function typeWriter() {
    if (write && i < subtitles[j].length) {
        document.getElementById("subtitle").innerHTML += subtitles[j].charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else if (write) {
        write = false;
        setTimeout(typeWriter, 1000);
    } else if (j < subtitles.length - 1) {
        i--;
        document.getElementById("subtitle").innerHTML = subtitles[j].substring(0, i);
        if (i <= 0) {
            j++;
            write = true;
            setTimeout(typeWriter, 2000);
        } else {
            setTimeout(typeWriter, 100);
        }
    }
}

export default function Banner({ title, subtitle }) {

    useEffect(() => {
        i = 0;
        j = 0;
        write = true;
        subtitles = subtitle;
        document.getElementById("subtitle").innerHTML = "";
        setTimeout(typeWriter, 1000);

    }, []);

    return <>
        <NavigatorBar/>
        <div style={{ minHeight: 75 + 'vh' }} className="pt-48 w-full text-gray-100 grid place-items-center">
            <div className="space-y-10 flex-shrink">
                <div className="grid place-items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl text-gray-200 glitch">
                        <span aria-hidden="true">{title}</span>
                        {title}
                        <span aria-hidden="true">{title}</span>
                    </h1>
                </div>
                <div className="grid place-items-center">
                    <h2 id="subtitle" className="text-lg md:text-xl lg:text-2xl font-mono">
                    </h2>
                </div>
                <Link href="#content" scroll={false}>
                    <a>
                        <div className="grid place-items-center mt-20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="z-40 h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16 text-gray-300 hover:text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    </>
}