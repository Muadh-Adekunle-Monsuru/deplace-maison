import { useState } from 'react';
import InitialLoading from './components/InitialLoading';
import { AnimatePresence, motion } from 'framer-motion';
import WkMode from './components/WkMode';
import Overlay from './components/Overlay';
import Section1 from './components/Section1';

function App() {
	const [loading, setLoading] = useState(true);
	const [showBody, setShowBody] = useState(false);
	setTimeout(() => {
		setLoading(false);
		setShowBody(true);
	}, 6350);
	return (
		<>
			<AnimatePresence mode='wait'>
				{loading && (
					<motion.div
						key={'loading'}
						exit={{ y: '-100%' }}
						transition={{ type: 'tween', duration: 0.6 }}
					>
						<InitialLoading />
					</motion.div>
				)}
				{showBody && (
					<>
						<main className='bg-[#fcf9ee] h-full relative'>
							<WkMode />
							<Section1 />
							<Overlay />
							<div className='h-screen' />
							<div className='h-screen' />
						</main>
					</>
				)}
			</AnimatePresence>
		</>
	);
}

export default App;
