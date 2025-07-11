import { InstagramIcon, LinkedInLogo } from '../../components/icons';

function About() {
	return (
		<section className="flex w-full flex-col items-center">
			<div className="mt-2 h-[3px] w-screen bg-lime-100/70" />
			<section className="bg-accent mt-16 mb-20 flex h-[780px] w-[92%] flex-col items-center justify-center text-gray-800 lg:flex-row lg:justify-between">
				<main className="font-marmelad flex h-full flex-col justify-center p-2 lg:w-[60rem] lg:p-0 lg:pl-32 xl:w-[70rem] xl:pl-40">
					<div>
						<h1 className="text-text text-6xl">Hey There, I'm Taylor</h1>

						<p className="text-text mt-4 p-1 leading-8 lg:pr-[19rem] xl:pr-[27rem]">
							If you haven't noticed yet, I'm fond of the color green. But beside my
							love for shades, I'm a professional Learning & Design Specialist — and
							hopefully an author! I was born and raised in New York City, which
							taught me all about how to learn a thing or two, write a good story, and
							enjoy a nice slice of pizza. Now I live and work in New Jersey with my
							lovely cat, Wizard.
						</p>
					</div>

					{/* Make this dry later*/}
					<nav className="mt-2 flex flex-row">
						<a
							href="https://www.linkedin.com/in/taylor-morales-71125a201/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="mr-1"
						>
							<LinkedInLogo className="h-6 rounded-full bg-black p-[0.2rem]" />
						</a>
						<a
							href="https://www.instagram.com/totallynottaylorm"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
						>
							<InstagramIcon className="h-6 rounded-full bg-black text-black" />
						</a>
					</nav>
				</main>
				<aside className="flex h-full flex-1 items-center justify-center bg-black">
					<h2>This will be an image</h2>
				</aside>
			</section>
		</section>
	);
}

export default About;
