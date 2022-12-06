import Banner from '../components/banner'
import Footer from '../components/footer'
import Layout from '../components/layout'
import Timeline from '../components/timeline'


export default function Resume() {
    return (
        <>
            <Layout>
                <Banner title={"Dylan Mamié"} subtitle={["Welcome to my website !", "Software Engineer based in Switzerland."]} />


                <div>

                    {/* <div className="-mt-64 md:-mt-48 lg:-mt-32 p-48 absolute left-0 right-0 mx-auto flex justify-center">
                        <Link href="#content">
                            <a>
                                <div className="grid place-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16 text-gray-300 hover:text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </a>
                        </Link>
                    </div> */}
                    <div className="text-gray-200 -mt-32 md:-mt-48 lg:-mt-64">
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
                                <   use href="#wave_reverse" x="0" y="25" fill="rgba(229, 231, 235, 0.6)" />
                                <use href="#wave" x="0" y="45" fill="rgba(229, 231, 235, 1)" />
                            </g>
                        </svg>
                        {/* <svg viewBox="0 0 750 100">
                                <path fill="currentColor" fill-opacity="1" d="M 0 100 Q 100 50 150 100 Q 250 50 300 100 C 300 0 450 0 450 100 Q 500 50 600 100 Q 650 50 750 100 L 0 100"></path>
                            </svg> */}
                    </div>

                    <div id="content" className="bg-gray-200" />
                    <div className="px-8 md:px-16 lg:px-40 pt-16 bg-gray-200">
                        <div className="pt-12">
                            <h1 className="pb-16 flex items-center justify-center lg:items-start lg:justify-start lg:mx-8 title-gradient font-bold text-4xl w-full">
                                Hey there !
                            </h1>
                        </div>
                        <div className="pt-6 lg:flex">

                            <div className="pb-12 lg:pb-0 px-0 md:px-8 lg:pr-16 md:pr-8">

                                <p className="sm:text-lg md:text-xl lg:text-2xl text-justify text-gray-800">
                                    My name is Dylan and I am a Software Engineer currently finishing my studies in the MSE Master of HES-SO.
                                    I gained work experience in multiple projects in various programming languages during my studies, spare time,  and internship in Bath (UK).
                                    I love to learn new things and to travel with my friends around our beautiful planet. On this website you will find a small resume about my history and my portfolio.
                                    <br />
                                    <br />
                                    Currently I am learning how to implement neural network, more precisely to do forecast predictions with LSTM.
                                </p>
                            </div>
                            <div className="flex-none flex items-center justify-center w-128">
                                <img alt="Costa Rica 2021" className="rounded-xl object-contain h-64" src="/images/me.png" />
                            </div>
                        </div>
                        <div className="lg:flex md:flex items-center justify-center">

                            {/* <div className="h-auto">
                                <span className="inline-block align-middle">
                                    <img className="object-contain w-48" src="/relax.png" />
                                </span>
                            </div> */}

                            <Timeline orientation="right">
                                <>
                                    <h2 className=" font-bold sm:text-lg md:text-xl lg:text-2xl text-gray-200 pb-4 lg:pb-2 pr-6">Scientific collaborator @ iSIS</h2>
                                    <p className="text-justify sm:text-lg md:text-xl lg:text-2xl text-gray-300 pb-2">
                                        Sep 2021 - Sep 2022
                                    </p>
                                    <p className="text-justify sm:text-lg md:text-xl lg:text-2xl text-gray-200">
                                        - Research of scientific articles about different diseases in order to design and develop predictive models in vegetable production.<br/>
                                        - Processing of vegetation images in order to use them in machine learning systems.<br/>
                                        - Evaluation of tools to prove its usability and its relevance in the teaching of programming languages.
                                    </p>
                                </>
                                <>
                                    <h2 className="font-bold sm:text-lg md:text-xl lg:text-2xl text-gray-200 pb-4 lg:pb-2 pr-6">Software developer @ HumanTech</h2>
                                    <p className="text-justify sm:text-lg md:text-xl lg:text-2xl text-gray-300 pb-2">
                                        Mar 2020 - Sep 2020
                                    </p>
                                    <p className="text-justify sm:text-lg md:text-xl lg:text-2xl text-gray-200">
                                        Part-time job on Flutter projects. Implementation of a cross-platform mobile application to display information and articles about the different institutes and the campus events in the HES-SO.
                                    </p>
                                </>
                                <>
                                    <h2 className="font-bold sm:text-lg md:text-xl lg:text-2xl text-gray-200 pb-4 lg:pb-2 pr-6">Scout @ Swiss army</h2>
                                    <p className="text-justify sm:text-lg md:text-xl lg:text-2xl text-gray-300 pb-2">
                                        Jan 2018 - May 2018
                                    </p>
                                    <p className="text-justify sm:text-lg md:text-xl lg:text-2xl text-gray-200">
                                        Four months of obligatory army as a scout. Achieving the goals of the job through team cohesion, especially by pushing my own limits for the comrades was a great experience.
                                    </p>
                                </>
                                <>
                                    <h2 className="font-bold sm:text-lg md:text-xl lg:text-2xl text-gray-200 pb-4 lg:pb-2 pr-6">Software developer @ Votion</h2>
                                    <p className="text-justify sm:text-lg md:text-xl lg:text-2xl text-gray-300 pb-2">
                                        Jan 2017 - May 2017
                                    </p>
                                    <p className="text-justify sm:text-lg md:text-xl lg:text-2xl text-gray-200">
                                        Internship in a senior development team. Development of websites, mostly with Wordpress. Great experience to work in a foreign country and learn their culture.
                                    </p>
                                </>

                            </Timeline>
                        </div>
                        <div className="lg:flex md:flex pb-20">
                            <Timeline orientation="left">
                                <div>
                                    <h2 className="font-bold sm:text-lg md:text-xl lg:text-2xl text-gray-200 pb-4 lg:pb-2 pr-6 lg:pl-8">Master MSE @ HES-SO</h2>
                                    <p className="text-justify sm:text-lg md:text-xl lg:text-2xl text-gray-300 pb-2">
                                        Sep 2021 - Mar 2023
                                    </p>
                                    <p className="text-justify sm:text-lg md:text-xl lg:text-2xl text-gray-200">
                                        Specialization in Computer Sciences<br /><br />
                                        Master project:<br />
                                        - Energy recommendation system for smart home<br /><br />
                                        GPA: 5.6/6
                                    </p>
                                </div>
                                <div>
                                    <h2 className="font-bold sm:text-lg md:text-xl lg:text-2xl text-gray-200 pb-4 lg:pb-2 pr-6 lg:pl-8">Bachelor of Sciences @ HEIA-FR</h2>
                                    <p className="text-justify sm:text-lg md:text-xl lg:text-2xl text-gray-300 pb-2">
                                        Sep 2018 - Jul 2021
                                    </p>
                                    <p className="text-justify sm:text-lg md:text-xl lg:text-2xl text-gray-200">
                                        Specialization in Computer Sciences<br /><br />
                                        Semester projects:<br />
                                        - Skeleton detection on a dancing person<br />
                                        - Profiling and industrial vision processing pipeline<br /><br />
                                        Bachelor project:<br />
                                        - Pet follow-up cross-platform application<br /><br />
                                        Grade: GPA 5.5/6
                                    </p>
                                </div>
                                <div>
                                    <h2 className="font-bold sm:text-lg md:text-xl lg:text-2xl text-gray-200 pb-4 lg:pb-2 pr-6 lg:pl-8">IT Apprenticeship @ EMF</h2>
                                    <p className="text-justify sm:text-lg md:text-xl lg:text-2xl text-gray-300 pb-2">
                                        Aug 2013 - Jul 2017
                                    </p>
                                    <p className="text-justify sm:text-lg md:text-xl lg:text-2xl text-gray-200">
                                        Apprenticeship with integrated Technical Maturity
                                        <br />
                                        <br />
                                        Final work nominated for the ICT Awards 2017:
                                        <br />
                                        - FLIR thermal camera mobile application to evaluate the heat loss on building
                                        <br />
                                        <br />
                                        GPA: 5.7/6
                                    </p>
                                </div>
                            </Timeline>


                            {/* <div className="">
                                <img className="mx-auto rounded-xl" width="400" height="300" src="/book.png" />

                            </div> */}
                        </div>
                        {/* <div className="lg:flex md:flex py-16">

                            <div className="px-8 lg:pr-16 md:pr-16 py-12">
                                <h1 className="title-gradient font-bold text-4xl">
                                    This is my lovely cat
                                </h1>
                                <p className="text-2xl justify-center text-gray-800">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <img className="mx-auto rounded-xl" width="372" height="362" src="/berlioz.jpg" />

                        </div> */}
                    </div>


                    <div className="text-gray-200 bg-gray-700">
                        <svg viewBox="0 40 800 70">
                            <path fill="currentColor" fillOpacity="1" d="M 0 60 C 60 150 600 0 800 100 L 800 0 L 0 0 L 0 50"></path>
                        </svg>
                    </div>

                    {/* <div className="grid grid-flow-col grod-rows-4 grid-cols-12 gap-16 mx-auto">
                        <div className="row-start-1 col-start-1 col-span-12 md:flex shadow-2xl rounded-xl bg-gray-300">
                            <div className="px-14 py-12">
                                <h1 className="font-bold text-4xl text-green-700">
                                    Hey there, my name is Dylan Mamié
                                </h1>
                                <p className="text-2xl pt-8 justify-center text-gray-800">
                                    Software Engineer graduate currently continuing my studies in the MSE Master of HES-SO.
                                    I gained Work experience in multiple projects in various programming languages during my studies and internship in Bath (UK).
                                    Fast learner, eager to take on new challenges, successful working in both team and self-directed settings.
                                </p>
                            </div>
                            <img className="rounded-r-xl" width="400" height="300" src="/me.png" />

                        </div>
                        <div className="row-start-2 col-start-1 col-span-4 md:flex shadow-2xl rounded-xl bg-gray-300">
                            <div className="px-14 py-12">
                                <h1 className="font-bold text-4xl text-green-700">
                                    Languages
                                </h1>
                            </div>
                        </div>
                        <div className="row-start-2 col-start-5 col-span-8 md:flex shadow-2xl rounded-xl bg-gray-300">
                            <div className="px-14 py-12">
                                <h1 className="font-bold text-4xl text-green-700">
                                    Education
                                </h1>
                            </div>
                        </div>
                        <div className="row-start-3 col-start-1 col-span-8 md:flex shadow-2xl rounded-xl bg-gray-300">
                            <div className="px-14 py-12">
                                <h1 className="font-bold text-4xl text-green-700">
                                    Work experience
                                </h1>
                            </div>
                        </div>
                        <div className="row-start-3 col-start-9 col-span-4 md:flex shadow-2xl rounded-xl bg-gray-300">
                            <div className="px-14 py-12">
                                <h1 className="font-bold text-4xl text-green-700">
                                    Interests
                                </h1>
                            </div>
                        </div>
                        <div className="row-start-4 col-start-1 col-span-6 md:flex shadow-2xl rounded-xl bg-gray-300">
                            <div className="px-14 py-12">
                                <h1 className="font-bold text-4xl text-green-700">
                                    Technical Skills
                                </h1>
                            </div>
                        </div>
                        <div className="row-start-4 col-start-7 col-span-6 md:flex shadow-2xl rounded-xl bg-gray-300">
                            <div className="px-14 py-12">
                                <h1 className="font-bold text-4xl text-green-700">
                                    Soft Skills
                                </h1>
                            </div>
                        </div>
                    </div> */}
                </div>
            </Layout>

            <Footer />

        </>
    )
}
