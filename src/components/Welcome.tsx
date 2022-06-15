import * as React from 'react';

interface  WelcomeProps {
}

const Welcome: React.FunctionComponent< WelcomeProps> = (props) => {
  return (
    <div>
    <p className="text-5xl font-black text-gray-400 font-catamaran">
      Hello, <br /> <span className="text-black">YELSIÑO</span>
    </p>
  </div>
  )
};

export default Welcome;
