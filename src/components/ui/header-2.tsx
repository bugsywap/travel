'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);
	const pathname = usePathname();

	const links = [
		{ label: 'About', href: '/about' },
		{ label: 'Services', href: '/services' },
		{ label: 'Contact', href: '/contact' },
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			style={{ left: '50%', transform: 'translateX(-50%)', width: '95%', maxWidth: '1152px' }}
			className={cn(
				'fixed top-4 z-50 transition-all duration-500 ease-out',
				scrolled
					? 'bg-white/90 supports-[backdrop-filter]:bg-white/70 backdrop-blur-2xl border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full py-3'
					: 'bg-transparent py-4 rounded-full'
			)}
		>
			<nav className="flex items-center justify-between px-6 md:px-8 w-full">
				{/* Temporary Logo */}
				<div className="flex-1 flex justify-start">
					<Link href="/" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
						<img
							src="/img/logo-transparent-hori.png"
							alt="Cerebro Workforce Solutions Logo"
							className="h-10 w-auto object-contain"
						/>
					</Link>
				</div>

				{/* Centered Navbar Links */}
				<div className="flex-none hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md px-2 py-1 rounded-full border border-slate-200/50 shadow-sm">
					{links.map((link, i) => {
						const isActive = pathname === link.href;
						return (
							<Link
								key={i}
								href={link.href}
								className={cn(
									"px-4 py-2 text-sm font-medium transition-all rounded-full",
									isActive 
										? "text-accent bg-accent/5" 
										: "text-slate-600 hover:text-accent hover:bg-slate-50"
								)}
							>
								{link.label}
							</Link>
						);
					})}
				</div>

				{/* Right CTA */}
				<div className="flex-1 flex justify-end items-center gap-3 hidden md:flex">
					<Link href="/contact" className={cn(buttonVariants({ variant: 'default' }), "rounded-full bg-accent hover:bg-accent-hover shadow-md px-6 text-white font-bold")}>
						Book Appointment
					</Link>
				</div>

				<Button size="icon" variant="ghost" onClick={() => setOpen(!open)} className="md:hidden rounded-full hover:bg-slate-100 relative z-10">
					<MenuToggleIcon open={open} className="size-6 text-slate-900" duration={300} />
				</Button>
			</nav>

			{/* Mobile Menu */}
			<div
				className={cn(
					'fixed top-[120%] left-0 right-0 z-50 flex flex-col overflow-hidden rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/50 shadow-2xl md:hidden transition-all duration-300 origin-top',
					open ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
				)}
			>
				<div className="flex h-full w-full flex-col p-6 gap-6">
					<div className="flex flex-col gap-2">
						{links.map((link) => {
							const isActive = pathname === link.href;
							return (
								<Link
									key={link.label}
									className={cn(
										"text-lg font-semibold p-4 rounded-2xl transition-colors",
										isActive
											? "text-accent bg-accent/5"
											: "text-slate-700 hover:text-accent hover:bg-slate-50"
									)}
									href={link.href}
									onClick={() => setOpen(false)}
								>
									{link.label}
								</Link>
							);
						})}
					</div>
					<div className="flex flex-col gap-3 mt-4">
						<Link href="/contact" onClick={() => setOpen(false)} className={cn(buttonVariants({ variant: 'default' }), "w-full py-6 rounded-2xl text-lg bg-accent text-white hover:bg-accent-hover font-bold")}>
							Book Appointment
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
