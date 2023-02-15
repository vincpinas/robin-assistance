export interface language {
  lang: string; // Language name
  abbreviation: string; // Language code
  sub?: string | null; // Sub text in the language list
  status: number; // 0: Inactive, 1: Active
}

export interface LanguageProviderProps {
  children: ReactNode;
};

export interface LanguageProviderInitialState {
  dict: any;
  lang: language;
  setLang: Dispatch<language>;
}