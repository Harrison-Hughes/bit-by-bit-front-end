import React from 'react';
import MiniFrame from '../components/MiniFrame';
import AddFrame from '../components/AddFrame';

const MiniFrames = props => {

  const renderMiniFrames = () => {
    return props.frames.map((frame, i) => {
      return <MiniFrame 
              selectedFrameNum={props.frameNum} 
              changeFrame={i => props.changeFrame(i)} 
              key={`frame${i}`} 
              frameNumber={i} 
              frame={frame}/>
    })
  }

  return(
    <div id='miniFrames'>
      {renderMiniFrames()}
      <AddFrame key={`add frame`} frame={props.frames[0]}/>
    </div>
  )
}

export default MiniFrames