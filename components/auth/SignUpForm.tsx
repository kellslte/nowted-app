"use client"
import React, { useState } from 'react'
import { signUpSchema } from '@/lib/schema'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { fetcher } from '@/lib/utils';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff} from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Icons } from '../icons';

type Props = {}

const SignUpForm = (props: Props) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>("password");

  const formDetails = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleFormSubmission = async (data: z.infer<typeof signUpSchema>) => {
    try {
      setIsSubmitting(true);
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const { success, message } = await response.json();
      setTimeout(() => {
        setIsSubmitting(false);
        if (!success) {
          toast.error(message);
        } else {
          toast.success(message);
        }
      }, 3000);
    } catch (error: any) {
      toast.error(error.message);
    }
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} type="text" placeholder="Enter your name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
            Sign Up
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default SignUpForm