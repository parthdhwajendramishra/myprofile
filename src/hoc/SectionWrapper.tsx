import { motion } from 'framer-motion';
import { styles } from '../style';
import { staggerContainer } from '../utils/motion';

const StarWrapper = (Component: any, idName: any) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(1,2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 'some' }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
