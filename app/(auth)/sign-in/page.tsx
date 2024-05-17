import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from 'next/link';
import SignInForm from '@/components/auth/SignInForm';

type Props = {}

const SignIn = (props: Props) => {
  return (
    <div className='w-[30rem] h-full flex flex-col items-center justify-center min-h-screen'>
      <Card className="w-full bg-base-alt border-base-text-alt border-1">
        <CardHeader>
          <CardTitle className="text-center text-base-text">Sign In</CardTitle>
          <CardDescription className="text-center text-base-text-alt">
            Sign in to your account to access your notes
          </CardDescription>
        </CardHeader>
        <CardContent className='p-4'>
          <SignInForm />
        </CardContent>
        <CardFooter className="flex justify-center items-center gap-2 text-base-text-alt">
          <p>Don&apos;t have an account? </p>
          <Link href={"/sign-up"} className='text-base-text'>Sign Up</Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SignIn