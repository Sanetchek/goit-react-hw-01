import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ item: { avatar, name, isOnline } }) {
  const clsxStyles = clsx(css.online, isOnline ? css.green : css.red);
  return (
    <div className={css.content}>
      <img src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsxStyles}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
