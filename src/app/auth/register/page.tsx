import { Button } from "@/components/ui/button";
import { GrApple as Apple } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import BlurText from "@/components/animation/blurText";

const page = () => {
  return (
    <div className="grid w-full grid-cols-1">
      <div className="flex  items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl">Hello!</h2>
            <p className="text-foreground/60 md:text-sm text-xs">We are glad to see you:)</p>
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

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-foreground/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 text-foreground/60">or</span>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <p className="text-sm text-foreground/60">Name</p>
                <input
                  placeholder="Enter your name"
                  type="text"
                  className="w-full border-2 placeholder:text-gray-400/10 border-zinc-300/10 bg-background h-12 mt-1 input-gradient rounded-xl px-4 text-foreground focus:outline-none focus:border-primary/30"
                />
              </div>
              <div>
                <p className="text-sm text-foreground/60">Email Address</p>
                <input
                  placeholder="Enter your email"
                  type="email"
                  className="w-full border-2 placeholder:text-gray-400/10 border-zinc-300/10 bg-background h-12 mt-1 input-gradient rounded-xl px-4 text-foreground focus:outline-none focus:border-primary/30"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <p className="text-sm text-foreground/60">Password</p>
                <input
                  placeholder="***********"
                  type="password"
                  className="w-full border-2 placeholder:text-gray-400/10 border-zinc-300/10 bg-background h-12 mt-1 input-gradient rounded-xl px-4 text-foreground focus:outline-none focus:border-primary/30"
                />
              </div>
              <div>
                <p className="text-sm text-foreground/60">Confirm Password</p>
                <input
                  placeholder="***********"
                  type="password"
                  className="w-full border-2 placeholder:text-gray-400/10 border-zinc-300/10 bg-background h-12 mt-1 input-gradient rounded-xl px-4 text-foreground focus:outline-none focus:border-primary/30"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label
                htmlFor="terms"
                className="ml-2 text-sm text-foreground/60"
              >
                <p>I agree Terms and privacy</p>
              </label>
            </div>

            <Button className="text-sm w-full hover:opacity-80 transition-all ease-in duration-[.3s] bg-gradient cursor-pointer rounded-2xl text-black/70 gradient-shadow tracking-wide">
              <p className="font-extrabold">Sign Up</p>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
