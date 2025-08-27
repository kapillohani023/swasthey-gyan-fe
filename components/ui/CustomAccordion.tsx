import React, { useMemo, useState } from 'react';
import { Animated, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Typography } from './Typography';

export interface AccordionItem {
  title: string;
  content: string | React.ReactNode;
  items?: AccordionItem[];
}

interface CustomAccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({ 
  items, 
  allowMultiple = true 
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  
  // Generate all possible keys for the accordion structure
  const generateKeys = (items: AccordionItem[], parentKey: string = ''): string[] => {
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

  const renderItem = (item: AccordionItem, index: number, parentKey: string = ''): React.ReactNode => {
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
          <Typography variant="h6" style={styles.title}>
            {item.title}
          </Typography>
          <Animated.View style={[styles.arrow, { transform: [{ rotate: rotateAnimation }] }]}>
            <Typography variant="caption" style={styles.arrowText}>
              ▼
            </Typography>
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
              <Typography variant="body" style={styles.contentText}>
                {item.content}
              </Typography>
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
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
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
    backgroundColor: '#F8F9FF',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E9F0',
  },
  title: {
    flex: 1,
    color: '#432C81',
  },
  arrow: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowText: {
    fontSize: 12,
    color: '#432C81',
  },
  content: {
    overflow: 'hidden',
  },
  contentInner: {
    padding: 20,
    gap: 5,
  },
  contentText: {
    color: '#666666',
    lineHeight: 24,
  },
});

export default CustomAccordion;
