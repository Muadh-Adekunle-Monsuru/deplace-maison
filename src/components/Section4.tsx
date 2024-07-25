import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Section4() {
	const [value, setValue] = useState(false);
	const values = [
		{
			name: 'Jamie K Cohen',
			text: 'Good things come to those who wait - Déplacé Maison is what has been missing in the modern fashion industry for years. Buy a shoe of high quality and design it finally happened.',
		},
		{
			name: 'William Gibson',
			text: 'Déplacé Maison is a convincer for anticipation.The urban trekking as nevers seen before. An exceptional product that has no equal alongside a great team represent the brand professionally.',
		},
	];
	useState(() => {
		setInterval(() => {
			setValue((prev) => !prev);
		}, 5000);
		console.log(value);
	});

	return (
		<div className='py-20 px-5 flex justify-center lg:justify-end mb-20'>
			<div className='relative lg:w-1/2 flex gap-5'>
				<img src='/stripe.svg' className='w-20 h-32 absolute -top-3 -left-5 ' />
				<AnimatePresence mode='wait'>
					{value && (
						<div className='flex gap-5' key={'first'}>
							<motion.h1
								initial={{ y: '-100%', opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ opacity: 0 }}
								className='text-5xl  font-cyberthrone'
							>
								{values[0].name}
							</motion.h1>
							<motion.p
								initial={{ y: '-100%', opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.2 }}
								className='font-mulish w-3/4 lg:w-1/2 text-xs blur-[0.3px] font-medium'
							>
								{values[0].text}
							</motion.p>
						</div>
					)}
					{!value && (
						<div className='flex gap-5' key={'second'}>
							<motion.h1
								initial={{ y: '100%', opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								className='text-5xl  font-cyberthrone'
							>
								{values[1].name}
							</motion.h1>
							<motion.p
								initial={{ y: '100%', opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ delay: 0.2 }}
								className='font-mulish w-3/4 lg:w-1/2 text-xs blur-[0.3px] font-medium'
							>
								{values[1].text}
							</motion.p>
						</div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
