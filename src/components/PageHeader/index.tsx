"use client";

import { useModalContext } from "@/contexts/modal/modal-context";
import Image from "next/image";
import Link from "next/link";
import Modal from "../Common/Modal";

const headerStyles = {
  container:
    "flex justify-between items-center h-[65px] p-5 shadow-[0_1px_2px_0_rgba(0,0,0,0.25)] sticky",
};

const Header = () => {
  const { isOpen } = useModalContext();

  return (
    <header>
      {isOpen && <Modal />}
      <div className={headerStyles.container}>
        <Link href="/">
          <Image src="/logo.svg" alt="demo" width={20} height={25} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
