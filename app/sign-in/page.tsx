import SignInForm from "@/components/auth/SignInForm";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import signInBanner from '@/assets/signInbanner.jpg'
import { Icons } from "@/components/icons";

const SignIn = () => {
  return (
    <div className="h-screen min-h-screen">
      <div className="md:hidden h-full relative w-full">
        <Image
          src={signInBanner}
          fill
          alt="Authentication"
          className="absolute z-10 cursor-pointer"
        />
      </div>
      <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/sign-up"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Sign Up
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Icons.logo />
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;The all in one note taking application I did not know I
                needed. Nowted has helped me organize my thoughts.&rdquo;
              </p>
              <footer className="text-sm">Favour Max-Oti</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Sign into your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your credentials below to sign in to your account
              </p>
            </div>
            <SignInForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking sign in, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
