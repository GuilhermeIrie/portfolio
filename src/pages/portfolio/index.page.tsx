import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { alpha, styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import Tab from '@mui/material/Tab'
import { OrbitControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import dynamox from '../../assets/dynamox.png'
import wattei from '../../assets/wattei.png'
import { Margin } from '../../components/Header/styled'
import Caminhao from '../../models/Caminhao'
import Iphone from '../../models/Iphone'
import { ControlsWrapper, SwitchComponent } from './styled'

const RedSwitch = styled(Switch)(() => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#eb1d36',
    '&:hover': {
      backgroundColor: alpha(`#eb1d36`, 0)
    }
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#eb1d36'
  }
}))

const Tabs = styled(Tab)({
  borderBottom: '1px solid #eb1d36',
  '& .MuiTabs-indicator': {
    backgroundColor: '#eb1d36'
  }
})

function RGBToHex(r: any, g: any, b: any) {
  r = r * 255
  g = g * 255
  b = b * 255

  r = r.toString(16)
  g = g.toString(16)
  b = b.toString(16)

  if (r.length == 1) r = '0' + r
  if (g.length == 1) g = '0' + g
  if (b.length == 1) b = '0' + b

  return '#' + r + g + b
}

function hexToRGB(hex: any) {
  let r: any = 0,
    g: any = 0,
    b: any = 0

  // 3 digits
  if (hex.length == 4) {
    r = '0x' + hex[1] + hex[1]
    g = '0x' + hex[2] + hex[2]
    b = '0x' + hex[3] + hex[3]

    // 6 digits
  } else if (hex.length == 7) {
    r = '0x' + hex[1] + hex[2]
    g = '0x' + hex[3] + hex[4]
    b = '0x' + hex[5] + hex[6]
  }
  r = r / 255
  g = g / 255
  b = b / 255

  return { r, g, b }
}

