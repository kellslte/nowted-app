"use client";
import { FolderOpen, FolderPlus } from "lucide-react";
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { folderSchema } from "@/lib/schema";

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
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Folders = () => {
  const [userFolders, setUserFolders] = useState<string[]>([
  "Personal",
  "Finance",
  "Weird Things",
  "Music",
  "Business",
  "Gratitude",
])

  const form = useForm<z.infer<typeof folderSchema>>({
    resolver: zodResolver(folderSchema),
    defaultValues: {
      name: "",
    },
  });

  function handleFormSubmission(data: z.infer<typeof folderSchema>) {
    setUserFolders(state => [...state, data.name]);
    form.reset();
  }

  return (
    <div className="w-full h-[18rem] mb-4">
      <div className="w-full flex items-center justify-between mb-2">
        <p>Folders</p>
        <Dialog>
          <DialogTrigger asChild>
            <button className="border-none cursor-pointer">
              <FolderPlus />
            </button>
          </DialogTrigger>
          <DialogContent className="bg-base-alt text-base-text">
            <DialogHeader>
              <DialogTitle>Create a new folder</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <Form {...form}>
                <form
                  className="w-full"
                  method="post"
                  onSubmit={form.handleSubmit(handleFormSubmission)}
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base-text-alt">
                          Folder Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            placeholder="Enter folder name"
                            className="border-none focus:outline-none focus:border-none bg-base-alt text-base-text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    variant="outline"
                    type="submit"
                    className="my-2 mr-auto text-base"
                  >
                    Create Folder
                  </Button>
                </form>
              </Form>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
      <div className="w-full h-full overflow-y-auto">
        {userFolders.map((folder, i) => (
          <Link
            href={""}
            key={i}
            className="flex items-center gap-x-[15px] text-base-text w-full h-[2.5rem] cursor-pointer hover:bg-base-alt"
          >
            <FolderOpen />
            <p>{folder}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Folders;
