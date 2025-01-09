import { create } from "zustand";
import { persist } from "zustand/middleware";

export const themeStore = create (
    persist(
        set => (
            {
                
                token: "",
                addToken: (token) => set((prevState) => ({...prevState , token: token})),
            }
        )
    )
)