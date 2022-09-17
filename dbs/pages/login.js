import React, { useState } from "react";
import { auth, createUser, signIn } from "../firebase/initFirebase";

const login = () => {
  //Add mobile response

  const [emailTxt, setEmailTxt] = useState();
  const [passTxt, setPassTxt] = useState();
  const [passVerTxt, setPassVerTxt] = useState();
  const [passOk, setPassOk] = useState(false);
  const [createAcctClicked, setCreateAcctClicked] = useState(false);

  //Add error handling
  const loginEmail = async (email, pass) => {
    const userCredential = await signIn(auth, email, pass);
  };

  //Add error handling
  const createWithEmail = async () => {
    const userCredential = await createUser(auth, emailTxt, passTxt);
  };

  var test = false;
  const updateCreateAcct = (event) => {
    setCreateAcctClicked((curr) => !curr);
    test = true;
  };

  //Add better password logic!
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
    <div className="flex justify-center h-[50vh] items-center">
      <div className="bg-gray-400 min-w-[35%] h-fit rounded-xl">
        {createAcctClicked ? (
          <form className="flex flex-col items-center pt-8 pb-12">
            <div className="w-[70%] flex justify-between">
              <div className="flex flex-col w-[49%]">
                <label className="w-[50%] pt-4 text-left" for="first">
                  First Name:
                </label>
                <input
                  className="w-full rounded-lg h-8"
                  required
                  type="text"
                  id="First Name"
                  name="First Name"
                  onChange={(e) => setEmailTxt(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-[49%]">
                <label className="w-[50%] pt-4 text-left" for="first">
                  Last Name:
                </label>
                <input
                  className="w-full rounded-lg h-8"
                  required
                  type="text"
                  id="LastName"
                  name="LastName"
                  onChange={(e) => setEmailTxt(e.target.value)}
                />
              </div>
            </div>
            <label className="w-[70%] pt-4 text-left" for="first">
              Email:
            </label>
            <input
              className="w-[70%] rounded-lg h-8"
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
              className="w-[70%] rounded-lg h-8"
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
                "w-[70%] rounded-lg h-8",
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
                className="bg-red-300 w-[45%] h-8 rounded-lg mt-4"
                onClick={() => updateCreateAcct()}
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-red-300 w-[45%] h-8 rounded-lg mt-4"
                onClick={() => {
                  createWithEmail();
                }}
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <form className="flex flex-col items-center pt-8 pb-12">
            <label className="w-[70%] pt-4 text-left" for="first">
              Email:
            </label>
            <input
              className="w-[70%] rounded-lg h-8"
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
              className="w-[70%] rounded-lg h-8"
              required
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassTxt(e.target.value)}
            />
            <button
              className="bg-red-300 w-[20%] h-8 rounded-lg mt-8"
              type="button"
              onClick={() => loginEmail(emailTxt, passTxt)}
            >
              Login
            </button>
            <h className="pt-4">Don't have an account? Create one today!</h>
            <button
              className="bg-red-300 w-[20%] h-8 rounded-lg mt-4"
              onClick={() => updateCreateAcct()}
            >
              Create account
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default login;
