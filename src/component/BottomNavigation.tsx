import { Link } from 'react-router-dom';

import iconHomeFill from '../assets/icon-home-fill.svg';
import iconMessageCircle from '../assets/icon-message-circle.svg';
import iconEdit from '../assets/icon-edit.svg';
import iconUser from '../assets/icon-user.svg';

interface IList {
  svg: string;
  text: string;
  on: boolean;
  to: string;
}

function List({ svg, text, on, to }: IList) {
  return (
    <li className="w-21 h-15 flex flex-col items-center justify-center">
      <Link to={to} className="flex flex-col items-center">
        <img src={svg} alt={text} className="w-6 h-6" />
        <span
        className={`text-[10px] leading-[14px] mt-[6px] font-normal ${
          on ? 'text-main' : 'text-gray'
          }`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
}

function BottomNavigation() {
  return (
    <ul className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center px-[6px] z-50 h-15">
      <List svg={iconHomeFill} text={'홈'} on={true} to={'/'} />
      <List svg={iconMessageCircle} text={'채팅'} on={false} to={'/chat'} />
      <List svg={iconEdit} text={'게시물 작성'} on={false} to={'/write'} />
      <List svg={iconUser} text={'프로필'} on={false} to={'/profile'} />
    </ul>
  );
}

export default BottomNavigation;
