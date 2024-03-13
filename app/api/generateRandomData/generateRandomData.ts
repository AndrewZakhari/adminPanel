// random-users.tsx (or any preferred filename)

import { useState } from 'react';
import { useRouter } from 'next/router';
import prisma from '@/lib/prisma'; // Assuming prisma.ts is in the lib folder
import { v4 as uuidv4 } from 'uuid'; // For generating random user IDs

function RandomUsers() {
  const [message, setMessage] = useState('');
  const router = useRouter();

  const createUser = async () => {
    // Generate random data
    const randomEmail = `${uuidv4()}@example.com`;
    const randomPassword = Math.random().toString(36).slice(-8); // Generate random alphanumeric password

    try {
      const user = await prisma.user.create({
        data: {
          id: uuidv4(), // Use UUID for unique user IDs
          email: randomEmail,
          password: randomPassword, // Store password securely (hashed)
        },
      });
      setMessage(`User created successfully: ${user.email}`);
      // Optionally redirect to a different route after creation
      // router.push('/users'); 
    } catch (error) {
      console.error(error);
      setMessage('Failed to create user');
    }
  };
}

export default RandomUsers;
