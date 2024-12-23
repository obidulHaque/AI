import { create } from "zustand";

type SidebarState = {
  sidebar: boolean;
  toggleSidebar: () => void;
};

const useSidebarTrigger = create<SidebarState>((set) => ({
  sidebar: false,
  toggleSidebar: () => {
    setTimeout(() => {
      set((state) => ({ sidebar: !state.sidebar }));
    }, 1000); // 5 seconds delay
  },
}));

export default useSidebarTrigger;
