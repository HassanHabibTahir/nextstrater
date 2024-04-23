export const Constants = {
    TOKEN_NAME: "x-auth",
    DARK_THEMES: [
      "sunset",
      "dim",
      "coffee",
      "night",
      "business",
      "dracula",
      "luxury",
      "black",
      "aqua",
      "forest",
      "halloween",
      "synthwave",
      "dark"
    ],
    LIGHT_THEMES: [
      "light",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "retro",
      "cyberpunk",
      "valentine",
      "garden",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "cmyk",
      "autumn",
      "acid",
      "lemonade",
      "winter",
      "nord"
    ],
    THEMES: () => [...Constants.DARK_THEMES, ...Constants.LIGHT_THEMES].sort(),
    LANGUAGES: [
      { key: "en", label: "English" },
      { key: "ch", label: "Chinese" },
      {key:"ar",label:"عربي"}
    
    ]
  };