import { createContext, useContext, useEffect, useState } from "react";

import data from './data.json'

const GlobalContext = createContext()


const AppProvider = ({children}) => {
    const [jobsData, setJobsData] = useState(data)
    const [selectedFilters, setSelectedFilters] = useState([])


        jobsData.map((job) => {
            job.filters = [job.role, job.level]
            job.filters = job.filters.concat(job.languages, job.tools)
        })
    
        useEffect(() => {
            if(selectedFilters.length > 0){
                filteredData()
            }else{
                setJobsData(data)
            }

        },[selectedFilters])
        
        const filteredData = () => {
            const newData = data.filter((job) => 
                selectedFilters.every((filter) =>
                [job.role, ...job.languages,...job.tools, job.level].includes(filter)
                )
            )

   
       
            setJobsData(newData)
        }

        const handleFilters = (e) => {
            if(selectedFilters.includes(e.target.value)){
                return null
            }else {
                setSelectedFilters([...selectedFilters, e.target.value])
            }
        }

        const removeFilter = (value) => {
            const newSelectedFilter = selectedFilters.filter(filter => filter !== value) 
            setSelectedFilters(newSelectedFilter)
        }

        const clearAllFilters = () => {
            setSelectedFilters([])
        }

    return <GlobalContext.Provider value={{
        jobsData,
        handleFilters,
        selectedFilters,
        removeFilter,
        clearAllFilters
    }}
    >
        {children}
    </GlobalContext.Provider>
}

export default AppProvider
export const useGlobalContext = () => useContext(GlobalContext)
