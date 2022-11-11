
import { ReactNode } from 'react';
import styles from './Button.module.css';
import clsxm from '@/lib/clsxm';
import Link from 'next/link';

type ButtonProps = {
  children: ReactNode;
  handleClick?: () => void;
  path?: string;
  hierarchy?: 'primary' | 'secondary' | 'tertiary';
  size?: 'default' | 'small';
  hint?: string;
}

export function Button({
  children,
  handleClick,
  path,
  hierarchy = 'primary',
  size = 'default',
  hint,
}: ButtonProps) {
  if (path) {
    return (
      <Link
        href={path}
        className={clsxm(styles.btn, styles[hierarchy], styles[size])}
        aria-label={hint}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={clsxm(styles.btn, styles[hierarchy], styles)}
      aria-label={hint}
    >
      {children}
    </button>
  );
};
