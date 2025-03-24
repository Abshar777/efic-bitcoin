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
    <div className="bg-background relative md:px-[2rem]  px-1 w-screen">
      <div className="w-[30rem] h-[30rem] bg-gradient rounded-full blur-3xl opacity-10 absolute top-30 -left-50"></div>
      <div className="w-[30rem] h-[30rem] bg-gradient rounded-full blur-3xl opacity-5 absolute top-30 -left-50"></div>

      <Nav />
      {children}
      <div className="bg-background gridAnim">
        <TrustedBy />
        <Footer />
      </div>
    </div>
  );
}
