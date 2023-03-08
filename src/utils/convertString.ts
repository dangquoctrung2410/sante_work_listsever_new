import acronym from '@stdlib/string-acronym';

const kebabCase = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
};

const acronymString = (str: any) => {
  return acronym(str);
};

export { kebabCase, acronymString };
