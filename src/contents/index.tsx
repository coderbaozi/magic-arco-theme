import React from 'react'
import Draggable from 'react-draggable'
import styleText from 'data-text:./index.css'
import { Shirt } from 'lucide-react'
import { Modal } from '@arco-design/web-react'

import type { ConfirmProps } from '@arco-design/web-react/es/Modal/confirm'
import ThemePanel from './components/ThemePanel'
import { resetTheme } from './utils'
import { useHover } from '~hooks'

export function getStyle() {
  const style = document.createElement('style')
  style.textContent = styleText
  return style
}

const ThemeWidget: React.FC = () => {
  const [ref, hover] = useHover()

  const [modal, contextHolder] = Modal.useModal()
  const modalContent: ConfirmProps = {
    title: '安装主题',
    content: <ThemePanel />,
  }

  const handleClick = async () => {
    const confirmed = await modal.confirm(modalContent)
    if (confirmed) {
      resetTheme()
    }
  }

  return (
    <Draggable>
      <button
        type="button"
        ref={ref}
        onClick={handleClick}
        className="magic-theme-widget"
      >
        <Shirt className="icon-size-default" />
        {hover && '安装主题'}
        {contextHolder}
      </button>
    </Draggable>
  )
}

export default ThemeWidget
