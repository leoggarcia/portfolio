import itd from '../../assets/itd.png';

function Education() {
	return (
		<section id="education" className="flex flex-col md:flex-row items-center justify-center p-8 w-screen m-auto text-portfolio-black max-w-[1300px]">
			<div className="md:w-1/2">
				<h2 className="text-4xl md:text-5xl font-bold">Education</h2>
				<p className="flex items-center mt-2 text-lg sm:text-xl md:text-3xl">
					Durango Technological Institute{' '}
					<svg
						width="34"
						height="17"
						viewBox="0 0 34 17"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className='ml-2 cursor-pointer'
					>
						<g clip-path="url(#clip0_105_197)">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M3.37871 8.50001C3.37871 9.8484 3.91687 11.1416 4.8748 12.095C5.83274 13.0485 7.13197 13.5841 8.48669 13.5841H11.892C12.3436 13.5841 12.7767 13.7627 13.096 14.0805C13.4153 14.3983 13.5947 14.8294 13.5947 15.2788C13.5947 15.7283 13.4153 16.1593 13.096 16.4772C12.7767 16.795 12.3436 16.9735 11.892 16.9735H8.48669C6.22882 16.9735 4.06343 16.0808 2.46688 14.4917C0.870323 12.9026 -0.0266113 10.7473 -0.0266113 8.50001C-0.0266113 6.25269 0.870323 4.09742 2.46688 2.50833C4.06343 0.919233 6.22882 0.0264893 8.48669 0.0264893H11.892C12.3436 0.0264893 12.7767 0.205038 13.096 0.522857C13.4153 0.840676 13.5947 1.27173 13.5947 1.72119C13.5947 2.17066 13.4153 2.60171 13.096 2.91953C12.7767 3.23735 12.3436 3.4159 11.892 3.4159H8.48669C7.13197 3.4159 5.83274 3.95154 4.8748 4.905C3.91687 5.85845 3.37871 7.15162 3.37871 8.50001ZM30.6213 8.50001C30.6213 9.8484 30.0831 11.1416 29.1252 12.095C28.1673 13.0485 26.868 13.5841 25.5133 13.5841H22.108C21.6564 13.5841 21.2233 13.7627 20.904 14.0805C20.5847 14.3983 20.4053 14.8294 20.4053 15.2788C20.4053 15.7283 20.5847 16.1593 20.904 16.4772C21.2233 16.795 21.6564 16.9735 22.108 16.9735H25.5133C27.7712 16.9735 29.9366 16.0808 31.5331 14.4917C33.1297 12.9026 34.0266 10.7473 34.0266 8.50001C34.0266 6.25269 33.1297 4.09742 31.5331 2.50833C29.9366 0.919233 27.7712 0.0264893 25.5133 0.0264893H22.108C21.6564 0.0264893 21.2233 0.205038 20.904 0.522857C20.5847 0.840676 20.4053 1.27173 20.4053 1.72119C20.4053 2.17066 20.5847 2.60171 20.904 2.91953C21.2233 3.23735 21.6564 3.4159 22.108 3.4159H25.5133C26.868 3.4159 28.1673 3.95154 29.1252 4.905C30.0831 5.85845 30.6213 7.15162 30.6213 8.50001ZM10.1894 6.80531C9.73778 6.80531 9.3047 6.98385 8.98539 7.30167C8.66608 7.61949 8.48669 8.05055 8.48669 8.50001C8.48669 8.94947 8.66608 9.38053 8.98539 9.69835C9.3047 10.0162 9.73778 10.1947 10.1894 10.1947H23.8106C24.2622 10.1947 24.6953 10.0162 25.0146 9.69835C25.3339 9.38053 25.5133 8.94947 25.5133 8.50001C25.5133 8.05055 25.3339 7.61949 25.0146 7.30167C24.6953 6.98385 24.2622 6.80531 23.8106 6.80531H10.1894Z"
								fill="#02755F"
							/>
						</g>
						<defs>
							<clipPath id="clip0_105_197">
								<rect width="34" height="17" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</p>
				<div className="text-base md:text-xl">
					<p className="text-gray-600 mt-1">Graduated in 2022</p>
					<p className="mt-4">
						<span className="font-bold">
							Engineering, Computer Systems
						</span>{' '}
						| Commerce development with web technologies
					</p>
					<p className="mt-4">
						<span className="font-bold">Relevant Coursework:</span>{' '}
						Design and Analysis of Algorithms, Advanced Data
						Structures, Algorithms, full CMS e-commerce development.
					</p>
				</div>
			</div>
			<div className="md:w-1/2 mt-6 md:mt-0 md:ml-12 flex justify-center">
				<img
					src={itd}
					alt="Durango Technological Institute"
					className="w-full"
				/>
			</div>
		</section>
	);
}

export default Education;
