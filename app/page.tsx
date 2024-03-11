'use client'
import Image from "next/image";

import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Page from "../components/page";

export default function Home( session : any) {
  
  return (
    <SessionProvider session={session}>
      <Page />
    </SessionProvider>
  );
}
