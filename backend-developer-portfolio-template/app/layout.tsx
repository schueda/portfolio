import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'André Schueda - iOS Software Engineer',
	description:
		'Welcome to my portfolio! I am Native iOS Software Engineer specializing in building high-performance, scalable mobile applications. I create polished and reliable user experiences from the ground up using Swift, UIKit, SwiftUI, and modern architectural patterns.',
	keywords: [
		'Mobile Developer',
		'Software Engineer',
		'App Architecture',
		'Native iOS',
		'André Schueda',
		'Swift',
		'UIKit',
		'SwiftUI',
	],
	authors: [{ name: 'André Schueda' }],
	creator: 'André Schueda',
	openGraph: {
		title: 'André Schueda - iOS Software Engineer Portfolio',
		description: 'Passionate native iOS developer crafting high-performance and intuitive mobile applications. Explore my projects and technical expertise in Swift and SwiftUI.',
		url: 'https://schueda.dev',
		siteName: 'André Schueda - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'André Schueda - iOS Software Engineer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
