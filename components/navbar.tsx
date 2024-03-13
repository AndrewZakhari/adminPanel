

export default function Navbar(props : any) {  
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-8 w-8"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                alt="Workflow"
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a
                                    href="/dashboard"
                                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    aria-current="page"
                                >
                                    Dashboard
                                </a>

                                <a
                                    href="/team"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Team
                                </a>

                                <a
                                    href="projects"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Projects
                                </a>

                                <a
                                    href="calender"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Calendar
                                </a>

                                <a
                                    href="reports"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Reports
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )}