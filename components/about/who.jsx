import { head } from "motion/react-client";
import { ColourfulText } from "../ui/who";

const ColourfulTextDemo = () => {
  return (<>
    <div className="flex items-center justify-center p-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Who is{' '}
        <ColourfulText
          text="NITYA UMRAO"
          className="inline"
        />{' '}
        <br />
      </h1><br />
    </div>
    </>

  );
};
export default ColourfulTextDemo;