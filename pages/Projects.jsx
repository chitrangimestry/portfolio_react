import React from "react";
import Card from "../src/components/Card";
import Girl from "../src/assets/Designer-girl-bro.png";
import Project1 from "../src/assets/projectsimg/project1.png";

const projects = [
	{
		id: 1,
		image: Project1,
		name: "Memory Game",
		description:
			"Developed using React hooks and reusable components, maintaining clean separation of CSS and JavaScript for scalability",
		link: "https://github.com/chitrangimestry/memory-game",
	},
	{
		id: 2,
		image: Girl,
		name: "Project 1",
		description: "this is project 1",
		link: "https://github.com",
	},
	{
		id: 3,
		image: Girl,
		name: "Full-Stack Blog Application",
		description: "Developed a full-stack Blog Application featuring a React frontend, Node.js backend, and MySQL database for reliable content management.",
		link: "https://github.com/chitrangimestry/blogappyt",
	},
	{
		id: 4,
		image: Girl,
		name: "Project 1",
		description: "this is project 1",
		link: "https://github.com",
	},
];

const Projects = () => {
	return (
		<div>
			<div className="flex justify-center items-center flex-col ">
				<h1 className="text-4xl underline underline-offset-8 text-amber-500">
					Projects
				</h1>
			</div>
			<div className="m-14 mt-20 flex flex-row flex-wrap justify-around  gap-4">
				{projects.map((project) => (
					<Card
						key={project.id}
						image={project.image}
						name={project.name}
						description={project.description}
						link={project.link}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
