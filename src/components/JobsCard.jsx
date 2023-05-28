// import {} '../assets/images'

import FilterButton from "./FilterButton"



const JobsCard = ({jobs}) => {

    const { id,company,logo,featured:isFeatured, position, new:isNew, filters, postedAt, contract, location} = jobs
  return (
    <div className={`card ${isFeatured ? 'featured-border' : ''}`}>
        <div className="card-top card-left">
            <img className="logo" src={`${logo}`} alt="Company logo" />
            <div className="card-properties">
                <div className="card-details-1 flex gap-1 mb">
                    <span className="company">{company}</span>
                    {isNew && <span className="new">New</span>}
                    {isFeatured && <span className="featured">Featured</span>}
                </div>
                <h4>{position}</h4> 
                <div className="flex gap-1 card-details-2 mt">
                    <span className="time">{postedAt}</span>
                    .

                    <span>{contract}</span>
                    .

                    <span>{location}</span>
                </div>

            </div>
        </div>
        <div className="hr"></div>
        <div className="card-left card-bottom">
            <div className="flex gap-2 flex-wrap">
                {
                    filters.map((filter, index) => <FilterButton key={index} filter={filter}/>)
                }
            </div>
        </div>
        
    </div>
  )
}

export default JobsCard