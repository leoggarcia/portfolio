import me_ilustration from '../../assets/me_ilustration.svg';

function About() {
	return (
		<section id='about' className="flex flex-col md:flex-row items-center justify-center p-8 w-screen m-auto text-portfolio-black max-w-[1300px]">
			<div className="md:w-1/3 flex justify-center md:justify-start">
				<img
					src={me_ilustration}
					alt="Illustration"
					className="w-full"
				/>
			</div>
			<div className="md:w-2/3 mt-6 md:mt-0 md:ml-12 text-center md:text-left">
				<p className="text-start text-lg md:text-3xl">
					I have over{' '}
					<span className="font-bold">six years of experience</span>{' '}
					working in web development, creating web applications for
					various companies across{' '}
					<span className="font-bold">
						Mexico and the United States
					</span>
					.
				</p>
				<p className="text-start mt-4 text-lg md:text-3xl">
					I consider myself to be highly creative, with a keen
					interest in continuously acquiring new knowledge to solve
					any challenges that arise.
				</p>
			</div>
		</section>
	);
}

export default About;
