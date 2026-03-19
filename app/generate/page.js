import React from 'react'

const generate = () => {
  return (
    <>
      <div className="flex  flex-col justify-center items-center  w-[60vw] mx-auto">
        <h1 className="text-4xl font-bold text-center mt-10 mb-10"> Create Your Bit-Tree</h1>
        <div className="w-full max-w-xl mx-auto rounded-3xl border border-btext-black/15 bg-btext-black/10 backdrop-blur-xl shadow-2xl p-8 text-black">

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-black/80 mb-2">
                Step 1
              </label>
              <h2 className="text-lg font-semibold mb-3">Claim your handle</h2>
              <input
                className="w-full px-4 py-3 rounded-2xl bg-btext-black/8 border border-btext-black/15 text-black placeholder:text-black/50 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/40 transition"
                placeholder="Choose your handle"
                type="text"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black/80 mb-2">
                Step 2
              </label>
              <h2 className="text-lg font-semibold mb-3">Add your links</h2>
              <div className="space-y-3">
                <input
                  className="w-full px-4 py-3 rounded-2xl bg-btext-black/8 border border-btext-black/15 text-black placeholder:text-black/50 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/40 transition"
                  placeholder="Enter your link title"
                  type="text"
                />
                <input
                  className="w-full px-4 py-3 rounded-2xl bg-btext-black/8 border border-btext-black/15 text-black placeholder:text-black/50 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/40 transition"
                  placeholder="Enter your link URL"
                  type="text"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black/80 mb-2">
                Step 3
              </label>
              <h2 className="text-lg font-semibold mb-3">Add a picture</h2>
              <input
                className="w-full px-4 py-3 rounded-2xl bg-btext-black/8 border border-btext-black/15 text-black placeholder:text-black/50 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/40 transition"
                placeholder="Paste image URL"
                type="text"
              />
            </div>

            <button className="w-full mt-4 py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-500 text-black font-semibold shadow-lg hover:scale-[1.02] hover:from-purple-600 hover:to-violet-600 transition duration-300">
              Create your link
            </button>
          </div>
        </div>

      </div>

    </>
  )
}

export default generate