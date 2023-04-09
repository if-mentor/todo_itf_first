import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type ButtonProps = {
  href: Url;
  backgroundColor: "#25855A" | "#68D391" | "#fed7e2";
  fontColor: "white" | "black";
  children: string;
};

// 濃い緑：#25855A
// 薄い緑：#68D391
// 薄桃色：#FED7E2

export const Button: React.FC<ButtonProps> = ({
  href,
  backgroundColor,
  fontColor,
  children,
}) => {
  return (
    <Link
      href={href}
      className={`bg-[${backgroundColor}] text-${fontColor} text-[18px] w-28 h-10 border border-black rounded-3xl mr-2 flex justify-center items-center`}
    >
      {children}
    </Link>
  );
};
