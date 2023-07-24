import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const AdmissionForm = () => {
    const college=useLoaderData();
    console.log(college);
    const {_id}=college;

    const handleAddClass = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const subject = form.subject.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const address = form.address.value;
        const date = form.date.value;
        const img = form.img.value;
        
        

        const newAdmission = { name, subject, phone, email,address,date,img,collegeId:_id }
         console.log(newAdmission);

        //   send data to server

         fetch('https://college-booking-facilities-server-mahejabinmou.vercel.app/form',{
            method:'POST',
             headers:{
                 'content-type':'application/json'
             },
             body: JSON.stringify(newAdmission)
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
            <h1 className="text-3xl font-extrabold text-center p-8 text-success">Admission form</h1>
            <form onSubmit={handleAddClass}>
                {/* name and quantity row */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Candidate Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Candidate Name" className="input input-bordered w-full" />
                        </label>

                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="subject" placeholder="Subject" className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>

                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Candidate Phone number</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="phone" placeholder="Candidate Phone number" className="input input-bordered w-full" />
                        </label>

                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Candidate Email</span>
                        </label>
                        <label className="input-group">

                            <input type="email" name="email" placeholder="Candidate Email" className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>

                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">address</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="address" placeholder="address" className="input input-bordered w-full" />
                        </label>

                       



                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">date of birth</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="date" placeholder="date of birth" className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>

                
                <div className="  mb-8 w-full">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="img" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>

                <input type="submit" value="Add form" className="btn btn-block btn-success" />
                
            </form>
        </div>
    );
};

export default AdmissionForm;