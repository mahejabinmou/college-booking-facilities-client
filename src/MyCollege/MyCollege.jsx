import { useEffect, useState } from "react";
import MyCollegeRaw from "./MyCollegeRaw";


const MyCollege = () => {
    const [forms, setForms] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/allform`)
            .then(res => res.json())
            .then(data => setForms(data))
    }, [])
    console.log(forms);
    return (
        <div className="overflow-x-auto w-full  mt-8 mb-20">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                        {/* <th className="text-secondary">Id </th> */}
                            <th className="text-secondary">Image </th>
                            <th className="text-secondary">Name</th>
                            <th className="text-secondary">Subject</th>
                            <th className="text-secondary">Phone</th>
                            <th className="text-secondary">Email</th>
                            <th className="text-secondary">Date</th>
                            <th className="text-secondary">Address</th>
                            <th className="text-secondary">Details</th>
                            <th className="text-secondary">Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            forms.map(form => <MyCollegeRaw
                                MyCollegeRaw
                                key={form._id}
                                form={form}
                            ></MyCollegeRaw>)
                        }
                    </tbody>

                </table>
            </div>
    );
};

export default MyCollege;