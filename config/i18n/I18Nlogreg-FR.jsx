// --------------------------- [I18N stuff] ---------------------------
//         TO BE LOADED FROM BACKEND
//---------------------------------------------------------------------
//
// - Locale
export const accountTypeLocale = {
  locale: "fr-FR",
  lang: "fr",
  format: { style: "currency", currency: "EUR" },
  perMonth: "par mois",
  perUser: "par utilisateur",
  unicodeVersion: "5.2",
  regex: /\b[a-zA-Z]+(?:['-]?[a-zA-Z]+)*\b/
};

//
// - Registration display fields initial values
export const formValuesI18N = {
  mainTitle: "Enregistrement",
  confMsg:
    "Remarque: lors de votre inscription, vous recevrez un courrier électronique avec un lien que vous sélectionnerez pour confirmation.",
  closeButton: "Fermer ... je ne voulais pas de cette page!",
  acctDetails: "Details du compte",
  acctTypes: "Types de compte",
  prefLangChoose: "Votre langue préférée",
  famGrpTypesMsg:
    "La sélection des types de famille ou de groupe signifie que vous serez le responsable du groupe et les membres du groupe. Vous pouvez ajouter ou modifier des membres à tout moment.",
  loginButton: "Se connecter",
  registerButton: "Registre",
  buttonText: "Montrer carte"
};

//
// - Input fields initial values
export const inpValuesI18N = {
  familyname: "Nom de famille...",
  othername: "Autres/prénoms...",
  email: "Email...",
  password: "Mot de passe...",
  password2: "Mot de passe valider...",
  dob: "Date de Naissance...",
  lob: "Lieu de naissance...",
  locn: "Emplace. actuel..."
};

//
// - Account Types (Radio Buttons)
export const accountTypeList = [
  {
    id: "individual",
    desc: "Individuel [1 utilisateur, Page d'accueil sécurisée]",
    price: 3.99,
    perUser: false
  },
  {
    id: "family",
    desc: "Famille [2 à 5 utilisateurs, Page d'accueil sécurisée]",
    price: 7.99,
    perUser: false
  },
  {
    id: "team",
    desc: "Groupe [6 à 22 utilisateurs, Page d'accueil sécurisée]",
    price: 23.99,
    perUser: false
  },
  {
    id: "smallbus",
    desc:
      "Fenêtre Petite entreprise [Page d'accueil globale, pas de graphique]",
    price: 29.99,
    perUser: false
  },
  {
    id: "syndicate",
    desc:
      "Accès syndiqué par utilisateur [Flux de données GraphQL / JSON, min 20 utilisateurs]",
    price: 1.99,
    perUser: true
  },
  {
    id: "corporate",
    desc:
      "Fenêtre d'entreprise [Page d'accueil globale et marketing, pas de graphiques]",
    price: 99.99,
    perUser: false
  }
];

//
// - Error messages
export const errorMsgs = {
  userNameIsReqd: "Le nom de famille est obligatoire",
  userNameInvalid: "Pas un nom de chaîne reconnu",
  emailReqd: "Une adresse courriel valide est requise",
  pwdRequired: "Un mot de passe est requis",
  pwdInvalid: "Votre mot de passe doit comporter 6 caractères ou plus",
  pwdConfirm: "La confirmation du mot de passe est requise!",
  pwdNotSame: "Les mots de passe ne correspondent pas!",
  dateInvalid: "Une date valide est requise",
  loginFail:
    "Votre nom d'utilisateur (email) ou votre mot de passe n'est pas valide"
};
