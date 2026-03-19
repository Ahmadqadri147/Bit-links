import Image from "next/image";

export default function Home() {
  return (

    <>
      <div className="flex flex-col justify-center w-[60vw] mx-auto m-10 items-center  ">
        <h1 className="text-6xl font-bold text-center mt-10 mb-10">
          Everything You Are, Shared in One Simple Link in bio with Linktree
        </h1>
        <h1 className=" flex  text-center text-xl p-10 ">
          Linktree Help To Create Your Personal Bio Link Profile Page For Free.Join 80k+ creators, entrepreneurs, and influencers who use Linktree as their link in bio. With one smart Linktree link, you can showcase everything you create, curate, and sell—across Instagram, TikTok, X (formerly Twitter), YouTube, and all your social media platforms.
        </h1>
        <div className="flex  gap-2 ">
         <input placeholder="Link-Tree/Your-name" type="text" className="px-5 py-2 bg-cyan-400 hover:bg-cyan-600 rounded-full text-white  "/>
          <button className="px-5 py-2 bg-cyan-400 hover:bg-cyan-600 rounded-full text-white  ">Get Started</button>
        </div>
      </div>
    </>

  );
}
