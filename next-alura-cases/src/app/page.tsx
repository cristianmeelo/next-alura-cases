import Image from 'next/image'
import { Link } from './components/Link'


export default function Home() {
  return (
    <main >
     <div>
      <h1>Alura Cases-Home</h1>



     <Link href={'/faq'}>
      Ir para a FAQ
    </Link>
     </div>
    </main>
  )
}
