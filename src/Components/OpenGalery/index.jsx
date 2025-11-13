async function OpenGalery() {
    return new Promise((resolve, reject) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
  
      input.onchange = async (event) => {
        const file = event.target.files[0];
        if (!file) return reject("Nenhuma imagem selecionada");
  
        resolve(file);
      };
  
      input.click();
    });
  }
  
  export default OpenGalery;