export function createCss(url: string) {
  const link = document.createElement('link')
  link.id = 'arco-custom-theme'
  link.href = url
  link.type = 'text/css'
  link.rel = 'stylesheet'
  document.body.appendChild(link)
}

export function resetTheme() {
  const customLink = document.getElementById('arco-custom-theme')
  if (customLink) {
    document.body.removeChild(customLink)
  }
  console.log('这离执行了吗', customLink)
  // localStorage.setItem('arco-components-theme', '{}')
}

export function getCssLink(name: string, prefix: string) {
  return `${prefix}${name}/css/arco.css`
}
