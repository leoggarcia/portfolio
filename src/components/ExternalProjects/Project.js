import { generatePastelColor } from '../../utils';

function Project({ title, description, technologies, imageUrl, url }) {
	return (
		<div className="flex items-center flex-wrap md:flex-nowrap">
			<div className="w-full md:w-1/2">
				<h3 className="text-lg sm:text-xl md:text-3xl mb-2 font-semibold md:font-normal">{title}</h3>
				<p className="text-base md:text-lg">{description}</p>
				<div className="flex flex-wrap gap-2 mt-8">
					{technologies.map((tech, index) => (
						<span
							key={index}
							className="px-6 py-1 text-xs rounded-full"
							style={{
								backgroundColor:
									generatePastelColor(tech) + '7d',
							}}
						>
							{tech}
						</span>
					))}
				</div>
				<a
					href={url}
					target="_blank"
					className="px-10 py-1 border border-2 border-portfolio-black rounded-md mt-8 block w-fit m-auto md:mx-0"
				>
					Visit this application
				</a>
			</div>
			<div className="w-full md:w-1/2 mt-5 md:mt-0 p-2 bg-white shadow-lg rounded-lg">
				<img className="rounded-lg" src={imageUrl} />
			</div>
		</div>
	);
}

export default Project;
