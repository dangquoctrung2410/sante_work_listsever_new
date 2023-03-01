import { Select } from 'antd';
import { setThemeColor } from '../../../reducers/slice/themeLanguageSlice';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../../redux/store';
import listTheme from '../../../mocks/Themes.json';

type Props = {};

const Theme = (_props: Props) => {
  const theme = useAppSelector(
    (state: RootState) => state.themeLanguage.theme.color,
  );
  const dispatch = useAppDispatch();
  listTheme.forEach((element: any, idx) => {
    element.key = idx;

    return element;
  });
  return (
    <Select
      style={{ width: 90 }}
      showArrow={false}
      value={theme}
      onChange={(value: any) => {
        dispatch(setThemeColor(value));
      }}
      options={listTheme}
    />
  );
};

export default Theme;
