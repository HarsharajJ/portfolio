"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Github } from "lucide-react"

const navItems = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Education", href: "/education" },
	{ name: "Projects", href: "/projects" },
	{ name: "Internships", href: "/internships" },
	{ name: "Certificates", href: "/certificates" },
	{ name: "Skills", href: "/skills" },
	{ name: "Contact", href: "/contact" },
]

export function Navigation() {
	const pathname = usePathname()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-red-900/30">
			<div className="container mx-auto px-4 py-3 md:py-4">
				<div className="flex items-center justify-between">
					<Link
						href="/"
						className="hover:scale-105 transition-transform duration-300"
					>
						<Logo />
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-1">
						{navItems.map((item, index) => (
							<Link key={item.href} href={item.href}>
								<Button
									variant={pathname === item.href ? "default" : "ghost"}
									className={`transition-all duration-300 hover:scale-105 text-sm lg:text-base ${
										pathname === item.href
											? "bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/30"
											: "text-white hover:text-red-400 hover:bg-red-950/50"
									}`}
									style={{ animationDelay: `${index * 100}ms` }}
								>
									{item.name}
								</Button>
							</Link>
						))}

						{/* GitHub External Link */}
						<a
							href="https://github.com/HarsharajJ"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								variant="ghost"
								className="ml-2 text-white hover:text-red-400 p-2 flex items-center gap-2"
							>
								<Github className="w-4 h-4" />
								<span className="hidden lg:inline">GitHub</span>
							</Button>
						</a>
					</div>

					<div className="md:hidden">
						<Button
							variant="ghost"
							size="sm"
							className="text-white hover:text-red-400 p-2"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						>
							<div className="relative w-6 h-6 flex flex-col justify-center items-center">
								<span
									className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
										isMobileMenuOpen ? "rotate-45 translate-y-0.5" : ""
									}`}
								/>
								<span
									className={`block w-6 h-0.5 bg-current transition-all duration-300 mt-1 ${
										isMobileMenuOpen ? "opacity-0" : ""
									}`}
								/>
								<span
									className={`block w-6 h-0.5 bg-current transition-all duration-300 mt-1 ${
										isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
									}`}
								/>
							</div>
						</Button>
					</div>
				</div>

				<div
					className={`md:hidden transition-all duration-300 overflow-hidden ${
						isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<div className="py-4 space-y-2">
						{navItems.map((item, index) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<Button
									variant={pathname === item.href ? "default" : "ghost"}
									className={`w-full justify-start transition-all duration-300 transform ${
										isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
									} ${
										pathname === item.href
											? "bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/30"
											: "text-white hover:text-red-400 hover:bg-red-950/50"
									}`}
									style={{
										transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
									}}
								>
									{item.name}
								</Button>
							</Link>
						))}

						{/* GitHub link in mobile menu */}
						<div className="pt-2 border-t border-red-900/20 mt-2">
							<a
								href="https://github.com/HarsharajJ"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<Button
									variant="ghost"
									className="w-full justify-start text-white hover:text-red-400"
								>
									<Github className="w-5 h-5 mr-2" />
									GitHub
								</Button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}
