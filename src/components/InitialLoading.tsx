import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function InitialLoading() {
	// const [curr, setCurr] = useState(true);
	const [val, setVal] = useState('');

	const values = ['33%', '40%', '50%', '60%', '75%', '93%', '100%'];

	useEffect(() => {
		let i = 0;
		const val = setInterval(() => {
			if (i > 5) {
				console.log('clearing');
				clearInterval(val);
			}
			setVal(values[i]);
			i++;
		}, 800);
	}, []);
	return (
		<div className='h-screen flex flex-col items-center justify-between bg-[#141414]'>
			<div></div>
			<div className='text-[10vh] lg:text-[25vh] font-bold text-[#fcf9ee] h-28 lg:h-40 flex items-center justify-center overflow-hidden font-antonio'>
				<AnimatePresence mode='wait'>
					<motion.h1
						initial={{ y: '80%' }}
						animate={{ y: 0 }}
						exit={{ y: '-100%' }}
						transition={{ type: 'tween' }}
						key={val}
					>
						{val}
					</motion.h1>
				</AnimatePresence>
			</div>
			<div className='uppercase font-mono text-[#fcf9ee] text-center leading-5 pb-5'>
				<p>©Deplace Maison</p>
				<p>All right reserved</p>
			</div>
		</div>
	);
}
