interface FetchThemeParams {
  current: number
  searchValue?: string
}

export function fetchThemeListasync(params: FetchThemeParams) {
  const { current, searchValue } = params
  // return fetch(`https://arco.design/themes/api/open/themes/list?pageSize=6&currentPage=${current}&depLibrary=@arco-design/web-react&keyword=${searchValue}`).then(res => res.json())
}
