const form = document.querySelector('#interes-form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', e => {
  e.preventDefault();

  let dinero = parseFloat(document.querySelector('#dinero').value);
  let days = Number(document.querySelector('#days').value);
  let rate = parseFloat(document.querySelector('#rate').value);

  if (isNaN(dinero) || isNaN(days) || isNaN(rate)) {
    resultado.innerHTML = '<p id="error">Por favor ingrese valores numéricos en todos los campos.</p>';
  } else {
    let balance = parseFloat(dinero);

    for (let i = 0; i < days; i++) {
      const dailyRate = rate / 365;  // divide el porcentaje de ganancia en 365 días (un año)
      const interes = parseFloat(balance * dailyRate / 100);
      //()
      balance += parseFloat(interes);
    }

    let ganancia = balance - dinero;
    ganancia = ganancia.toFixed(2);

    resultado.innerHTML = `
      <p>El interés completo sobre ${dinero.toFixed(2)} pesos durante ${days} días al ${rate}% anual es:</p>
      <h2>Ganancia: ${ganancia} pesos</h2>
      <h2>Total: ${balance.toFixed(2)} pesos</h2>
    `;
  }
});
