import ExperienceItem from "./ExperienceItem";

const experiences = [
	{
		company: 'Happy inc',
		role: 'Sr Developer',
		period: 'May 2024 - Oct 2024',
		responsibilities: [
			'I have been developing a web application to manage web chats and a commutator system, showcasing my proficiency in frontend technologies.',
			'I have been developing a React web application focused on managing the content of various company websites, showcasing my proficiency in frontend technologies.',
		],
		technologies: [
			"JavaScript",
			'React',
			'Zustand',
			'Bitbucket',
		],
	},
	{
		company: 'Advante Digital',
		role: 'Full Stack Developer',
		period: 'July 2022 - May 2024',
		responsibilities: [
			'I have been developing an application that utilizes artificial intelligence for team management using React, demonstrating my expertise in full stack technologies and frameworks.',
			'Spearheaded the creation of web applications from scratch, contributing to the entire development lifecycle, including design, implementation, and deployment.',
			'Utilized React in conjunction with Node.js, GraphQL, and other technologies to deliver robust and scalable solutions.',
			'Mentored junior developers and collaborated with cross-functional teams to ensure successful project outcomes.',
		],
		technologies: [
			'React',
			'Node',
			'Sequelize',
			'GraphQL',
			'MySQL',
			'Firebase',
			'Redux',
			'MUI',
			'GitLab',
		],
	},
	{
		company: 'LAIKA Software',
		role: 'Full Stack Developer',
		period: 'February 2019 - September 2022',
		responsibilities: [
			'Design and development of web applications, e-commerce, websites and landing pages.',
			'Creation and support websites for at least 70 different companies across Mexico and some in the USA.',
			'Providing various functionalities to websites by creating plugins for WordPress.',
			'Creation of themes to adapt custom website designs to WordPress.',
		],
		technologies: ['PHP', 'WordPress', 'Figma design', 'GitHub'],
	},
	{
		company: 'Durango Youth Institute',
		role: 'Full Stack Developer',
		period: 'February 2022 – June 2022',
		responsibilities: [
			'Design and development of web e-commerce, websites.',
			'Free website creation for entrepreneurs to aid in the digitalization of businesses in my hometown.',
		],
		technologies: ['PHP', 'WordPress', 'Figma design', 'GitHub'],
	},
];

function Experience() {
	return (
		<section id="experience" className="p-8 w-screen m-auto text-portfolio-black max-w-[1300px]">
			<h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
			<div className="flex flex-col gap-[54px]">
				{experiences.map((exp, index) => (
					<>
						<ExperienceItem key={index} {...exp} />
						{index === experiences.length - 1 ? null : <hr />}
					</>
				))}
			</div>
		</section>
	);
}

export default Experience;
