import React, { useMemo } from 'react';
import { Text, TextProps } from 'react-native';

interface TypographyProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption';
  children: React.ReactNode;
}

export function Typography({ variant = 'body', style, children, ...props }: TypographyProps) {
  const typographyStyle = useMemo(() => {
    const baseStyle = {
      fontFamily: 'Raleway, system-ui',
      color: '#432C81',
    };

    switch (variant) {
      case 'h1':
        return {
          ...baseStyle,
          fontSize: 32,
          fontFamily: 'Raleway-Bold, Raleway, system-ui',
          lineHeight: 40,
          fontWeight: 'bold',
        };
      case 'h2':
        return {
          ...baseStyle,
          fontSize: 28,
          fontFamily: 'Raleway-Bold, Raleway, system-ui',
          lineHeight: 36,
          fontWeight: 'bold',
        };
      case 'h3':
        return {
          ...baseStyle,
          fontSize: 24,
          fontFamily: 'Raleway-Bold, Raleway, system-ui',
          lineHeight: 32,
          fontWeight: 'bold',
        };
      case 'h4':
        return {
          ...baseStyle,
          fontSize: 20,
          fontFamily: 'Raleway-Medium, Raleway, system-ui',
          lineHeight: 28,
          fontWeight: '500',
        };
      case 'h5':
        return {
          ...baseStyle,
          fontSize: 18,
          fontFamily: 'Raleway-Medium, Raleway, system-ui',
          lineHeight: 24,
          fontWeight: '500',
        };
      case 'h6':
        return {
          ...baseStyle,
          fontSize: 16,
          fontFamily: 'Raleway-Medium, Raleway, system-ui',
          lineHeight: 22,
          fontWeight: '500',
        };
      case 'body':
        return {
          ...baseStyle,
          fontSize: 16,
          lineHeight: 24,
        };
      case 'caption':
        return {
          ...baseStyle,
          fontSize: 14,
          lineHeight: 20,
        };
      default:
        return baseStyle;
    }
  }, [variant]);

  return (
    <Text style={[typographyStyle, style]} {...props}>
      {children}
    </Text>
  );
}
