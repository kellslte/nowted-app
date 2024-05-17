import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import SignUpForm from '@/components/auth/SignUpForm';

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className="w-[30rem] h-full flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full bg-base-alt border-base-text-alt border-1">
        <CardHeader>
          <CardTitle className="text-center text-base-text">Sign Up</CardTitle>
          <CardDescription className="text-center text-base-text-alt">
            Create an account to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <SignUpForm />
        </CardContent>
        <CardFooter className="flex justify-center items-center gap-2 text-base-text-alt">
          <p>Already have an account? </p>
          <Link href={"/api/auth/signin"} className="text-base-text">
            Sign In
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SignUp