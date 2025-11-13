import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faImage } from '@fortawesome/free-solid-svg-icons'
import styles from "./Home.module.css";
import OpenGalery from '../../Components/OpenGalery';
import { useState } from 'react';
import api from '../../config/configApi';

function Home(){

const [descricao, setDescricao] = useState("O que você gostaria que eu descrevesse?");
const [_loading, setLoading] = useState(false);

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
async function enviarImagem(file) {
  if (!file) return;

  setDescricao("");
  setLoading(true);

  try {
    setDescricao("Processando imagem...");
    const formData = new FormData();
    formData.append("img", file);

    const response = await api.post("/upload", formData, {
     /* headers: { "Content-Type": "multipart/form-data" },*/
        responseType: "blob", 
    });

    // Cria URL temporária para o áudio
    const audioBlob = response.data;
    console.log(response.data)
    const audioUrl = URL.createObjectURL(audioBlob);


    const audio = new Audio(audioUrl);
    
    audio.play().catch((err) => {
      console.warn("O navegador bloqueou o autoplay:", err);
    });

    audio.onended = () => {
      URL.revokeObjectURL(audioUrl);
      setDescricao("O que você gostaria que eu descrevesse?")
    };

    audio.onerror = () => {
      URL.revokeObjectURL(audioUrl);
      console.error("Erro ao reproduzir o áudio.");
    };
    setDescricao("Descrição sendo reproduzida...");

  } catch (error) {
    console.error("Erro ao enviar imagem:", error);
    setDescricao("Erro ao processar imagem.");

    await delay(5000); 

    setDescricao("O que você gostaria que eu descrevesse?")

  } finally {
    setLoading(false);
  
  }
  
}

const abrirGaleria = async () => {
  try {
    const file = await OpenGalery(); //recebe img da galeria
    await enviarImagem(file);
  } catch (error) {
    console.error("Erro ao abrir galeria:", error);
  }
};
 
    return(
        <>
           <div className={styles.container}>
            <h1>{descricao}</h1>
           
           </div>

           <footer className={styles.footerStyle}>
            <div className={styles.buttonStyle}> 
                <button onClick={() => alert("Abrir Câmera")} aria-label="Abrir câmera para tirar uma foto">
                <FontAwesomeIcon icon={faCamera} className={styles.icon} /> 
                <p>Tirar Foto</p>
            
                </button>
            </div>
            
            <div className={styles.buttonStyle}> 
                <button onClick={abrirGaleria} aria-label="Carregar foto">
                <FontAwesomeIcon icon={faImage} className={styles.icon} /> 
                <p>Abrir Galeria</p>
                </button>
            </div>
           </footer>
        </>
        

    )
}  
export default Home