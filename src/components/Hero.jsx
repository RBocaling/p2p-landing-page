import styles from "../style";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-[10]`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img
            src="/p2p-logo.png"
            alt="discount"
            className="w-[32px] h-[32px]"
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Fast.</span> Secure.
            <span className="text-yellow"> P2P</span> Crypto Payments.
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[45px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className=" whitespace-nowrap text-white">
              Generation of{" "}
            </span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>
        <h1 className="font-poppins text-gradient font-bold ss:text-[68px] text-[52px]  ss:leading-[100.8px] leading-[75px] w-full">
          P2P Crypto in PH.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          CryptoP2P.ph is the next-generation platform for fast, secure, and
          borderless peer-to-peer crypto transactions in the Philippines.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative md:ml-12`}
      >
        <img
          src="/mobileOrder.png"
          alt="billing"
          className="w-[40%] relative z-[2] translate-x-20 -rotate-12"
        />
        <img
          src="/mobileBuy.png"
          alt="billing"
          className="w-[45%] relative z-[5] "
        />
        <img
          src="/mobileSell.png"
          alt="billing"
          className="w-[40%] relative z-[2] -translate-x-20 rotate-12"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 yellow__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
