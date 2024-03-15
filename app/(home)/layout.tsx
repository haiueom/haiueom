export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="my-auto">
            {children}
        </main>
    )
}
