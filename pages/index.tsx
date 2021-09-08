import styles from '../styles/Home.module.css'
import About from '../src/presentation/components/about'
import Index from '../src/presentation/components/index'
import Items from '../src/presentation/components/items'
import NavBar from '../src/presentation/navbar'


export default function Home() {
  return (
    <div className={styles.container}>
      <About />
      <Index />
      <Items />
      <NavBar />
    </div>
  )
}
