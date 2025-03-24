import { Button } from "@/components/ui/button";
import { GrApple as Apple } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import BlurText from "@/components/animation/blurText";
import Link from "next/link";

const page = () => {
  return (
    <div className="grid md:grid-cols-2 w-full grid-cols-1">
      <div className="hidden md:flex w-full h-full px-10 justify-center  text-start  flex-col ">
        <BlurText
          delay={0.05}
          animateBy="letters"
          direction="bottom"
          className="text-white md:text-4xl text-2xl capitalize"
          text={`Hello! \nWevlcome Back`}
        />
        <p className="text-white text-sm">
          Please enter your details to login
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <p className="text-2xl   font-extrabold  mb-2">Sign in</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-foreground/60">User Name</p>
                <input
                  placeholder="Enter your username"
                  type="text"
                  className="w-full border-2 placeholder:text-gray-400/10 border-zinc-300/10 bg-background h-12 mt-1 input-gradient rounded-xl px-4 text-foreground  focus:outline-none focus:border-primary/30"
                />
              </div>

              <div>
                <p className="text-sm text-foreground/60">Password</p>
                <input
                  placeholder="***********"
                  type="password"
                  className="w-full border-2 placeholder:text-gray-400/10 border-zinc-300/10 bg-background h-12 mt-1 input-gradient rounded-xl px-4 text-foreground  focus:outline-none focus:border-primary/30"
                />
              </div>
            </div>

            <div className="text-right">
              <Link
                href="/auth/forgot-password"
                className="text-sm text-foreground/60 hover:text-foreground"
              >
                <p>Forgot Password?</p>
              </Link>
            </div>
            <Button className="text-sm w-full hover:opacity-80 transition-all ease-in duration-[.3s]  bg-gradient cursor-pointer rounded-2xl  text-black/70 gradient-shadow    tracking-wide">
              <p className="font-extrabold">Login</p>
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-foreground/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-foreground/60 ">
                  or continue with
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Button
                size="icon"
                className="p-5 social-icon bg-white rounded-xl flex items-center justify-center"
              >
                <FcGoogle className="w-6 h-6" />
              </Button>
              <Button
                size="icon"
                className="p-5 social-icon bg-white rounded-xl flex items-center justify-center"
              >
                <Apple className="w-6 h-6 text-black" />
              </Button>
              <Button
                size="icon"
                className="p-5 social-icon bg-white rounded-xl flex items-center justify-center"
              >
                <FaFacebook className="w-6 h-6 text-blue-500" />
              </Button>
            </div>
          </form>

          <p className="text-center text-sm text-foreground/60">
            Don't have an account?{" "}
            <Link href="/auth/register" className="text-white">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
