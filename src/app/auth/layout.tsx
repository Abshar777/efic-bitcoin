"use client";
import Copyright from "@/components/global/copyright";
import Rootprovider from "@/components/provider/rootProvider";
import Aos from "@/components/animation/aos";
import Nav from "@/components/global/nav";
import Footer from "@/components/global/footer";
import TrustedBy from "@/components/global/trustedBy";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background  relative h-screen  overflow-hidden   w-screen">
      <div className="absolute  pointer-events-none z- overflow-hidden w-full h-full">
        <img
          src="/auth.jpg"
          className="w-full md:h-auto h-full  opacity-[30%] scale-x-[-1] bg-red-900 md:-translate-y-[13rem] object-cover"
          alt=""
        />
      </div>
      <div className="w-[30rem] h-[30rem] z-[11] bg-gradient rounded-full blur-3xl opacity-10 absolute top-30 -left-50"></div>
      <div className="w-[30rem] h-[30rem] z-[11] bg-gradient rounded-full blur-3xl opacity-5 absolute top-30 -left-50"></div>

      <Nav />
      <div className="flex z-[12] w-full h-full items-center justify-center">
        <div className="flex md:w-[80%] md:scale-100 scale-[.9] -translate-y-[5%] md:h-[80%] md:-translate-y-[7%] justify-center items-center bg-[#ffffff0c]  border-zinc-300/10 border-2 backdrop-blur-lg rounded-xl p-4 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
