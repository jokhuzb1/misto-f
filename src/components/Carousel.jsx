import React, { useState } from "react";
import bag from "../assets/img/bag.jpg";
import men from "../assets/img/men.jpg";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from '../assets/img/men/6.jpg';
import img2 from '../assets/img/women/7.jpg'
export default function Carousel({ main }) {

	let [current, setCurrent] = useState(0);
	const slides = [main,img1, img2];

	let previousSlide = () => {
		if (current === 0) setCurrent(slides.length - 1);
		else setCurrent(current - 1);
	};

	let nextSlide = () => {
		if (current === slides.length - 1) setCurrent(0);
		else setCurrent(current + 1);
	};

	return (
		<div className="flex justify-center items-center">
			<div className="overflow-hidden h-96 w-80 relative shadow-md ">
				<div
					className={`flex transition ease-out duration-40 `}
					style={{
						transform: `translateX(-${current * 100}%)`,
					}}
				>
					{slides.map((s,index) => {
						return <img key={index} src={s} className="min-w-full object-contain mix-blend-multiply" />;
					})}
				</div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex z-10 px-2">
				<button
					onClick={previousSlide}
					className="  text-black-500 px-3 py-1 font-thin rounded-full bg-white "
				>
					<FontAwesomeIcon icon={faAngleLeft}/>
				</button>
				<span
					onClick={nextSlide}
					className="text-black-500 px-3 py-1 font-thin rounded-full bg-white"
				>
					<FontAwesomeIcon className=""  icon={faAngleRight}/>
				</span>
      </div>
			</div>
		</div>
	);
}
