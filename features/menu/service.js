import { useRouter } from 'next/router';
import { useState } from 'react';

export const defaultNavItems = [
  {
    label: 'Home',
    path: '/home',
  },
  {
    label: 'Send Flowt',
    path: '/send-flowt',
  },
  {
    label: 'Request Flowt',
    path: '/request-flowt',
  },
  {
    label: 'Flowt Your Bowt',
    path: '/flowt',
  },
  {
    label: 'Activity',
    path: '/activity',
  },
  {
    label: 'Profile',
    path: '/profile',
  },
];

export function findCurrentItemByPathName(list = [], pathName = 'string') {
  return list.find(({ path }) => path === pathName);
}

export const useNavigation = () => {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const items = defaultNavItems;
  const selectedItem = findCurrentItemByPathName(items, pathname);

  return { items, isOpen, selectedItem };
};

export default useNavigation;
