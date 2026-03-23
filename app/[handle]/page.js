import clientPromise from "@/lib/mongodb.js";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const { handle } = await params;
    const client = await clientPromise;
    const db = client.db("bit-tree");
    const collection = db.collection("Links");

    const item = await collection.findOne({ handle: handle });

    if (!item) {
        return notFound();
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] py-20 px-4">
            <div className="w-full max-w-lg flex flex-col items-center bg-white/30 backdrop-blur-2xl border border-white/40 p-10 md:p-16 rounded-[4rem] shadow-2xl">
                {item.pic && (
                    <div className="relative mb-8">
                        <div className="absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <img 
                            src={item.pic} 
                            alt={item.handle} 
                            className="relative w-40 h-40 rounded-full object-cover border-8 border-white shadow-2xl"
                        />
                    </div>
                )}
                <h1 className="text-4xl font-black text-black mb-2 tracking-tight">@{item.handle}</h1>
                <p className="text-black/60 font-bold mb-12 uppercase tracking-widest text-sm">Official Bit-Tree</p>

                <div className="w-full space-y-5">
                    {item.links && item.links.map((link, index) => (
                        <a
                            key={index}
                            href={link.link.startsWith('http') ? link.link : `https://${link.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block w-full py-5 px-8 bg-white/80 hover:bg-black border border-transparent rounded-3xl text-center text-black hover:text-white font-black text-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 active:scale-95"
                        >
                            {link.linktext}
                        </a>
                    ))}
                </div>
                
                <div className="mt-16 pt-8 border-t border-black/5 w-full text-center">
                    <p className="text-black/40 font-bold text-xs uppercase tracking-[0.3em]">Created with Bit-Tree</p>
                </div>
            </div>
        </div>
    );
}
