import { AnimatePresence, motion } from 'framer-motion';
import React, { type FormEvent } from 'react';
import submitForm from '../../services/api/contact';

function Contact() {
	//form states
	const [firstName, setFirstName] = React.useState<string>('');
	const [lastName, setLastName] = React.useState<string>('');
	const [email, setEmail] = React.useState<string>('');
	const [message, setMessage] = React.useState<string>('');

	/*
	States after submit
	currently keeping the boolean in case there I want to do
	more than just a message
	*/
	const [sent, setSent] = React.useState<boolean>(false);
	const [response, setResponse] = React.useState<string>('');
	const [color, setColor] = React.useState<'text-red-500' | 'text-text'>('text-text');

	const nameInputStyles =
		'border-1 border-text p-2 hover:ring-1  hover:ring-text focus:outline-none focus:ring-1 ease-in-out focus:ring-text duration-300 transition-all mb-6 resize-none';
	const labelStyles = 'my-1';

	// Take a guess what this does
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		//make sure it's not just white space
		if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
			return;
		}

		//we sent the message to server
		setSent(true);
		try {
			await submitForm({ firstName, lastName, email, message });

			setFirstName('');
			setLastName('');
			setEmail('');
			setMessage('');

			//display success message
			setResponse('Thank You For Submitting');
			setColor('text-text');
		} catch (err) {
			//display something went wrong and log error in console
			setResponse('Something Went Wrong');
			setColor('text-red-500');
			console.error(err);
		}

		//after five seconds reset the response and sent
		setTimeout(() => {
			setResponse('');
			setSent(false);
		}, 5000);
	};

	return (
		//Local fade in to prevent retrigger cominng from the root layout
		<AnimatePresence mode="wait">
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.6, ease: 'easeInOut' }}
				className="flex w-full flex-col items-center"
			>
				<section className="bg-accent text-text mt-2 mb-20 flex h-[700px] w-full flex-col items-center justify-center text-gray-800 lg:flex-row lg:justify-between">
					<aside className="h-full w-[450px] bg-black">
						<h1>Image goes here</h1>
					</aside>
					<main className="flex h-full flex-1 flex-col items-center pt-10 pl-10">
						<form
							onSubmit={handleSubmit}
							className="mt-6 flex w-[40rem] flex-col text-sm"
						>
							<h1 className="text-text font-marmelad mb-5 text-start text-3xl leading-8">
								Get in Touch
							</h1>
							<div className="flex flex-row justify-between">
								<div className="flex w-[19rem] flex-col">
									<label htmlFor="first-name" className={labelStyles}>
										First Name *
									</label>
									<input
										onChange={(e) => setFirstName(e.target.value)}
										id="first-name"
										name="first-name"
										value={firstName}
										required
										className={nameInputStyles}
									/>
								</div>
								<div className="flex w-[19rem] flex-col">
									<label htmlFor="last-name" className={labelStyles}>
										Last Name *
									</label>
									<input
										onChange={(e) => setLastName(e.target.value)}
										required
										id="last-name"
										name="last-name"
										value={lastName}
										className={nameInputStyles}
									/>
								</div>
							</div>
							<label htmlFor="email" className={labelStyles}>
								Email *
							</label>
							<input
								type="email"
								required
								id="email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className={nameInputStyles}
							></input>
							<label htmlFor="message" className={labelStyles}>
								Message *
							</label>
							<textarea
								onChange={(e) => setMessage(e.target.value)}
								id="message"
								name="message"
								className={nameInputStyles}
								value={message}
								required
								rows={6}
							/>
							<button
								type="submit"
								className="bg-text w-full cursor-pointer border p-2 text-white transition-all duration-[0.4s] ease-in-out hover:bg-white hover:text-black"
							>
								Send
							</button>
						</form>
						{sent ? (
							<h2 className={`w-[40rem] text-start ${color}`}>{response}</h2>
						) : null}
					</main>
				</section>
			</motion.section>
		</AnimatePresence>
	);
}

export default Contact;
