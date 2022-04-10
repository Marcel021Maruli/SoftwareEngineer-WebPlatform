import { capitalizeWord } from "modules/utilities/capitalize-word.util";
import "./type-container.css";

const TypeContainer = ({ content }) => {
  return (
    <div
      className={`TypeContainer col-6 ${content}`}
      data-testid="TypeContainer-testid"
    >
      <p
        data-testid="TypeContainer-content-testid"
        className="TypeContainer-content"
      >
        {capitalizeWord(content)}
      </p>
    </div>
  );
};

export default TypeContainer;
