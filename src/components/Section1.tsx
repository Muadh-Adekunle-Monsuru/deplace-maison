import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
export default function Section1() {
	const [down, setDown] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const preValue = scrollY.getPrevious();
		if (latest > preValue! && latest > 150) {
			setDown(true);
		} else {
			setDown(false);
		}
	});
	return (
		<div className='lg:pr-20 lg:pt-24'>
			<div className='text-[11rem] leading-none font-mulish font-bold text-right  tracking-tighter blur-[0.4px]'>
				<p>SPRING,</p>
				<div className='flex items-center text-right justify-end'>
					<p>SUMMER</p>
					<span className='text-5xl tracking-tight font-semibold'>
						COLL. <span className='block'>2024</span>
					</span>
				</div>
			</div>
			<div className='flex gap-14 justify-end relative '>
				<div className='w-1/3'>
					<div className='w-full relative h-screen border-2 border-black overflow-hidden'>
						<img
							src='/shoe1.jpeg'
							className={`object-cover w-full h-full ${
								down ? 'scale-110' : ''
							} transition-transform duration-[3000ms]`}
						/>
					</div>
					<div className='flex text-xs py-1 font-medium'>
						<p className='w-1/2'>(02) </p>
						<p>MAN</p>
					</div>
				</div>

				<div className='w-1/3'>
					<div className=' w-full h-screen border-2 border-black overflow-hidden'>
						<img
							src='/shoe2.jpeg'
							className={`object-cover w-full h-full ${
								down ? 'scale-110' : ''
							} transition-transform duration-[3000ms] `}
						/>
					</div>
					<div className='flex text-xs py-1 font-medium'>
						<p className='w-1/2'>(02) </p>
						<p>WMNS</p>
					</div>
				</div>
			</div>
			<div className='flex justify-end items-center py-14 gap-5'>
				<p className='text-xl font-medium font-mulish cursor-pointer'>
					EXPLORE
				</p>
				<div className='size-14 border-2 border-black drop-shadow-xl rounded-full p-3 flex items-center justify-center cursor-pointer'>
					<img src='/arrow.png' className='size-10' />
				</div>
			</div>
		</div>
	);
}
