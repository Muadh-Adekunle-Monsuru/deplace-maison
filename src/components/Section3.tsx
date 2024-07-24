import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const products = [
	{ name: 'Cactus', prevPrice: '300', currPrice: '180', img: '/img1.jpeg' },
	{ name: 'the eye', prevPrice: '240', currPrice: '140', img: '/img2.jpeg' },
	{ name: 'duran', prevPrice: '300', currPrice: '180', img: '/img3.jpeg' },
	{ name: 'the code', prevPrice: '300', currPrice: '180', img: '/img4.jpeg' },
	{ name: 'carnera', prevPrice: '300', currPrice: '180', img: '/img5.jpeg' },
];

export default function Section3() {
	return (
		<div className='py-20 '>
			<div className=' font-mulish flex justify-end lg:pr-20'>
				<p className='text-6xl font-mulish font-semibold w-3/4 '>
					<span className='underline inline uppercase text-xl pr-20'>
						WHO we are
					</span>
					An independent <span className='underline'>brand </span>of urban
					trekking shoes and accessories that comes from a convergence of arts
					and personalities.
				</p>
			</div>
			<Swiper
				spaceBetween={50}
				slidesPerView='auto'
				className='pt-40 pr-10'
				freeMode={true}
			>
				{products.map((item, index) => (
					<SwiperSlide
						key={index}
						className='pb-10 min-w-[20rem] max-w-[20rem]  h-[28rem] border-2 border-black flex flex-col items-center justify-between bg-[#e7d6c4] -z-10 first:ml-80 last:mr-10 select-none'
					>
						<div className='size-60 overflow-hidden'>
							<img src={item.img} className='object-contain' />
						</div>
						<p className='font-cyberthrone bg-black px-1 rounded-sm text-xs text-[#e7d6c4]'>
							unisex
						</p>
						<p className='text-xs font-medium'>SS/20</p>
						<p className='text-7xl font-antonio uppercase'>{item.name}</p>
						<p className=' line-through'>€{item.prevPrice}</p>
						<p className=' font-antonio text-4xl'>€{item.currPrice}</p>
					</SwiperSlide>
				))}
			</Swiper>
			<div className='flex justify-end items-center py-14 gap-5'>
				<p className='text-xl font-medium font-mulish cursor-pointer'>
					SHOP ALL
				</p>
				<div className='size-14 border-2 border-black drop-shadow-xl rounded-full p-3 flex items-center justify-center cursor-pointer'>
					<img src='/arrow.png' className='size-10' />
				</div>
			</div>
		</div>
	);
}
