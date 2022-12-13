import Banner from '../../components/banner'
import Footer from '../../components/footer'
import Layout from '../../components/layout'
import PortfolioTile from '../../components/portfolio_tile'
import { useData } from '../../components/portfolio_context'


export default function Portfolio() {
    const { data } = useData()
    return (
        <>
            <Layout>
                <Banner title={"Portfolio"} subtitle={["My most interesting projects ..."]} />
                <div className="text-gray-100 -mt-32 md:-mt-48 lg:-mt-64">
                    <svg className="waves" viewBox="0 0 1200 275" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="wave" d="M 0 225 C 275 225 375 125 750 200 C 925 225 1025 200 975 175 C 1050 175 1050 225 1200 225 L 1200 275 L 0 275 L 0 225 " />
                            <path id="wave_reverse" d="M 0 225 C 275 225 375 125 750 200 C 925 225 1000 175 1100 175 C 1075 200 1050 225 1200 225 L 1200 275 L 0 275 L 0 225 " />
                        </defs>
                        <g className="parallax">
                            <use href="#wave_reverse" x="0" y="0" fill="rgba(229, 231, 235, 0.2)" />
                            <use href="#wave" x="0" y="15" fill="rgba(229, 231, 235, 0.3)" />
                            <use href="#wave_reverse" x="0" y="25" fill="rgba(229, 231, 235, 0.6)" />
                            <use href="#wave" x="0" y="45" fill="rgba(229, 231, 235, 1)" />
                        </g><g className="parallax">
                            <use href="#wave_reverse" x="0" y="0" fill="rgba(229, 231, 235, 0.2)" />
                            <use href="#wave" x="0" y="15" fill="rgba(229, 231, 235, 0.3)" />
                            <use href="#wave_reverse" x="0" y="25" fill="rgba(229, 231, 235, 0.6)" />
                            <use href="#wave" x="0" y="45" fill="rgba(229, 231, 235, 1)" />
                        </g>
                    </svg>
                    {/* <svg viewBox="0 0 750 100">
                                <path fill="currentColor" fill-opacity="1" d="M 0 100 Q 100 50 150 100 Q 250 50 300 100 C 300 0 450 0 450 100 Q 500 50 600 100 Q 650 50 750 100 L 0 100"></path>
                            </svg> */}
                </div>

                <div id="content" className="bg-gray-200" />
                <div className="px-8 md:px-32 lg:px-40 py-16 bg-gray-200">
                    <div className="px-6 py-12">
                        <h1 className=" flex items-center justify-center lg:items-start lg:justify-start lg:mx-8 title-gradient font-bold text-4xl w-full">
                            Portfolio
                        </h1>
                    </div>
                    <div className="container">
                        <div>
                            <div className="flex flex-wrap">
                                {data.map((item, i) => (
                                        <PortfolioTile key={i} image={item.img} title={item.title} date={item.date} a={item.a != undefined ? item.a : "/portfolio/" + i}>
                                            {item.content_short}
                                        </PortfolioTile>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="text-gray-200 bg-gray-700">
                    <svg viewBox="0 40 800 70">
                        <path fill="currentColor" fillOpacity="1" d="M 0 60 C 60 150 600 0 800 100 L 800 0 L 0 0 L 0 50"></path>
                    </svg>
                </div> */}
                <Footer />
            </Layout>
        </>
    )
}
