import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CollegeSection = () => {
    const [selectClasses, setSelectClass] = useState([]);

    useEffect(() => {
        fetch('https://college-booking-facilities-server-mahejabinmou.vercel.app/selectClasses')
            .then(res => res.json())
            .then(data => setSelectClass(data))
    }, [])
    console.log(selectClasses);
    return (
        <div>
            <h1 className='font-bold text-4xl text-center my-2'>Colleges</h1>
            <div className=" grid md:grid-cols-3 gap-4">
                {
                    selectClasses.map((item) => (
                        <div key={item._id} className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className='text-center'>
                                <img src={item.image} className="h-52 w-52 mx-auto p-2" alt="" />
                                <p>College Name: {item.name}</p>
                                <p>Admission dates:{item.admission_dates}</p>
                                
                                <p>research history:{item.research_history}</p>
                                <p>Events: {item.event.name}</p>

                                <p>sports:{item.sports.name}</p>

                                <Link to={`/carddetails/${item?._id}`}>
                                    <button className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</button>
                                </Link>
                            </div>


                        </div>


                    ))}
            </div>
        </div>
    );
};

export default CollegeSection;