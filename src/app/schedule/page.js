
// import React from "react";

// const events = {
//   "2025-05-20": [
//     { time: "10:30AM - 12:00PM", title: "Edit Video", color: "bg-yellow-400" },
//     { time: "1:00PM - 3:00PM", title: "Take a break", color: "bg-purple-400" }
//   ],
//   "2025-05-29": [
//     { time: "10:30AM - 12:00PM", title: "Media Production class", color: "bg-cyan-400" }
//   ]
// };

// const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

// export default function Schedule() {
//   return (
//     <div className="mx-auto min-h-screen bg-white">
//       <div className="text-xl font-bold mb-2">May 1 - May 31 2025</div>
//       <div className="grid grid-cols-7 gap-2 mb-8 text-center">
//         {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
//           <div key={i} className="font-semibold">{d}</div>
//         ))}
//         {Array.from({ length: 4 }).map((_, i) => (
//           <div key={"empty-" + i}></div>
//         ))}
//         {daysInMonth.map((day) => (
//           <div
//             key={day}
//             className="h-12 flex items-center justify-center border rounded-md relative"
//           >
//             {day}
//             {events[`2025-05-${day.toString().padStart(2, "0")}`] && (
//               <div className="absolute bottom-1 flex gap-1">
//                 {events[`2025-05-${day.toString().padStart(2, "0")}`].map((e, i) => (
//                   <span key={i} className={`w-2 h-2 rounded-full ${e.color}`}></span>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {Object.entries(events).map(([date, items]) => (
//         <div key={date} className="mb-4">
//           <div className="text-lg font-semibold mb-2">{new Date(date).toDateString()}</div>
//           {items.map((event, idx) => (
//             <div
//               key={idx}
//               className="flex items-center mb-2 p-2 bg-gray-100 rounded shadow"
//             >
//               <span className={`w-3 h-3 rounded-full mr-2 ${event.color}`}></span>
//               <div>
//                 <div className="text-sm font-medium">{event.title}</div>
//                 <div className="text-xs text-gray-600">{event.time}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";

const events = {
  "2025-05-20": [
    { time: "10:30AM - 12:00PM", title: "Edit Video", color: "bg-yellow-400" },
    { time: "1:00PM - 3:30PM", title: "Take a break", color: "bg-purple-400" }
  ],
  "2025-05-29": [
    { time: "10:30AM - 12:00PM", title: "Media Production class", color: "bg-cyan-400" }
  ]
};

const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

export default function Calendar() {
  return (
    <div className="p-6 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 min-h-screen bg-white">
      {/* Calendar */}
      <div className="flex-1">
        <div className="text-lg font-medium mb-4 text-black">May 1 - May 31 2025<span className="ml-2"><button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">▼ <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg></button><div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
</span>
</div>
        <div className="grid grid-cols-7 gap-2 text-center text-black">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <div key={i} className="font-semibold text-sm text-gray-600">{d}</div>
          ))}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={"empty-" + i}></div>
          ))}
          {daysInMonth.map((day) => {
            const dateKey = `2025-05-${day.toString().padStart(2, "0")}`;
            return (
              <div
                key={day}
                className="aspect-square bg-gray-100 rounded-sm flex items-center justify-center relative text-sm"
              >
                {day}
                {events[dateKey] && (
                  <div className="absolute bottom-1 flex gap-1">
                    {events[dateKey].map((e, i) => (
                      <span key={i} className={`w-2 h-2 rounded-full ${e.color}`}></span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Events Panel */}
      <div className="w-full max-w-sm">
        {Object.entries(events).map(([date, items]) => (
          <div key={date} className="mb-8">
            <div className="text-md font-semibold mb-2 text-black">{new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</div>
            {items.map((event, idx) => (
              <div
                key={idx}
                className="mb-2 flex items-center justify-between px-4 py-2 text-black bg-gray-100 rounded"
              >
                <div className="flex items-center">
                  <span className={`w-3 h-3 rounded-full mr-3 ${event.color}`}></span>
                  <span className="text-sm font-medium">{event.title}</span>
                </div>
                <span className="text-xs text-black">{event.time}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}