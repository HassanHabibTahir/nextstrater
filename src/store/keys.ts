const APP_NAME = `@${process.env.NEXT_PUBLIC_NAME?.replaceAll(
  " ",
  "_"
).toUpperCase()}_`;

const Keys = {
  isLoggedIn: `${APP_NAME}isLoggedIn` as const,
  isLoading: `${APP_NAME}isLoading` as const,
  isUploading: `${APP_NAME}isUploading` as const,
  token: `${APP_NAME}token` as const,
  user: `${APP_NAME}user` as const,
  notification: `${APP_NAME}notification` as const,
  successMessage: `${APP_NAME}successMessage` as const,
  errorMessage: `${APP_NAME}errorMessage` as const,
  signupPhone: `${APP_NAME}signupPhone` as const,
  favoriteAds: `${APP_NAME}favoriteAds` as const,
  filters: `${APP_NAME}filters` as const,
  startConversation: `${APP_NAME}startConversation` as const,
  followers: `${APP_NAME}followers` as const,
  followings: `${APP_NAME}followings` as const,
  unreadMessages: `${APP_NAME}unreadMessages` as const,
  language: `${APP_NAME}language` as const,
  theme: `${APP_NAME}theme` as const,
};

export default Keys;
