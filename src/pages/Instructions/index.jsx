import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Instructions() {
  return (
    <>
      <div className={styles.text}>

        <h2><b>Instruções de Uso</b></h2>
        
        <p>
          <p>
          O aplicativo foi desenvolvido para auxiliar pessoas com deficiência visual a obter uma descrição 
          em áudio de qualquer imagem, de maneira simples, rápida e acessível.
          <br/ >
          Para melhor experiência, mantenha o leitor de tela ativado durante todo o uso.
          <br />
          A seguir, estão as funcionalidades e instruções de uso explicadas de forma acessível:
          <br /> 

          {/* Seção 1 */}
          <b>1. Descrição automática de imagens.</b>
          <br /> 
          Você pode enviar uma imagem da câmera ou da galeria, e o aplicativo irá gerar automaticamente uma 
          audiodescrição clara, permitindo que você compreenda o conteúdo visual da foto.
          <br /> 
          Assim que a imagem for enviada, o áudio começará a tocar automaticamente.
         
          <br />

         {/* Seção 2 */}
          <b>2. Captura de foto pela câmera.</b>
          <br />
          O botão "Abrir Câmera" inicia a câmera do dispositivo para tirar uma nova foto.
          <br />
          Ao abrir a câmera:
          <br />
          Aponte o celular para a direção do objeto ou cena que deseja fotografar.
          <br />
          Na parte inferior da tela está o botão "Tirar foto".
          <br />
          Ao lado direito está o botão "Alternar câmera", que troca entre a câmera frontal e a traseira.
          <br />
          Como tirar a foto?
          <br />
          Para usar a câmera traseira: basta pressionar o botão "Tirar foto".
          <br />
          Para uma selfie: pressione o botão "Alternar câmera" e depois o botão "Tirar foto".
          <br />
          Após a captura, pressione "OK".
          <br />
          A foto será enviada automaticamente para processamento e o áudio começará a ser reproduzido.
          <br />

         {/* Seção 3 */}
          <b>3. Upload de imagem da galeria.</b>
          <br />
          O botão "Abrir Galeria" permite escolher qualquer imagem salva no dispositivo.
          <br />
          Pressione "Abrir Galeria".
          <br />
          Navegue pela lista de imagens e selecione a foto desejada.
          <br />
          Caso necessário, peça ajuda de outra pessoa para localizar a imagem correta.
          <br />
          Assim que você selecionar a imagem, ela será enviada para processamento e a descrição em áudio será 
          tocada automaticamente.
        </p>

        </p>
      

        <div className={styles.return}>
          <Link to="/">
          <button aria-label="Voltar" className={styles.buttonStyle}>
            Voltar
          </button>
          </Link>
        </div>

      </div>

    </>
  );
}

export default Instructions;
