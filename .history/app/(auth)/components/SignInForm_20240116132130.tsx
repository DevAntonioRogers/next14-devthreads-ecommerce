"use client";

import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const SignInForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl md:outline outline-1 outline-gray-200">
      <div className="px-4 py-8 sm:rounded-lg sm:px-10">
        <h1 className="text-2xl mb-5">Sign In</h1>
      </div>
    </div>
  );
};

export default SignInForm;
