import { SG_COLORS } from '@/constants/theme';
import React, { useMemo, useState } from 'react';
import { Animated, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SGTypography } from './SGTypography';

export interface SGAccordionItem {
  title: string;
  content: string | React.ReactNode;
  items?: SGAccordionItem[];
}

interface SGAccordionProps {
  items: SGAccordionItem[];
  allowMultiple?: boolean;
}

const SGAccordion: React.FC<SGAccordionProps> = ({ 
  items, 
  allowMultiple = true 
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  
  // Generate all possible keys for the accordion structure
  const generateKeys = (items: SGAccordionItem[], parentKey: string = ''): string[] => {
    let keys: string[] = [];
    items.forEach((item, index) => {
      const currentKey = parentKey ? `${parentKey}_${index}` : index.toString();
      keys.push(currentKey);
      if (item.items) {
        keys = keys.concat(generateKeys(item.items, currentKey));
      }
    });
    return keys;
  };

  const allKeys = useMemo(() => generateKeys(items), [items]);
  
  // Create animations for all possible keys
  const animations = useMemo(() => {
    const animMap = new Map<string, Animated.Value>();
    allKeys.forEach(key => {
      animMap.set(key, new Animated.Value(0));
    });
    return animMap;
  }, [allKeys]);

  const toggleItem = (key: string) => {
    const isExpanded = expandedItems.includes(key);
    
    const newExpandedItems = isExpanded
      ? expandedItems.filter(item => item !== key)
      : [...expandedItems, key];
    setExpandedItems(newExpandedItems);

    // Animate the content
    const animation = animations.get(key);
    if (animation) {
      Animated.timing(animation, {
        toValue: isExpanded ? 0 : 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const renderItem = (item: SGAccordionItem, index: number, parentKey: string = ''): React.ReactNode => {
    const currentKey = parentKey ? `${parentKey}_${index}` : index.toString();
    const isExpanded = expandedItems.includes(currentKey);
    const animation = animations.get(currentKey);
    
    if (!animation) {
      return null;
    }
    
    const rotateAnimation = animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });

    const contentOpacity = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    return (
      <View key={currentKey} style={styles.accordionItem}>
        <TouchableOpacity
          style={[styles.header]}
          onPress={() => toggleItem(currentKey)}
          activeOpacity={0.7}
        >
          <SGTypography variant="h6" style={styles.title}>
            {item.title}
          </SGTypography>
          <Animated.View style={[styles.arrow, { transform: [{ rotate: rotateAnimation }] }]}>
            <SGTypography variant="caption" style={styles.arrowText}>
              ▼
            </SGTypography>
          </Animated.View>
        </TouchableOpacity>
        
        <Animated.View 
          style={[
            styles.content, 
            { 
              opacity: contentOpacity,
              maxHeight: isExpanded ? undefined : 0,
            }
          ]}
        >
          <View style={styles.contentInner}>
            {typeof item.content === 'string' ? (
              <SGTypography variant="body" style={styles.contentText}>
                {item.content}
              </SGTypography>
            ) : (
              item.content
            )}
            {item.items && item.items.map((subItem, subIndex) => 
              renderItem(subItem, subIndex, currentKey)
            )}
          </View>
        </Animated.View>
      </View>
    );
  };

  return (
    <ScrollView 
      style={styles.scrollContainer} 
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      bounces={false}
      alwaysBounceVertical={false}
      nestedScrollEnabled={true}
    >
      <View style={styles.container}>
        {items.map((item, index) => renderItem(item, index))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    width: '100%',
    paddingBottom: 20,
  },
  accordionItem: {
    marginBottom: 8,
    borderRadius: 12,
    backgroundColor: SG_COLORS.white,
    shadowColor: SG_COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: SG_COLORS.backgroundLight,
    borderBottomWidth: 1,
    borderBottomColor: SG_COLORS.border,
  },
  title: {
    flex: 1,
    color: SG_COLORS.primary,
  },
  arrow: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowText: {
    fontSize: 12,
    color: SG_COLORS.primary,
  },
  content: {
    overflow: 'hidden',
  },
  contentInner: {
    padding: 20,
    gap: 5,
  },
  contentText: {
    color: SG_COLORS.text,
    lineHeight: 24,
  },
});

export default SGAccordion;
