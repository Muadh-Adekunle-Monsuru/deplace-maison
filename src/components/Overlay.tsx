import { animate, motion } from 'framer-motion';
const variants = {
	hoveredInitial: {
		y: '100%',
	},
	hoveredBottom: {
		y: '0',
	},
	hovered: {
		y: '-70%',
	},
};
export default function Overlay() {
	return (
		<div className='w-full h-screen flex flex-col justify-between fixed top-0 left-0 right-0 lg:p-2 uppercase text-xs font-medium font-mulish'>
			<div className='flex justify-between '>
				<div className='h-10 lg:-rotate-90 w-40  absolute -left-5 top-10 mt-10 overflow-hidden'>
					<motion.p
						whileHover={{
							y: '-54%',
						}}
						transition={{ type: 'tween', duration: 0.7 }}
						className='cursor-pointer text-3xl uppercase font-antonio font-semibold tracking-tighter '
					>
						Déplacé Maison
						<span className='block mt-1'>Déplacé Maison</span>
					</motion.p>
				</div>
				<div></div>
				<div className='overflow-hidden h-5 absolute right-5 top-10 cursor-pointer '>
					<motion.p
						variants={variants}
						whileHover='hovered'
						transition={{ type: 'tween' }}
					>
						Cart
						<span className='block mt-5'>cart</span>
					</motion.p>
				</div>
			</div>
			<div className='absolute left-10 bottom-5'>
				<div className='overflow-hidden h-5'>
					<motion.p
						variants={variants}
						whileHover='hovered'
						transition={{ type: 'tween' }}
						className=' cursor-pointer '
					>
						SHOP
						<span className='block mt-5'>SHOP</span>
					</motion.p>
				</div>
				<div className='overflow-hidden h-5'>
					<motion.p
						variants={variants}
						whileHover='hovered'
						transition={{ type: 'tween' }}
						className=' cursor-pointer '
					>
						Collections
						<span className='block mt-5'>collections</span>
					</motion.p>
				</div>
				<div className='overflow-hidden h-5'>
					<motion.p
						variants={variants}
						whileHover='hovered'
						transition={{ type: 'tween' }}
						className=' cursor-pointer '
					>
						About
						<span className='block mt-5'>about</span>
					</motion.p>
				</div>
			</div>
		</div>
	);
}
