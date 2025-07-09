import { Link } from 'react-router-dom';

export interface CourseCardProps {
	title: string;
	duration: string;
	type: 'Microlearning' | 'In-Depth'; //temp tyoe for interface
	thumbSrc: string;
	slug: string;
}

export default function CourseCard({
	title,
	duration,
	type,
	thumbSrc,
	slug
}: Readonly<CourseCardProps>) {
	return (
		<Link
			to={`/courses/${slug}`}
			className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md"
		>
			<img src={thumbSrc} alt={title} className="aspect-video w-full object-cover" />
			<div className="flex flex-1 flex-col gap-2 p-4">
				<h3 className="font-semibold text-gray-900 group-hover:underline">{title}</h3>
				<span className="inline-flex items-center gap-2 text-xs text-green-700">
					<strong>{type}</strong> • {duration}
				</span>
			</div>
		</Link>
	);
}
