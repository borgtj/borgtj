import React from "react";

export interface MessageBubbleProps {
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
    className?: string;
}

const BLUE = "#4a7cc7";

export function MessageBubble({
    text,
    sender,
    timestamp,
    className,
}: MessageBubbleProps) {
    const isUser = sender === "user";

    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                marginBottom: "12px",
                justifyContent: isUser ? "flex-end" : "flex-start",
            }}
            className={className}
        >
            {isUser ? (
                // User message — right side, blue bubble
                <div
                    style={{
                        maxWidth: "72%",
                        padding: "12px 16px",
                        backgroundColor: BLUE,
                        color: "#ffffff",
                        borderRadius: "18px",
                    }}
                >
                    <div style={{ fontSize: "14px", lineHeight: "1.5" }}>
                        {text}
                    </div>
                    <div
                        style={{
                            fontSize: "11px",
                            marginTop: "4px",
                            color: "rgba(255,255,255,0.65)",
                        }}
                    >
                        {timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </div>
                </div>
            ) : (
                // Bot message — left side, soft gray bubble
                <div
                    style={{
                        maxWidth: "72%",
                        padding: "12px 16px",
                        backgroundColor: "#e4e2da",
                        color: "#1e293b",
                        borderRadius: "18px",
                    }}
                >
                    <div style={{ fontSize: "14px", lineHeight: "1.5" }}>
                        {text}
                    </div>
                    <div
                        style={{
                            fontSize: "11px",
                            marginTop: "4px",
                            color: "#94a3b8",
                        }}
                    >
                        {timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
