
async function OpenCamera() {
  return new Promise((resolve, reject) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg,image/png,image/heic,image/heif";
    
    input.setAttribute("capture", "camera");
   
    input.onchange = async (event) => {
      const file = event.target.files[0];
      if (!file) return reject("Nenhuma imagem selecionada");

      resolve(file);
    };

    input.click();
  });
}

export default OpenCamera;