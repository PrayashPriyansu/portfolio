type HeaderProps = {
    className?: string;
};

export default function Header({ className = "" }: HeaderProps) {
    return (
        <nav className={`mx-auto ${className} mt-2`}>
            <ul className="flex items-center gap-4">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/work">Work</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <li>
                    <a href="/resume">Resume</a>
                </li>
            </ul>
        </nav>
    );
}
