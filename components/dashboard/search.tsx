"use client"

import React, { useCallback } from 'react'
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import { debounce } from '@/lib/utils'

interface Prop {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({setSearchTerm}: Prop) => {

  const debouncedHandleChange = useCallback(
    debounce((value) => {
      setSearchTerm(value)
    }, 1000), // Adjust the debounce delay as needed (e.g., 500ms)
    []
  );

  return <div className="w-full h-12 flex items-center">
    <Search className='-mr-8 z-10' />
    <Input type='text' placeholder='Search notes' className='pl-10 w-full border-none focus:outline-none focus:border-none bg-base-alt text-base-text text-xl' onChange={(e: ChangeEventHandler<HTMLInputElement>) =>debouncedHandleChange(e.target.value)}/>
    </div>;
}

export default SearchInput