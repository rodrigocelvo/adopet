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
      signin: undefined;
      signup: undefined;

      tab: undefined;
      home: undefined;
      mypets: undefined;
      favorites: undefined;
      pet: PetNavigationProps;
      petsearch: PetSearchNavigationProps;
      profile: undefined;
    }
  }
}
