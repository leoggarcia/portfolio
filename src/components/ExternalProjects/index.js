import Project from './Project';
import working_ilustration from '../../assets/working_ilustration.svg';

const projects = [
	{
		title: 'Planeación AI',
		description:
			'Application for generating school plans in Mexico using artificial intelligence.',
		technologies: [
			'React',
			'Node',
			'Sequelize',
			'GraphQL',
			'MySQL',
			'Firebase',
			'Redux',
			'MUI',
		],
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/planeaciones-6d693.appspot.com/o/plaeacion_ai_ss.png?alt=media&token=d6af1959-b79f-4900-996a-6d1cc98d75bc',
		url: 'https://planeacionai.leogarciag.com/',
	},
];

function ExternalProjects() {
	return (
		<section id="projects" className="p-8 w-screen m-auto mt-[50px] text-portfolio-black max-w-[1300px]">
			<h2 className="text-4xl md:text-5xl font-bold mb-6">External projects</h2>
			<div className="flex flex-col gap-[54px]">
				{projects.map((project, index) => (
					<>
						{<Project key={index} {...project} />}
						{index === projects.length - 1 ? null : <hr />}
					</>
				))}
			</div>

			<h3 className="text-2xl md:text-3xl text-center mb-7 mt-[50px] mb-2">
				Working in some more projects...
			</h3>
			<img src={working_ilustration} alt="Working" className="m-auto" />
		</section>
	);
}

export default ExternalProjects;
