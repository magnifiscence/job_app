import React, { useEffect } from 'react'
import Banner from "../Components/Banner"
import Card from '../Components/Card'
import Jobs from './Jobs'
import Sidebar from '../sidebar/Sidebar'
import Newsletter from '../Components/Newsletter'


const Home = () => {
  const [selctedCategory, setselctedCategory] = React.useState(null)
  const [jobs, setJobs] = React.useState([])
  const [isLoading, setisLoading] = React.useState(true);
  const [currentPage, setcurrentPage] = React.useState(1);
  const itemsPerPage = 6;
  
  useEffect(() => {
    setisLoading(true);
    fetch("http://localhost:3000/all-jobs").then(res => res.json()).then(data => {
      setJobs(data)
      setisLoading(false);
    })
  }, [])

  // console.log(jobs)

  const [query, setQuery] = React.useState("")
    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }

    // filter jobs by title
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    // console.log(filteredItems)

    // filter jobs by Radio filtering

    const handleChange = (event) => {
      setselctedCategory(event.target.value)
    }

    // Filtering by button

    const handleClick = (event) => {
      setselctedCategory(event.target.value)
    }


    // calculate the index range
    const calculatePageRange = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return {startIndex, endIndex}
    }

    // Next page function
    const nextPage = () => {
      if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
        setcurrentPage(currentPage + 1)
      }
    }

    // Previous page function
    const prevPage = () => {
      if(currentPage > 1){
        setcurrentPage(currentPage - 1)
      }
    }


    // main functions
    const filteredData = (jobs, selected, query) => {
      let filteredJobs = jobs;
      
      //filtering input items
      if(query){
        filteredJobs = filteredItems;
      
      }

      // category filtering
      if(selected){
        filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate}) => (
          jobLocation.toLowerCase() === selected.toLowerCase() || 
          parseInt(maxPrice) <= parseInt(selected) || 
          postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() || 
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
        ));
        // console.log(filteredJobs)
      }

      // Slice data based on current page
      const {startIndex, endIndex} = calculatePageRange();
      filteredJobs = filteredJobs.slice(startIndex, endIndex)

      return filteredJobs.map((data, i) => <Card key={i} data={data} />);
    }

    const result = filteredData(jobs, selctedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      
      {/* Main Content */}

      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-4 lg:px-10 px-4 py-12'>
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick}/>
        </div>

        <div className='col-span-2 bg-white p-4 rounded'>
          {
            isLoading ? (<p className='font-medium'>Loading....</p>) : result.length > 0 ? <Jobs result={result}/> : <> <h3 className='text-lg font-bold m-2'>{result.length} Jobs</h3>
            <p>No data found</p>
            </>
          }


          {/* Pagination */}
          {
            result.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-8'>

                <button onClick={prevPage} disabled={currentPage === 1} className='hover:underline'>Previous</button>

                <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>

                <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)} className='hover:underline'>Next</button>
              </div>
            ) : ""
          }

        </div>

          {/* Right side */}
        <div className='bg-white p-4 rounded'><Newsletter/></div>
        
      </div>
    </div>
  )
}

export default Home