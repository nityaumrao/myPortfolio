'use client';
import { div } from 'motion/react-client';
import { SplittingText } from '../ui/index';
import TextPressure from "../ui/indexM";

export const About = () => {
  return (<div>
    {/* <p className='font-2xl font-semibold flex flex-col gap-2 pl-8'>hey it's me </p> */}
    <div className="py-4 sm:p-8">
      <div className="flex flex-col gap-2 justify-center text-center">
        <TextPressure
          text="Nitya Umrao"
          flex={true}
          alpha={false}
          stroke={false}
          width={false}
          weight={true}
          italic={false}
          textColor="currentColor"
          minFontSize={56}
          className="text-foreground tracking-tight"
        />
      </div>
    </div>
    <div className="text-base pl-8 text-muted-foreground">
      I'm passionate about exploring how technology can make our digital world safer while continuously
  
      learning about AI, web technologies, and defensive security.
    </div>
    {/* <div className="text-base pl-8 text-muted-foreground">
      <SplittingText
        text="I'm passionate about exploring how technology can make our digital world safer while continuously"
        type="words"
      />
      <SplittingText
        text=" learning about AI, web technologies, and defensive security."
        type="words"
      />
    </div> */}
  </div>
  );
};
export default About;