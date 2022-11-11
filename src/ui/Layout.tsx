import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <p className='block w-full p-4 bg-sky-500  font-bold text-slate-900'>
        A react cookbook using only the best ingredients
      </p>
      <main>
        <div className='container mx-auto p-16'>{children}</div>;
      </main>
    </>
  );
}
