export default function BlogTitle({ data }: { data: any }) {
	return (
		<div>
			<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
				{data}
			</h1>
		</div>
	);
}
