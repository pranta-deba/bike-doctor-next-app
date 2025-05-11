"use client";

import { signIn } from "next-auth/react";

const SocialLogin = () => {
  const handleSocialLogin = async (provider: string) => {
    try {
      const res = await signIn(provider, { redirect: false });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-4">
      <button
        onClick={() => handleSocialLogin("google")}
        className="cursor-pointer border p-2 rounded-2xl font-bold"
      >
        Google Login
      </button>
    </div>
  );
};

export default SocialLogin;
