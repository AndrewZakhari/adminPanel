import Navbar from "@/components/navbar"
import prisma from "@/lib/prisma"
import Image from "next/image"

export default async function Dashboard() {
    const users : any = await prisma.user.findMany()

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
            <div className="flex flex-col gap-1 justify-start">
                <p className=" flex items-center gap-3">    
                    <Image alt="" className="rounded-full" src={users[0].image} width={20} height={20}/>
                    <span className="font-bold">{users[0].name?.slice(0, 10) + " "}</span>
                     joined the team</p>
                     <span className="text-white opacity-50 mx-9">2 minutes ago</span>
                <div className="h-10 border-opacity-30 border-l-2 mb-3 -mt-5  border-gray-300 mx-2"></div>
                 <p className=" flex items-center gap-3">    
                    <Image alt="" className="rounded-full" src={users[1].image} width={20} height={20}/>
                    <span className="font-bold">{users[1].name?.slice(0, 10) + " "}</span>
                      joined the team</p>
                      <span className="text-white opacity-50 mx-9">5 minutes ago</span>
                <div className="h-10 border-opacity-30 border-l-2 mb-3 -mt-5 border-gray-300 mx-2"></div>
                <p className=" flex items-center gap-3">    
                    <Image alt="" className="rounded-full" src={users[2].image} width={20} height={20}/>
                    <span className="font-bold">{users[2].name?.slice(0, 10) + " "}</span>
                      upgraded to premium</p>
                      <span className="text-white opacity-50 mx-9">20 minutes ago</span>
            </div>
           </div>
           <div className="grid gap-5 grid-cols-1 mx-10">
            <p className="dark:text-white font-bold">Quick Links</p>

           </div>
           </div>
        </div>
    )
}