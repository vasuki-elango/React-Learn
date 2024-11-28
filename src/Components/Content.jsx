import React from 'react'

const Content = ({text,count}) => {
    console.log(`Rendering ${text}`);
  return (
    <div>
        {text}-{count}
    </div>
  )
}

export default React.memo(Content)