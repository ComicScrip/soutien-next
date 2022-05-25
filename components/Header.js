import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/articles'>
          <a>Articles</a>
        </Link>
      </nav>
    </header>
  );
}
