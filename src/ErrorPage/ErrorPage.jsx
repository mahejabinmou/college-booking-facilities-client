
import {Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const { error} = useRouteError();
    
    return (
        <div className='text-center m-10'>
        <div className='text-center grid md:grid-cols-1'>
        {/* <h4 className='text-3xl  text-rose-500'>404</h4> */}
        
        <img className='w-[400px] mx-auto my-4' src="https://i.ibb.co/9qQC3WJ/404.jpg"  alt="" />
        <p className='text-2xl p-4'>
            <i>{error?.statusText || error?.message}</i>
        </p>
        
        </div>
        <Link to="/"><button className='bg-success text-dark rounded-lg'>Back to home</button></Link>
        
    </div>
    );
};

export default ErrorPage;