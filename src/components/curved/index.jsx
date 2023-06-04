import { useEffect, useState } from 'react';
import { Fade } from "react-awesome-reveal";
import ReactCurvedText from 'react-curved-text';

export const Curved = () => {
  const [screenW, setScreenW] = useState(window.innerWidth);

  const setDimension = () => {
    setScreenW(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return (() => {
      window.removeEventListener('resize', setDimension);
    })
  }, []);

  const getCurvedSize = () => {
    if (screenW >= 1920) {
      return {
        width: '240',
        height: '240',
        cx: '120',
        cy: '120',
        rx: '90',
        ry: '90',
        fontSize: '27'
      };
    }
    return {
      width: '180',
      height: '180',
      cx: '90',
      cy: '90',
      rx: '70',
      ry: '70',
      fontSize: '23'
    }
  };

  return (
    <Fade delay={800} className='curved'>
      <ReactCurvedText width={getCurvedSize().width}
        height={getCurvedSize().height}
        cx={getCurvedSize().cx}
        cy={getCurvedSize().cy}
        rx={getCurvedSize().rx}
        ry={getCurvedSize().ry}
        startOffset='0'
        reversed={true}
        text='consumption monetary benefit reduced fuel'
        textProps={{ "style": { "fontSize": `${getCurvedSize().fontSize}` } }}
        textPathProps={{"fill": "#ffffff"}}
        tspanProps={{"dy": "-2"}}
        ellipseProps={null}
        svgProps={{ className: "curved__text" }}
      />
      <p className='curved__label'>SAVE $5000</p>
    </Fade>
  );
};