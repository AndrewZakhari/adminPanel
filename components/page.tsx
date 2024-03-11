'use client'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Page () {
    const {data: session, status} = useSession()
    return (
             <div>
      {status === "unauthenticated" && <div>
          <button onClick={() => signIn()} className="rounded dark:bg-white py-3 px-5 dark:text-black">Sign In</button>
        </div>}
      {status === 'authenticated' && 
      <div>
        <p className="font-bold text-3xl">Logged in as {session.user?.email}</p>
        <button onClick={() => signOut()} className="rounded dark:bg-white py-3 px-5 dark:text-black">Sign Out</button>
      </div>
      }{status === "loading" && <div className="text-3xl font-bold">Loading...</div>}
    </div>
    )
}