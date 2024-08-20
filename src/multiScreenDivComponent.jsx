import React from 'react'
import CSSMaker from './CSSMaker';

function MultiScreenDivComponent({content,divDetails,Offset,MainDivWidth,MainDivHieght}) {
 
    let styleOfDiv = new CSSMaker(divDetails).convertToVirtual();
             
              
    return (
        <div style={styleOfDiv} >

        {content.content_type ==='image' ?

        <img
          src={content?.url}
          alt=''
          style={{
            width:MainDivWidth,
            height:MainDivHieght,
            objectFit:'',
            objectPosition : Offset,

          }}
        /> 
          :
        <video   
        autoPlay
        loop 
        muted 
        style={{width:MainDivWidth,height:MainDivHieght,objectFit:'',objectPosition:Offset}}>
            <source  src={content?.url} type="video/mp4"  />
        </video>

    }
      
      </div>  
    )
}

export default MultiScreenDivComponent