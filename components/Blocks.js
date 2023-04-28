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
                themeColor={block.themeColor}
                paddingLeft={block.paddingLeft}
                headerColor={block.headerColor}
                descriptionColor={block.descriptionColor}
                infoLink={block.infoLink}
                condition={block.condition}
                
            />
            
          
        )
    })}
    </>
  )
}

export default Blocks