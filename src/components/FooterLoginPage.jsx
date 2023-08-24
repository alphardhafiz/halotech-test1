import illustration from "../assets/Ilustration.png";
import line1 from "../assets/Group1.png";
import line2 from "../assets/Group2.png";
const FooterLoginPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#F2FCFF] h-2/4 absolute bottom-0 w-full">
      <img
        src={illustration}
        alt="illustration"
        className="pl-7 bottom-0 absolute z-10"
      />
      <img src={line1} alt="line1" className="bottom-0 absolute right-0" />
      <img src={line2} alt="line2" className="bottom-0 absolute left-0" />
    </div>
  );
};

export default FooterLoginPage;
