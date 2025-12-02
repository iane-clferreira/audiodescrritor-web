import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faImage, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import styles from "./Home.module.css";
import OpenGalery from '../../Components/OpenGalery';
import { useState } from 'react';
import api from '../../config/configApi';
import OpenCamera from '../../Components/OpenCamera';
import { Link } from "react-router-dom";

function Home(){

const [descricao, setDescricao] = useState("O que você gostaria que eu descrevesse?");
const [_loading, _setLoading] = useState(false);
const [ariaLiveActive, setAriaLiveActive] = useState(true);
const [interacaoBloqueada, setInteracaoBloqueada] = useState(false);
const [botaoDesabilitado, setBotaoDesabilitado] = useState(false);
let loadingAudio = null;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


async function enviarImagem(file) {
  if (!file) return;
  
  setDescricao("");
  setAriaLiveActive(true);

  try {

    setBotaoDesabilitado(true);
    setDescricao("Processando imagem...");


    await delay(1000); 
    loadingAudio = new Audio("/cronometro.mp3");
    loadingAudio.loop = true;
    loadingAudio.play().catch(() => {});

    const formData = new FormData();
    formData.append("img", file); 
 

    const response = await api.post("/upload", formData, {
        responseType: "blob", 
    });
    
    // Cria URL temporária para o áudio
    const audioBlob = response.data;
    console.log(response.data)

    const audioUrl = URL.createObjectURL(audioBlob);

    
    if (loadingAudio) {
      loadingAudio.pause();
      loadingAudio.currentTime = 0;
      loadingAudio = null;
    }

    setAriaLiveActive(false);
    setInteracaoBloqueada(true);
    setBotaoDesabilitado(true);
    
    const audio = new Audio(audioUrl);
    audio.play().catch((err) => {
      console.warn("O navegador bloqueou o autoplay:", err);
    });

    audio.onended = () => {
      URL.revokeObjectURL(audioUrl);

      setAriaLiveActive(true);
      setInteracaoBloqueada(false);
      setBotaoDesabilitado(false);
      setDescricao("O que mais você gostaria que eu descrevesse?")

    };

    audio.onerror = () => {
      URL.revokeObjectURL(audioUrl);
      console.error("Erro ao reproduzir o áudio.");
      setBotaoDesabilitado(false);
      setInteracaoBloqueada(false);
      setDescricao("Erro ao reproduzir áudio.");
    };

    setDescricao("Descrição sendo reproduzida"); 

  } catch (error) {
    console.error("Erro ao enviar imagem:", error);
    await delay(5000); 

    if (loadingAudio) {
      loadingAudio.pause();
      loadingAudio.currentTime = 0;
    }

    setDescricao("Erro ao processar imagem, tente novamente");
    setBotaoDesabilitado(false);
    setInteracaoBloqueada(false);
   
    let msg3 = new SpeechSynthesisUtterance("Erro ao processar imagem, tente novamente");
    window.speechSynthesis.speak(msg3);
    
    await delay(8000); 

    setDescricao("O que mais você gostaria que eu descrevesse?")
    
  } finally {
    //setLoading(false);
  
  }
  
}

const abrirGaleria = async () => {
  try {
    const file = await OpenGalery(); //recebendo img da galeria
    await enviarImagem(file);
  } catch (error) {
    console.error("Erro ao abrir galeria:", error);
  }
};


const abrirCamera = async () => {
  try {
    const fileResult = await OpenCamera(); // Recebe img da câmera

    if (fileResult) {
      await enviarImagem(fileResult);

    } else {
      setDescricao("Captura de imagem cancelada.");
    }
  } catch (error) {
    console.error("Erro ao abrira a câmera:", error);
    setDescricao("Erro ao abrir câmera.");
  }
};
 
    return(
        <>
          <div className={styles.container}
          aria-hidden={interacaoBloqueada}
          style={{
            pointerEvents: interacaoBloqueada ? "none" : "auto",
            opacity: interacaoBloqueada ? 0.8 : 1
          }}>
       
            <h1 aria-live={ariaLiveActive ? "polite" : "off"} id="textoPrincipal">
              {descricao}
            </h1>
    
          </div>

          <footer className={styles.footerStyle}>

            <div className={styles.buttonStyle}> 
                <button onClick={abrirCamera} aria-label="Abrir câmera para tirar uma foto"
                  disabled={botaoDesabilitado}
                  aria-disabled={botaoDesabilitado}
                >
                  <FontAwesomeIcon icon={faCamera} className={styles.icon} /> 
                  <p>Tirar Foto</p>
            
                </button>
            </div>

            <div className={styles.buttonStyle}> 
              <Link to="/instrucoes">
                  <button aria-label="Consultar orientações de uso"
                    disabled={botaoDesabilitado}
                    aria-disabled={botaoDesabilitado}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} className={styles.icon} /> 
                    <p>Instruções de uso</p>
                  </button>
              </Link>
            </div>

            
            <div className={styles.buttonStyle}> 
                <button onClick={abrirGaleria} aria-label="Carregar foto da sua galeria"
                  disabled={botaoDesabilitado}
                  aria-disabled={botaoDesabilitado}
                >
                  <FontAwesomeIcon icon={faImage} className={styles.icon} /> 
                  <p>Abrir Galeria</p>
                </button>
            </div>

          </footer>
        </>
        

    )
}  
export default Home