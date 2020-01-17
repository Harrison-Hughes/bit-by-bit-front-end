import React, {useState, useEffect} from 'react';
import Canvas from '../components/Canvas';
import '../css/Animator.css'
import Palette from '../components/Palette';
import Brush from '../components/Brush';

const FrameEditor = props => {
  const[selectedColor, setSelectedColor] = useState("#FFF")
  const[frame, setFrame] = useState(props.selectedFrame)
  const[brushType, setBrushType] = useState("1 square")

  useEffect(() => setFrame(props.selectedFrame),[props.selectedFrame])

  const editSquarePixels = arr => {
    let ycrds = arr.map(coord => coord[1]); let xcrds = arr.map(coord => coord[0]);
    console.log(xcrds, ycrds)
    setFrame(frame.map((row, rowIndex) => {
      if (!ycrds.includes(rowIndex)) return row
      else {return row.map((col, colIndex) => {
        if (!xcrds.includes(colIndex)) return col
        else return selectedColor
      })};
    }));
  }

  // const editAnyPixels = arr => {
  //   let ycrds = arr.map(coord => coord[1]); let xcrds = arr.map(coord => coord[0]);
  //   console.log(xcrds, ycrds)

  //   setFrame(frame.map((row, rowIndex) => {
  //     if (rowIndex !== ycrd) return row
  //     else {return row.map((col, colIndex) => {
  //       if (colIndex !== xcrd) return col
  //       else return selectedColor
  //     })};
  //   }));
  // }

  const editPixel = (xcrd, ycrd) => {
    // console.log([xcrd, ycrd])
    setFrame(frame.map((row, rowIndex) => {
      if (rowIndex !== ycrd) return row
      else {return row.map((col, colIndex) => {
        if (colIndex !== xcrd) return col
        else return selectedColor
      })};
    }));
  }

  return(
    <div className='FrameEditor'>
       <Canvas 
        brushType={brushType} 
        frame={frame} 
        selectedColor={selectedColor} 
        editPixel={(xcrd, ycd) => editPixel(xcrd, ycd)} 
        editSquarePixels={arr => editSquarePixels(arr)} 
        updateFrame={updatedFrame => setFrame(updatedFrame)}/>

       <Palette 
        changeSelectedColor={color => setSelectedColor(color)} 
        selectedColor={selectedColor}/>

       <Brush 
        brushType={brushType} 
        changeBrushType={type => setBrushType(type)}/>
       <button onClick={() => props.updateFrame(frame)}>save frame</button>
    </div>
  )
}

export default FrameEditor