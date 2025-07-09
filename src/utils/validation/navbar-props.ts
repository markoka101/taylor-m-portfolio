import type React from 'react';

export type NavbarProps = Readonly<{
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>;
