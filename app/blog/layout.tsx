export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="mb-auto">
            {children}
        </main>
    )
}
