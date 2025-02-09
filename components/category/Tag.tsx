import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
	text: string;
}

const Tag = ({ text }: Props) => {
	return (
		<Button variant="outline" asChild>
			<Link
				href={`/category/${text}`}
				className="text-sm font-medium uppercase text-primary hover:brightness-125 dark:hover:brightness-125"
			>
				{text.split(" ").join("-")}
			</Link>
		</Button>
	);
};

export default Tag;
