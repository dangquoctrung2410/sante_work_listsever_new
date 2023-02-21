import { Select } from 'antd';
import { setTheme } from '../../../reducers/slice/themeLanguageSlice';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../../redux/store';

type Props = {};

const Theme = (_props: Props) => {
  const theme = useAppSelector((state: RootState) => state.themeLanguage.theme);
  const dispatch = useAppDispatch();
  return (
    <Select
      value={theme}
      onChange={(value: any) => {
        dispatch(setTheme(value));
      }}
      options={[
        { value: 'default', label: 'Default Theme' },
        { value: 'light', label: 'Light Theme' },
        { value: 'red', label: 'Red Theme' },
        { value: 'purple', label: 'Purple Theme' },
        { value: 'pink', label: 'Pink theme' },
      ]}
    />
  );
};

export default Theme;
