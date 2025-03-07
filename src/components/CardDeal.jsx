import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a Better Deal in Just a Few Easy Steps
      </h2>
      <ul className="flex flex-col gap-2 mt-5">
        <li className="list-disc text-gray-400 text-sm font-medium tracking-wider">
          Browse Offers – Compare multiple sellers and buyers with competitive
          rates.
        </li>
        <li className="list-disc text-gray-400 text-sm font-medium tracking-wider">
          Choose the Best Deal – Select the offer that suits your price and
          payment preference.
        </li>
        <li className="list-disc text-gray-400 text-sm font-medium tracking-wider">
          Trade Securely – Complete the transaction with our trusted merchants.
        </li>
      </ul>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src="/asset11.png" alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
