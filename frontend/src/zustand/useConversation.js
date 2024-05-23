import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: {},
  setMessages: (messages) => set({ messages }),
  conversations: [],
  setConversations: (conversations) => set({ conversations }),
  // setMessages: (userId, newMessages) =>
  //   set((state) => ({
  //     messages: {
  //       ...state.messages,
  //       [userId]: newMessages,
  //     },
  //   })),
}));

export default useConversation;
