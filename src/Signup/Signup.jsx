
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Signup = () => {
    const { registerUser,updateUserProfile} = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl,setPhotoUrl] =useState("");
  const [error, setError] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    
    if(password.length<6){
        setError("please add ateast 6 charecter");
        return;
    }
    console.log(name,email,photoUrl,password);
    if ((name, email, password)) {

      registerUser(email, password)
        .then((result) =>   {
            const user=result.user
            console.log(user);
            if(user){
                updateUserProfile({
                    displayName:name,photoURL:photoUrl
                  }).then(result=>{
                    console.log(result);
                  })
            }
         
        
        
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    
  };

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col  lg:flex-row">
            <div className="w-1/2 mr-20 p-4">
                <img src="https://i.ibb.co/vqbhyMr/signup.png" className="rounded-xl" alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold text-secondary">signup</h1>
                   
              <p className="text-danger">
                {error}
                </p>
              <form action="" className="flex-col  items-center">
     <div>
          <input 
          onChange={(e) => setName(e.target.value)} 
          className="name p-3 m-2 border"
          type="text" placeholder="enter your Name" required />
    </div>
    <div>
         <input 
         onChange={(e) => setEmail(e.target.value)} 
         className="email p-3 m-2 border"
         type="email" placeholder="enter your email"/>

   </div>
                <div className="pass-container">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="password p-3 m-2 border"
                    type="text"
                    placeholder="type your password"
                  />
                  <div>
          <input 
          onChange={(e) => setPhotoUrl(e.target.value)} 
          className="photoURL p-3 m-2 border"
          type="text" placeholder="enter your photoURL" required />
    </div>
                  
                </div>
                <button
                  onClick={handleRegistration}
                  className="btn btn-secondary w-75 p-2 mt-3"
                >
                  SignUp
                </button>
                
              </form>

              <p className="p-2">
                  <small className="text-secondary ">
                    
                    <Link to="/login">already have account? login here..</Link>
                  </small>
                </p>
              
              
            
      </div>
    </div>
    </div>
    </div>
    );
};

export default Signup;