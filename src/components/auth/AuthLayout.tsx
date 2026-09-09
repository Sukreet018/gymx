import { Dumbbell } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface AuthLayoutProps {
  title: string
  description: string
  children: ReactNode
}

function AuthLayout({
  title,
  description,
  children,
}: AuthLayoutProps) {
  return (
    // auth wrapper layout
    <main className="flex min-h-screen items-center justify-center bg-base-200 px-4 py-12">
      <div className="w-full max-w-md">
        {/* auth header */}
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="mb-5 inline-flex items-center gap-2 text-xl font-bold"
          >
            <Dumbbell size={24} />
            GymX
          </Link>

          <h1 className="text-3xl font-bold">{title}</h1>

          <p className="mt-2 text-sm opacity-60">{description}</p>
        </div>

        {/* auth card & form wrapper */}
        <div className="card border border-base-300 bg-base-100 shadow-xl">
          <div className="card-body">{children}</div>
        </div>

        {/* terms footer text */}
        <p className="mt-6 text-center text-xs opacity-50">
          By continuing, you agree to our terms and privacy policy.
        </p>
      </div>
    </main>
  )
}

export default AuthLayout