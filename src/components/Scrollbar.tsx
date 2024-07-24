import { motion } from 'framer-motion';

export default function Scrollbar() {
	return (
		<div className='h-[4rem] bg-[#ddc92a] border-y-2 border-y-black flex items-center overflow-hidden'>
			<motion.div
				className='flex space-x-2 animate-scroll'
				animate={{ x: ['0%', '-100%'] }}
				transition={{
					duration: 25,
					repeat: Infinity,
					ease: 'linear',
				}}
			>
				<div className='flex items-center uppercase font-semibold font-mulish text-2xl space-x-2 text-nowrap'>
					<p>do not scroll</p>
					<div className='w-1 h-1 bg-black' />
					<p>deplace shop</p>
					<div className='w-1 h-1 bg-black' />
					<p>do not scroll</p>
					<div className='w-1 h-1 bg-black' />
					<p>deplace shop</p>
					<div className='w-1 h-1 bg-black' />
					<p>do not scroll</p>
					<div className='w-1 h-1 bg-black' />
					<p>deplace shop</p>
					<div className='w-1 h-1 bg-black' />
				</div>
				<div className='flex items-center uppercase font-semibold font-mulish text-2xl space-x-2 text-nowrap'>
					<p>do not scroll</p>
					<div className='w-1 h-1 bg-black' />
					<p>deplace shop</p>
					<div className='w-1 h-1 bg-black' />
					<p>do not scroll</p>
					<div className='w-1 h-1 bg-black' />
					<p>deplace shop</p>
					<div className='w-1 h-1 bg-black' />
					<p>do not scroll</p>
					<div className='w-1 h-1 bg-black' />
					<p>deplace shop</p>
					<div className='w-1 h-1 bg-black' />
				</div>
			</motion.div>
		</div>
	);
}
