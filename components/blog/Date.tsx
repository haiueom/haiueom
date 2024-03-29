export default function BlogDate(data: any) {
	const date = data.data;
	return (
		<div>
			<span className="sr-only">Published on</span>
			<span className="flex items-center justify-center text-base font-medium leading-6 text-muted-foreground">
				<time dateTime={date}>
					{new Date(date).toLocaleDateString("en-US", {
						weekday: "long",
					})}
				</time>
				<span className="mx-2">・</span>
				<time dateTime={date}>
					{new Date(date).toLocaleDateString("en-US", {
						day: "numeric",
						month: "long",
						year: "numeric",
					})}
				</time>
			</span>
		</div>
	);
}
