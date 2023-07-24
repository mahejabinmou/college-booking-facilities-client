import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Colleges = () => {
    const [collegeClasses, setCollegeClass] = useState([]);

    useEffect(() => {
        fetch('https://college-booking-facilities-server-mahejabinmou.vercel.app/classes')
            .then(res => res.json())
            .then(data => setCollegeClass(data))
    }, [])
    console.log(collegeClasses);

    return (



        <div>
            <h1 className='font-bold text-2xl text-center text-success p-8'>All Colleges</h1>
            <div className=" grid md:grid-cols-3 gap-4">
                {
                    collegeClasses.map((item) => (
                        <div key={item._id} className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className='text-center'>
                                <img src={item.image} className="h-52 w-52 mx-auto p-2" alt="" />
                                <p>College Name: {item.name}</p>
                                <p>Admission dates:{item.admission_dates}</p>
                                <p>rating: 5</p>
                                <p>research history:{item.research_history}</p>
                                <p>sports:{item.sports.name}</p>

                                <Link to={`/carddetails/${item?._id}`}>
                                    <button className="inline-flex btn-success  items-center text-center">Details</button>
                                </Link>
                            </div>


                        </div>


                    ))}
            </div>
        </div>

    );
};

export default Colleges;