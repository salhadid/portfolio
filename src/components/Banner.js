import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import resume from "../assets/resume.pdf";
import { Link } from "react-scroll";
import axios from "axios";

const client = axios.create({
    baseURL: "https://api.github.com/users/salhadid",
});

const Banner = () => {
    const [picture, setPicture] = useState("");
    const [bio, setBio] = useState("");

    useEffect(() => {
        client.get().then((res) => {
            setPicture(res.data);
            setBio(res.data);
        });
    }, []);

    return (
        <section
            className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
            id="home"
        >
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <motion.h1
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
                        >
                            SHAHEM{" "}
                            <span>
                                {" "}
                                <br /> AL HADID
                            </span>
                        </motion.h1>
                        <motion.div
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
                        >
                            <span className="text-white mr-4">I am a</span>
                            <TypeAnimation
                                sequence={[
                                    "Developer",
                                    2000,
                                    "Engineer",
                                    2000,
                                    "Student",
                                    2000,
                                ]}
                                speed={50}
                                className="text-accent"
                                wrapper="soan"
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-8 max-w-lg mx-auto lg:mx-0"
                        >
                            {/* Curious, dedicated and results-driven Software
                            Engineer. Continuously engaged in learning new
                            technologies and industry trends. Seeking a
                            collaborative environment to leverage my technical
                            skills, develop innovative software solutions, and
                            contribute to team success. */}
                            {bio.bio}
                        </motion.p>
                        <motion.div
                            variants={fadeIn("up", 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
                        >
                            <Link to="contact">
                                <button className="btn btn-lg">
                                    Contact me
                                </button>
                            </Link>
                            <a
                                href={resume}
                                className="text-gradient btn-link"
                                target="_blank"
                            >
                                My Resume
                            </a>
                        </motion.div>
                        <motion.div
                            variants={fadeIn("up", 0.7)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
                        >
                            <a
                                href="https://www.linkedin.com/in/shahemalhadid/"
                                target="_blank"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://gitlab.com/smalhadid"
                                target="_blank"
                            >
                                <FaGitlab />
                            </a>
                            <a
                                href="https://github.com/salhadid"
                                target="_blank"
                            >
                                <FaGithub />
                            </a>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn("down", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
                    >
                        <img src={picture.avatar_url} alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
