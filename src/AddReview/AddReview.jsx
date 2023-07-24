import Swal from "sweetalert2";


const AddReview = () => {

    const handleAddClass = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const name = form.name.value;
        const rating = form.rating.value;
        
        
        

        const newReview = { review,name,rating }
         console.log(newReview);

        //   send data to server

         fetch('https://college-booking-facilities-server-mahejabinmou.vercel.app/review',{
            method:'POST',
             headers:{
                 'content-type':'application/json'
             },
             body: JSON.stringify(newReview)
         })
     .then(res=>res.json())
         .then(data=>{
            console.log(data);
           if(data.insertedId){
               Swal.fire({
                     title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
         })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-extrabold text-center p-8 text-success">College Review</h1>
            <form onSubmit={handleAddClass}>
                {/* name and quantity row */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">College Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Add  Name" className="input input-bordered w-full" />
                        </label>

                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Add Review</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="review" placeholder="Add Review" className="input input-bordered w-full" />
                        </label>

                    </div>

                    {/* <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">College Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="subject" placeholder="College Rating" className="input input-bordered w-full" />
                        </label>

                    </div> */}
                </div>

                <div className="form-control md:w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" placeholder="Add  Rating" className="input input-bordered w-full" />
                        </label>

                    </div>

                <input type="submit" value="Add Review" className="btn btn-block btn-success mt-8" />
                
            </form>
        </div>
    );
};

export default AddReview;