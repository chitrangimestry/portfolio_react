import React from "react";
import Girl from "../src/assets/Designer-girl-bro.png";
import GraduateGirl from "../src/assets/Graduation-bro.png";
import Skills from "./Skills";

const Home = () => {
	return (
		<>
			<div className="flex flex-row justify-center gap-25 min-h-screen">
				<div className=" md:w-[40%] shadow-2xl/20 shadow-amber-100  rounded-2xl p-4">
					<p className=" font-semibold text-6xl  ">
						CHITRANGI DEEPAK <br />
						MESTRY
					</p>

					<p className="text-2xl font-semibold mt-6 mb-4">
						MERN Developer with a passion for creating innovative
						and user-friendly web applications. Offering a wide
						range of skills in front-end and back-end development.
					</p>
				</div>
				<img
					src={Girl}
					alt="logo"
					width={300}
					height={300}
					className="absolute  left-0  top-140 md:top-160  z-10 m-4 "
				/>

				<div className="flex justify-center items-center text-3xl  w-[40%] p-4 m-4">
					<img
						src={GraduateGirl}
						alt="logo"
						width={500}
						height={500}
					/>
				</div>
			</div>
		</>
	);
};

export default Home;
