import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface MenuProps {
  activeTab?: string;
  onTabPress?: (tabName: string) => void;
}

const Menu: React.FC<MenuProps> = ({ activeTab = 'home', onTabPress }) => {
  const insets = useSafeAreaInsets();

  const menuItems = [
    { name: 'home', icon: 'apps', activeIcon: 'apps' },
    { name: 'statistics', icon: 'stats-chart', activeIcon: 'stats-chart' },
    { name: 'notifications', icon: 'notifications', activeIcon: 'notifications' },
    { name: 'settings', icon: 'settings', activeIcon: 'settings' },
  ];

  const handleTabPress = (tabName: string) => {
    onTabPress?.(tabName);
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View style={styles.menuBar}>
        {menuItems.map((item) => {
          const isActive = activeTab === item.name;
          const iconName = isActive ? item.activeIcon : item.icon;
          
          return (
            <TouchableOpacity
              key={item.name}
              style={styles.menuItem}
              onPress={() => handleTabPress(item.name)}
              activeOpacity={0.7}
            >
              <Ionicons
                name={iconName as any}
                size={24}
                color={isActive ? '#432C81' : '#8E8E93'}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
});

export default Menu;
