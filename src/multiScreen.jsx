import React, { useEffect, useState } from 'react'
import './multiScreen.css'
import useWindowSize from './useWindowRezise'
import CSSMaker from './CSSMaker';
import testImage from './images/obi-pixel7propix-oL3-V8xhqlI-unsplash.jpg'
import MultiScreenDivComponent from './multiScreenDivComponent';
function MultiScreen({data}) {

    // const window = useWindowSize();
    const temp=[
      {
          height:'250px',
          width:'378px',
          top:'293',
          left:'435',
          color:'yellow',
          content:{
            url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            content_type:'video'    
                }
      },

      {
          height:'218px',
          width:'378px',
          top:'293',
          left:'0',
          color:'blue',
          content:{
            url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            content_type:'video'          }
      },
      {
          height:'250px',
          width:'314px',
          top:'0',
          left:'435',
          color:'black',
          content:{
            url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            content_type:'video'
          }
      },
      {
        height:'186px',
        width:'379px',
        top:'0',
        left:'0',
        color:'black',
        content:{
          url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          content_type:'video'
        }
    },
  ]

    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screen dimensions on window resize
  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate new dimensions based on screen and backend values
  const calculateNewHeight = () => {
    // Example: Increase height by 10% relative to the screen height
    return Math.round(screenHeight * 0.0 + 543);
  };

  const calculateNewWidth = () => {
    // Example: Increase width by 10% relative to the screen width
    return Math.round(screenWidth * 0.0 + 813);
  };

  // Apply the new dimensions when backend data is available and the screen dimensions are set
  const newHeight =  screenHeight ? calculateNewHeight() : null;
  const newWidth =  screenWidth ? calculateNewWidth() : null;

  //   // Helper function to calculate the aspect ratio of an image
  // const calculateAspectRatio = (width, height) => {
  //   return width / height;
  // };

  // // Helper function to get the scaled image dimensions to fit within a given div
  // const getScaledImageDimensions = (divWidth, divHeight, imageAspectRatio) => {
  //   const divAspectRatio = divWidth / divHeight;

  //   if (imageAspectRatio > divAspectRatio) {
  //     // Image is wider than the div, so we fit by height
  //     const scaledHeight = divHeight;
  //     const scaledWidth = divHeight * imageAspectRatio;
  //     return { width: scaledWidth, height: scaledHeight };
  //   } else {
  //     // Image is taller than the div, so we fit by width
  //     const scaledWidth = divWidth;
  //     const scaledHeight = divWidth / imageAspectRatio;
  //     return { width: scaledWidth, height: scaledHeight };
  //   }
  // };

  // const renderMappedDivs = () => {
  //   return temp.map((divInfo, index) => {
  //     // console.log(divInfo)
  //     const { top, left, width, height } = divInfo;
  //     const croppingStyle = {
  //       backgroundImage: `url("https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=489&q=80")`,
  //       backgroundPosition: `${-left}px ${-top}px`,
  //       // backgroundSize: `${width} ${height}`,
  //       backgroundRepeat:'no-repeat',
  //       backgroundColor:'white',
  //       width: `${width}`,
  //       height: `${height}`,
  //       position: "absolute",
  //       top: `${top}px`,
  //       left: `${left}px`,
  //     };

  //     return <div key={index} style={croppingStyle} />;
  //   });
  // };


  return (
    <div  style={{height:screenHeight,width:screenWidth}}>multiScreen

        <div className='monitor' style={{height:newHeight,width:newWidth,border:'1px solid grey'}}>
            {temp.map((data,id) =>
            
            (


              <MultiScreenDivComponent content={data.content} divDetails={data} 
                                       Offset={`-${data.left}px -${data.top}px`} 
                                       MainDivWidth={newWidth} MainDivHieght={newHeight} key={id} />
            ))}
         
    </div>
    </div>

  

    
  )
}

export default MultiScreen