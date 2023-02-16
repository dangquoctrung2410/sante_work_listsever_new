import { useAppDispatch } from '../../app/hooks'
import { setTheme } from './themeSlice'

type Props = {}

const Theme = (props: Props) => {
  const dispatch = useAppDispatch()
  return (
    <select
      onChange={(e: any) => {
        dispatch(setTheme({ theme: e.target.value }))
      }}
    >
      <option value="">Default Theme</option>
      <option value="red">Red Theme</option>
      <option value="purple">Purple Theme</option>
      <option value="pink">Pink theme</option>
    </select>
  )
}

export default Theme
