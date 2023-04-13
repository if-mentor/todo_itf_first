import React from "react";
import { lightGreenButton } from "./ButtonDesign";
import { useRouter } from "next/router";

type FillOutPageTopProps = {
  title: string;
};

export const FillOutPageTop: React.FC<FillOutPageTopProps> = ({ title }) => {
  const router = useRouter();
  return (
    <div className="w-full font-bold">
      <div className="text-[28px] max-w-5xl mx-auto p-2 flex justify-between">
        <h2>{title}</h2>
        <div className="mt-8">
          <button className={lightGreenButton} onClick={() => router.push("/")}>
            BACK
          </button>
        </div>
      </div>
    </div>
  );
};
