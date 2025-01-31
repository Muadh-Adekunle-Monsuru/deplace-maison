export default function Goo() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='goo hidden'
			version='1.1'
			width='100%'
		>
			<defs>
				<filter id='goo'>
					<feGaussianBlur
						in='SourceGraphic'
						stdDeviation='6'
						result='blur'
					></feGaussianBlur>
					<feColorMatrix
						in='blur'
						mode='matrix'
						values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15'
						result='goo'
					></feColorMatrix>
					<feComposite
						in='SourceGraphic'
						in2='goo'
						operator='atop'
					></feComposite>
				</filter>
			</defs>
		</svg>
	);
}
