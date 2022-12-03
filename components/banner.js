import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
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
    const router = useRouter();
    const [scrollY, setScrollY] = useState(0);
    // var height = 1000

    const handleScroll = () => {
        console.log("ScrollY" + window.scrollY)
        setScrollY(window.scrollY);
    };

    // const handleResize = () => {
    //     console.log("Height" + window.innerHeight)
    //     height = window.innerHeight;
    // };

    useEffect(() => {
        i = 0;
        j = 0;
        write = true;
        subtitles = subtitle;
        document.getElementById("subtitle").innerHTML = "";
        setTimeout(typeWriter, 1000);


        // update the scroll
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        // update the size
        // handleResize();
        // window.addEventListener('resize', handleResize); // ideally you need to throttle this event

        // cleanup these components
        return () => {
            window.removeEventListener("scroll", handleScroll);
            // window.removeEventListener('resize', handleResize);
        };

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
                <Link href="#content">
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

        {/* {router.pathname == "/" && <div className="fixed w-full -mt-24">
            <div className="p-5 float-right md:ml-auto flex flex-wrap">
                <a href="mailto:mamie.dylan@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" clasName="mb-2 mr-8 h-10 w-10 text-gray-200 hover:text-green-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </a>
                <Link href="https://github.com/3rtex"><a>
                    <svg className="mr-8 h-8 w-8 text-gray-200 hover:text-green-200" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                </a></Link>
                <Link href="https://to-be-defined"><a>
                    <svg className="mr-8 h-8 w-8 text-gray-200 hover:text-green-200" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a></Link>
            </div>
        </div>} */}

        {/* {/* {router.pathname != "/" && scrollY < 400 && <div className="fixed w-full -mt-48">
            <div className="p-5 md:ml-auto flex flex-wrap items-center justify-center">
                <Link href="#content">
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-200 hover:text-green-200" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </a>
                </Link>
            </div>
        </div>} */}
    </>
}