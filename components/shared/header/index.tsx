import * as React from "react";
import { ShoppingCart, UserIcon, Cart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between pr-4">
        <div className="flex">
          <Link href="/" className="pr-2">
            <Image src={Logo} alt="logo" width={48} height={48} />
          </Link>
          <span className="hidden lg:block self-center mr-2">{APP_NAME}</span>
        </div>
        <div className="flex justify-around space-x-2 w-1/9">
          <div className="">
            <Button asChild variant="ghost">
              <Link href="/cart" className="no-underline text-black">
                <ShoppingCart /> Cart
              </Link>
            </Button>
          </div>
          <div className="">
            <Button asChild variant="ghost">
              <Link href="/sign-in" className="no-underline text-black">
                <UserIcon /> Sign In
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
