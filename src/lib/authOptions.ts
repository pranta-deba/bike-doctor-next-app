import { loginUser } from "@/app/actions/auth/loginUser";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import dbConnect, { COLLECTION_NAME } from "./dbConnect";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          console.log("No credentials received.");
          return null;
        }
        const result = await loginUser({
          email: credentials.email,
          password: credentials.password,
        });

        if (result.success && result.user) {
          const userDoc = result.user;

          return {
            id: userDoc._id.toString(),
            name: userDoc.name || userDoc.email,
            email: userDoc.email,
          };
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
    //   console.log({ user, account, profile, email, credentials });
      if (account) {
        const { providerAccountId, provider } = account;
        const { email: user_email, image, name } = user;
        const userCollection = await dbConnect(COLLECTION_NAME.USERS);

        const existingUser = await userCollection.findOne({
          providerAccountId,
        });

        if (!existingUser) {
          await userCollection.insertOne({
            email: user_email,
            image,
            name,
            provider,
            providerAccountId,
          });
        }
      }
      return true;
    },
  },
  // session: {
  //   strategy: "jwt",
  // },
  // secret: process.env.NEXTAUTH_SECRET,
};
