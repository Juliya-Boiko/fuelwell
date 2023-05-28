import ReactCurvedText from 'react-curved-text';

export const Curved = () => {
  return (
    <div className='curved'>
      <ReactCurvedText width='180'
        height='180'
        cx='90'
        cy='90'
        rx='70'
        ry='70'
        startOffset='0'
        reversed={true}
        text='consumption monetary benefit reduced fuel'
        textProps={{ "style": { "fontSize": "23" } }}
        textPathProps={{"fill": "#ffffff"}}
        tspanProps={{"dy": "-2"}}
        ellipseProps={null}
        svgProps={{ className: "curved__text" }}
      />
      <p className='curved__label'>SAVE $5000</p>
    </div>
  );
};