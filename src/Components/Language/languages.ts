import { language } from "../../@types/lang";

// Static list of available languages
export const languages: language[] = [
  {
    lang: "English (US)",
    abbreviation: "EN",
    status: 1
  },
  {
    lang: "Nederlands",
    abbreviation: "NL",
    status: 1
  },
  {
    lang: "Español",
    abbreviation: "ES",
    status: 0
  },
  {
    lang: "Deutsch",
    abbreviation: "DE",
    status: 0
  },
  {
    lang: "Française",
    abbreviation: "FR",
    status: 0
  },
  {
    lang: "Polski",
    abbreviation: "PL",
    status: 0
  },
  {
    lang: "русский",
    abbreviation: "RU",
    status: 0
  },
  {
    lang: "عربي",
    abbreviation: "AR",
    status: 0
  },
  {
    lang: "普通话",
    abbreviation: "zh-CN",
    status: 0
  },
  {
    lang: "हिंदी",
    abbreviation: "HI",
    status: 0
  },
];

export const translations = {
  // English translations
  english: {
    navigation: {
      testimonials: "Testimonials",
      about: "About us",
      signup: "Sign Up",
    },
    home: {
      scroll: {
        title: "Let Robin be your wingman!",
        text: "Robin Assistant is a revolutionary new tool that offers a helping hand to people with special needs and their caring companions, making everyday activities more manageable and enjoyable.",
        learn: "Learn more",
        benefits_title: "Benefits",
        benefits_independence: {
          title: "Improved Independence",
          text: ""
        },
        benefits_stress: {
          title: "Reduced Stress",
          text: ""
        },
        benefits_productivity: {
          title: "Increased Productivity",
          text: ""
        },
      },
      testimonials: {
        title: "",
        sub: "",
      },
      about: {
        title: "",
        sub: "",
      },

    },
    signup: {

    },
    login: {

    },
  },



  // Dutch translations
  dutch: {
    navigation: {
      testimonials: "Reviews",
      about: "Over ons",
      signup: "Aanmelden",
    },
    home: {
      scroll: {
        title: "Laat Robin je wingman zijn!",
        text: "Robin Assistant is een revolutionaire nieuwe tool die een helpende hand biedt aan mensen met speciale behoeften en hun zorgzame metgezellen, waardoor dagelijkse activiteiten beter beheersbaar en leuker worden.",
        learn: "Lees meer",
        benefits_title: "Voordelen",
        benefits_independence: {
          title: "Verbeterde",
          text: ""
        },
        benefits_stress: {
          title: "",
          text: ""
        },
        benefits_productivity: {
          title: "",
          text: ""
        },
      },
    },
    signup: {

    },
    login: {

    },
  },
}