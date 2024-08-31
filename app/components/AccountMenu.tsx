"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import { SafeUser } from "../types";

type Props = {
  visible?: boolean;
  currentUser?: SafeUser | null;
};

const AccountMenu = ({ visible, currentUser }: Props) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image
            src="/images/default-blue.png"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-md"
          />
          <p className="text-white text-sm group-hover/item:underline">
            {currentUser?.name}
          </p>
        </div>
        <hr className="bg-gray-600 border h-px my-4" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
