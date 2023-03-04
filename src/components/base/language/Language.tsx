import { Select } from 'antd';
import i18n from '../../../i18n';
import languagekey from '../../../mocks/ISO-639-1-language.json';
import { setLanguge } from '../../../reducers/slice/themeLanguageSlice';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../../redux/store';
type Props = {};

const Language = (_props: Props) => {
  const dispatch = useAppDispatch();
  const language = useAppSelector(
    (state: RootState) => state.themeLanguage.language,
  );
  const resources = i18n.options.resources
    ? Object.keys(i18n.options.resources)
    : [];
  return (
    <Select
      value={language}
      onChange={(value: any) => {
        dispatch(setLanguge(value));
      }}
      options={resources.map((lng) => {
        const languageNameMatch = languagekey.find(
          (lang) => lang.code === lng,
        )?.name;
        return { value: lng, label: languageNameMatch };
      })}
    />
  );
};

export default Language;
