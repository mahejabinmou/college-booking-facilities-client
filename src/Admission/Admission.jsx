import { useEffect, useState } from "react";
import { Link} from "react-router-dom";


const Admission = () => {
    const [collegeClasses, setCollegeClass] = useState([]);

    useEffect(() => {
        fetch('https://college-booking-facilities-server-mahejabinmou.vercel.app/classes')
            .then(res => res.json())
            .then(data => setCollegeClass(data))
    }, [])
    console.log(collegeClasses);
    return (
       
            
            <>
                {
                    collegeClasses.map((item) => (
                        <div key={item._id} className=" bg-success  p-4 m-2 text-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            
                                 <Link to={`/admissionform/${item?._id}`}>
                                 <p>{item.name}</p>  </Link>
                                 
                            


                        </div>


                    ))}
            </>
        

    );
};

export default Admission;