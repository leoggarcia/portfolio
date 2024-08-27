import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		{ label: 'About Leo García', href: '#', isActive: true },
		{ label: 'Education', href: '#' },
		{ label: 'Experience', href: '#' },
		{ label: 'External projects', href: '#' },
	];

	return (
		<header className="flex items-center justify-between p-5 text-sm text-gray-900 m-auto 2xl:max-w-[1300px]">
			<nav className="w-full">
				{/* Mobile menu button */}
				<button
					className="md:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>

				{/* Desktop menu */}
				<ul className="hidden md:flex items-center gap-4 lg:gap-10">
					{menuItems.map((item, index) => (
						<li
							key={index}
							className={`font-bold uppercase opacity-50 transition-all hover:opacity-100 ${
								item.isActive ? 'active opacity-100' : ''
							}`}
						>
							<a href={item.href}>
								{item.label === 'About Leo García' ? (
									<>
										About{' '}
										<span className="text-portfolio-green">
											Leo García
										</span>
									</>
								) : (
									item.label
								)}
							</a>
						</li>
					))}
				</ul>

				{/* Mobile menu */}
				{isMenuOpen && (
					<ul className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-2 z-10">
						{menuItems.map((item, index) => (
							<li
								key={index}
								className={`font-bold uppercase opacity-50 transition-all hover:opacity-100 ${
									item.isActive ? 'active opacity-100' : ''
								}`}
							>
								<a href={item.href} className="block px-5 py-2">
									{item.label === 'About Leo García' ? (
										<>
											About{' '}
											<span className="text-portfolio-green">
												Leo García
											</span>
										</>
									) : (
										item.label
									)}
								</a>
							</li>
						))}
					</ul>
				)}
			</nav>

			<a
				href="#contact"
				className="hidden md:inline-block font-bold uppercase text-portfolio-green underline"
			>
				Contact
			</a>
		</header>
	);
}
