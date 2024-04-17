import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red inline-block mt-3"> Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring the premium comfort and style, our meticulously crafted
          footwear is designed to last. We use only the finest materials
          available to deliver the best quality.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to quality shows through every step of production. We
          carefully select premium materials, apply rigorous testing, and ensure
          that our products meet the highest standards of quality.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-container"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
