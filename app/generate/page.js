"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Generate = () => {
  const [handle, setHandle] = useState("")
  const [pic, setPic] = useState("")
  const [links, setLinks] = useState([{ link: "", linktext: "" }])

  const handleChange = (index, event) => {
    const newLinks = [...links]
    newLinks[index][event.target.name] = event.target.value
    setLinks(newLinks)
  }

  const addLinkField = () => {
    setLinks([...links, { link: "", linktext: "" }])
  }

  const removeLinkField = (index) => {
    const newLinks = [...links]
    newLinks.splice(index, 1)
    setLinks(newLinks)
  }

  const createTree = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      handle: handle,
      links: links,
      pic: pic
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    try {
      const response = await fetch("/api/generate", requestOptions)
      const result = await response.json()
      
      if (result.success) {
        toast.success(result.message)
        setHandle("")
        setPic("")
        setLinks([{ link: "", linktext: "" }])
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      toast.error("Failed to create Bit-Tree")
    }
  }

  const isFormValid = () => {
    return handle && pic && links.length > 0 && links.every(l => l.link && l.linktext)
  }

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-black mb-4">Create Your Bit-Tree</h1>
          <p className="text-xl text-black/60 font-medium">Design your custom landing page in minutes.</p>
        </div>

        <div className="w-full bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/50 shadow-2xl p-8 md:p-12 space-y-12">
          
          {/* Step 1: Handle */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">1</span>
              <h2 className="text-2xl font-bold text-black">Claim your handle</h2>
            </div>
            <div className="relative group">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-black/40 font-bold text-lg">bit-tree/</span>
              <input
                value={handle}
                onChange={e => setHandle(e.target.value)}
                className={`w-full pl-28 pr-6 py-5 rounded-2xl bg-white/60 border-2 transition-all outline-none text-xl font-bold text-black ${!handle ? 'border-red-400/20' : 'border-transparent focus:border-purple-500'}`}
                placeholder="choose-your-name"
                type="text"
              />
            </div>
          </section>

          {/* Step 2: Links */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">2</span>
              <h2 className="text-2xl font-bold text-black">Add your content</h2>
            </div>
            <div className="space-y-4">
              {links.map((item, index) => (
                <div key={index} className="group relative p-6 rounded-3xl bg-white/40 border-2 border-transparent hover:border-purple-300 transition-all space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      name="linktext"
                      value={item.linktext}
                      onChange={e => handleChange(index, e)}
                      className="w-full px-6 py-4 rounded-xl bg-white/80 border border-black/5 text-black font-semibold placeholder:text-black/30 outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                      placeholder="Display Text (e.g. My Instagram)"
                      type="text"
                    />
                    <input
                      name="link"
                      value={item.link}
                      onChange={e => handleChange(index, e)}
                      className="w-full px-6 py-4 rounded-xl bg-white/80 border border-black/5 text-black font-semibold placeholder:text-black/30 outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                      placeholder="URL (e.g. instagram.com/user)"
                      type="text"
                    />
                  </div>
                  {links.length > 1 && (
                    <button 
                      onClick={() => removeLinkField(index)}
                      className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 active:scale-90"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button 
                onClick={addLinkField}
                className='w-full py-5 rounded-2xl border-2 border-dashed border-purple-500 text-purple-700 font-black text-lg hover:bg-purple-50 transition-all flex items-center justify-center gap-2 group'
              >
                <span className="text-2xl group-hover:rotate-90 transition-transform">+</span> 
                Add Another Link
              </button>
            </div>
          </section>

          {/* Step 3: Pic */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">3</span>
              <h2 className="text-2xl font-bold text-black">Upload a picture</h2>
            </div>
            <input
              value={pic}
              onChange={e => setPic(e.target.value)}
              className={`w-full px-6 py-5 rounded-2xl bg-white/60 border-2 transition-all outline-none text-lg font-semibold text-black ${!pic ? 'border-red-400/20' : 'border-transparent focus:border-purple-500'}`}
              placeholder="Paste image URL (e.g. https://imgur.com/your-pic.png)"
              type="text"
            />
          </section>

          {/* Final Submit */}
          <div className="pt-6">
            <button 
              disabled={!isFormValid()}
              onClick={createTree}
              className="w-full py-7 bg-black text-white text-2xl font-black rounded-3xl shadow-2xl hover:bg-black/90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              🚀 Publish My Bit-Tree
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Generate