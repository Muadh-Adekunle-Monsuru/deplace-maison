import { useState } from 'react';
import InitialLoading from './components/InitialLoading';
import { AnimatePresence, motion } from 'framer-motion';
import WkMode from './components/WkMode';

function App() {
	const [loading, setLoading] = useState(true);
	const [showBody, setShowBody] = useState(false);
	setTimeout(() => {
		setLoading(false);
		setShowBody(true);
	}, 5450);
	return (
		<>
			<AnimatePresence>
				{loading && (
					<motion.div exit={{ y: '-100%' }} transition={{ type: 'tween' }}>
						<InitialLoading />
					</motion.div>
				)}
			</AnimatePresence>

			{showBody && (
				<main>
					<WkMode />
					<div className='h-screen' />
					<div className='h-screen' />
				</main>
			)}
		</>
	);
}

export default App;
