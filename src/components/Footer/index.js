import github_icon from '../../assets/github_icon.svg';
import linkedin_icon from '../../assets/linkedin_icon.svg';
import phone_icon from '../../assets/phone_icon.svg';
import envelop_icon from '../../assets/envelop_icon.svg';

function Footer() {
	return (
		<footer className="w-full bg-portfolio-black text-white py-6 px-4 mt-[50px]">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center justify-items-center md:justify-items-start">
					<a
						href="tel:+52(618)3641448"
						className="flex items-center space-x-2 hover:text-gray-300"
					>
						<img
							src={phone_icon}
							alt="Phone"
							width={18}
							height={18}
						/>
						<span>+52 (618) 364 1448</span>
					</a>
					<a
						href="mailto:leogjl66@gmail.com"
						className="flex items-center space-x-2 hover:text-gray-300"
					>
						<img
							src={envelop_icon}
							alt="Email"
							width={18}
							height={18}
						/>
						<span>leogjl66@gmail.com</span>
					</a>
					<a
						href="https://www.linkedin.com/in/leogarciag/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center space-x-2 hover:text-gray-300"
					>
						<img
							src={linkedin_icon}
							alt="LinkedIn"
							width={18}
							height={18}
						/>
						<span>linkedin.com/in/leogarciag/</span>
					</a>
					<a
						href="https://github.com/leoggarcia"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center space-x-2 hover:text-gray-300"
					>
						<img
							src={github_icon}
							alt="GitHub"
							width={18}
							height={18}
						/>
						<span>github.com/leoggarcia</span>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
