
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";



const Navbar = () => {
    const { user,logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div className="navbar bg-green-200 h-28 text-secondary mb-4">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/colleges">Colleges</Link></li>
                        <li><Link to="/admission">Admission</Link></li>
                        <li><Link to="/mycollege">My College</Link> </li>
                        <li><Link to="/signup">Signup</Link></li>
                    </ul>
                </div>
                
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <p className="text-secondary normal-case text-xl">CollegeZone</p>
                </Link>
            </div>

            <div className="navbar-center hidden text-secondary lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li tabIndex={0}>
                        <Link to="/colleges">Colleges</Link></li>
                    <li><Link to="/admission">Admission</Link></li>
                    <li><Link to="/mycollege">My College</Link> </li>
                    {/* <li><Link to="/login">Login</Link></li> */}
                    <li><Link to="/signup">Signup</Link></li>
                    

                    {
                user ? <button onClick={handleLogOut}>Logout</button>:
                <Link to="/login">Login</Link>
              }
                    

                </ul>
            </div>
            <div className="navbar-end">
                  {/* for displayName */}
                  
                  {
                     user && <p>{user.displayName}</p>
         
                  }

                {/* for profilepic */}
            {/* {
            user && <img className='w-[50px] h-[50px] rounded-[50%]' src={user.photoURL} alt="" />
            
          } */}
            
            </div>
        </div>
    );
};

export default Navbar;