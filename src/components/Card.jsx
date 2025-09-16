import React from "react";

const Card = ({ image, name, description, link }) => {
	return (
		<div className="flex justify-center items-center flex-col w-110 bg-gray-800 p-6 rounded-2xl transition-all hover:translate-x-2 hover:-translate-y-2 hover:shadow-2xl/25 hover:shadow-amber-100">
			<img src={image} alt={name} className="w-100 h-60 object-contain" />
			<h2 className="text-2xl font-bold">{name}</h2>
			<p className="text-lg text-justify mt-2">{description}</p>
			<a
				href={link}
				className=" hover:underline hover:underline-offset-8 mt-2">
				Github Link here
			</a>
		</div>
	);
};

export default Card;
