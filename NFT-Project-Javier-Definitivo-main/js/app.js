const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2'); 

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

fetch('https://api.opensea.io/api/v1/assets?order_by=pk&order_direction=desc&limit=6&include_orders=true')
  .then(response => response.json())
  .then(data => generateImage(data.assets))

function generateImage(data) {
     const html = data.map(item =>`
      <img src='${item.image_url}' alt>
      <p>Collection Name: ${item.name}</p>
      `);
      card1.innerHTML = html[0];
      card2.innerHTML = html[1];
} 
// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------

