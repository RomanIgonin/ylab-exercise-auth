export const nameValidator = (name: string) =>
  // eslint-disable-next-line no-useless-escape
  /^[a-zA-Zа-яА-Я]+$/.test(name);
