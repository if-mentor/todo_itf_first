import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type DeepGreenButtonProps = {
  href: Url;
  children: string;
};

type LightGreenButtonProps = {
  href: Url;
  children: string;
};

type LightPinkButtonProps = {
  href: Url;
  children: string;
};

const DeepGreenButton: React.FC<DeepGreenButtonProps> = ({
  href,
  children,
}) => {
  return (
    <Link
      href={href}
      className="bg-[#25855A] text-white text-[18px] w-28 h-10 border border-black rounded-3xl mr-2 flex justify-center items-center"
    >
      {children}
    </Link>
  );
};

const LightGreenButton: React.FC<LightGreenButtonProps> = ({
  href,
  children,
}) => {
  return (
    <Link
      href={href}
      className="bg-[#68D391] text-black text-[18px] w-28 h-10 border border-black rounded-3xl mr-2 flex justify-center items-center"
    >
      {children}
    </Link>
  );
};

const LightPinkButton: React.FC<LightPinkButtonProps> = ({
  href,
  children,
}) => {
  return (
    <Link
      href={href}
      className="bg-[#FED7E2] text-black text-[18px] w-28 h-10 border border-black rounded-3xl mr-2 flex justify-center items-center"
    >
      {children}
    </Link>
  );
};

export { DeepGreenButton, LightGreenButton, LightPinkButton };


// 濃い緑：#25855A
// 薄い緑：#68D391
// 薄桃色：#FED7E2
