import { useState } from 'react';
import InitialLoading from './components/InitialLoading';
import { AnimatePresence, motion } from 'framer-motion';
import WkMode from './components/WkMode';
import Overlay from './components/Overlay';
import Section1 from './components/Section1';
import Cursor from './components/Cursor';
import Goo from './components/Goo';
import Scrollbar from './components/Scrollbar';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';
import NewScrollbar from './components/NewScrollbar';

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
					<motion.main
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						className='bg-[#fcf9ee] h-full relative cursor-none'
					>
						<Overlay />
						<Cursor />
						<Goo />
						<WkMode />
						<Section1 />
						<Scrollbar />
						{/* <NewScrollbar /> */}
						<Section3 />
						<Section4 />
						<Footer />
					</motion.main>
				)}
			</AnimatePresence>
		</>
	);
}

export default App;
