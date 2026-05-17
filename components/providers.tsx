"use client"

import { AuthProvider } from "@/contexts/auth-context"
import { ThemeProvider } from "@/contexts/theme-context"
import { ScrollToTop } from "@/components/scroll-to-top"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
      <ScrollToTop />
    </ThemeProvider>
  )
}
