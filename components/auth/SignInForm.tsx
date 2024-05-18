"use client";
import React, { useState } from "react";
import { signInSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Icons } from "../icons";
import { signIn } from "next-auth/react";

type Props = {};

const SignInForm = (props: Props) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>("password");
  const router = useRouter();

  const formDetails = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmission = async (values: z.infer<typeof signInSchema>) => {
    setIsSubmitting(true);
    const response = await signIn("credentials", {
      ...values,
      redirect: false,
    });

    setTimeout(() => {
      if (response!.ok && response!.status === 200) {
        setIsSubmitting(false);
        toast.success("User Logged In Successfully");
        router.push("/dashboard");
      }
    }, 3000);
  };

  const changeInputType = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <Form {...formDetails}>
      <form
        method="post"
        className="space-y-4 w-[30rem]"
        onSubmit={formDetails.handleSubmit(handleFormSubmission)}
      >
        <FormField
          control={formDetails.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" placeholder="Enter your email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formDetails.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="flex itemsce-center">
                  <Input
                    {...field}
                    type={inputType}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={changeInputType}
                    className="-ml-6"
                  >
                    {inputType === "password" ? (
                      <Eye className="h-4 w-4" />
                    ) : (
                      <EyeOff className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex items-center justify-center my-2">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign{" "}In
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
