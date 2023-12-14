import React from 'react'

import './curcleButton.scss'

type curcleButtonProps = {
  onClick: React.MouseEventHandler
  pointName: number
  active: boolean
}

const CurcleButton: React.FC<curcleButtonProps> = ({ onClick, pointName, active }) => {
  return (
    <div onClick={onClick} className={`curcleButton pagination__bullete ${active ? 'active' : ''}`}>
      <div className="curcleButton__content">
        <div>{pointName}</div>
      </div>
    </div>
  )
}

export default CurcleButton
