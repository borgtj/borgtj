import React from "react";
import { Shell, Composer, ScrollArea, cn } from "@borgtj/react";
import { MessageBubble } from "./MessageBubble";
import { Send } from "lucide-react";

export interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

export interface ChatProps {
    messages: Message[];
    onSend: (text: string) => void;
    sidebar?: React.ReactNode;
    header?: React.ReactNode;
    chatHeader?: React.ReactNode;
    inputValue: string;
    onInputChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

// Ivory background color
const IVORY = "#f3f1e8";
const BLUE = "#4a7cc7";

export function Chat({
    messages,
    onSend,
    sidebar,
    header,
    chatHeader,
    inputValue,
    onInputChange,
    placeholder = "Type a message...",
    className = "",
    style,
    children,
}: ChatProps) {
    const handleSend = () => {
        if (inputValue.trim()) {
            onSend(inputValue);
        }
    };

    return (
        <Shell
            header={header}
            sidebar={sidebar}
            className={cn("borg-bg-white", className)}
            style={style}
            footer={
                <Composer
                    style={{
                        backgroundColor: IVORY,
                        borderTop: "1px solid #e0ddd3",
                        padding: "12px 16px",
                    }}
                    actions={
                        <button
                            onClick={handleSend}
                            type="button"
                            style={{
                                flexShrink: 0,
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                backgroundColor: BLUE,
                                border: "none",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#ffffff",
                            }}
                        >
                            <Send size={16} strokeWidth={2.5} />
                        </button>
                    }
                >
                    <input
                        value={inputValue}
                        onChange={(e) => onInputChange(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder={placeholder}
                        style={{
                            flex: 1,
                            minWidth: 0,
                            borderRadius: "9999px",
                            backgroundColor: "rgba(255,255,255,0.7)",
                            border: "1px solid #e0ddd3",
                            outline: "none",
                            padding: "10px 18px",
                            fontSize: "14px",
                            color: "#1e293b",
                        }}
                    />
                </Composer>
            }
        >
            {children}
            {/* Per-contact header sits above scroll area, inside the content column */}
            {chatHeader && <div style={{ flexShrink: 0 }}>{chatHeader}</div>}
            <ScrollArea
                style={{
                    flex: 1,
                    backgroundColor: IVORY,
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        padding: "20px 24px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {messages.map((msg) => (
                        <MessageBubble key={msg.id} {...msg} />
                    ))}
                </div>
            </ScrollArea>
        </Shell>
    );
}
