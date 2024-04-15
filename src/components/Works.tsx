import { motion } from 'framer-motion';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  alt,
  source_code_link,
  live_link,
  live_link_visible,
  git_link_visible,
}: any) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.1 + 0.3, 0.7)}>
      <div className='w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]'>
        <div className='relative h-[230px] w-full'>
          <img
            src={image}
            alt={alt}
            className='h-full w-full rounded-2xl object-cover'
          />

          {
            <div className='card-img_hover absolute inset-0 m-3 flex justify-end'>
              { live_link_visible &&
                <div
                  onClick={() => window.open(live_link, '_blank')}
                  className='black-gradient mr-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full'>
                  <img
                    src='https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/webLink.png'
                    alt='live link'
                    className='h-full w-full rounded-full  object-contain'
                  />
                </div>
              }
              {git_link_visible &&
              <div
                onClick={() => window.open(source_code_link, '_blank')}
                className='black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full'>
                <img
                  src='https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/github.png'
                  alt='source code'
                  className='h-3/4 w-3/4 object-contain'
                />
              </div>
              }
            </div>
          }
        </div>

        <div className='mt-5'>
          <h3 className='text-[24px] font-bold text-white'>{name}</h3>
          <p className='mt-2 text-[14px] text-secondary'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag: any, i: any) => (
            <p key={i} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='flex w-full'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3  text-[17px] leading-[30px] text-secondary'>
          The following projects serve as demonstrations of the skills and
          experience I have acquired throughout my career.
        </motion.p>
      </div>

      <div className='flex-around-center mt-20 flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'work');
