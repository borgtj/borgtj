import { useState } from "react";
import { Chat, Message } from "@borgtj/chat";
import { Avatar, AvatarFallback, FAB } from "@borgtj/react";
import "@borgtj/react/styles.css";
import { Plus, X, MoreVertical, MessageCircle } from "lucide-react";

interface ChatItem {
    id: string;
    name: string;
    lastMessage: string;
    unread?: number;
    status: "online" | "offline";
    title: string;
}

const INITIAL_CHATS: ChatItem[] = [
    {
        id: "1",
        name: "Constantine Mogoreanu",
        lastMessage: "Great progress on your last lesson!",
        unread: 2,
        status: "online",
        title: "Teacher",
    },
    {
        id: "2",
        name: "Vidhur Prabhu",
        lastMessage: "Did you see the new design?",
        unread: 0,
        status: "offline",
        title: "Student",
    },
    {
        id: "3",
        name: "Jori Azoz",
        lastMessage: "Meeting tomorrow at 10",
        unread: 0,
        status: "online",
        title: "Lead Designer",
    },
    {
        id: "4",
        name: "Samuel Friend",
        lastMessage: "Can we review the PR?",
        unread: 0,
        status: "online",
        title: "Developer",
    },
    {
        id: "5",
        name: "Emiliano Aquino",
        lastMessage: "Great work on your essay!",
        unread: 0,
        status: "online",
        title: "Teacher",
    },
];

const INITIAL_MESSAGES: Message[] = [
    {
        id: "1",
        text: "Hi! How are you doing with Level 3?",
        sender: "bot",
        timestamp: new Date(Date.now() - 3600000),
    },
    {
        id: "2",
        text: "I'm doing well! The vocabulary is challenging but interesting.",
        sender: "user",
        timestamp: new Date(Date.now() - 3500000),
    },
    {
        id: "3",
        text: "Great progress on your last lesson!",
        sender: "bot",
        timestamp: new Date(Date.now() - 3400000),
    },
];

// Ivory/cream theme color
const IVORY = "#f3f1e8";
const BLUE = "#4a7cc7";

