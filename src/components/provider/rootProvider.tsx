import ReactLenis from "lenis/react";

const Rootprovider = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default Rootprovider;
