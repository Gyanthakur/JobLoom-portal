import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import CommonLayout from "@/components/common-layout";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};
// function

export default function RootLayout({ children }) {
	return (
	<ClerkProvider>
			<html lang="en">
			<body className={inter.className}>
				<Suspense fallback={<loading />}>
			
          <CommonLayout childern={children}/>
				</Suspense>
			</body>
		</html>
	</ClerkProvider>
	 
	);
}
