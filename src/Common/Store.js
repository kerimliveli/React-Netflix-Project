import { create } from "zustand";
import { persist } from "zustand/middleware";

export const themeStore = create (
    persist(
        set => (
            {
                
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVkZjNkZDhhMmVhMTFhMzBkMDIwYzYiLCJpYXQiOjE3MzU0NjQzMjgsImV4cCI6MTczNjc2MDMyOH0.11VR_sKT_QXhf-sISB6tBRUh7zl4B_riQ4RCD9IiJ7g",
                addToken: (token) => set((prevState) => ({...prevState , token: token})),
            }
        )
    )
)