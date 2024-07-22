import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function WkMode() {
	const [visible, setVisible] = useState(false);

	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const preValue = scrollY.getPrevious();
		if (latest > preValue! && latest > 150) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	});
	return (
		<motion.h1
			variants={{
				visible: { y: 0 },
				hidden: { y: '-100%', opacity: 0 },
			}}
			animate={visible ? 'hidden' : 'visible'}
			transition={{ duration: 0.65, ease: 'easeInOut' }}
			className=' fixed top-5 left-1/2 text-xs  font-light text-center font-permanent'
		>
			<p className='bg-[#e7d6c4] inline-block rounded-sm px-1'>WkMode</p>
		</motion.h1>
	);
}
