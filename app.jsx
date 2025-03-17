fetch('data.json')
  .then(response => response.json())
  .then(data => {
    window.history.scrollRestoration = "manual";
    
    const contenedor = document.getElementById('informacion-climatica');
    const consejosContainer = document.getElementById("consejos-container");

    
    data.informacion_climatica.forEach(item => {
      
      const div = document.createElement('div');
      div.classList.add('info-item');
      
      const titulo = document.createElement('h3');
      titulo.textContent = item.titulo;
      
      const descripcion = document.createElement('p');
      descripcion.textContent = item.descripcion;

      
      div.appendChild(titulo);
      div.appendChild(descripcion);
      contenedor.appendChild(div);

      data.consejos.forEach(consejo => {
        const consejoDiv = document.createElement("article");
  
        consejoDiv.innerHTML = `
          <h3>${consejo.titulo}</h3>
          <p>${consejo.descripcion}</p>
          <img src="${consejo.imagen}" alt="${consejo.titulo}" class="consejo-img">`;
  
        consejosContainer.appendChild(consejoDiv);
      });
    })
    })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));