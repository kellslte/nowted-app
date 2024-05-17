import { Archive, Star, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

const others = [
  { name: "Favourites", Icon: Star },
  { name: "Trashed", Icon: Trash },
  { name: "Archived", Icon: Archive },
];

const More = () => {
  return (
    <div className="w-full h-[9.75rem]">
      <div className="w-full flex items-center justify-between mb-2">
        <p>More</p>
      </div>
      <div className="w-full h-full">
        {others.map((item, i) => (
          <Link
            href={""}
            key={i}
            className="flex items-center gap-x-[15px] text-base-text w-full h-[2.5rem] cursor-pointer hover:bg-base-alt"
          >
            <item.Icon />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default More;
