import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
    return (
        <section className="section" id="work">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-x-10">
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
                    >
                        <div>
                            <h2 className="h2 leading-tight text-accent">
                                My Latest <br />
                                Work.
                            </h2>
                            <p className="max-w-sm mb-16">
                                A snapshot of my most recent projects along with
                                their links.
                            </p>
                            <a
                                href="https://github.com/salhadid"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="btn btn-sm">
                                    View all projects
                                </button>
                            </a>
                        </div>
                        <a
                            href="https://trawson.gitlab.io/project-i-think/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                                <img
                                    className="group-hover:scale-125 transition-all duration-500"
                                    src={Img1}
                                    alt=""
                                />
                                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                    <span className="text-gradient">
                                        Full Stack Engineer
                                    </span>
                                </div>
                                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                    <span className="text-3xl text-white">
                                        iThink
                                    </span>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex flex-col gap-y-10"
                    >
                        <a
                            href="https://gitlab.com/smalhadid/carai"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                                <img
                                    className="group-hover:scale-125 transition-all duration-500"
                                    src={Img2}
                                    alt=""
                                />
                                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                    <span className="text-gradient">
                                        Full Stack Engineer
                                    </span>
                                </div>
                                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                    <span className="text-3xl text-white">
                                        Car.ai
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a
                            href="https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-8-2023-assessment-1-team-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

                                <img
                                    className="group-hover:scale-125 transition-all duration-500"
                                    src={Img3}
                                    alt=""
                                />

                                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                    <span className="text-gradient">
                                        Java Developer
                                    </span>
                                </div>
                                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                    <span className="text-3xl text-white">
                                        Twitter Clone
                                    </span>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Work;
