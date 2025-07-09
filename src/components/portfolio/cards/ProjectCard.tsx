import { Link } from 'react-router-dom';

export interface ProjectCardProps {
	title: string;
	summary?: string;
	thumbSrc: string;
	slug: string;
}

export default function ProjectCard({
	title,
	summary,
	thumbSrc,
	slug
}: Readonly<ProjectCardProps>) {
	return (
		<Link
			to={`/projects/${slug}`}
			className="group block overflow-hidden rounded-lg shadow-sm transition hover:shadow-md"
		>
			<img src={thumbSrc} alt={title} className="aspect-[4/3] w-full object-cover" />
			<div className="space-y-1 p-4">
				<h3 className="font-semibold text-gray-900">{title}</h3>
				{summary && <p className="line-clamp-3 text-sm text-gray-600">{summary}</p>}
			</div>
		</Link>
	);
}
