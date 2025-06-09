"use client";

import { useState } from "react";
import { Smile, Send, ImagePlus, Camera, Mic, Sticker } from "lucide-react";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";

const gf = new GiphyFetch("YOUR_GIPHY_API_KEY"); // Replace this

export default function MessageInput({
  sendMessage,
}: {
  sendMessage: (msg: string) => void;
}) {
  const [text, setText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showGifPicker, setShowGifPicker] = useState(false);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setText((prev) => prev + emojiData.emoji);
  };

  const handleSend = () => {
    if (text.trim() === "") return;
    sendMessage(text);
    setText("");
  };

  return (
    <div className="relative p-4">
      {/* Emoji Picker */}
      {showEmojiPicker && (
        <div className="absolute bottom-20 left-4 z-50">
          <EmojiPicker theme={Theme.DARK} onEmojiClick={handleEmojiClick} />
        </div>
      )}

      {/* GIF Picker */}
      {showGifPicker && (
        <div className="absolute bottom-20 right-4 z-50 bg-black p-2 rounded shadow-lg">
          <Grid
            width={300}
            columns={3}
            fetchGifs={(offset) => gf.trending({ offset, limit: 9 })}
            onGifClick={(gif) => {
              sendMessage(gif.images.original.url);
              setShowGifPicker(false);
            }}
          />
        </div>
      )}

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-xl flex items-center px-4 py-2 gap-3">
        {/* Emoji */}
        <button onClick={() => setShowEmojiPicker((prev) => !prev)}>
          <Smile className="w-5 h-5 text-white hover:scale-110 transition" />
        </button>

        {/* GIFs */}
        <button onClick={() => setShowGifPicker((prev) => !prev)}>
          <ImagePlus className="w-5 h-5 text-white hover:scale-110 transition" />
        </button>

        {/* Camera */}
        <button>
          <Camera className="w-5 h-5 text-white hover:scale-110 transition" />
        </button>

        {/* Mic */}
        <button>
          <Mic className="w-5 h-5 text-white hover:scale-110 transition" />
        </button>

        {/* Input Field */}
        <input
          type="text"
          className="flex-1 bg-transparent text-white placeholder-white/70 focus:outline-none"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        {/* Send Button */}
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 transition p-2 rounded-full"
        >
          <Send className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}
