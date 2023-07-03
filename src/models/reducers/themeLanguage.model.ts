export interface IThemeLanguage {
  theme: { dark: boolean; color: string; name: string };
  language: string;
}
export const defaultThemeLanguage: IThemeLanguage = {
  theme: { dark: true, color: '#1677ff', name: 'default' },
  language: 'vi',
};
