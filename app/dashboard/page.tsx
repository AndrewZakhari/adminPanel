import Navbar from "@/components/navbar"

export default function Dashboard() {
    return (
        <div className="w-screen ">
            <Navbar props={"dashboard"}/>
            <div className="flex flex-col gap-3 py-5 ">
           <h1 className="text-3xl self-center font-bold">Welcome to your admin dashboard</h1> 
           <p className="text-md self-center text-gray-600">Here's quick overview of your usage and activity</p>
           <div className="grid gap-5 grid-cols-3 w-screen px-10">
            <div className="px-10 py-5 rounded border-2 border-gray-300
             border-opacity-10 grid justify-start">
            Total Users
            <span className="text-2xl font-bold">1,923</span>
            </div>
            <div className="px-10 py-5 rounded border-2 border-gray-300 border-opacity-10 grid justify-start">
            Active Users
            <span className="text-2xl font-bold">1,800</span>
            </div>
            <div className="px-10 py-5 rounded border-2 border-gray-300 border-opacity-10 grid justify-start">
            New Users (30 Days)
            <span className="text-2xl font-bold">100</span>
            </div>
           </div>
           <div className="grid gap-5 grid-cols-1 mx-10 ">
            <p className="dark:text-white font-bold">Recent Activity</p>

           </div>
           <div className="grid gap-5 grid-cols-1 mx-10">
            <p className="dark:text-white font-bold">Quick Links</p>

           </div>
           </div>
        </div>
    )
}