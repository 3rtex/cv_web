import Banner from '../components/banner'
import Footer from '../components/footer'
import Layout from '../components/layout'
import Timeline from '../components/timeline'
import TimelineContent from '../components/timeline_content'


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
                    <div className="px-8 md:px-16 xl:px-32 2xl:px-64 py-16 bg-gray-200">
                        <div className="pt-12">
                            <h1 className="pb-16 flex items-center justify-center lg:items-start lg:justify-start lg:mx-8 title-gradient font-bold text-4xl w-full">
                                Hey there !
                            </h1>
                        </div>
                        <div className="pt-6 lg:flex">

                            <div className="pb-12 lg:pb-0 px-0 md:px-8 lg:pr-12 xl:pr-20 2xl:pr-24 md:pr-8">

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
                                <img alt="Costa Rica 2021" className="rounded-xl object-contain h-64 xl:h-80" src="/images/me.png" />
                            </div>
                        </div>
                        <div className="lg:flex md:flex items-center justify-center">
                            <Timeline orientation="right">
                                <TimelineContent title="Scientific collaborator @ iSIS" date="Sep 2021 - Sep 2022">
                                    - Research of scientific articles about different diseases in order to design and develop predictive models in vegetable production.<br />
                                    - Processing of vegetation images in order to use them in machine learning systems.<br />
                                    - Evaluation of tools to prove its usability and its relevance in the teaching of programming languages.
                                </TimelineContent>
                                <TimelineContent title="Software developer @ HumanTech" date="Mar 2020 - Sep 2020">
                                    Part-time job on Flutter projects. Implementation of a cross-platform mobile application to display information and articles about the different institutes and the campus events in the HES-SO.
                                </TimelineContent>
                                <TimelineContent title="Scout @ Swiss army" date="Jan 2018 - May 2018">
                                    Four months of obligatory army as a scout. Achieving the goals of the job through team cohesion, especially by pushing my own limits for the comrades was a great experience.
                                </TimelineContent>
                                <TimelineContent title="Software developer @ Votion" date="Jan 2017 - May 2017">
                                    Internship in a senior development team. Development of websites, mostly with Wordpress. Great experience to work in a foreign country and learn the UK culture.
                                </TimelineContent>
                            </Timeline>
                        </div>
                        <div className="lg:flex md:flex pb-20 items-center justify-center">
                            <Timeline orientation="left">
                                <TimelineContent title="Master MSE @ HES-SO" date="Sep 2021 - Mar 2023">
                                    Specialization in Computer Sciences<br /><br />
                                    Master project:<br />
                                    - Energy recommendation system for smart home<br /><br />
                                    GPA: 5.6/6
                                </TimelineContent>
                                <TimelineContent title="Bachelor of Sciences @ HEIA-FR" date="Sep 2018 - Jul 2021">
                                    Specialization in Computer Sciences<br /><br />
                                    Semester projects:<br />
                                    - Skeleton detection on a dancing person<br />
                                    - Profiling and industrial vision processing pipeline<br /><br />
                                    Bachelor project:<br />
                                    - Pet follow-up cross-platform application<br /><br />
                                    GPA 5.5/6
                                </TimelineContent>
                                <TimelineContent title="IT Apprenticeship @ EMF" date="Aug 2013 - Jul 2017">
                                    Apprenticeship with integrated Technical Maturity
                                    <br />
                                    <br />
                                    Final work nominated for the ICT Awards 2017:
                                    <br />
                                    - FLIR thermal camera mobile application to evaluate the heat loss on building
                                    <br />
                                    <br />
                                    GPA: 5.7/6
                                </TimelineContent>
                            </Timeline>
                        </div>
                    </div>

                    {/* <div className="bg-gray-700 text-gray-200">
                        <svg style={{transform: "rotate(180)"}} viewBox="0 40 800 70">
                            <path  fill="currentColor" fillOpacity="1" d="M 0 60 C 60 150 600 0 800 100 L 800 0 L 0 0 L 0 50"></path>
                        </svg>
                    </div> */}
                </div>
            </Layout>

            <Footer />

        </>
    )
}
