import { apple, google } from "../assets";
import { availableBank } from "../constants";
import styles, { layout } from "../style";
import Card from "./Card";
import PaymentImage from "./PaymentImage";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <div className="relative">
        <Card className="md:absolute -top-40   -right-60 p-7 z-[10]">
          <div className="flex items-center">
            <div className="h-12 w-12 p-1 bg-white rounded-full">
              <img src="/gcash.png" alt="bill" className=" rounded-full" />
            </div>
            <p className="font-poppins font-medium text-xl mb-2 text-white ml-5 flex flex-col">
              GCASH
              <span className="text-xs text-white/70 whitespace-nowrap">
                Payment Method
              </span>
            </p>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="text-sm font-medium text-white">Fees</p>
              <p className="text-sm font-medium text-white">0</p>
            </div>
            <button className="text-yellow font-medium text-sm border border-yellow rounded-xl py-2 px-4">
              Change
            </button>
          </div>
          <button className="text-white font-medium py-2 px-5 rounded-xl bg-gradient-to-r from-yellow/70 to-yellow w-full mt-5">
            Make Payment
          </button>
        </Card>
        <Card className="md:absolute -top-0   -left-72 p-7 w-[350px] z-[1] mt-3 md:mt:0">
          <p className="font-poppins font-medium text-xl mb-2 text-white ml-5 flex flex-col">
            Example Banks
          </p>
          <div className="flex flex-col items-start mt-5">
            {availableBank?.map((item, index) => (
              <div key={index} className="flex justify-between">
                <div className="flex items-center gap-3">
                  <img src={item?.icon} className="w-12" alt="" />
                  <p className="text-xl text-white font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily Trade & Select Lower Fee Rates</h2>
      <ul className="flex flex-col gap-2 mt-5">
        <li className="list-disc text-gray-400 text-sm font-medium tracking-wider">
          Flexible Fee Options – Choose traders with the lowest fees that match
          your budget.
        </li>
        <li className="list-disc text-gray-400 text-sm font-medium tracking-wider">
          Direct Peer-to-Peer Transactions – No hidden costs, just transparent
          and fair pricing.
        </li>
        <li className="list-disc text-gray-400 text-sm font-medium tracking-wider">
          Maximize Your Profits – Keep more of your earnings with lower
          transaction fees.
        </li>
      </ul>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="google_play"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div> */}
    </div>
  </section>
);

export default Billing;
