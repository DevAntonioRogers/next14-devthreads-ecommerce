"use client";

import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const SignInForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  return <div>SignInForm</div>;
};

export default SignInForm;
