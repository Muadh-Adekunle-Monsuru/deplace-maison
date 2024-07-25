import { delay } from 'framer-motion';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

export default function NewScrollbar() {
	return (
		<div>
			<Swiper
				modules={[Autoplay]}
				spaceBetween={10}
				slidesPerView='auto'
				// loop={true}
				autoplay={{
					delay: 20,
					disableOnInteraction: false,
					reverseDirection: false,
				}}
				className='h-[4rem] bg-[#ddc92a] border-y-2 border-y-black flex items-center overflow-hidden' // Enable loop mode
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
			</Swiper>
		</div>
	);
}
