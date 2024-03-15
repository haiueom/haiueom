"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

const MainContainer = ({
	className,
	children,
}: {
	className?: string;
	children: ReactNode;
}) => {

	if (usePathname().startsWith("/studio")) {
		return <>{children}</>;
	}

    return (
        <div className={cn(
			"mx-auto max-w-2xl px-4 pt-20 sm:px-6 xl:max-w-3xl xl:px-8",
			className
		)}>
            
			<Header />
			{children}
			<Footer />
        </div>
    )
}

export default MainContainer;
