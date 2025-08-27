import { SG_COLORS, SG_FONTS } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

interface SGTypographyProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'subtitle';
  children: React.ReactNode;
}

export function SGTypography({ variant = 'body', style, children, ...props }: SGTypographyProps) {
  const getTypographyStyle = () => {
    switch (variant) {
      case 'h1':
        return styles.h1;
      case 'h2':
        return styles.h2;
      case 'h3':
        return styles.h3;
      case 'h4':
        return styles.h4;
      case 'h5':
        return styles.h5;
      case 'h6':
        return styles.h6;
      case 'body':
        return styles.body;
      case 'caption':
        return styles.caption;
      case 'subtitle':
        return styles.subtitle;
      default:
        return styles.body;
    }
  };

  return (
    <Text style={[getTypographyStyle(), style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontFamily: SG_FONTS.raleway.bold,
    color: SG_COLORS.primary,
    fontSize: 32,
    lineHeight: 40,
  },
  h2: {
    fontFamily: SG_FONTS.raleway.bold,
    color: SG_COLORS.primary,
    fontSize: 28,
    lineHeight: 36,
  },
  h3: {
    fontFamily: SG_FONTS.raleway.bold,
    color: SG_COLORS.primary,
    fontSize: 24,
    lineHeight: 32,
  },
  h4: {
    fontFamily: SG_FONTS.raleway.medium,
    color: SG_COLORS.primary,
    fontSize: 20,
    lineHeight: 28,
  },
  h5: {
    fontFamily: SG_FONTS.raleway.medium,
    color: SG_COLORS.primary,
    fontSize: 18,
    lineHeight: 24,
  },
  h6: {
    fontFamily: SG_FONTS.raleway.medium,
    color: SG_COLORS.primary,
    fontSize: 16,
    lineHeight: 22,
  },
  body: {
    fontFamily: SG_FONTS.raleway.regular,
    color: SG_COLORS.primary,
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontFamily: SG_FONTS.raleway.regular,
    color: SG_COLORS.primary,
    fontSize: 14,
    lineHeight: 20,
  },
  subtitle: {
    fontFamily: SG_FONTS.raleway.medium,
    color: '#812C79',
    fontSize: 18,
    lineHeight: 24,
  },
});
