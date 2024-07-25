import { useEffect, useRef } from 'react';
import './Cursor.css'; // Ensure you have the necessary CSS for .cursor-circle

const TAIL_LENGTH = 20;

const Cursor = () => {
	const cursorRef = useRef<HTMLDivElement>(null);
	let mouseX = 0;
	let mouseY = 0;

	let cursorCircles: HTMLDivElement[] = [];
	let cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });

	function onMouseMove(event: MouseEvent) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	}

	useEffect(() => {
		function initCursor() {
			if (cursorRef.current) {
				for (let i = 0; i < TAIL_LENGTH; i++) {
					let div = document.createElement('div');
					div.classList.add('cursor-circle');
					cursorRef.current.appendChild(div);
				}
				cursorCircles = Array.from(
					cursorRef.current.querySelectorAll('.cursor-circle')
				) as HTMLDivElement[];
			}
		}
		initCursor();
	}, []);

	useEffect(() => {
		function updateCursor() {
			cursorHistory.shift();
			cursorHistory.push({ x: mouseX, y: mouseY });

			for (let i = 0; i < TAIL_LENGTH; i++) {
				let current = cursorHistory[i];
				let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];

				let xDiff = next.x - current.x;
				let yDiff = next.y - current.y;

				current.x += xDiff * 0.35;
				current.y += yDiff * 0.35;
				cursorCircles[i].style.transform = `translate(${current.x}px, ${
					current.y
				}px) scale(${1 - i / TAIL_LENGTH})`;
			}
			requestAnimationFrame(updateCursor);
		}

		updateCursor();
	}, []);

	useEffect(() => {
		document.addEventListener('mousemove', onMouseMove, false);

		return () => {
			document.removeEventListener('mousemove', onMouseMove, false);
		};
	}, []);

	return <div id='cursor' ref={cursorRef}></div>;
};

export default Cursor;
