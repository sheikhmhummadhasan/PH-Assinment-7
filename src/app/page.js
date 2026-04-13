import Friends from "@/Compnent/Friends";
import Navbar from "@/Compnent/Navbar";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <section>
        <div className="flex flex-col items-center justify-center gap-3 p-20">
          <h2 className="text-5xl font-bold text-center">Friends to keep close in your life</h2>
          <p className="text-center">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br>
            relationships that matter most.</p>
          <button className="bg-[#244D3F] text-white btn rounded"><FaPlus /> Add a Friend</button>
        </div>
        <div className="">
          <Friends></Friends>
        </div>
      </section>
    </div>
  );
}
