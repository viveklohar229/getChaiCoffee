import NextAuth from 'next-auth';
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google';
// import EmailProvider from 'next-auth/providers/email'
import connectDb from '@/db/connectDb';
import User from '@/models/User';
import GithubProvider from "next-auth/providers/github";
import { handleAuth } from '@auth0/nextjs-auth0';


export const authoptions =  NextAuth({
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
 
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
  
    ],
    callbacks: {
      // Callback for sign-in process
      async signIn({ user, account, profile, email, credentials }) {
        if (account.provider === "github" || account.provider === "google") {
          await connectDb();
          
          // Check if the user already exists in the database
          const currentUser = await User.findOne({ email: email });
          
          if (!currentUser) {
            // Create a new user if they don't exist
            const newUser = await User.create({
              email: user.email,
              username: user.email.split("@")[0],  // You can modify this logic as needed
            });
          }
          return true;
        }
      },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.name = dbUser.username;  // Get the username from the database and assign to session
      return session;
    },
      
    } 
  })

  export { authoptions as GET, authoptions as POST };

