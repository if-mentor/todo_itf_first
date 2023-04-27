import Link from "next/link";
import React, { useEffect, useState } from "react";
import { auth } from "../../lib/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, setUser] = useState<string | null>("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser.email);
      } else {
        setUser("GuestAccount");
      }
    });
    return unsubscribe;
  }, []);

  const handleLogOut = () => {
    signOut(auth);
  };

  return (
    <header className="w-full h-[95px] bg-green-400 text-4xl font-bold">
      <div className="max-w-5xl mx-auto py-2 flex justify-between">
        <Link href="/" className="mt-3">
          TODO
        </Link>
        <div className="text-xl mt-2.5">
          {user !== "GuestAccount" ? (
            <div>
              <button
                onClick={handleLogOut}
                className="border border-black rounded-full px-5 py-0.5 mr-60 bg-white"
              >
                Logout
              </button>
              <div className="ml-3 mt-1">{user}</div>
            </div>
          ) : (
            <div>
              <Link
                href="/login"
                className="border border-black rounded-full px-5 py-0.5  bg-white"
              >
                LogIn
              </Link>
              <Link
                href="/signup"
                className="border border-black rounded-full px-5 py-0.5 ml-5 mr-60 bg-white"
              >
                SignUp
              </Link>
              <div className="ml-3 mt-1">{user}</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
