// src/components/ChatList.tsx
"use client";

// Utility to format timestamp with padded hours & minutes (24-hour format)
function formatTimestamp(date: Date): string {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

export default function ChatList() {
  const pinnedChats = [
    { name: "PRANAV", lastMessage: "What’s up?", time: new Date() },
    {
      name: "MADHAV",
      lastMessage: "What’s up?",
      time: new Date(Date.now() - 600000),
    },
  ];

  const allChats = [
    { name: "ArSHIA", lastMessage: "What’s up?", time: new Date() },
    {
      name: "RITA",
      lastMessage: "What’s up?",
      time: new Date(Date.now() - 3600000),
    },
    {
      name: "RIJU",
      lastMessage: "What’s up?",
      time: new Date(Date.now() - 7200000),
    },
    {
      name: "RAM",
      lastMessage: "What’s up?",
      time: new Date(Date.now() - 10800000),
    },
    {
      name: "RAJ",
      lastMessage: "What’s up?",
      time: new Date(Date.now() - 14400000),
    },
    {
      name: "RAMA",
      lastMessage: "What’s up?",
      time: new Date(Date.now() - 18000000),
    },
  ];

  return (
    <div className="w-80 bg-black text-white p-4 flex flex-col gap-4 border-r border-gray-800 select-none">
      <h2 className="text-xl font-semibold">Messages</h2>

      {/* Pinned Chats */}
      <div>
        <p className="text-sm text-gray-400 mb-1">Pinned Chats</p>
        {pinnedChats.map((chat, idx) => (
          <div
            key={idx}
            className="flex items-start justify-between gap-2 py-2 hover:bg-gray-800 rounded px-2"
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gray-700" />
                <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-orange-500" />
              </div>
              <div>
                <p className="font-semibold text-sm">{chat.name}</p>
                <p className="text-sm text-blue-400">{chat.lastMessage}</p>
              </div>
            </div>
            <span className="text-xs text-gray-400 min-w-[48px] text-right block">
              {formatTimestamp(chat.time)}
            </span>
          </div>
        ))}
      </div>

      {/* All Chats */}
      <div className="flex-1 overflow-y-auto flex flex-col-reverse">
        <div>
          <p className="text-sm text-gray-400 mb-1">All Chats</p>
          {allChats.map((chat, idx) => (
            <div
              key={idx}
              className="flex items-start justify-between gap-2 py-2 hover:bg-gray-800 rounded px-2"
            >
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gray-700" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-gray-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{chat.name}</p>
                  <p className="text-sm text-gray-400">{chat.lastMessage}</p>
                </div>
              </div>
              <span className="text-xs text-gray-400 min-w-[48px] text-right block">
                {formatTimestamp(chat.time)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
