
import Imgix from "react-imgix";
const Gallery = () => {
    return (
        
        <div>
            <h2 className=" text-success text-2xl pt-8 text-center font-bold">Graduates Image Gallery</h2>
        
            <div className="m-8 grid md:grid-cols-6 gap-4  ">
             <Imgix
                src="https://i.ibb.co/j4Ps3ZM/images-1.jpg" 
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
                
            />
            <Imgix
                src="https://i.ibb.co/WvZKrbv/images2.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
                
            />
            <Imgix
                src="https://i.ibb.co/XyCg4K5/images3.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
                
            />
            <Imgix
                src="https://i.ibb.co/dkCQBd3/download4.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
                
            />
            
            
            <Imgix
                src="https://i.ibb.co/566xM1s/download7.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
                
            />
            <Imgix
                src="https://i.ibb.co/16LZK5p/images10.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
                
            />
            <Imgix
                src="https://i.ibb.co/VpBnFXF/images-1.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
                
            />
            <Imgix
                src="https://i.ibb.co/XyCg4K5/images3.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
                
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