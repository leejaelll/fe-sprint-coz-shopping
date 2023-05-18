import { toast } from 'react-toastify';

import bookmarkOff from '../assets/bookmarkOff.svg';
import bookmarkOn from '../assets/bookmarkOn.svg';

export const addNotify = () =>
  toast('북마크에 상품이 추가되었습니다.', {
    icon: ({ theme, type }) => <img src={bookmarkOn} />,
  });
export const removeNotify = () =>
  toast('북마크에서 상품이 제거되었습니다.', {
    icon: ({ theme, type }) => <img src={bookmarkOff} />,
  });
