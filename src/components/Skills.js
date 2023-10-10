import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Skills = () => {
    return (
        <section className="section" id="skills">
            <div className="container mx-auto ">
                <h2 className="h2 text-accent">Skills</h2>
                <motion.div
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <div className="flex items-start justify-between ">
                        {/*Skills Images */}
                        <img
                            height={100}
                            width={100}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
                        />
                        <img
                            height={100}
                            width={100}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
                        />

                        <img
                            height={100}
                            width={100}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                        />

                        <img
                            height={100}
                            width={100}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg"
                        />

                        <img
                            height={100}
                            width={100}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original-wordmark.svg"
                        />

                        <img
                            height={100}
                            width={100}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
                        />
                    </div>
                    <div className="flex-1 flex items-start justify-between mt-10 lg:mt-20 ">
                        <img
                            height={100}
                            width={100}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        />

                        <img
                            height={100}
                            width={100}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                        />

                        <img
                            height={100}
                            width={100}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                        />

                        <img
                            height={100}
                            width={100}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original-wordmark.svg"
                        />
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <div className="flex-1 flex items-start justify-between mt-10 lg:mt-20">
                        <img
                            height={100}
                            width={100}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                        />

                        <img
                            height={100}
                            width={100}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                        />

                        <img
                            height={100}
                            width={100}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
                        />

                        <img
                            height={100}
                            width={100}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original-wordmark.svg"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
