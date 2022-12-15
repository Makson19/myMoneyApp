import React from 'react';

function TabsContent(props) {
  return (
    <div className="tab-content">
        {props.children}
    </div>
  )
}

export default TabsContent;