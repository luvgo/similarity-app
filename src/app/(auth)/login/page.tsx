import Icons from "@/components/Icons";
import { buttonVariants } from "@/components/ui/Button";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import UserAuthForm from "@/components/UserAuthForm";
import Link from "next/link";
import { FC } from "react";

const page: FC = ({}) => {
  return (
    <div className="absolute inset-0 mx-auto container flex justify-center items-center h-screen flex-col">
      <div className="mx-auto flex w-ful flex-col justify-center space-y-6 max-w-lg">
        <div className="flex flex-col items-center gap-5 text-center">
          <Link
            className={buttonVariants({
              variant: "ghost",
              className: "w-fit",
            })}
            href="/"
          >
            <Icons.ChevronLeft className="mr-2 h-4 w-4" />
            Back To Home
          </Link>
          <LargeHeading>Welcome back!</LargeHeading>
          <Paragraph>Please sign in</Paragraph>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
};

export default page;
