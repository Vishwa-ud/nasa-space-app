import { styles } from "./styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className={'flex flex-col justify-center items-center mt-5'}>
          <div className={'w-5 h-5 rounded-full bg-[#915EFF]'} />
          <div className={'w-1 sm:h-80 h-40 violet-gradient'} />
        </div>
        {/* About me */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello,Welcome To <span className='text-[#915EFF]'>NASA SPACE APP.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Explore excellence!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
