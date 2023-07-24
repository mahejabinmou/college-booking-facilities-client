import { useEffect, useState } from "react";
import { BsStar } from 'react-icons/bs';


const ReviewPage = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://college-booking-facilities-server-mahejabinmou.vercel.app/allreview`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (

        <div>
            <h3 className='font-bold text-center p-2'>Colleges Reviews</h3>
            <p className="text-center p-4"><small>The reviews that you can find on Studyportals are personal assessments that studentscan 
                leave regarding their student experience.
                 They are a combination of ratings and text descriptions.</small>  </p>
            <div className=" grid md:grid-cols-3 gap-4">
                {
                    reviews.map((item) => (
                        <div key={item._id} className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="">
                                <h2 className="font-bold"><small>{item.name}</small></h2>
                                <p><small>{item.review}</small></p>
                                <p>{item.rating} <BsStar></BsStar></p>

                            </div>


                        </div>


                    ))}
            </div>
        </div>




        // <div className="overflow-x-auto w-full  mt-8 mb-20">
        //         <table className="table w-full">
        //             {/* head */}
        //             <thead>
        //                 <tr>
        //                     <th className="text-secondary">Name</th>
        //                     <th className="text-secondary">Review</th>
        //                     <th className="text-secondary">Rating</th>

        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {
        //                     reviews.map(item => <ReviewRaw
        //                         key={item._id}
        //                         item={item}
        //                     ></ReviewRaw>)
        //                 }
        //             </tbody>

        //         </table>
        //     </div>
    );
};

export default ReviewPage;