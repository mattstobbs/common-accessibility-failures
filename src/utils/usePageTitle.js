import { useLocation } from 'react-router-dom';
import { pages } from '../utils/urls';

export const usePageTitle = () => {
  const { pathname } = useLocation();
  const page = pages.find((p) => p.href === pathname);
  if (!page) return '';

  return page.title;
};
