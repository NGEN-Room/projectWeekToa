export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white p-8 font-sans text-black flex flex-col items-center">
      {/* Profile Circle */}
      <div className="mb-8">
        <div className="w-24 h-24 rounded-full border-2 border-black"></div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
        <div>
          <p className="border rounded px-4 py-2">20 Likes</p>
          <p className="mt-2">24 hour Likes</p>
        </div>
        <div>
          <p className="border rounded px-4 py-2">220 Likes</p>
          <p className="mt-2">Total Likes</p>
        </div>
        <div>
          <p className="border rounded px-4 py-2">25 Subs</p>
          <p className="mt-2">24 Hour Subs</p>
        </div>
        <div>
          <p className="border rounded px-4 py-2">155 Subs</p>
          <p className="mt-2">Total Subs</p>
        </div>
      </div>

      {/* Divider and Sections */}
      <div className="w-full max-w-4xl border-t-2 border-black pt-4 mb-4">
        <div className="flex">
          <div className="w-1/2 pr-4 flex flex-col justify-center items-start">
            <h2 className="text-xl font-semibold mb-2">Popular hashtags</h2>
            {/* Hashtag List */}
            <ol className="text-lg space-y-1 text-left pl-4">
              <li>1. #MarvelRivals</li>
              <li>2. #SueStorm</li>
              <li>3. #FunnyDogs</li>
              <li>4. #LowTierGod</li>
              <li>5. #Nettspend</li>
            </ol>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <div className="flex items-center space-x-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <h2 className="text-xl font-semibold">Similar Content Creators</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.84 6.244A11.958 11.958 0 0112 20.25a11.958 11.958 0 01-7-2.428 12.083 12.083 0 01.84-6.244L12 14z" />
              </svg>
            </div>
            {/* Duplicated Hashtag List */}
            <ol className="text-lg space-y-1 text-left pl-8">
              <li>1. #MarvelRivals</li>
              <li>2. #SueStorm</li>
              <li>3. #FunnyDogs</li>
              <li>4. #LowTierGod</li>
              <li>5. #Nettspend</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
