import { useGlobalContext } from "../JobsContext"
import removeIcon from "../assets/images/icon-remove.svg"



const Header = () => {
    const {selectedFilters, removeFilter, clearAllFilters} = useGlobalContext()
  return (
      <div className="filters flex flex-jc-sb">
        <div className="filters-container flex flex-wrap gap-2">

            {selectedFilters.map((filter, index) => {
            return (
                <div className="filter"  key={index}>
                <span>{filter}</span>
                <button onClick={() => removeFilter(filter)}>
                    <img src={removeIcon} alt="A close icon" />
                </button>
                </div>
            )
            })}
        </div>
        <button className="clear" onClick={clearAllFilters}>
            Clear
        </button>
      </div>
  )
}

export default Header