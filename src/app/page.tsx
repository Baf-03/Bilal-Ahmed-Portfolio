import Introduction from "@/app/Components/LandingPage/LandingPage";

import Image from "next/image";
import ResponsiveAppBar from "./Components/Navbar";
import CreativeProcess from "./Components/CreativeProcess/CreativeProcess";
import NeedofSp from "./Components/NeedOfSalesPage.tsx/NeedofSp";

export default function Home() {
  return (
    <main className="">
          <ResponsiveAppBar/>
          <div className="w-[98%] md:w-[85%] m-auto flex flex-col gap-12 justify-center items-center  mt-2 ">
          <Introduction/>
          <CreativeProcess/>
          <NeedofSp/>
          </div>
    </main>

  );
}
