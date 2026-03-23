"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [handle, setHandle] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!handle) return;
    
    setLoading(true);
    setResult(null);
    try {
      const response = await fetch(`/api/get-tree/${handle}`);
      const data = await response.json();
      if (data.success) {
        setResult(data.result);
      } else {
        setResult({ error: "No Bit-Tree found for this handle! Create one below." });
      }
    } catch (error) {
      setResult({ error: "Something went wrong. Try again!" });
    }
    setLoading(false);
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-10 overflow-y-auto">
      <div className="max-w-4xl w-full flex flex-col items-center space-y-12">
        
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-black tracking-tight leading-tight">
            Everything You Are, <br />
            <span className="text-purple-600">Shared in One Link</span>
          </h1>
          <p className="text-xl md:text-2xl text-black/70 max-w-2xl mx-auto font-medium">
            Bit-Tree helps you showcase everything you create across all your social platforms in one beautiful link.
          </p>
        </div>

        {/* Action Section */}
        <div className="w-full max-w-2xl bg-white/30 backdrop-blur-xl border border-white/40 p-10 rounded-[3rem] shadow-2xl space-y-10">
          
          {/* Search Section */}
          <div className="space-y-4">
            <h3 className="text-center font-bold text-black/80 text-lg uppercase tracking-widest">Find a creator</h3>
            <form onSubmit={handleSearch} className="relative group">
              <div className="flex items-center bg-white/80 border-2 border-transparent focus-within:border-purple-400 rounded-full transition-all shadow-md overflow-hidden">
                <span className="pl-6 text-black/50 font-semibold text-lg">bit-tree/</span>
                <input 
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder="your-handle" 
                  type="text" 
                  className="w-full py-5 pr-6 bg-transparent text-black font-bold placeholder:text-black/30 outline-none text-xl"
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="mr-2 px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all active:scale-95 disabled:opacity-50"
                >
                  {loading ? 'Searching...' : 'Search'}
                </button>
              </div>
            </form>
          </div>

          {/* Search Result Display */}
          {result && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-500">
              {result.error ? (
                <div className="text-center p-6 bg-red-50 text-red-600 font-bold rounded-3xl border border-red-100">
                  {result.error}
                </div>
              ) : (
                <div className="bg-white/90 p-8 rounded-[3rem] shadow-xl border border-purple-100 flex flex-col items-center text-center space-y-6">
                   <div className="relative">
                      <div className="absolute inset-0 bg-purple-500 blur-xl opacity-20 rounded-full animate-pulse"></div>
                      <img src={result.pic} alt={result.handle} className="relative w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg" />
                   </div>
                   <div>
                      <h4 className="text-2xl font-black text-black">@{result.handle}</h4>
                      <p className="text-black/50 font-bold text-xs uppercase tracking-widest mt-1">Found Your Bit-Tree!</p>
                   </div>
                   <div className="w-full space-y-3">
                      {result.links && result.links.slice(0, 3).map((link, i) => (
                        <a key={i} href={link.link.startsWith('http') ? link.link : `https://${link.link}`} target="_blank" className="block w-full py-3 px-6 bg-purple-50 text-purple-700 font-bold rounded-2xl border border-purple-100 hover:bg-purple-600 hover:text-white transition-all">
                          {link.linktext}
                        </a>
                      ))}
                   </div>
                   <Link href={`/${result.handle}`} className="text-purple-600 font-black underline underline-offset-4 decoration-2 hover:text-purple-800 transition-all">
                      View Full Profile →
                   </Link>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center gap-4 text-black/20">
            <div className="h-px bg-black/10 flex-1"></div>
            <span className="font-bold text-sm">OR</span>
            <div className="h-px bg-black/10 flex-1"></div>
          </div>

          {/* Create CTA */}
          <div className="text-center space-y-6">
            <h3 className="font-bold text-black/80 text-lg uppercase tracking-widest">Ready to start?</h3>
            <Link href="/generate">
              <button className="w-full py-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-2xl font-black rounded-full shadow-[0_10px_40px_-10px_rgba(147,51,234,0.5)] hover:shadow-[0_15px_50px_-10px_rgba(147,51,234,0.6)] hover:scale-[1.02] active:scale-95 transition-all">
                Create Your Bit-Tree Now 🚀
              </button>
            </Link>
            <p className="text-black/50 font-medium text-sm">Join thousands of creators sharing their world.</p>
          </div>

        </div>

      </div>
    </main>
  );
}