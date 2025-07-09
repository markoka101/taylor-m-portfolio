export interface ImageRouteCardProps {
	title: string;
	thumbSrc: string;
	href: string;
}

export default function ImageRouteCard({ title, thumbSrc, href }: Readonly<ImageRouteCardProps>) {
	return (
		<a href={href} className="group relative block overflow-hidden rounded-lg">
			<img
				src={thumbSrc}
				alt={title}
				className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
			/>
			<span className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition group-hover:opacity-100">
				<span className="text-lg font-semibold text-white">{title}</span>
			</span>
		</a>
	);
}
