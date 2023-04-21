import React from 'react'
import Block from './middleBlock'

function Blocks ({blockFile})  {
  return (
    <>
    {blockFile.map(block =>{
        return(
            <Block 
                headerName={block.headerName}
                description={block.description}
                imageSrc={block.imageSrc}
                theme={block.theme}
                bottom={block.bottom}

            
            />
        )
    })}
    </>
  )
}

export default Blocks