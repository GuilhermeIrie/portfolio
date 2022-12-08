import Link from 'next/link'
import { ButtonContainer, ButtonDlc, TextLink } from './styled'

export const HomeButton = () => {
  return (
    <div>
      <ButtonContainer>
        <Link href="/portfolio">
          <ButtonDlc>
            <span>Portfólio</span>
          </ButtonDlc>
          <TextLink>Clique para ver o portfólio!</TextLink>
        </Link>
      </ButtonContainer>
    </div>
  )
}
