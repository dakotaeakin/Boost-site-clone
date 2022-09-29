import { Fragment, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import logo from "../public/logo.png";
import userPic from "../public/user.png";
import { useRouter } from "next/router";
import { UserContext } from "../lib/context";
import { getAuth, signOut } from "firebase/auth";

var loggedIn = false;

const navigation = [
  // {
  //   name: "Home",
  //   href: "/",
  //   current: true,
  // },
  // {
  //   name: "Meet Our Team",
  //   href: "/about",
  //   current: false,
  // },
  // {
  //   name: "Contact",
  //   href: "/contact",
  //   current: false,
  // },
  //   { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();
  const path = router.pathname;
  const context = useContext(UserContext);
  const auth = getAuth();
  // console.log(context);

  const signUserOut = () => {
    signOut(auth);
  };

  return (
    <Disclosure
      as="nav"
      className="flex justify-center bg-[#f1f1f1] w-full shadow-md z-10"
    >
      {({ open }) => (
        <>
          <div className="flex justify-center max-w-7xl w-full pl-8 pr-8">
            <div className="flex items-center justify-between w-full h-16 ">
              <div className="">
                <h1 className="text-xl font-bold text-black-300">
                  Best Mobile
                </h1>
              </div>
              <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {context.user ? (
                  <div className="flex items-center">
                    <div className="pr-2">
                      <button
                        className="bg-[#f25d12] p-2 rounded-xl hover:shadow-lg hover:bg-[#F24712]"
                        onClick={signUserOut}
                      >
                        <div className="pl-2 pr-2 text-white ">Sign Out</div>
                      </button>
                    </div>
                    <div className="pr-4">Hi, {context.firstName}!</div>
                    <Image src={userPic} width={20} height={20} />
                  </div>
                ) : null}
                {/* Profile dropdown */}
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
