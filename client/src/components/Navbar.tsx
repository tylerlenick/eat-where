export const Navbar = () => {
    //const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <div>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-left justify-between md:justify-left">
                    <a
                    className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                    href="/">
                    Eat Where
                    </a>
                    <nav className="md:mr-1 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700flex flex-wrap items-right text-right justify-end">
                        <a href="/" className="mr-5 hover:text-white">
                            Home
                        </a>
                    </nav>
                </div>
            </nav>
        </div>
    )
}