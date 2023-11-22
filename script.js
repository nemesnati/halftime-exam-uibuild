document.querySelector("#root").insertAdjacentHTML(
  "beforeend",
  `<form>
      <h1>Visszajelzés</h1>
      <input type="text" placeholder="Tárgy" />
      <textarea placeholder="Megjegyzés"></textarea>
      
    <div class="first">
      <input type="checkbox" />
      <p>Elolvastam és elfogadom az <p class="underline">Adatkezelési Tájékoztatót.</p> </p>
    </div>
    <div class="second">
      <input type="checkbox" />
      <p>Szeretnék hírlevelet kapni.</p>
    </div>
      <button>MENTÉS</button> 
    </form>
  `
);
