import Footer from '../../components/footer'
import NavigatorBar from '../../components/navbar'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import { useData } from '../../components/portfolio_context'
import Link from 'next/link'

export default function Project() {
    const router = useRouter()
    const { data } = useData()

    const { id } = router.query
    var d = data[id]

    if (d == undefined)
        return (<></>)

    return (
        <>
            <Layout>
                <NavigatorBar />

                <div id="content" className="bg-gray-200" />
                <div className="px-8 md:px-32 lg:px-40 pt-32 bg-gray-200 min-h-screen">
                    <div className="container mx-auto px-4 lg:px-30 xl:px-36">
                        <div className='flex pt-16 pb-8'>
                            <Link href="/portfolio#content">
                                <a className="flex">
                                    <svg className="text-green-800" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='None'>
                                        <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9.8,16.78l4.11-4.11a1,1,0,0,0,0-1.41l-4-4" />
                                    </svg>
                                    <p className='text-green-800 hover:text-green-400'>Portfolio</p></a>
                            </Link>
                            <svg className="text-green-800" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='None'>
                                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9.8,16.78l4.11-4.11a1,1,0,0,0,0-1.41l-4-4" />
                            </svg>
                            <p className='text-green-800'>{d.title}</p>
                        </div>
                        <h1 className="title-gradient font-bold text-4xl">
                            {d.title}
                        </h1>
                        <p className="mt-2 text-gray-500">{d.date} - {d.type}</p>

                        {d.content_long.map((item, i) => (
                            <div key={i}>
                                {item.img != undefined ? (
                                    <>
                                        <div className="flex items-center justify-center">
                                            <img className="mt-6 rounded-lg object-cover w-400" alt={item.txt} src={item.img} />
                                        </div>
                                        <p className="text-center mt-2 text-gray-500">{item.txt}</p>
                                    </>) :
                                    item.txt.map((text, i) => (
                                        <p key={i} className="text-lg pt-6 text-justify text-gray-800">{text}</p>
                                    ))}
                            </div>
                        ))}
                        <p className="mt-2 text-gray-800 text-right">Authors: {d.author}</p>
                    </div>
                </div>

                <div className="text-gray-200 bg-gray-700">
                    <svg viewBox="0 40 800 70">
                        <path fill="currentColor" fillOpacity="1" d="M 0 60 C 60 150 600 0 800 100 L 800 0 L 0 0 L 0 50"></path>
                    </svg>
                </div>
                <Footer />
            </Layout>
        </>
    )
}


