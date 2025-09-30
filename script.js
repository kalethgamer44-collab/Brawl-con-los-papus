// Lista de imágenes desde internet
const imagenes = [
  "https://i.pinimg.com/736x/c8/49/a9/c849a909ef299bb70a99432a12eb7c95.jpg",
  "https://i.pinimg.com/736x/6f/d6/a8/6fd6a899cdf5708a86b55c160b9b8f5c.jpg",
  "https://i.pinimg.com/736x/d8/0f/cf/d80fcf1df02b973eb47cae969207f4f9.jpg",
  "https://i.pinimg.com/736x/27/91/7d/27917d76fec88cd79cf2f403fae897ef.jpg",
  "https://i.pinimg.com/736x/6d/45/07/6d450765e553b7c5d79fa39e6eea422f.jpg",
  "https://i.pinimg.com/736x/b4/56/01/b45601b4f7a34c3436ecf83852c35533.jpg",
  "https://i.pinimg.com/1200x/23/0c/5e/230c5e074461330613c680576c029cc8.jpg",
  "https://i.pinimg.com/736x/df/d4/1d/dfd41d8835afcca60edd319279e98776.jpg",
  "https://i.pinimg.com/736x/40/cc/22/40cc2226ddd32f05b41434ecd24725b9.jpg",
  "https://i.pinimg.com/736x/2c/7c/ef/2c7cefb9a132aaad5dcd5f10ebd457a7.jpg",
  "https://i.pinimg.com/736x/8d/b9/e6/8db9e690104e2964c37a85a6d0e7a3e4.jpg",
  "https://i.pinimg.com/736x/47/79/98/477998bd0d45797cb6d391d221100875.jpg",
  "https://i.pinimg.com/736x/75/5b/6b/755b6bfce77af854e180a1c403476aa9.jpg"
];

// Elegir una imagen aleatoria
const indice = Math.floor(Math.random() * imagenes.length);
document.getElementById("imagenAleatoria").src = imagenes[indice];

