'use client';

import Image from 'next/image';
import { Link } from './components/Link';
import React from 'react';

type TitleProps = {
  children: string;
  as: keyof JSX.IntrinsicElements;
};

function Title({ children, as }: TitleProps) {
  const Tag = as;
  return (
    <React.Fragment>
      <Tag>{children}</Tag>
      <style jsx>
        {`
          ${Tag} {
            color: red;
            font-family: sans-serif;
          }
        `}
      </style>
    </React.Fragment>
  );
}

export default function Home() {
  return (
    <main>
      <div>
        <Title as="h1">Alura Cases-Home</Title>
        <Link href={'/faq'}>Ir para a FAQ</Link>
      </div>
    </main>
  );
}
