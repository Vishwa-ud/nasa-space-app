import { styles } from "./styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
     <div
      className={`${styles.paddingX} absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row items-start gap-5`}
    >
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
        <div className='w-1 sm:h-80 h-40 violet-gradient' />
      </div>
       {/*About me */}
      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
         Welcome  To <p className='text-[#915EFF]'>NASA SPACE APP.</p>
        </h1>
      </div>
    </div>
  </section>
  );
};

export default Hero;