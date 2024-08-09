async function fetchImages() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "Loading images..."; // Show loading text

  try {
    // Mengambil data dari Random User API
    const response = await fetch("https://randomuser.me/api/?results=10");

    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }

    const data = await response.json();
    gallery.innerHTML = ""; // Clear loading text

    // Iterasi setiap pengguna dan tampilkan fotonya
    data.results.forEach((user) => {
      const imgElement = document.createElement("img");
      imgElement.src = user.picture.large; // Foto ukuran besar
      imgElement.alt = `${user.name.first} ${user.name.last}`;
      gallery.appendChild(imgElement);
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    gallery.innerHTML = "Failed to load images.";
  }
}
