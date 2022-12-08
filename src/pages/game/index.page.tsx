import Head from 'next/head'
import Script from 'next/script'

const Game = () => {
  return (
    <>
      <Head key={'1wseq'}>
        <title>Unity WebGL Player | rts_test</title>
        {/* <link  rel="shortcut icon" href="TemplateData/favicon.ico"> */}
        {/* <link  rel="stylesheet" href="TemplateData/style.css"> */}
      </Head>
      <div id="unity-container" style={{ top: '45%' }} className="unity-desktop">
        <canvas id="unity-canvas" width={1024} height={550}></canvas>
        <div id="unity-loading-bar">
          <div id="unity-logo"></div>
          <div id="unity-progress-bar-empty">
            <div id="unity-progress-bar-full"></div>
          </div>
        </div>
        <div id="unity-warning"> </div>
        <div id="unity-footer">
          <div id="unity-webgl-logo"></div>
          <div
            id="unity-fullscreen-button"
            style={{
              background: '#eb1d36',
              display: 'flex',
              width: '50px',
              height: '50px',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              fontSize: '12px',
              borderRadius: '4px',
              textAlign: 'center'
            }}
          >
            Full Screen
          </div>
          <div id="unity-build-title">Tower Defence - Atlantis</div>
        </div>
      </div>
      <div
        style={{
          background: '#eb1d3680',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          fontSize: '14px',
          borderRadius: '4px',
          left: 0,
          right: 0,
          maxWidth: '1024px',
          height: '175px',
          margin: '0 auto',
          marginBottom: '16px',
          flexDirection: 'column',
          textAlign: 'center'
        }}
      >
        <p style={{ padding: '4px' }}>
          <b>Controles:</b> W, A, S, D e mouse.
        </p>
        <p style={{ padding: '4px' }}>
          <b>Objetivo:</b> Sobreviver a maior quantidade de waves possíveis.
        </p>
        <p style={{ padding: '4px' }}>
          <b>Como Jogar:</b> Construa os 3 tipos de colhedores para coletar todos os tipos de
          recursos, em seguida crie torres para poder se defender das waves.
        </p>
        <p style={{ padding: '4px' }}>
          <b>Dica 1:</b> Quando alguma da sua construção perde vida, ela pode ser reparada com Gold,
          basta passar o mouse em cima e um icone verde irá aparecer.
        </p>
        <p style={{ padding: '4px' }}>
          <b>Dica 2:</b> Quando mais depósitos perto do colhedor, maior o seu rendimento, ou seja, o
          mesmo vai produzir mais recursos por segundo. Caso posicione uma construção em um lugar
          que se arrepende, ao passar o mouse em cima do mesmo, um icone vermelho irá aparecer e
          parte dos recursos gostos retornarão.
        </p>
      </div>
      <Script
        dangerouslySetInnerHTML={{
          __html: `

          var container = document.querySelector("#unity-container");
          var canvas = document.querySelector("#unity-canvas");
          var loadingBar = document.querySelector("#unity-loading-bar");
          var progressBarFull = document.querySelector("#unity-progress-bar-full");
          var fullscreenButton = document.querySelector("#unity-fullscreen-button");
          var warningBanner = document.querySelector("#unity-warning");

          // Shows a temporary message banner/ribbon for a few seconds, or
          // a permanent error message on top of the canvas if type=='error'.
          // If type=='warning', a yellow highlight color is used.
          // Modify or remove this function to customize the visually presented
          // way that non-critical warnings and error messages are presented to the
          // user.
          function unityShowBanner(msg, type) {
            function updateBannerVisibility() {
              warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
            }
            var div = document.createElement('div');
            div.innerHTML = msg;
            warningBanner.appendChild(div);
            if (type == 'error') div.style = 'background: red; padding: 10px;';
            else {
              if (type == 'warning') div.style = 'background: yellow; padding: 10px;';
              setTimeout(function() {
                warningBanner.removeChild(div);
                updateBannerVisibility();
              }, 5000);
            }
            updateBannerVisibility();
          }

          var buildUrl = "Build";
          var loaderUrl = buildUrl + "/webgl.loader.js";
          var config = {
            dataUrl: buildUrl + "/webgl.data",
            frameworkUrl: buildUrl + "/webgl.framework.js",
            codeUrl: buildUrl + "/webgl.wasm",
            streamingAssetsUrl: "StreamingAssets",
            companyName: "DefaultCompany",
            productName: "rts_test",
            productVersion: "1.0",
            showBanner: unityShowBanner,
          };

          console.log(config);

          // By default Unity keeps WebGL canvas render target size matched with
          // the DOM size of the canvas element (scaled by window.devicePixelRatio)
          // Set this to false if you want to decouple this synchronization from
          // happening inside the engine, and you would instead like to size up
          // the canvas DOM size and WebGL render target sizes yourself.
          // config.matchWebGLToCanvasSize = false;

          if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            // Mobile device style: fill the whole browser client area with the game canvas:

            var meta = document.createElement('meta');
            meta.name = 'viewport';
            meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
            document.getElementsByTagName('head')[0].appendChild(meta);
            container.className = "unity-mobile";
            canvas.className = "unity-mobile";

            // To lower canvas resolution on mobile devices to gain some
            // performance, uncomment the following line:
            // config.devicePixelRatio = 1;

            unityShowBanner('WebGL builds are not supported on mobile devices.');
          } else {
            // Desktop style: Render the game canvas in a window that can be maximized to fullscreen:

            canvas.style.width = "1024px";
            canvas.style.height = "550px";
          }

          loadingBar.style.display = "block";

          var script = document.createElement("script");
          script.src = loaderUrl;
          script.onload = () => {
            createUnityInstance(canvas, config, (progress) => {
              progressBarFull.style.width = 100 * progress + "%";
            }).then((unityInstance) => {
              loadingBar.style.display = "none";
              fullscreenButton.onclick = () => {
                unityInstance.SetFullscreen(1);
              };
            }).catch((message) => {
              alert(message);
            });
          };
          document.body.appendChild(script);

        `
        }}
      />
    </>
  )
}

export default Game
