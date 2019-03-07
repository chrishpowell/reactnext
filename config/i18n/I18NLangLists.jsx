//---------------------------------------------
//        LANGUAGE LIST/GROUPS
//---------------------------------------------
//
// - Full list
export const localeTags = [
  {
    type: "group",
    name: "European:",
    items: [
      {
        lang: "en",
        regex: "Latin",
        value: "en-GB",
        label: "en-GB [British English]"
      },
      {
        lang: "cy",
        regex: "Latin",
        value: "cy-GB",
        label: "cy-GB [UK Cymraeg]"
      },
      { lang: "el", regex: "Greek", value: "el-GR", label: "el-GR [Ελληνικά]" },
      {
        lang: "en",
        regex: "Latin",
        value: "en-US",
        label: "en-US [American English]"
      },
      {
        lang: "en",
        regex: "Latin",
        value: "en-CA",
        label: "en-CA [Canadian English]"
      },
      {
        lang: "fr",
        regex: "Latin",
        value: "fr-BE",
        label: "fr-BE [Française de Belgique]"
      },
      {
        lang: "fr",
        regex: "Latin",
        value: "fr-FR",
        label: "fr-FR [Français standard (notamment en France)]"
      },
      {
        lang: "es",
        regex: "Latin",
        value: "es-ES",
        label: "es-ES [Castellano Español (Centro-norte de España)]"
      },
      {
        lang: "es",
        regex: "Latin",
        value: "es-MX",
        label: "es-MX [Español Mexicano]"
      }
    ]
  },
  {
    type: "group",
    name: "Asian:",
    items: [
      {
        lang: "zh",
        regex: "Chinese",
        value: "zh-CN",
        label: "zh-CN [中国大陆, 简化字符]"
      },
      {
        lang: "zh",
        regex: "Chinese",
        value: "zh-HK",
        label: "zh-HK [Hong Kong, traditional characters]"
      }
    ]
  }
];

//
// - Short list (Add Russian)
export const europeOptions = [
  {
    lang: "en",
    regex: "Latin",
    value: "en-US",
    label: "en-US [English]"
  },
  {
    lang: "fr",
    regex: "Latin",
    value: "fr-FR",
    label: "fr-FR [Français]"
  },
  {
    lang: "es",
    regex: "Latin",
    value: "es-ES",
    label: "es-ES [Castellano Español]"
  }
];

export const asiaOptions = [
  {
    lang: "zh",
    regex: "Chinese",
    value: "zh-CN",
    label: "zh-CN [中国大陆, 简化字符]"
  },
  {
    lang: "zh",
    regex: "Chinese",
    value: "zh-HK",
    label: "zh-HK [Hong Kong, traditional characters]"
  }
];

//
// - Language groups
export const langGroups = [
  { label: "European", options: europeOptions },
  { label: "Asian", options: asiaOptions }
];
