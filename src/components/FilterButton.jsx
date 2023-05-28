import { useGlobalContext } from "../JobsContext"


const FilterButton = ({filter}) => {
    const {handleFilters} = useGlobalContext()

  return (
        <button className="filter-button" onClick={handleFilters} value={filter}>
            {filter}
        </button>

  )
}

export default FilterButton