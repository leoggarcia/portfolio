import github_icon from '../../assets/github_icon.svg';
import linkedin_icon from '../../assets/linkedin_icon.svg';
import phone_icon from '../../assets/phone_icon.svg';
import envelop_icon from '../../assets/envelop_icon.svg';

const socialMedia = [
	{ icon: github_icon, alt: 'GitHub', url: 'https://github.com/leoggarcia' },
	{
		icon: linkedin_icon,
		alt: 'LinkedIn',
		url: 'https://www.linkedin.com/in/leogarciag/',
	},
	{
		icon: phone_icon,
		alt: 'Phone',
		url: 'tel:+52(618)3641448',
	},
	{ icon: envelop_icon, alt: 'Email', url: 'mailto:leogjl66@gmail.com' },
];

export default function Hero() {
	return (
		<section
			className="flex flex-col w-full mx-auto justify-center text-center p-5 max-w-[1300px]"
			style={{
				minHeight: 'calc(100vh - 60px)',
			}}
		>
			<h1 className="text-8xl lg:text-[160px] font-bold text-portfolio-black leading-tight">
				Hello!
			</h1>
			<p className="mt-0 sm:mt-4 text-[40px] md:text-6xl lg:text-[100px] text-portfolio-black leading-tight">
				I'm Leo García
			</p>
			<span className="block font-semibold mt-7 text-lg sm:text-xl md:text-2xl text-portfolio-black">
				Computer Systems Engineer | Full Stack Developer
			</span>
			<div className="flex justify-center space-x-4 sm:space-x-6 mt-6 sm:mt-12">
				{socialMedia.map((item, index) => (
					<a
						href={item.url}
						target="_blank"
						key={index}
						className="flex justify-center items-center w-8 sm:w-10 cursor-pointer bg-portfolio-black p-1.5 sm:p-2 rounded-full hover:bg-portfolio-black/80 transition-colors duration-300"
					>
						<img
							className="w-full transition ease-in-out duration-300"
							src={item.icon}
							alt={item.alt}
							width={40}
							height={40}
						/>
					</a>
				))}
			</div>
		</section>
	);
}
