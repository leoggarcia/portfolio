import { generatePastelColor } from "../../utils";

function ExperienceItem({
	company,
	role,
	period,
	responsibilities,
	technologies,
}) {
	return (
		<div>
			<h3 className="text-lg sm:text-xl md:text-3xl mb-2">{company}</h3>
			<p className="text-lg sm:text-xl md:text-2xl mb-8">
				<b className="font-bold">{role}</b> | {period}
			</p>
			<div className="flex flex-wrap gap-7 justify-between">
				{responsibilities.map((resp, index) => (
					<div key={index} className="text-base md:text-xl w-full md:w-[48%]">
						• {resp}
					</div>
				))}
			</div>
			<div className="flex flex-wrap gap-2 mt-8">
				{technologies.map((tech, index) => (
					<span
						key={index}
						className={`px-6 py-1 text-xs rounded-full `}
						style={{
							backgroundColor: generatePastelColor(tech) + "7d",
						}}
					>
						{tech}
					</span>
				))}
			</div>
		</div>
	);
}
export default ExperienceItem;
