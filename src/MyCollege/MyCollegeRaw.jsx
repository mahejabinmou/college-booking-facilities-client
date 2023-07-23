import { Link } from "react-router-dom";

const MyCollegeRaw = ({form}) => {
    const { address, date, email, img, name,phone,subject,_id} = form;
   
   
    return (
        <tr>
          
          {/* <td>{_id}</td> */}
            <td><img src={img} alt="" /></td>
            <td>{name}</td>
            <td>{subject}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{address}</td>
            <td><Link to={`/carddetails/${_id}`}>
            <button className="btn-success rounded"><small>ViewDetails</small></button> </Link>
           </td>
             <td><button className="btn-success rounded">Review</button></td>
            </tr>
    );
};

export default MyCollegeRaw;