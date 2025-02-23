import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard/Dashboard'
import Home from './components/Home/Home'
import { About } from './components/About/About'
import Detail from './components/Detail/Detail'

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>

        <div id='root'>

          <Dashboard />
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/detail/:id" Component={Detail} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>    
  )
}

export default App
