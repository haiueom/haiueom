import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import MainContainer from "@/components/MainContainer";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from "@/components/ThemeProvider";

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://haiueom.vercel.app/"),
	title: "Ilham Taufiq",
	description: "Made with ☕ by Ilham Taufiq",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${fontSans.variable} scroll-smooth`}
			suppressHydrationWarning
		>
			<body
				className={cn(
					"bg-background font-sans antialiased",
					process.env.NODE_ENV === "development"
						? "debug-screens"
						: ""
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<MainContainer className="min-h-screen flex flex-col">
						{children}
					</MainContainer>
				</ThemeProvider>
				<SpeedInsights />
			</body>
		</html>
	);
}
