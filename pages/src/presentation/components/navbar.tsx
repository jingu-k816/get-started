import React from 'react';
import Link from 'next/link';
const NavBar: React.FC<{props?: any}> = () => {
  return(
    <nav>
      <Link href="/src/presentation/components/about"><a>About</a></Link>
      <br/>
      <Link href="/src/presentation/components/"><a>Index</a></Link>
      <br/>
      <Link href="/src/presentation/components/items"><a>Items</a></Link>
      <br/>
      <Link href="/"><a>Back to main page</a></Link>
      <br/>

    </nav>
  )
}

export default NavBar;