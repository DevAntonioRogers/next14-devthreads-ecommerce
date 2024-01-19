"use client";

import { TbBracketsAngle } from "react-icons/tb";
import Input from "@/components/ui/Input";

const SignUpForm = () => {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl md:outline outline-1 outline-gray-200">
      <div className="px-4 py-8 sm:rounded-lg sm:px-10">
        <div className="md:text-4xl sm:text-2xl mb-5 uppercase w-full text-center flex items-center text-white gap-1 justify-center bg-gray-700 py-4 rounded-md">
          <h1>Join the DT Squad</h1>
          <TbBracketsAngle />
        </div>

        <form className="space-y-6 mb-3">
          <Input />
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