const About = () => {
  const [rotate, setRotate] = useState(true)
  const [rotateIphone, setRotateIphone] = useState(true)

  const [wireframe, setWireframe] = useState(false)
  const [wireframeIphone, setWireframeIphone] = useState(false)

  const [colorTruck, setColorTruck] = useState({ r: 0, g: 0, b: 0 })
  const [colorIphone, setColorIphone] = useState({ r: 0, g: 0, b: 0 })

  const [value, setValue] = useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  if (typeof window !== 'undefined') {
    const truckColor = document.getElementById('truckColorpicker') as HTMLInputElement

    if (truckColor) {
      truckColor.addEventListener(
        'input',
        function () {
          var theColor = truckColor.value
          setColorTruck(hexToRGB(theColor))
          // Do something with `theColor` here.
        },
        { once: true }
      )
    }

    const iphoneColor = document.getElementById('iphoneColorpicker') as HTMLInputElement

    if (iphoneColor) {
      iphoneColor.addEventListener(
        'input',
        function () {
          var theColor = iphoneColor.value
          setColorIphone(hexToRGB(theColor))
          // Do something with `theColor` here.
        },
        { once: true }
      )
    }
  }

  const label = { inputProps: { 'aria-label': 'Switch' } }
  // const [cursorToGrabbing, setCursorToGrabbing] = useState(false)

  return (
    <Margin>
      <div
        style={{
          marginTop: '75px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          flexDirection: 'column',
          padding: '16px',
          borderRadius: '8px'
        }}
      >
        <TabContext value={value}>
          <div style={{ borderBottom: 1, borderColor: 'divider', color: '#fff' }}>
            <TabList
              textColor="inherit"
              style={{ marginBottom: '16px' }}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="Modelagem" value="1" />
              <Tab label="Websites" value="2" />
            </TabList>
          </div>
          <TabPanel style={{ width: '1024px', padding: '0' }} value="1">
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: '#EB1D3660',
                  width: '100%',
                  padding: '16px',
                  borderRadius: '8px'
                }}
              >
                <div
                  style={{
                    width: '350px',
                    height: '350px'
                  }}
                >
                  <ControlsWrapper>
                    <SwitchComponent onClick={() => setRotate(!rotate)}>
                      <RedSwitch {...label} style={{ color: 'red' }} defaultChecked />
                      <p>Rotação</p>
                    </SwitchComponent>
                    <SwitchComponent style={{ padding: '10px 8px' }}>
                      <input
                        type="color"
                        id="truckColorpicker"
                        readOnly
                        value={RGBToHex(colorTruck.r, colorTruck.g, colorTruck.b)}
                      />
                      <p style={{ marginLeft: '8px' }}>Color</p>
                    </SwitchComponent>
                    <SwitchComponent onClick={() => setWireframe(!wireframe)}>
                      <RedSwitch {...label} />
                      <p>Wireframe</p>
                    </SwitchComponent>
                  </ControlsWrapper>

                  <Canvas
                    camera={{ fov: 70, position: [0, 0, 5] }}
                    style={{
                      width: '350px',
                      height: '350px',
                      background: '#000',
                      borderRadius: '8px',
                      cursor: 'grab'
                    }}
                  >
                    <Suspense fallback={null}>
                      <ambientLight />
                      <Caminhao wireframe={wireframe} color={colorTruck} />
                      <mesh rotation={[-1.5708, 0, 0]} position={[0, -0.6, 0]}>
                        <planeGeometry attach="geometry" args={[15, 15]} />
                        <meshPhongMaterial attach="material" color="#f5f5f5" />
                      </mesh>
                      <directionalLight intensity={1} position={[0, 50, 0]} />
                      <directionalLight intensity={1} position={[0, 0, 50]} />
                      <directionalLight intensity={1} position={[50, 0, 0]} />
                      <OrbitControls
                        enablePan={true}
                        enableZoom={true}
                        enableRotate={true}
                        autoRotate={rotate}
                      />
                    </Suspense>
                    <Stars />
                  </Canvas>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '350px',
                    background: '#FFDEDE',
                    borderRadius: '8px',
                    marginLeft: '16px',
                    padding: '16px',
                    color: '#000'
                  }}
                >
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Software:</strong> Blender.
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>data de produção:</strong> Agosto de 2022.
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Número de faces:</strong> 7.583
                  </p>
                  <p style={{ marginBottom: '8px', textAlign: 'justify' }}>
                    <strong>Contexto:</strong> Esse projeto foi feito durante minha jornada na
                    Dynamox, a idéa era produzir uma planta de mineração completa. Foram feitos
                    vários modelos, como por exemplo: Britador Primário e Secundário, 3 tipos de
                    veículos (O modelo em questão representa o Komatsu 860E), etc...
                  </p>
                  <p style={{ marginBottom: '8px', textAlign: 'justify' }}>
                    <strong>Desenvolvimento:</strong> Partindo de imagens como referência, foi
                    utilizado uma Normal Map para fazer os detalhes dos pneus, como o intuíto de
                    reduzir a quantidade de faces, devido à quantidade de detalhe que as ranhuras
                    dos pneus.
                  </p>
                </div>
              </div>
              <div
                style={{
                  marginTop: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  background: '#EB1D3660',
                  width: '100%',
                  padding: '16px',
                  borderRadius: '8px'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '350px',
                    background: '#FFDEDE',
                    borderRadius: '8px',
                    marginRight: '16px',
                    padding: '16px',
                    color: '#000'
                  }}
                >
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Software:</strong> Blender.
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>data de produção:</strong> Junho de 2020.
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Número de faces:</strong> 9.319
                  </p>
                  <p style={{ marginBottom: '8px', textAlign: 'justify' }}>
                    <strong>Contexto:</strong> Esse projeto foi feito à partir de uma referencia de
                    6 vista do Iphone XS Max. O foco principal era apenas as renderizações finais,
                    dessa forma o resultado acabou ficando com quase 10 mil faces.
                  </p>
                  <p style={{ marginBottom: '8px', textAlign: 'justify' }}>
                    <strong>Desenvolvimento:</strong> Foram utilizadas duas texturas para esse
                    modelo, uma de para a lanterna na parte entre a câmera traseira e outra para
                    representar a tela de wallpaper do modelo original.
                  </p>
                </div>
                <div
                  style={{
                    width: '350px',
                    height: '350px'
                  }}
                >
                  <ControlsWrapper>
                    <SwitchComponent onClick={() => setRotateIphone(!rotateIphone)}>
                      <RedSwitch {...label} style={{ color: 'red' }} defaultChecked />
                      <p>Rotação</p>
                    </SwitchComponent>
                    <SwitchComponent style={{ padding: '10px 8px' }}>
                      <input
                        type="color"
                        id="iphoneColorpicker"
                        readOnly
                        value={RGBToHex(colorIphone.r, colorIphone.g, colorIphone.b)}
                      />
                      <p style={{ marginLeft: '8px' }}>Color</p>
                    </SwitchComponent>
                    <SwitchComponent onClick={() => setWireframeIphone(!wireframeIphone)}>
                      <RedSwitch {...label} />
                      <p>Wireframe</p>
                    </SwitchComponent>
                  </ControlsWrapper>

                  <Canvas
                    camera={{ fov: 50, position: [0, 0, 5] }}
                    style={{
                      width: '350px',
                      height: '350px',
                      background: '#000',
                      borderRadius: '8px',
                      cursor: 'grab'
                    }}
                  >
                    <Suspense fallback={null}>
                      <ambientLight />
                      <Iphone wireframe={wireframeIphone} color={colorIphone} />
                      <mesh receiveShadow rotation={[-1.5708, 0, 0]} position={[0, -0.6, 0]}>
                        <planeGeometry attach="geometry" args={[15, 15]} />
                        <meshPhongMaterial attach="material" color="#f5f5f5" />
                      </mesh>
                      <directionalLight intensity={1} position={[0, 50, 0]} />
                      <directionalLight intensity={1} position={[0, 0, 50]} />
                      <directionalLight intensity={1} position={[50, 0, 0]} />
                      <OrbitControls
                        enablePan={true}
                        enableZoom={true}
                        enableRotate={true}
                        autoRotate={rotateIphone}
                      />
                    </Suspense>
                    <Stars />
                  </Canvas>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel style={{ width: '1024px', padding: '0' }} value="2">
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: '#EB1D3660',
                  width: '100%',
                  padding: '16px',
                  borderRadius: '8px'
                }}
              >
                <div
                  style={{
                    width: '500px',
                    height: '350px'
                  }}
                >
                  <img
                    src={dynamox}
                    style={{
                      objectFit: 'contain',
                      width: '500px',
                      height: '350px'
                    }}
                    alt="foto"
                  />
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '363px',
                    background: '#FFDEDE',
                    borderRadius: '8px',
                    marginLeft: '16px',
                    padding: '16px',
                    color: '#000'
                  }}
                >
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Site: </strong>
                    <a
                      style={{ textDecoration: 'none', color: '#000' }}
                      href="https://dynamox.net/"
                      target={'_blank'}
                    >
                      <span style={{ position: 'relative', color: '#EB1D36' }}>Dynamox</span>
                    </a>
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>data de produção:</strong> Agosto de 2022.
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Tecnologia:</strong> Next.js, Typescript, GraphQL, Headless CMS.
                  </p>
                  <p style={{ marginBottom: '8px', textAlign: 'justify' }}>
                    <strong>Contexto:</strong> Esse projeto foi o mais completo que ja realizei, o
                    site já existia, porém ele foi feito com Gatsby e Netlify usando Javascrip.
                    Conforme o projeto foi crescendo, o repositório acabou ficando muito grande e o
                    site não estava mais sustentável, pois para clonar o repositório levava em torno
                    de 20 minutos. Além disso, tudo isso estava impactando a performance geral do
                    site.
                  </p>
                  <p style={{ marginBottom: '8px', textAlign: 'justify' }}>
                    <strong>Desenvolvimento:</strong> Para contornar a situação o site foi
                    totalmento reescrito usando Typescript, porém utilizando Next.js. Com a ajuda do
                    coordenador de Frontend da Dynamox, Calil Amaral, o site foi refeito em
                    aproximadamente 1 ano. Concluindo o projeto, performance do site estava beirando
                    100% segundo as Core Web Vitals.
                  </p>
                </div>
              </div>
              <div
                style={{
                  marginTop: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  background: '#EB1D3660',
                  width: '100%',
                  padding: '16px',
                  borderRadius: '8px'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '350px',
                    background: '#FFDEDE',
                    borderRadius: '8px',
                    marginRight: '16px',
                    padding: '16px',
                    color: '#000'
                  }}
                >
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Site: </strong>
                    <a
                      style={{ textDecoration: 'none', color: '#000' }}
                      href="http://wattei.com.br/"
                      target={'_blank'}
                    >
                      <span style={{ position: 'relative', color: '#EB1D36' }}> Wattei</span>
                    </a>
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>data de produção:</strong> Junho de 2020.
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Tecnologia:</strong> HTML, CSS e Bootstrap.
                  </p>
                  <p style={{ marginBottom: '8px', textAlign: 'justify' }}>
                    <strong>Contexto:</strong> Esse projeto foi o primeiro site que eu programei
                    junto com Anderson Brito, na época estavamos trabalhando como estagiário.
                  </p>
                  <p style={{ marginBottom: '8px', textAlign: 'justify' }}>
                    <strong>Desenvolvimento:</strong> O site foi todo feito em HTML, CSS e
                    Bootstrap, para foi necessário a ajuda do Nilson Damasio (sênior).
                  </p>
                </div>
                <div
                  style={{
                    width: '500px',
                    height: '350px'
                  }}
                >
                  <img
                    src={wattei}
                    style={{
                      objectFit: 'contain',
                      width: '500px',
                      height: '350px'
                    }}
                    alt="foto"
                  />
                </div>
              </div>
            </div>
          </TabPanel>
        </TabContext>
      </div>
    </Margin>
  )
}

export default About
