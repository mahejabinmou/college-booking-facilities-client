import { BsStar } from 'react-icons/bs';

const ReviewRaw = ({item}) => {
     const {review,name,rating}=item;
    return (
        <tr>
            <td>{name}</td>
            <td>{review}</td>
            <td>{rating}<BsStar></BsStar></td>
            
            </tr>
    );
};

export default ReviewRaw;