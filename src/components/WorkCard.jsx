import React, { useState, useEffect } from 'react';
import { setGlobalState, useGlobalState } from '../store'
import axios from 'axios';


const WorkCard = () => {
  const [workS] = useGlobalState('works')
  const [end, setEnd] = useState(4)
  const [count] = useState(4)
  const [works, setWorks] = useState([]);
  const [work] = useGlobalState('work')


  useEffect(() => {
    axios.get('http://localhost:5000/work/works')
      .then(response => {
        setWorks(response.data);
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section id='Work'>
    <div  className="bg-[#151c25] gradient-bg-artworks">
    <div className="w-4/5 py-10 mx-auto">
    <h4 className="text-white text-3xl font-bold uppercase text-gradient">
          {works.length > 0 ? 'Works opportunity' : 'No Artworks Yet'}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
        {works.map((work, i) => (
            <Card key={i} work={work} />
          ))}
                  </div>

      </div>
    </div>
        </section>

  );
};
const Card = ({ work }) => {
  const setWorks = () => {
    setGlobalState('work', work)
    setGlobalState('ShowWork', 'scale-100')
  }

  return (
    
    <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
          <img
       
       src={`http://localhost:5000/images/${work.image}`}
        
        alt={work.title}
        className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
      />
      <h4 className="text-white font-semibold">{work.positionname}</h4>
      <p className="text-gray-400 text-xs my-1">{work.details}</p>
      <div className="flex justify-between items-center mt-3 text-white">
        <div className="flex flex-col">
          <small className="text-xs">number of position </small>
          <p className="text-sm font-semibold">{work.numberOfposition} Condidate</p>
         
        </div>

        <button
          className="shadow-lg shadow-black text-white text-sm bg-[#e32970]
            hover:bg-[#bd255f] cursor-pointer rounded-full px-1.5 py-1"
          onClick={setWorks}
        >
          View Details
        </button>
      </div>
    </div>
  )
}


export default WorkCard;