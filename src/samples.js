import { FaChevronRight } from "react-icons/fa";

const Samples = () => {
  return (
    <div className="samples">
      <div>
        <img src="appImgs/sample-imgs/sample2.png" alt="product example" />
        <h1>SPEAKERS</h1>
        <button>
          SHOP <FaChevronRight />
        </button>
      </div>
      <div>
        <img src="appImgs/sample-imgs/sample1.png" alt="product example" />
        <h1>HEADPHONES</h1>
        <button>
          SHOP <FaChevronRight />
        </button>
      </div>

      <div>
        <img src="appImgs/sample-imgs/sample3.png" alt="product example" />

        <h1>EARPHONES</h1>
        <button>
          SHOP <FaChevronRight />
        </button>
      </div>
    </div>
  );
};
export default Samples;
