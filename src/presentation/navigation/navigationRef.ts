import { createNavigationContainerRef } from '@react-navigation/native';
import { RootStackParams } from '../navigation/MainNavigator';

export const navigationRef = createNavigationContainerRef<RootStackParams>();

export function navigate<RouteName extends keyof RootStackParams>(
  name: RouteName,
  ...params: RootStackParams[RouteName] extends undefined ? [] : [RootStackParams[RouteName]]
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, ...(params as any));
  }
}

