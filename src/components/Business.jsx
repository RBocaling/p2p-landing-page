import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon: Icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-yellow/10`}
    >
      <Icon size={25} className="text-yellow" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="about" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Seamless Crypto Trading, Anytime, Anywhere.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Send and receive crypto with minimal fees—fast, secure, and hassle-free.
        Pay through any bank, wallet address, or blockchain network with ease.
      </p>

      <button className="text-primary font-semibold rounded-xl  py-3 mt-3 px-7  bg-yellow">
        Get Started
      </button>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
