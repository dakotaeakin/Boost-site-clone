import React, { useContext, useEffect, useState } from "react";
import { auth, createUser, signIn } from "../firebase/initFirebase";
import { updateUser } from "../lib/firebaseLib";
import { useRouter } from "next/router";
import { useUserData } from "../lib/hooks";
import { useAuthState } from "react-firebase-hooks/auth";
import { UserContext } from "../lib/context";

const Login = () => {
  //Add mobile response

  // const [userGlob] = useAuthState(auth);

  const context = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (context.user) {
      router.replace("/");
    }
  }, [context]);

  const [emailTxt, setEmailTxt] = useState();
  const [passTxt, setPassTxt] = useState();
  const [passVerTxt, setPassVerTxt] = useState();
  const [passOk, setPassOk] = useState(false);
  const [createAcctClicked, setCreateAcctClicked] = useState(false);
  const [user, setUser] = useState({});

  //Add error handling
  const loginEmail = async () => {
    const userCredential = await signIn(auth, emailTxt, passTxt);
    // console.log(userCredential.user.uid);
    // router.replace("/about");
  };

  //Add error handling
  const createWithEmail = async () => {
    const userCredential = await createUser(auth, emailTxt, passTxt);
    setUser((prevUser) => ({
      ...prevUser,
      uid: userCredential.user.uid,
    }));
    // console.log(userCredential.user.uid);
    updateUser(user, userCredential.user.uid);
  };

  var test = false;
  const updateCreateAcct = (event) => {
    setCreateAcctClicked((curr) => !curr);
    test = true;
  };

  //Add password regex logic!
  const checkPass = (Txt) => {
    if (passVerTxt != Txt) {
      setPassOk(false);
    } else {
      setPassOk(true);
    }
  };
  const checkPassVer = (Txt) => {
    if (passTxt != Txt) {
      setPassOk(false);
    } else {
      setPassOk(true);
    }
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex justify-center min-h-[60vh] items-center">
      <div className=" min-w-[35%] h-fit rounded-xl">
        {createAcctClicked ? (
          <form
            className="flex flex-col items-center pt-8 pb-12"
            name="Create Account"
            method="post"
            action="/"
          >
            <div className="w-[70%] flex justify-between">
              <div className="flex flex-col w-[49%]">
                <label className="w-[50%] pt-4 text-left" for="first">
                  First Name:
                </label>
                <input
                  className="w-full rounded-lg h-8 shadow-lg"
                  required
                  type="text"
                  id="First Name"
                  name="First Name"
                  onChange={(e) =>
                    setUser((prevUser) => ({
                      ...prevUser,
                      firstName: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex flex-col w-[49%]">
                <label className="w-[50%] pt-4 text-left" for="first">
                  Last Name:
                </label>
                <input
                  className="w-full rounded-lg h-8 shadow-lg"
                  required
                  type="text"
                  id="LastName"
                  name="LastName"
                  onChange={(e) =>
                    setUser((prevUser) => ({
                      ...prevUser,
                      lastName: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <label className="w-[70%] pt-4 text-left" for="first">
              Email:
            </label>
            <input
              className="w-[70%] rounded-lg h-8 shadow-lg"
              required
              type="text"
              id="email"
              name="email"
              onChange={(e) => {
                setEmailTxt(e.target.value);
                setUser((prevUser) => ({
                  ...prevUser,
                  email: e.target.value,
                }));
              }}
            />
            <label className="w-[70%] pt-4 text-left" for="last">
              Password:
            </label>
            <input
              className="w-[70%] rounded-lg h-8 shadow-lg"
              required
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setPassTxt(e.target.value);
                checkPass(e.target.value);
              }}
            />
            <label className="w-[70%] pt-4 text-left" for="last">
              Verify Password:
            </label>
            <input
              className={classNames(
                "w-[70%] rounded-lg h-8 shadow-lg",
                passTxt !== undefined
                  ? passTxt.length > 0
                    ? passOk
                      ? "bg-green-200"
                      : "bg-red-200"
                    : null
                  : null
              )}
              required
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setPassVerTxt(e.target.value);
                checkPassVer(e.target.value);
              }}
            />
            <div className="flex justify-between w-[50%]">
              <button
                type="button"
                className="bg-[#f25d12] w-[45%] h-12 rounded-lg mt-4 hover:shadow-lg hover:bg-[#F24712]"
                onClick={() => {
                  updateCreateAcct();
                }}
              >
                <div className="pl-2 pr-2 text-white font-bold">Cancel</div>
              </button>
              <button
                type="submit"
                className="bg-[#f25d12] w-[45%] h-12 rounded-lg mt-4 hover:shadow-lg hover:bg-[#F24712]"
                onClick={() => {
                  createWithEmail();
                }}
              >
                <div className="pl-2 pr-2 text-white font-bold">Submit</div>
              </button>
            </div>
          </form>
        ) : (
          <form
            className="flex flex-col items-center pt-8 pb-12"
            name="Create Account"
            method="post"
            action="/"
          >
            <label className="w-[70%] pt-4 text-left" for="first">
              Email:
            </label>
            <input
              className="w-[70%] rounded-lg h-8 shadow-lg"
              required
              type="text"
              id="email"
              name="email"
              onChange={(e) => setEmailTxt(e.target.value)}
            />
            <label className="w-[70%] pt-4 text-left" for="last">
              Password:
            </label>
            <input
              className="w-[70%] rounded-lg h-8 shadow-lg"
              required
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassTxt(e.target.value)}
            />
            <button
              className="bg-[#f25d12] w-[20%] h-12 rounded-lg mt-8 hover:shadow-lg hover:bg-[#F24712]"
              type="submit"
              onClick={() => loginEmail()}
            >
              <div className="pl-2 pr-2 text-white font-bold">Login</div>
            </button>
            <h className="pt-4">Don't have an account? Create one today!</h>
            <button
              type="button"
              className="bg-[#f25d12] min-w-fit w-[20%] h-12 rounded-lg mt-4 hover:shadow-lg hover:bg-[#F24712]"
              onClick={() => updateCreateAcct()}
            >
              <div className="pl-2 pr-2 text-white font-bold">
                Create account
              </div>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
