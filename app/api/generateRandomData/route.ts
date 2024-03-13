// random-users.tsx (or any preferred filename)

import prisma from '@/lib/prisma'; // Assuming prisma.ts is in the lib folder
import { v4 as uuidv4 } from 'uuid'; // For generating random user IDs

 export async function GET(req: Request) {
    // Generate random data
    const randomEmail = `${uuidv4()}@example.com`;
    const randomPassword = Math.random().toString(36).slice(-8); // Generate random alphanumeric password

    
      const user = await prisma.user.create({
        data: {
          id: uuidv4(), // Use UUID for unique user IDs
          email: randomEmail,
          password: randomPassword,
          name: "John Doe " + uuidv4(), 
        },
      });
      
    
      return Response.json({ user })
     
  } 



