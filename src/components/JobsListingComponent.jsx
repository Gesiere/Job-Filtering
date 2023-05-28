import { useGlobalContext } from "../JobsContext"
import JobsCard from "./JobsCard"

const JobsListingComponent = () => {
    const {jobsData, selectedFilters} = useGlobalContext()

  return (
    <div className={`jobs-container ${selectedFilters.length > 0 ? 'add-class' : ''}`}>
        {
            jobsData.map((jobs) => <JobsCard jobs={jobs} key={jobs.id}/>)
        }
    </div>
  )
}

export default JobsListingComponent