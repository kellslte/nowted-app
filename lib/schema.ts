import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(3, {
    message: "Your name must be at least 3 characters long",
  }),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  password: z
    .string()
    .min(6, {
      message: "Your password must be at least 6 characters long",
    })
    .max(32, {
      message: "Your password must not be greater than 32 characters",
    }),
});

export const signInSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email"
    }),
    password: z.string().min(6, {
        message: "Your password must be at least 6 characters long"
    }).max(32, {
        message: "Your password must not be greater than 32 characters"
    })
})

export const folderSchema = z.object({})

export const noteSchema = z.object({});