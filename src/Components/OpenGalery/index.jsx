async function OpenGalery() {
    return new Promise((resolve, reject) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/jpeg,image/png,image/heic,image/heif";
  
      input.onchange = async (event) => {
        const file = event.target.files[0];
        if (!file){
          return reject("Nenhuma imagem selecionada");
        } 
        if (!input.accept.includes(file.type)) {

          return reject(`Tipo de arquivo inválido. Apenas imagens são permitidas.`);
        }
  
        resolve(file);
      };
  
      input.click();
    });
  }
  
  export default OpenGalery;