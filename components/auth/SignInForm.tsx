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
import { fetchAuthUser, fetcher } from "@/lib/utils";
import { useStore } from "@/lib/store";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {};

const SignInForm = (props: Props) => {
  const [inputType, setInputType] = useState<string>("password");
  const setAuth = useStore((state) => state.setAuth);
  const router = useRouter();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmission = async (values: z.infer<typeof signInSchema>) => {
    try {
      const { data } = await fetcher.post("/auth/sign-in", values);

      if (data.success) {
        // setToken(data.authorization.token);
        toast.success(data.message);
        form.reset();
        // set the auth user here and redirect to the dashboard
        setAuth(await fetchAuthUser(data.authorization.token));
        router.push("/dashboard");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const toggleInputType = () => {
    if (inputType === "password") setInputType("text");
    else setInputType("password");
  };

  return (
    <Form {...form}>
      <form
        method="post"
        onSubmit={form.handleSubmit(handleFormSubmission)}
        className="space-y-6"
      >
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
          >
            Sign In
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
