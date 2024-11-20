import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/ui/app-sidebar"

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Suwizx NAS",
	description: "Suwizx File Server for NAS",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					href="/icon.png?<generated>"
					type="image/<generated>"
					sizes="<generated>"
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
			>
				<SidebarProvider>
					<AppSidebar />
					<main className="w-screen">
						<div className="flex p-4 border-b ">
							<div>
								<SidebarTrigger />
							</div>
						</div>
						{children}
					</main>
				</SidebarProvider>
			</body>
		</html>
	);
}
