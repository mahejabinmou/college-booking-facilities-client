import { useEffect, useState } from "react";
import { useLoaderData} from "react-router-dom";



const CardDetails = () => {

    const singleData = useLoaderData();
    const [collegeDetail, setCollegeDetail] = useState([]);

    useEffect(() => {
        fetch(`https://college-booking-facilities-server-mahejabinmou.vercel.app/classes/${singleData?._id}`)
            .then(res => res.json())
            .then(data => setCollegeDetail(data))
    }, [])
    console.log(collegeDetail);

    
    return (

        <div className="card card-compact p-4 w-80 bg-base-100 shadow-xl">
            <div className="card-body">


 <img src={collegeDetail.image} className="h-36 w-36 mx-auto p-2" alt="" />

                <p>College Name: {collegeDetail?.name}</p>
                <p>Admission dates:{collegeDetail?.admission_dates}</p>
                <p>Admission dates:{collegeDetail?.admission_process}</p>
                <p>research history:{collegeDetail.research_history}</p>
                <p>research history:{collegeDetail.research_works}</p>
                <p>sports details:{collegeDetail?.sports?.name}</p>
                <p>sports details:{collegeDetail?.sports?.details}</p>
                <p>ratings:{collegeDetail?.ratings}</p>
                <p>event name :{collegeDetail?.event?.details}</p>
                <p>event detail :{collegeDetail?.event?.details}</p>
            </div>
        </div>

    );
};

export default CardDetails;