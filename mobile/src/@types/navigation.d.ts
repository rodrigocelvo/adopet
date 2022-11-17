export type PetSearchNavigationProps = {
  category?: string;
  search?: string;
};

export type PetNavigationProps = {
  id: string;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      welcome: undefined;
      home: undefined;
      signin: undefined;
      signup: undefined;
      forgotpassword: undefined;
      pet: PetNavigationProps;
      petsearch: PetSearchNavigationProps;
    }
  }
}
