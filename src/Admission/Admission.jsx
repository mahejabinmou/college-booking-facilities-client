import { useEffect, useState } from "react";
import { Link} from "react-router-dom";


const Admission = () => {
    const [collegeClasses, setCollegeClass] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/classes')
            .then(res => res.json())
            .then(data => setCollegeClass(data))
    }, [])
    console.log(collegeClasses);
    return (
        <div>
            
            <div className="p-4">
                {
                    collegeClasses.map((item) => (
                        <div key={item._id} className="text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            
                                 <Link to={`/admissionform/${item?._id}`}>
                                 <p>College Name: {item.name}</p>  </Link>
                                 
                            


                        </div>


                    ))}
            </div>
        </div>

    );
};

export default Admission;