import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faStar,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { ChevronLeft,ChevronRight } from "lucide-react";

import { testimonial1,testimonial2,testimonial3,testimonial4,testimonial5 } from "../../shared/constants";

const testimonialList = [
	[
		{
			photo:testimonial1.logo,
			name: testimonial1.nomRestaurant,
			rating: testimonial1.nombreEtoiles,
			content:testimonial1.temoignage,
		},
		{
            photo:testimonial2.logo,
			name: testimonial2.nomRestaurant,
			rating: testimonial2.nombreEtoiles,
			content:testimonial2.temoignage,
        },
	],
	[
		{
			photo:testimonial3.logo,
			name: testimonial3.nomRestaurant,
			rating: testimonial3.nombreEtoiles,
			content:testimonial3.temoignage,
		},
		{
            photo:testimonial4.logo,
			name: testimonial4.nomRestaurant,
			rating: testimonial4.nombreEtoiles,
			content:testimonial4.temoignage,
        },
	],
    [
		{
			photo:testimonial5.logo,
			name: testimonial5.nomRestaurant,
			rating: testimonial5.nombreEtoiles,
			content:testimonial5.temoignage,
		},
	],
];

const Rating = ({ rating, showLabel, ...rest }) => (
	<p className="flex flex-wrap gap-0.5" {...rest}>
		<span>
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-[22px] text-yellow-500"
						/>
					);
				else if (rating > i && rating < index + 1)
					content = (
						<FontAwesomeIcon
							icon={faStarHalfAlt}
							className="text-[22px] text-yellow-500"
						/>
					);
				else if (index > rating)
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-[22px] text-yellow-200 dark:text-opacity-20"
						/>
					);

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</p>
);



const TestimonialItem = ({ item }) => {
	const { rating, content, photo, name } = item;
	return (
		<div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl hover:-translate-y-1 h-full duration-300 p-6">
			<div className="mt-4">
				<div className="flex justify-between items-center mb-6">
					<div className="flex items-center">
						<div className="mr-2">
							<img
								src={photo}
								alt={name}
								className="max-w-full h-auto rounded-full border"
								width="47"
							/>
						</div>
						<div>
							<h5 className="text-xl break-all font-medium">{name}</h5>
						</div>
					</div>
					<Rating rating={rating} showLabel={false} />
				</div>
				<p className="leading-[1.8] opacity-80 mb-6">{content}</p>
			</div>
		</div>
	);
};

export  const Testimonial21 = () => {
	const [index, setIndex] = useState(0);

	const handleControl = (type) => {
		if (type === "prev") {
			setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
		} else if (type === "next") {
			setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
		}
	};
	return (
		<section className="ezy__testimonial21 light py-14 md:py-24 bg-secondary dark:bg-[#0b1727] text-zinc-900 dark:text-white mt-16" id="temoignage">
			<div className="container px-4 mx-auto relative">
				<div className="flex justify-center text-center mb-6 lg:mb-12">
					<div className="max-w-lg">
						<h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6 text-primary">
							Ils m'ont fait confiance
						</h2>
						<p className="text-lg opacity-80">
							
						</p>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-6 mt-12">
					{testimonialList[index].map((item, i) => (
						<div className="col-span-2 md:col-span-1" key={i}>
							<TestimonialItem item={item} />
						</div>
					))}
				</div>

				<div className="relative flex justify-center items-center my-12">
					<button
						className="text-lg bg-white shadow-2xl dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full mr-4 cursor-pointer"
						onClick={() => handleControl("prev")}
					>
						<ChevronLeft/>
					</button>
					<button
						className="text-lg bg-white shadow-2xl dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full cursor-pointer"
						onClick={() => handleControl("next")}
					>
						<ChevronRight/>
					</button>
				</div>
			</div>
		</section>
	);
};

