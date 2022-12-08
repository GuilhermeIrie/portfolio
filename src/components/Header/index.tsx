import Link from 'next/link'
import { Container, Margin } from './styled'

export const Header = () => {
  return (
    <Margin>
      <Container>
        <Link href="/">
          <h3>Home</h3>
        </Link>
        <Link href="/game">
          <h3>Atlantis</h3>
        </Link>
      </Container>
    </Margin>
  )
}
