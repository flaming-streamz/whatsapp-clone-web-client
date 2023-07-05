"use client";

import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useRouter } from "next/router";

import { firebaseAuth } from "@/utils/FirebaseConfig";

import { CHECKUSER_ROUTE } from "@/utils/ApiRoutes";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";

function login() {
  const router = useRouter();
  const [{}, dispatch] = useStateProvider();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const {
        user: { displayName: name, email, photoURL: profileImage },
      } = await signInWithPopup(firebaseAuth, provider);

      // check whether user exists on our own server db
      const { data } = await axios.post(CHECKUSER_ROUTE, { email });

      // no user logged in and is new user on platform
      if (!data.status) {
        dispatch({ type: reducerCases.SET_NEW_USER, newUser: true });
        dispatch({ type: reducerCases.SET_USER_INFO, userInfo: { name, email, profileImage, status: "" } });
        router.push("/onboarding");
      }

      // if success
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-8">
      <div className="flex items-center justify-center gap-2 text-white">
        <Image src="/whatsapp.gif" alt="whatsapp" width={300} height={300} />
        <span className="text-7xl">Whatsapp</span>
      </div>

      <button
        className="flex items-center justify-center gap-7 bg-search-input-container-background rounded-lg p-5"
        onClick={handleLogin}
      >
        <FcGoogle className="text-4xl" />
        <span className="text-2xl text-white">Login with Google</span>
      </button>
    </div>
  );
}

export default login;
