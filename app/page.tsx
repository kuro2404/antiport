import Image from "next/image";
import Header from "./components/header";
import Icons from "./components/icons";
import HeroSection from "./components/hero";

export default function Home() {
  return (
    <main className="flex-1 relative w-full">
      <Header />
      <section className="relative z-2">
        <div className="bg-animation z-1">
          <div
            id="stars"
            className="relative top-0 left-0 w-full h-full z-0"
          ></div>
          <div
            id="stars2"
            className="relative top-0 left-0 w-full h-full z-0"
          ></div>
          <div
            id="stars3"
            className="relative top-0 left-0 w-full h-full z-0"
          ></div>
          <div
            id="stars4"
            className="relative top-0 left-0 w-full h-full z-0"
          ></div>
        </div>
        <div className="h-screen w-full text-center flex items-center justify-center relative z-1">
          <HeroSection/>
        </div>
      </section>
      <section className="bg-white h-screen w-full text-center text-black flex items-center justify-center relative z-20">
        <h2>hello world</h2>
      </section>
      <section className="bg-black h-screen w-full text-center text-white flex items-center justify-evenly relative z-10">
        <h1 className="text-2xl">hello world</h1>
      </section>
      <section className="bg-black h-screen w-full text-center text-black flex items-center z-20">
        <div className="bg-white w-25 justify-start z-2">
          {/*<Icons />*/}
        </div>
        <h1 className="mx-auto text-blue-800 z-5">hello world</h1>
      </section>
      <section className="bg-black h-screen w-full text-center text-white flex items-center justify-center relative z-10">
        hello world
      </section>
      <section className="bg-gradient-to-r from-transparent to-gray-800 h-10 w-full flex items-center justify-center relative z-30">
        <div className="w-full text-center text-white">Gradient Div</div>
      </section>
    </main>
  );
}
