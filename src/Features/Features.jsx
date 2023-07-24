import { motion } from "framer-motion";

const Features = () => {
    return (
        <motion.div
      className="box text-black"
      /**
       * Setting the initial keyframe to "null" will use
       * the current value to allow for interruptable keyframes.
       */
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}>
            <h2 className="text-center p-4 text-success">What can we fiund here<br /> <span className="text-4xl text-success">See our features</span></h2>
            <div className="grid md:grid-cols-3 gap-8 p-4">
            <div>
                <div>
                <h2 className="text-2xl text-success">01. College Name</h2>
                <p>Throughout my life, I have been involved in a plethora of extracurricular activities, including swimming and student council. However, no activity has had a more noticeable and extraordinary impact on my life than my involvement in music.</p>
            </div>
            <div>
                <h2 className="text-2xl text-success">02. Admission Date</h2>
                <p>I have been involved in a plethora of extracurricular activities, including swimming and student council. However, no activity has had a more noticeable and extraordinary impact on my life than my involvement in music.</p>
            </div>
            <div>
                <h2 className="text-2xl text-success">03. Admission Details</h2>
                <p> Including swimming and student council. However, no activity has had a more noticeable and extraordinary impact on my life than my involvement in music.</p>
            </div>
            </div>
           <div className="w-full"> 
            <img className="w-[800px] h-[400px]" src="https://i.ibb.co/ZBZBx6h/city.jpghttps://i.ibb.co/Dpsb2nd/fe.jpg" alt="" /></div>
            <div>
            <div>
                <h2 className="text-2xl text-success">04. Event</h2>
                <p>Throughout my life, I have been involved in a plethora of extracurricular activities, including swimming and student council. However, no activity has had a more noticeable and extraordinary impact on my life than my involvement in music.</p>
            </div>
            <div>
                <h2 className="text-2xl text-success">05. Event Details</h2>
                <p>Throughout my life, I have been involved in a plethora of extracurricular activities, including swimming and student council. However, no activity has had a more noticeable and extraordinary impact on my life than my involvement in music.</p>
            </div>
            <div>
                <h2 className="text-2xl text-success">06. Sports</h2>
                <p>Throughout my life, I have been involved in a plethora of extracurricular activities, including swimming and student council. However, no activity has had a more noticeable and extraordinary impact on my life than my involvement in music.</p>
            </div>
            </div>
            
        </div>
        </motion.div>
    );
};

export default Features;