'use client';

import HomeScreen from './components/screens/HomeScreen';

// import Image from 'next/image';
// import { Link } from './components/Link';
// import React from 'react';
// import Footer from './components/patterns/Footer';
import GlobalStyle from './theme/GlobalStyle';

// type TitleProps = {
//   children: string;
//   as: keyof JSX.IntrinsicElements;
// };

// function Title({ children, as }: TitleProps) {
//   const Tag = as;
//   return (
//     <React.Fragment>
//       <Tag>{children}</Tag>
//       <style jsx>
//         {`
//           ${Tag} {
//             color: red;
//           }
//         `}
//       </style>
//     </React.Fragment>
//   );
// }

// export default function Home() {
//   return (
//     <div>
//       <GlobalStyle />
//       <Title as="h1">Alura Cases-Home</Title>
//       <Link href={'/faq'}>Ir para a FAQ</Link>
//       <Footer />
//     </div>
//   );
// }
export default function Home() {
  return (
    <>
      <GlobalStyle />
      <HomeScreen />
    </>
  );
}
