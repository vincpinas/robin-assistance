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
        benefits_text: "Robin has several benefits to make your daily life as comfortable as possible. What are the benefits of Robin Assistant and why should you use it?",
        benefits_independence: {
          title: "Improved Independence",
          text: "Robin reminds users to take medication or keep appointments can help them stay on top of their schedules and reduce their reliance on caregivers or family members."
        },
        benefits_stress: {
          title: "Reduced Stress",
          text: "Robin breaks down tasks into smaller, more manageable steps can help reduce these feelings and make tasks feel more achievable."
        },
        benefits_productivity: {
          title: "Increased Productivity",
          text: "Robin is designed to help people with brain injuries can improve their ability to complete tasks efficiently."
        },
      },
      about: {
        title: "",
        sub: "",
      },
      contact: {
        form_title: "Contact Information",
        form_text_first: "Fill in the contact form and our team will",
        form_text_second: "get back to you as soon as possible!",
        firstname: "Firstname",
        lastname: "Surname",
        email: "Email",
        phone: "Phone number",
        question_first: "What's",
        question_second: "your",
        question_third: "question",
        question_fourth: "about?",
        question_fifth: "",
        message: "Message",
      },

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
        benefits_text: "Robin heeft meerdere voordelen om jou dagelijks leven zo comfortabel mogelijk te maken. Wat zijn de voordelen van Robin Assistant en waarom zou je het moeten gebruiken?",
        benefits_independence: {
          title: "Verterde Onafhankelijkheid",
          text: "Robin herinnert gebruikers eraan medicijnen in te nemen of afspraken na te komen, zodat ze hun schema's bij kunnen houden en minder afhankelijk worden van zorgverleners of familieleden."
        },
        benefits_stress: {
          title: "Minder Stress",
          text: "Robin verdeelt taken in kleinere, beter beheersbare stappen en kan helpen deze gevoelens te verminderen en ervoor te zorgen dat taken haalbaarder aanvoelen."
        },
        benefits_productivity: {
          title: "Verhoogde productiviteit",
          text: "Robin is designed to help people with brain injuries can improve their ability to complete tasks efficiently."
        },
      },
      about: {

      },
      contact: {
        form_title: "Contact Informatie",
        form_text_first: "Vul in het contact formulier en ons team zal",
        form_text_second: "zo snel mogelijk bij u terug komen!",
        firstname: "Voornaam",
        lastname: "Achternaam",
        email: "Email",
        phone: "Telefoon nummer",
        question_about: "Waar gaat je vraag over?",
        question_first: "Waar",
        question_second: "gaat",
        question_third: "je",
        question_fourth: "vraag",
        question_fifth: "over?",
        message: "Bericht",
      },

    },
  },
}