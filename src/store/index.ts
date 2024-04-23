import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const APP_NAME = `@${process.env.NEXT_PUBLIC_NAME?.replaceAll(
  " ",
  "_"
).toUpperCase()}`;


const usePersistStore = create(
  persist(
    (set: any, get: any) => ({
      theme: "dark",
      setTheme: (t: string) => set({ theme: t }),
      language: "en",
      setLanguage: (t: string) => set({ language: t }),
      token: "",
      setToken: (t: string) => set({ token: t }),
      user: null,
      setUser: (t: any) => set({ user: t }),
      loginEmail: "",
      setLoginEmail: (t: any) => set({ loginEmail: t }),

      logout: () => {
        set({ token: "", user: null, loginEmail: "" });
      }
    }),
    
    {
      name: APP_NAME,
      storage: createJSONStorage(() => localStorage),
     
    }
  )
);

const useStore = create((set) => ({
  isLoading: false,
  setIsLoading: (t: boolean) => set({ isLoading: t }),
  error: "",
  setError: (e: string) => set({ error: e }),
  success: "",
  setSuccess: (s: string) => set({ success: s }),
  waning: "",
  setWaning: (w: string) => set({ waning: w })
}));

export { useStore, usePersistStore };



