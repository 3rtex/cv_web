import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from "next/router";
import Image from 'next/image'



export default function NavigatorBar({}) {
    const router = useRouter();

    return <><Head>
        <title>Dylan Mamié</title>
        <meta name="description" content="Dylan Mamié's website" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
    </Head>
        <header className="z-50 w-full fixed bg_gradient_hm text-gray-100 border-gray-400 border-b">
            <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" className="flex title-font font-medium items-center mb-4 md:mb-0">

                    <Image src="/android-chrome-512x512.png" alt="Dylan Mamié" width="50" height="50" />
                    <span className="ml-3 text-xl"></span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-xl justify-center">
                    <Link href="/"><a className={router.pathname == "/" ? "mx-8 text-green-200" : "mx-8 hover:text-green-200"}>Resume</a></Link>
                    {/* <Link href="/resume"><a className={router.pathname == "/resume" ? "mr-8 text-green-200" : "mr-8 hover:text-green-200"}>Resume</a></Link> */}
                    <Link href="/portfolio"><a className={router.pathname == "/portfolio" ? "mr-8 text-green-200" : "mr-8 hover:text-green-200"}>Portfolio</a></Link>
                    {/* <Link href="/contacts"> <a className="navbar__link--active mr-8 hover:text-green-200">Contacts</a></Link> */}
                </nav>
            </div>
        </header>
    </>
}