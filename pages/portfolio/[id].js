import Footer from '../../components/footer'
import NavigatorBar from '../../components/navbar'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'

export default function Project() {
    const router = useRouter()
    const {id} = router.query
    return (
        <>
            <Layout>
                <NavigatorBar />

                <div id="content" className="bg-gray-300" />
                <div className="px-8 md:px-32 lg:px-40 pt-32 bg-gray-300 min-h-screen">
                    <div className="container mx-auto px-4 lg:px-30 xl:px-48">
                        <div className="px-8 lg:pr-16 md:pr-16 py-12">
                            <h1 className="title-gradient font-bold text-4xl">
                                Project {id}
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="text-gray-300 bg-gray-700">
                    <svg viewBox="0 40 800 70">
                        <path fill="currentColor" fill-opacity="1" d="M 0 60 C 60 150 600 0 800 100 L 800 0 L 0 0 L 0 50"></path>
                    </svg>
                </div>
                <Footer />
            </Layout>
        </>
    )
}


