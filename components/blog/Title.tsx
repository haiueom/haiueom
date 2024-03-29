export default function BlogTitle(data: any) {
	const title = data.data;
	return (
		<div>
			<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
				{title}
			</h1>
		</div>
	);
}