export default function App() {
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
    const [inputValue, setInputValue] = useState("");
    const [activeChatId, setActiveChatId] = useState("1");
    const [isOpen, setIsOpen] = useState(false);

    const activeChat =
        INITIAL_CHATS.find((c) => c.id === activeChatId) || INITIAL_CHATS[0];

    const handleSend = (text: string) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            text,
            sender: "user",
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, newMessage]);
        setInputValue("");
    };

    // ── Top "Messages" header bar ────────────────────────────────────────────
    const shellHeader = (
        <div
            style={{
                backgroundColor: BLUE,
                padding: "14px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#fff",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <MessageCircle size={20} strokeWidth={2} />
                <span
                    style={{
                        fontWeight: 700,
                        fontSize: "18px",
                        letterSpacing: "-0.3px",
                    }}
                >
                    Messages
                </span>
            </div>
            <button
                onClick={() => setIsOpen(false)}
                style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.85)",
                    cursor: "pointer",
                    padding: "4px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <X size={16} strokeWidth={2.5} />
            </button>
        </div>
    );

    // ── Sidebar / contact list ───────────────────────────────────────────────
    const sidebarContent = (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "240px",
                backgroundColor: IVORY,
                borderRight: "1px solid #e0ddd3",
            }}
        >
            {/* "Contacts" label row */}
            <div
                style={{
                    padding: "16px 16px 10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <span
                    style={{
                        color: "#888",
                        fontSize: "13px",
                        fontWeight: 500,
                    }}
                >
                    Contacts
                </span>
                <button
                    style={{
                        background: "none",
                        border: "none",
                        color: BLUE,
                        cursor: "pointer",
                        padding: "2px",
                        display: "flex",
                    }}
                >
                    <Plus size={16} />
                </button>
            </div>

            {/* Contact rows */}
            <div style={{ flex: 1, overflowY: "auto" }}>
                {INITIAL_CHATS.map((chat) => {
                    const active = activeChatId === chat.id;
                    const initials = chat.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("");
                    return (
                        <div
                            key={chat.id}
                            onClick={() => setActiveChatId(chat.id)}
                            style={{
                                padding: "10px 16px",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                cursor: "pointer",
                                borderRadius: active ? "0 24px 24px 0" : "0",
                                backgroundColor: active ? BLUE : "transparent",
                                color: active ? "#fff" : "#374151",
                                marginRight: active ? "8px" : "0",
                                transition: "background-color 0.15s",
                            }}
                            onMouseEnter={(e) => {
                                if (!active)
                                    (
                                        e.currentTarget as HTMLDivElement
                                    ).style.backgroundColor =
                                        "rgba(74,124,199,0.08)";
                            }}
                            onMouseLeave={(e) => {
                                if (!active)
                                    (
                                        e.currentTarget as HTMLDivElement
                                    ).style.backgroundColor = "transparent";
                            }}
                        >
                            <Avatar
                                style={{
                                    width: "38px",
                                    height: "38px",
                                    flexShrink: 0,
                                }}
                            >
                                <AvatarFallback
                                    style={{
                                        backgroundColor: active
                                            ? "rgba(255,255,255,0.25)"
                                            : BLUE,
                                        color: "#fff",
                                        fontWeight: 600,
                                        fontSize: "13px",
                                    }}
                                >
                                    {initials}
                                </AvatarFallback>
                            </Avatar>
                            <div
                                style={{
                                    flex: 1,
                                    minWidth: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <span
                                    style={{
                                        fontWeight: 500,
                                        fontSize: "14px",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {chat.name}
                                </span>
                                {chat.unread !== undefined &&
                                    chat.unread > 0 &&
                                    !active && (
                                        <span
                                            style={{
                                                backgroundColor: BLUE,
                                                color: "#fff",
                                                borderRadius: "9999px",
                                                padding: "1px 6px",
                                                fontSize: "10px",
                                                fontWeight: 700,
                                                flexShrink: 0,
                                                marginLeft: "6px",
                                            }}
                                        >
                                            {chat.unread}
                                        </span>
                                    )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    // ── Per-contact header (rendered above message list) ─────────────────────
    const chatHeader = (
        <div
            style={{
                padding: "16px 20px",
                borderBottom: "1px solid #e0ddd3",
                backgroundColor: IVORY,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <Avatar style={{ width: "44px", height: "44px" }}>
                    <AvatarFallback
                        style={{
                            backgroundColor: BLUE,
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "15px",
                        }}
                    >
                        {activeChat.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <div
                        style={{
                            fontWeight: 700,
                            fontSize: "16px",
                            color: "#1a1a1a",
                            lineHeight: 1.2,
                        }}
                    >
                        {activeChat.name}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            marginTop: "3px",
                        }}
                    >
                        <span style={{ fontSize: "12px", color: "#888" }}>
                            {activeChat.title}
                        </span>
                        <span style={{ color: "#ccc", fontSize: "12px" }}>
                            •
                        </span>
                        <span
                            style={{
                                fontSize: "12px",
                                fontWeight: 500,
                                color:
                                    activeChat.status === "online"
                                        ? "#22c55e"
                                        : "#9ca3af",
                            }}
                        >
                            {activeChat.status === "online"
                                ? "Online"
                                : "Offline"}
                        </span>
                    </div>
                </div>
            </div>
            <button
                style={{
                    background: "none",
                    border: "none",
                    color: "#aaa",
                    cursor: "pointer",
                    padding: "4px",
                    display: "flex",
                }}
            >
                <MoreVertical size={20} />
            </button>
        </div>
    );

    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                overflow: "hidden",
                backgroundColor: "#e8e9ed",
                position: "relative",
            }}
        >
            {/* Chat window */}
            {isOpen && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "32px",
                        right: "32px",
                        width: "calc(100% - 64px)",
                        maxWidth: "860px",
                        height: "calc(100% - 64px)",
                        maxHeight: "560px",
                        zIndex: 50,
                    }}
                >
                    <Chat
                        messages={messages}
                        onSend={handleSend}
                        inputValue={inputValue}
                        onInputChange={setInputValue}
                        header={shellHeader}
                        sidebar={sidebarContent}
                        chatHeader={chatHeader}
                        style={{
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow:
                                "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)",
                            border: "1px solid #d9d7ce",
                            height: "100%",
                        }}
                    />
                </div>
            )}

            {/* FAB — shown when chat is closed */}
            {!isOpen && (
                <FAB
                    onClick={() => setIsOpen(true)}
                    style={{
                        position: "fixed",
                        bottom: "32px",
                        right: "32px",
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#c4d99c",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                        zIndex: 50,
                    }}
                >
                    <MessageCircle size={28} />
                </FAB>
            )}
        </div>
    );
}
