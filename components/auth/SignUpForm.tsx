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
import { Eye, EyeOff, LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

type Props = {}

const SignUpForm = (props: Props) => {
  const [inputType, setInputType] = useState<string>("password");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const router = useRouter()

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const formSubmitHandler = async (values: z.infer<typeof signUpSchema>) => {
      try {
        const res = await fetcher.post('/auth/sign-up', values)
        const {success, message} = await res.data;
        setSubmitting(true);

        if(success){
          setSubmitting(false);
          toast.success(message);
          form.reset();
          router.push('/sign-in')
        }
      } catch (error: any) {
        toast.error(error.message);
        setSubmitting(false);
      }
    }

      const toggleInputType = () => {
        if (inputType === "password") setInputType("text");
        else setInputType("password");
      };

  return (
    <Form {...form}>
      <form
        method="post"
        onSubmit={form.handleSubmit(formSubmitHandler)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base-text-alt">Name</FormLabel>
              <FormControl>
                <Input {...field} type="text" placeholder="Enter your name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base-text-alt">Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" placeholder="Enter your email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base-text-alt">Password</FormLabel>
              <FormControl>
                <div className="flex items-center">
                  <Input
                    {...field}
                    type={inputType}
                    placeholder="Enter your password"
                  />
                  <button
                    onClick={toggleInputType}
                    className="border-none cursor-pointer -ml-8"
                    type="button"
                  >
                    {inputType === "password" ? <Eye /> : <EyeOff />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-center flex-col flex-1 flex-grow">
          <Button
            size={"lg"}
            variant={"outline"}
            type="submit"
            className="mx-auto text-center"
            disabled={submitting}
          >
            {
              submitting && (
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin stroke-base-alt" />
              )
            }
            Sign Up
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default SignUpForm