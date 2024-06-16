import React, { type CSSProperties, memo, useState } from 'react'

interface ModalProps {
  title: React.ReactNode
  content: React.ReactNode
  footer: React.ReactNode
  style: CSSProperties
  onOk: () => void
  onClose: () => void
  onCancel: () => void
}

const Modal: React.FC<ModalProps> = (props) => {
  const { title, style } = props

  return (
    <div style={style}>
      <div className="modal-title">
        {title}
      </div>
      <div className="modal-content">

      </div>
      <div className="modal-footer">

      </div>
    </div>
  )
}

export default Modal
