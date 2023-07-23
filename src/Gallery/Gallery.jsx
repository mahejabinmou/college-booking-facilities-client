
import Imgix from "react-imgix";
const Gallery = () => {
    return (
        
        <div>
            <h2 className=" text-secondary text-4xl text-center font-bold">Gallery</h2>
        
            <div className="m-8 grid md:grid-cols-5 gap-0  ">
             <Imgix
                src="https://i.ibb.co/j4Ps3ZM/images-1.jpg" 
                
            />
            <Imgix
                src="https://i.ibb.co/WvZKrbv/images2.jpg"
                
            />
            <Imgix
                src="https://i.ibb.co/XyCg4K5/images3.jpg"
                
            />
            <Imgix
                src="https://i.ibb.co/dkCQBd3/download4.jpg"
                
            />
            
            
            <Imgix
                src="https://i.ibb.co/566xM1s/download7.jpg"
                
            />
            <Imgix
                src="https://i.ibb.co/16LZK5p/images10.jpg"
                
            />
            <Imgix
                src="https://i.ibb.co/VpBnFXF/images-1.jpg"
                
            />
            <Imgix
                src="https://i.ibb.co/XyCg4K5/images3.jpg"
                
            />
            
            <Imgix
                src="https://i.ibb.co/g7fKbp8/download5.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
            />
            
            <Imgix
                src="https://i.ibb.co/QX35cYk/images6.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
            />

            
            

        </div>
        </div>
    );
};

export default Gallery;