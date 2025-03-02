"use client"

import Link from "next/link"
// import { Logo } from "@/components/ui/logo"
import { navigation } from "@/lib/navigation"
import { Github, Twitter } from "lucide-react"

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "GitHub", href: "https://github.com", icon: Github },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              {/* <Logo size="sm" className="text-primary" /> */}
            </Link>
            <p className="text-sm text-muted-foreground">
              Preserving and sharing Botswana's indigenous knowledge for future generations.
              Join our community of experts and enthusiasts.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h3 className="text-sm font-semibold">Navigation</h3>
              <ul className="mt-4 space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contributors"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Contributors
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Botswana Indigenous Knowledge Bank. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}