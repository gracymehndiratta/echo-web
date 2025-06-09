// src/app/chat/page.tsx
import ChatList from "@/components/ChatList";
import ChatWindow from "@/components/ChatWindow";

export default function ChatPage() {
  return (
    <div className="flex h-screen">
      <ChatList />
      <div className="flex flex-col flex-1">
        <ChatWindow />
      </div>
    </div>
  );
}
