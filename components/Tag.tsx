import Link from 'next/link'

interface Props {
    text: string
}

const Tag = ({ text }: Props) => {
    return (
        <Link
            href={`/tag/${text}`}
            className="text-sm font-medium uppercase text-primary hover:brightness-125 dark:hover:brightness-125"
        >
            {text.split(' ').join('-')}
        </Link>
    )
}

export default Tag
