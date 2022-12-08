import myFoto from '../../assets/avatar.png'
import { Container, Content, ImageWrapper, Wrapper } from './styled'

export const BioComponent = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ marginBottom: '8px', fontSize: '32px' }}>Guilherme H. Irie C.</h2>
            <h3 style={{ marginBottom: '16px', fontSize: '18px', fontStyle: 'italic' }}>
              Front-end Developer, 3D Artist, Game Desiger
            </h3>
            <p style={{ marginBottom: '8px', lineHeight: '22px' }}>
              Atualmente me encontro na etapa de conclusão do curso de Design de Jogos na{' '}
              <a
                href="https://www.univali.br/"
                target="_blank"
                style={{ textDecoration: 'none', color: 'red', paddingTop: '2px' }}
              >
                <span style={{ position: 'relative', bottom: '-2px' }}>UNIVALI</span>
              </a>
              , estou trabalhando como Desenvolverdor Front-end Junior na empresa{' '}
              <a
                href="https://dynamox.net/"
                target="_blank"
                style={{ textDecoration: 'none', color: 'red', paddingTop: '2px' }}
              >
                <span style={{ position: 'relative', bottom: '-2px' }}>Dynamox</span>
              </a>{' '}
              e atuo no ramo de desenvolvimento Web há mais de 2 anos . Tenho experiência com HTML,
              CSS, Javascrip, Typescript, React.js, Next.js, GraphQL, Three.js, Styled-Components e
              Material UI.
              {/* academico univali - etapá de conclusão - ja atuei com - tenho experiencias nas areas
              de - tenho interesse em - atualmente trabalho como desenvolvedor frontend na dynamox */}
            </p>
            <p style={{ marginBottom: '8px', lineHeight: '22px' }}>
              Já experimentei softwares como Unity, Figma, pacote Adobe, Maya e Blender.
            </p>
            <p style={{ lineHeight: '22px' }}>
              Tenho interesse em programar site interativos, trazendo o conceito do universo 3D para
              dentro desse ambiente "supostamente 2D".
            </p>
          </div>

          <ImageWrapper>
            <img
              src={myFoto}
              style={{
                objectFit: 'contain',
                width: '252px',
                height: '302px'
              }}
              alt="foto"
            />
          </ImageWrapper>
        </Content>
      </Wrapper>
    </Container>
  )
}
