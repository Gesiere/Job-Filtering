import { useState } from 'react'
import Header from './components/Header'
import JobsListingComponent from './components/JobsListingComponent'
import { useGlobalContext } from './JobsContext'
import './scss/main.scss'

function App() {
      const { selectedFilters } = useGlobalContext()
  return <main>
      <div className="top-background"></div>
      <section className='jobs-section'>
        {
          selectedFilters.length > 0 && <Header /> 
        }
        
        <JobsListingComponent />
      </section>
  </main>

}

export default App
