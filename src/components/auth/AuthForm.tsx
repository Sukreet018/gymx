import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface AuthFormProps {
  mode: 'login' | 'signup'
}

function AuthForm({ mode }: AuthFormProps) {
  const navigate = useNavigate()

  // form state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const isSignup = mode === 'signup'

  // submit handler
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    localStorage.setItem('gym_auth', 'true')

    navigate('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* name field */}
      {isSignup && (
        <label className="form-control">
          <span className="label-text mb-2">Full name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            className="input input-bordered w-full"
            required
          />
        </label>
      )}

      {/* email field */}
      <label className="form-control">
        <span className="label-text mb-2">Email</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="input input-bordered w-full"
          required
        />
      </label>

      {/* password field */}
      <label className="form-control">
        <span className="label-text mb-2">Password</span>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="••••••••"
          className="input input-bordered w-full"
          minLength={8}
          required
        />
      </label>

      {/* submit button */}
      <button type="submit" className="btn btn-primary w-full">
        {isSignup ? 'Create account' : 'Log in'}
      </button>

      {/* auth mode toggle link */}
      <p className="text-center text-sm opacity-60">
        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
        <Link
          to={isSignup ? '/login' : '/signup'}
          className="font-semibold text-primary hover:underline"
        >
          {isSignup ? 'Log in' : 'Sign up'}
        </Link>
      </p>
    </form>
  )
}

export default AuthForm