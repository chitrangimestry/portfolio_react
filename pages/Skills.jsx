import React from "react";
import Node from "../src/assets/svgs/node-js-brands-solid-full.svg";
import Docker from "../src/assets/svgs/docker-brands-solid-full.svg";
import ReactLogo from "../src/assets/svgs/react-brands-solid-full.svg";
import JavascriptLogo from "../src/assets/svgs/square-js-brands-solid-full.svg";
import FigmaLogo from "../src/assets/svgs/figma-brands-solid-full.svg";
import GitLogo from "../src/assets/svgs/git-alt-brands-solid-full.svg";
import HTMLLogo from "../src/assets/svgs/html5-brands-solid-full.svg";
import CSSLogo from "../src/assets/svgs/css3-brands-solid-full.svg";
import PythonLogo from "../src/assets/svgs/python-brands-solid-full.svg";

const skills = [
	{
		id: "skill_soft1",
		name: "Teamwork",
	},
	{
		id: "skill_soft2",
		name: "Communication",
	},
	{
		id: "skill_soft3",
		name: "Problem Solving",
	},
	{
		id: "skill_soft4",
		name: "Adaptability",
	},
	{
		id: "skill_soft5",
		name: "Innovative",
	},
	{
		id: "skill_soft6",
		name: "Eager to Learn",
	},
	{
		id: "skill_soft7",
		name: "Time Management",
	},
	{
		id: "skill_soft8",
		name: "Collaboration",
	},
];

const technologies = [
	{ name: "HTML", logo: HTMLLogo },
	{ name: "CSS", logo: CSSLogo },
	{ name: "React JS", logo: ReactLogo },
	{ name: "Node JS", logo: Node },
	{ name: "Docker", logo: Docker },
	{ name: "JavaScript", logo: JavascriptLogo },
	{ name: "Python", logo: PythonLogo },
	{ name: "Git", logo: GitLogo },
	{ name: "Figma", logo: FigmaLogo },
];

const Skills = () => {
	return (
		<div className="flex justify-center items-center  flex-col min-h-screen">
			<h1 className="text-4xl underline underline-offset-8 text-amber-500 mb-10">
				Skills
			</h1>
			<div className="flex justify-center items-center flex-row gap-12 w-full">
				<div className="w-[50%]  ml-6">
					<p className="text-2xl text-center mb-6">Technologies</p>
					<div className="flex flex-wrap justify-center gap-8">
						{technologies.map((tech, index) => (
							<div
								key={index}
								className="flex flex-col items-center text-xl w-28">
								<img
									src={tech.logo}
									alt={tech.name}
									width={50}
									height={50}
									className={
										tech.name === "Python" ?
											"bg-amber-50"
										:	""
									}
								/>
								<span className="mt-2">{tech.name}</span>
							</div>
						))}
					</div>
				</div>
				<div className="w-[50%] text-xl  mr-6 shadow-2xl/20 shadow-amber-100 justify-center rounded-2xl">
					<p className="text-2xl text-center mb-6 mt-4">
						Soft Skills
					</p>

					<div className="flex flex-col justify-between gap-20 p-6 mx-20">
						<ul className="flex flex-wrap">
							{skills.map((skill, index) => (
								<li
									key={index}
									className="w-1/2 mb-2 flex items-center">
									<span className="w-2 h-2 bg-yellow-400 mr-3"></span>
									{skill.name}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
