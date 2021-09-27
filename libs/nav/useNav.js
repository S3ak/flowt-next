import { useRouter } from 'next/router';
import { useState, useContext, createContext, useCallback } from 'react';

export const defaultNavItems = [
  {
    label: 'Splash',
    path: '/',
    isVisible: false,
  },
  {
    label: 'Home',
    path: '/home',
    isVisible: true,
  },
  {
    label: 'Send Flowt',
    path: '/send-flowt',
    isVisible: true,
  },
  {
    label: 'Request Flowt',
    path: '/request-flowt',
    isVisible: true,
  },
  {
    label: 'Flowt Your Bowt',
    path: '/flowt',
    isVisible: true,
  },
  {
    label: 'Activity',
    path: '/activity',
    isVisible: true,
  },
  {
    label: 'Profile',
    path: '/profile',
    isVisible: true,
  },
  {
    label: 'Sign Up',
    path: '/sign-up',
    isVisible: false,
  },
  {
    label: 'Login',
    path: '/sign-in',
    isVisible: false,
  },
  {
    label: 'Forgot Password',
    path: '/forgot-password',
    isVisible: false,
  },
];

const NavContext = createContext();

export function findCurrentItemByPathName(list = [], pathName = 'string') {
  return list.find(({ path }) => path === pathName).label || 'Not Found';
}

export const useProvideNav = () => {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const items = defaultNavItems;
  const selectedItem = useCallback(findCurrentItemByPathName(items, pathname), [
    pathname,
  ]);
  const toggleNav = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return { items, isOpen, toggleNav, selectedItem };
};

export const NavProvider = ({ children }) => {
  const value = useProvideNav();
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export default function useNav() {
  return useContext(NavContext);
}
