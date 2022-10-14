import './index.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Auth'
import Account from './Account'
import Dashboard from './components/Dashboard'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigationbar from './components/Nav/Nav'
import Home from './components/Home'

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth />
      ) : (
        <div className='top'>
        <Account key={session.user.id} session={session} />
        <div>
        <Router>
            <Navigationbar />
            <Routes>
                <Route exact path='/Home' element={<Home />}/>
            </Routes>
        </Router>
        </div>
        </div>
      )}
    </div>
  )
}