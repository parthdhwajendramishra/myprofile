import { motion } from 'framer-motion';
import { styles } from '../style';
import { services, technologies, tools } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { useMediaQuery } from '@mui/material';

const ServiceCard = ({ index, title, icon }: any) => (
  <div className='w-full xs:w-[250px]'>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.1 + 0.2, 0.6)}
      className='green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card'>
      <div className='flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5'>
        <img src={icon} alt={title} className='h-16 w-16 object-contain' />

        <h3 className='text-center text-[20px] font-bold text-white'>
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  const isSmallScreen = useMediaQuery('(max-width:587px)');
  const isLargeScreen = useMediaQuery('(min-width:1248px)');
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className=' mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary'>
        As a proficient software developer, I specialize in JavaScript and
        TypeScript, boasting expertise in React.js, React Native, Express.js,
        and MySQL. With a keen ability to quickly grasp new concepts, I thrive
        on collaborating closely with clients to engineer efficient, scalable,
        and intuitive solutions. My focus lies in translating ideas into
        tangible, problem-solving applications that resonate with end-users and
        address real-world challenges.
      </motion.p>
      <div
        className={`flex-center-center ${
          isSmallScreen ? 'linearToL' : isLargeScreen ? 'linearToB' : 'circle'
        } mt-20 flex-wrap gap-10`}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className='flex-center-center mt-20 flex-col'>
        <h3 className={`${styles.sectionHeadText} marker`}>Skills</h3>
        <div className='mt-2 flex flex-wrap  justify-center gap-10 '>
          {technologies.map((item, i) => (
            <div key={i} className='flex-around-center w-[80px] flex-col'>
              <img src={item.icon} width='100%' alt={item.name} />
              <p className='text-center'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex-center-center mt-20 flex-col'>
        <h3 className={styles.sectionSubText}>Tools and Software</h3>
        <div className='mt-2 flex flex-wrap  justify-center gap-10 '>
          {tools.map((item, i) => (
            <div key={i} className='flex-around-center w-[80px] flex-col'>
              <img src={item.icon} width='100%' alt={item.name} />
              <p className='text-center'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
