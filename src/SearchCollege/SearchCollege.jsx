import { useEffect, useState } from "react";

import { Link } from "react-router-dom";


const SearchCollege = () => {
    const [Colleges, setColleges] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch('https://college-booking-facilities-server-mahejabinmou.vercel.app/classes')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    console.log(Colleges);

    const handleSearch = () => {
        fetch(`https://college-booking-facilities-server-mahejabinmou.vercel.app/collegeSearchByName/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setColleges(data);
            });
    };
    return (
        <div>
            <h2 className="text-2xl text-center text-success p-4">Search your  College</h2>
            <div className="form-control mx-auto grid md:grid-cols-2 pb-8 gap-4  w-1/2">

                <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="search by name"
                    className="input input-bordered" />
                <button
                    onClick={handleSearch}
                    className=" btn btn-success ">Search</button>

            </div>
            <div>
            <div className=" grid md:grid-cols-3 gap-4">
                {
                    Colleges.map((item) => (
                        <div key={item._id} className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className='text-center'>
                                <img src={item.image} className="h-52 w-52 mx-auto p-2" alt="" />
                                <p>College Name: {item.name}</p>
                                <p>Admission dates:{item.admission_dates}</p>
                                <p>rating: 5</p>
                                <p>research history:{item.research_history}</p>
                                <p>sports:{item.sports.name}</p>

                                <Link to={`/carddetails/${item?._id}`}>
                                    <button className="inline-flex btn-success items-center rounded">Details</button>
                                </Link>
                            </div>


                        </div>


                    ))}
            </div>
        </div>
        </div>
    );
};

export default SearchCollege;