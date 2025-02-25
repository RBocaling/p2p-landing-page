import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden relative">
    <div className={`${styles.paddingX} ${styles.flexCenter} z-[10]`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} z-[10]`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div
      className={`bg-primary ${styles.paddingX} ${styles.flexCenter} z-[10]`}
    >
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        {/* <Testimonials />
        <Clients />
        <CTA /> */}
        <Footer />
      </div>
    </div>
    <img
      src="/hex.svg"
      className="fixed top-0 left-0 w-full  opacity-[0.01] pointer-events-none"
      alt=""
    />
  </div>
);

export default App;
