import Banner from '../components/banner'
import Footer from '../components/footer'
import Layout from '../components/layout'
import Timeline from '../components/timeline'
import TimelineContent from '../components/timeline_content'
import Link from 'next/link'


export default function Resume() {
    return (
        <>
            <Layout>
                <Banner title={"Welcome"} subtitle={["Hi.", "Software Engineer based in Switzerland."]} />


                <div>
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
                    <div className="px-8 md:px-16 xl:px-32 2xl:px-64 3xl:px-80 4xl:px-96 py-16 bg-gray-200">
                        <div className="pt-12">
                            <h1 className="pb-16 flex items-center justify-center lg:items-start lg:justify-start lg:mx-8 title-gradient font-bold text-4xl w-full">
                                Hey there !
                            </h1>
                        </div>
                        <div className="pt-6 lg:flex">

                            <div className="pb-12 lg:pb-0 px-0 md:px-8 lg:pr-12 xl:pr-20 2xl:pr-24 md:pr-8">

                                <p className="sm:text-lg md:text-xl lg:text-2xl text-justify text-gray-800">
                                    My name is Dylan and I am a Software Engineer. In my previous jobs I assumed the role of team lead and scrum master. 
                                    My daily tasks were mostly developping application for the governments in .NET and Angular and managing the team as the team lead.
                                    I also configured pipelines with Azure DevOps and GitLab.
                                    <br />
                                    <br />
                                    I love to learn new things and to travel with my friends. On my spare time I mostly do bouldering and motorbikes tour around Switzerland.
                                    On this website you will find a small resume about my history and my portfolio.
                                    <br />
                                    <br />
                                    Looking for new opportunities to expand my skills, please don't hesitate to <Link href="#contact" scroll={false}><a className='text-green-600'>contact me</a></Link>.
                                </p>
                            </div>
                            <div className="flex-none flex items-center justify-center w-128">
                                <img alt="Costa Rica 2021" className="rounded-xl object-contain h-64 xl:h-80" src="/images/me.png" />
                            </div>
                        </div>
                        <div className="lg:flex md:flex items-center justify-center">
                            <Timeline orientation="right">
                                <TimelineContent title="Software developer & Team lead @ Softcom" date="May 2023 - Nov 2024">
                                    - Joined an agile dev eGovernment squad as a developer.<br />
                                    - Programming full stack application for the governments in .NET and Angular.<br />
                                    - Since April 2024, managing as Team lead our squad, leading scrum meetings and helping the team achieves every tasks we have.
                                </TimelineContent>
                                <TimelineContent title="Scientific collaborator @ iSIS & Humantech" date="Mar 2020 - Mar 2023">
                                    - Implementation of a cross-platform mobile application in Flutter to display information and articles about the different institutes and the campus events in the HES-SO.<br />
                                    - Research of scientific articles about different diseases in order to design and develop predictive models in vegetable production.<br />
                                    - Processing of vegetation images in order to use them in machine learning systems.<br />
                                    - Evaluation of tools to prove its usability and its relevance in the teaching of programming languages.<br />
                                    - Developping a frontend interface in NextJs for the EYE LEARN project.
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
