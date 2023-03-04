export interface IAuth {
  isAuthenticated: boolean
  account: {
    authorities: Array<string>
  }
}
export const defaultAuth: IAuth = {
  isAuthenticated: false,
  account: {
    authorities: [],
  },
}
