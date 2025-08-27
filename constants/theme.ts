export const SG_COLORS = {
  primary: '#432C81',
  secondary: '#812C79',
  backgroundGray: '#EDECF4',
  backgroundLight: '#F8F9FF',
  text: '#555555',
  border: '#E8E9F0',
  active: '#432C81',
  inactive: '#8E8E93',
  white: '#FFFFFF',
  black: '#000000',
} as const;


export const SG_FONTS = {
  raleway: {
    regular: 'Raleway_400Regular',
    medium: 'Raleway_500Medium',
    semiBold: 'Raleway_600SemiBold',
    bold: 'Raleway_700Bold',
  }
} as const;
export type ColorKey = keyof typeof SG_COLORS;
export type FontKey = keyof typeof SG_FONTS;
