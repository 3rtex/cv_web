import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from "next/router";
import Image from 'next/image'



export default function NavigatorBar({ }) {
    const router = useRouter();

    return <><Head>
        <title>Dylan Mamie</title>
        <meta name="description" content="Dylan Mamie's website" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
    </Head>
        <header className="z-50 w-full fixed bg_gradient_hm text-gray-100 border-gray-400 border-b">
            <div className="mx-auto flex flex-wrap p-0 md:py-4 flex-col md:flex-row items-center h-24 font-medium">
                <div className="flex flex-wrap items-center text-xl justify-center mx-12 pt-2 pb-5 md:py-0">
                    <Link href="/">
                        <a className='hover:text-green-200'>
                            Dylan Mamie
                        </a>
                    </Link>
                </div>
                <nav className="md:ml-auto flex flex-wrap items-center text-xl justify-center">
                    <Link href="/"><a className={router.pathname == "/" ? "md:ml-8 text-green-200" : "md:ml-8 hover:text-green-200"}>Resume</a></Link>
                    <Link href="/portfolio"><a className={router.pathname == "/portfolio" ? "mx-8 sm:mx-16 md:mx-12 text-green-200" : "mx-8 sm:mx-16 md:mx-12 hover:text-green-200"}>Portfolio</a></Link>
                    <Link href="/game"><a className={router.pathname == "/game" ? "md:mr-12 text-green-200" : "md:mr-12 hover:text-green-200"}>Game</a></Link>
                </nav>
            </div>
        </header>
    </>
}

