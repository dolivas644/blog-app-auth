import { useState } from 'react'
import { supabase } from './supabaseClient'
import auth from "./auth.css"
export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="row flex-center flex">
      <div className="col-6 form-widget" aria-live="polite">
        <body>
        <header>
        <h1 className="header">
             Welcome to Diana's Blog on Anime
             </h1>
             </header>
             </body>
             
        <p className="description">
         Sign in using the link below 
        </p>
        {loading ? (
          'Sending magic link...'
        ) : (
            <div className='container'>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              id="email"
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <button className="button block" aria-live="polite">
              Send magic link
            </button>
          </form>
          </div>
        )}
      </div>
    </div>
  )
}