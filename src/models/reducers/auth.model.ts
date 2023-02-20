export interface IAuth {
  isAuthenticated: boolean
  account: {
    authorities: Array<string>
  }
}
export const defaultAuth: Readonly<IAuth> = {
  isAuthenticated: false,
  account: {
    authorities: [],
  },
}
