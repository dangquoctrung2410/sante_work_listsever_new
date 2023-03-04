import { Switch } from 'antd';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../../redux/store';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { setThemeDarkMode } from '../../../reducers/slice/themeLanguageSlice';
type Props = {};

const ThemeMode = (_props: Props) => {
  const isThemeDark = useAppSelector(
    (state: RootState) => state.themeLanguage.theme.dark,
  );
  const dispatch = useAppDispatch();

  return (
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      checked={isThemeDark}
      onChange={() => {
        dispatch(setThemeDarkMode());
      }}
    />
  );
};

export default ThemeMode;
