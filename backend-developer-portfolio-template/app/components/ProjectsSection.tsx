'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
	{
		title: 'No Break',
		description: 'An arcade game with bike thematic and astonishing pixel art',
		image: '/nobreak.png',
		tags: ['Swift', 'UIKit', 'ViewCode', 'SpriteKit'],
		href: '/path-to-resume.pdf'
	},
	{
		title: 'L-system Generator',
		description: 'A toy app that allows experimenting and playing with procedurally generated art',
		image: '/lsystems.jpg',
		tags: ['Swift', 'UIKit', 'ViewCode'],
		href: '/path-to-resume.pdf'
	},
	{
		title: 'The World is Quiet',
		description: 'A PlaygroundBook to study and practice the Brazilian Sign Language alphabet',
		image: '/twiq.jpg',
		tags: ['Swift', 'SpriteKit', 'WWDC21 Winner'],
		href: '/path-to-resume.pdf'
	},
	{
		title: 'Atom',
		description: 'An interactive story about perception and reallity on a Swift PlaygroundApp',
		image: '/atom.png',
		tags: ['Swift', 'SwiftUI', 'SpriteKit', 'WWDC22 Winner'],
		href: '/path-to-resume.pdf'
	},
	{
		title: 'Wizards vs Robots',
		description: 'A modern dashboard with dark mode, real-time charts, and responsive design',
		image: '/laptop.jpg',
		tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
		href: '/path-to-resume.pdf'
	},
	{
		title: 'Wizards vs Robots',
		description: 'A modern dashboard with dark mode, real-time charts, and responsive design',
		image: '/laptop.jpg',
		tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
		href: '/path-to-resume.pdf'
	},
];

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Personal Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
						>
							<a href={project.href}>
								<div className="aspect-video relative overflow-hidden">
									<Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
									<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2">{project.title}</h3>
									<p className="text-gray-400 mb-4">{project.description}</p>
									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag, i) => (
											<span key={i} className="text-sm px-3 py-1 bg-gray-800 rounded-full">
												{tag}
											</span>
										))}
									</div>
								</div>
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}