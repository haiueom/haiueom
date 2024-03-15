"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Search } from "lucide-react";

export default function SearchBar({
	placeholder = "Search",
}: {
	placeholder?: string;
}) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((query: string) => {
		const params = new URLSearchParams(searchParams);
		if (query) {
			params.set("query", query);
			params.set("page", "1");
		} else {
			params.delete("query");
			params.delete("page");
		}
		replace(`${pathname}?${params.toString()}`);
	}, 300);

	return (
		<div className="relative w-full">
			<label>
				<span className="sr-only">Search articles</span>
				<input
					aria-label={placeholder}
					type="text"
					onChange={(e) => {
						handleSearch(e.target.value);
					}}
					defaultValue={searchParams.get("query")?.toString()}
					placeholder={placeholder}
					className="block w-full rounded-md border border-muted-foreground bg-secondary px-4 py-2 text-muted-foreground focus:border-primary focus:ring-primary dark:border-muted placeholder-muted-foreground"
				/>
			</label>
			<Search className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
		</div>
	);
}
