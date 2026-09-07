"use client";

import { useState } from "react";
import { MessageCircle, X, ArrowLeft } from "lucide-react";
import { chatbotData } from "./chatbot-data";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(
    null
  );

  const selectedItem = chatbotData.find(
    (item) => item.id === selectedQuestion
  );

  return (
    <div>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Отвори chatbot"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[420px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl bg-background shadow-2xl ring-1 ring-border">
          <div className="flex items-center justify-between border-b px-5 py-4">
            <div>
              <h2 className="text-lg font-semibold">
                Како можеме да помогнеме?
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Изберете прашање за да дознаете повеќе.
              </p>
            </div>

            <button
              onClick={() => {
                setIsOpen(false);
                setSelectedQuestion(null);
              }}
              aria-label="Затвори chatbot"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {selectedItem ? (
            <div className="p-5">
              <button
                onClick={() => setSelectedQuestion(null)}
                className="mb-5 flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Назад
              </button>

              <h3 className="text-base font-semibold leading-6">
                {selectedItem.question}
              </h3>

              <div className="mt-4 rounded-xl bg-muted/50 p-4">
                <p className="whitespace-pre-line text-sm leading-6 text-foreground">
                  {selectedItem.answer}
                </p>
              </div>
            </div>
          ) : (
            <div className="max-h-[460px] space-y-3 overflow-y-auto p-5">
              {chatbotData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedQuestion(item.id)}
                  className="w-full rounded-xl border bg-background px-4 py-4 text-left text-sm leading-5 transition-all hover:bg-muted hover:shadow-sm"
                >
                  {item.question}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}