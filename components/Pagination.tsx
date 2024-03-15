"use client";

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationPrevious,
	PaginationNext,
	PaginationEllipsis,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

const PageNav = ({ total }: { total: number }) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get("page")) || 1;

	const createPageURL = (pageNumber: number | string) => {
		const params = new URLSearchParams(searchParams);
		params.set("page", pageNumber.toString());
		return `${pathname}?${params.toString()}`;
	};

	return (
		<Pagination className="py-4">
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						href={createPageURL(currentPage - 1)}
						className={
							currentPage - 1 === 0
								? `pointer-events-none opacity-50`
								: ""
						}
					/>
				</PaginationItem>

				{currentPage > 2 && (
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
				)}

				{currentPage > 1 && (
					<PaginationItem>
						<PaginationLink href={createPageURL(currentPage - 1)}>
							{currentPage - 1}
						</PaginationLink>
					</PaginationItem>
				)}

				<PaginationItem>
					<PaginationLink
						href={createPageURL(currentPage)}
						isActive
					>
						{currentPage}
					</PaginationLink>
				</PaginationItem>

				{currentPage < total && (
					<PaginationItem>
						<PaginationLink href={createPageURL(currentPage + 1)}>
							{currentPage + 1}
						</PaginationLink>
					</PaginationItem>
				)}

				{currentPage < total - 1 && (
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
				)}

				<PaginationItem>
					<PaginationNext
						href={createPageURL(currentPage + 1)}
						className={
							currentPage >= total
								? `pointer-events-none opacity-50`
								: ""
						}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};

export default PageNav;
