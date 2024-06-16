import React, { useState } from 'react'
import { fetchThemeListasync } from '~contents/service'
import { createCss, resetTheme } from '~contents/utils'

const ThemePanel: React.FC = () => {
  const [themeList, setThemeList] = useState([])

  fetchThemeListasync({ current: 1, searchValue: '' })
    .then(res => setThemeList(res.list))
  resetTheme()
  return (
    <div>11</div>
  )
}

export default ThemePanel
