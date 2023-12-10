//if (document.title === 'Produkter') {
  // den här koden kommer bara att synas på sidan om mina produkter/donuts.


let donuts = [
    {
      name: 'Geggamoja',
      price: 10,
      amount: 0,
      category: 'Choklad', 
      img: {
        src: 'images/donut-1.png',
        alt: 'donut', 
        width: '100',
        height: '100',
      },
      rating: 4.5,
      alt: 'en choklad donut med socker pärlor',
    },
    {
      name: 'Paprika & virus',
      price: 13,
      amount: 0,
      category: 'Strössel',
      img: {
        src: 'images/donut-3.png',
        alt: 'donut', 
        width: '100',
        height: '100',
      },
      rating: 3,
      alt: 'en apelsin donut med strössel',
    },
    {
      name: 'Tvättmedel',
      price: 400,
      amount: 0,
      category: 'Fruktig',
      img: {
        src: 'images/donut-5.png',
        alt: 'donut', 
        width: '100',
        height: '100',
      },
      rating: 3.5,
      alt: 'en blåbärs glaserad donut med stjärn strössel',
    },
    {
      name: 'Välling & virus ',
      price: 52,
      amount: 0,
      category: 'Strössel',
      img: {
        src: 'images/donut-7.png',
        alt: 'donut', 
        width: '100',
        height: '100'
      },
      rating: 5,
      alt: 'en vit-choklad donut med strössel',
    },
    {
      name: 'Ful trädgård',
      price: 141,
      amount: 0,
      category: 'Fruktig',
      img: {
        src: 'images/donut-12.png',
        alt: 'donut', 
        width: '100',
        height: '100'
      },
      rating: 5,
      alt: 'en päron donut med blom strössel',
    },
    {
      name: 'Äcklig tortilla',
      price: 49,
      amount: 0,
      category: 'Choklad',
      img: {
        src: 'images/donut-13.png',
        alt: 'donut', 
        width: '100',
        height: '100'
      },
      rating: 5,
      alt: 'en vit-ckoklad donut med choklad kristyr',
    },
    {
      name: 'Älg bajs',
      price: 54,
      amount: 0,
      category: 'Choklad',
      img: {
        src: 'images/donut-15.png',
        alt: 'donut', 
        width: '100',
        height: '100'
      },
      rating: 5,
      alt: 'en choklad donut med choklad kristyr',
    },
    {
      name: 'Hallonballe',
      price: 34,
      amount: 0,
      category: 'Fruktig',
      img: {
        src: 'images/donut-18.png',
        alt: 'donut', 
        width: '100',
        height: '100'
      },
      rating: 5,
      alt: 'en hallon glaserd donut med socker kristyr',
    },
    {
      name: 'Apelsinkrokodil',
      price: 231,
      amount: 0,
      category: 'Strössel',
      img: {
        src: 'images/donut-4.png',
        alt: 'donut', 
        width: '100',
        height: '100'
      },
      rating: 5,
      alt: 'en apelsin donut med strössel',
    },
    {
      name: 'Rosa golfbana',
      price: 736,
      amount: 0,
      category: 'Fruktig',
      img: {
        src: 'images/donut-9.png',
        alt: 'donut', 
        width: '100',
        height: '100'
      },
      rating: 5,
      alt: 'en hallon donut med sockerpärlor',
    },
  ];


// filter knappar

const filterContainer = document.querySelector('#filter');

// Extract unique categories, names, ratings, and prices
const uniqueCategories = [...new Set(donuts.map(donut => donut.category))];
const uniqueNames = [...new Set(donuts.map(donut => donut.name))];
const uniqueRatings = [...new Set(donuts.map(donut => donut.rating))];
const uniquePrices = [...new Set(donuts.map(donut => donut.price))];
let originalDonuts = [...donuts];

// Function to generate filter buttons
function generateFilterButtons(property) {
  return `<li><button class="filter-btn" data-filter="${property}">${property}</button></li>`;
}

// Generate buttons for each property
const allButton = generateFilterButtons('Alla');
const categoryButton = generateFilterButtons('Kategori');
const nameButton = generateFilterButtons('Namn');
const ratingButton = generateFilterButtons('Betyg');
const priceButton = generateFilterButtons('Pris');

// Combine all buttons and update the HTML
const allButtons = `<ul> ${allButton}${ratingButton}${categoryButton}${nameButton}${priceButton}</ul>`;
filterContainer.innerHTML = allButtons;

// Event listener for button clicks (you can handle filtering logic here)
filterContainer.addEventListener('click', event => {
  const button = event.target;
  const filterType = button.getAttribute('data-filter');
  console.log(`Filter by ${filterType}`);
  // Add your filtering logic here

  let filteredDonuts = donuts; // Initialize with the original array of donuts

  switch (filterType) {
    case 'Alla': 
      donuts = [...originalDonuts];
      printDonuts();
      break;
      
    // Filter by category
    case 'Kategori':
      donuts.sort((a, b) => {
        const categoryA = a.category.toUpperCase();
        const categoryB = b.category.toUpperCase();
        return (categoryA < categoryB) ? -1 : (categoryA > categoryB) ? 1 : 0;
      });
      printDonuts();
      break;

    case 'Namn':
      // Filter by name
      donuts.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
      });
      printDonuts();
      break;

    case 'Betyg':
      // Filter by rating
      donuts.sort((a, b) => {
        const ratingA = a.rating;
        const ratingB = b.rating;
        return ratingA - ratingB;
      });
      printDonuts();
      break;

    case 'Pris':
      // Filter by price
      donuts.sort((a, b) => {
        const priceA = a.price;
        const priceB = b.price;
        return priceA - priceB;
      });
      printDonuts();
      break;

    default:
      // No valid filter type, do nothin
      printDonuts();
      break;

  }

  // Apply sorting logic (if needed)
  const sortedFilteredDonuts = filteredDonuts.sort((donut1, donut2) => donut1.category.localeCompare(donut2.category));

  // Update your UI or perform further actions with the sorted and filtered donuts
  console.log(sortedFilteredDonuts);
  
});



// alla donuts


const container = document.querySelector('#donuts');
const cartHtmlContainer = document.querySelector('#cart', '#summary');
const today = new Date();

let slownessTimeout = setTimeout(stupidCustomerMessage, 1000 * 60 * 15);

function stupidCustomerMessage() {
  alert('Din beställning har gått ut');
}

function getPriceMultiplier() {
  if (today.getDay() === 2 && today.getHours() >= 15 && today.getDay() === 1 && today.getHours() <= 3) {
    return 1.15;
  }
  return 1;
}

function printDonuts() {
  container.innerHTML = '';

  let priceIncrease = getPriceMultiplier();

  for (let i = 0; i < donuts.length; i++) {
    container.innerHTML +=
      `<section class="each-donut">
        <div id="donut-${i}" class="donut-image">
          <img class="image" src="${donuts[i].img.src}" alt="${donuts[i].alt}">
        </div>
        <div class="donut-info">
          <div class="name-buttons">
            <h2>${donuts[i].name}</h2>
            <div class="buttons">
              <button class="decrease" id="decrease-${i}" aria-label="en knapp för att minska antal donuts som läggs till i kundvagn">-</button>
              <p> Antal: ${donuts[i].amount}</p>
              <button class="increase" id="increase-${i}" aria-label="en knapp för att öka antal donuts som läggs till i kundvagn">+</button>
            </div>
          </div>
          <p class="price"> Pris: ${donuts[i].price * priceIncrease} kr</p>
          <p class="rating"> Betyg: ${donuts[i].rating}</p>
          <p class="category"> Kategori: ${donuts[i].category}</p>
        </div>
      </section>`;
    }

    const increaseButtons = Array.from(document.querySelectorAll('.increase'));
    for (let i = 0; i < increaseButtons.length; i++) {
      increaseButtons[i].addEventListener('click', increaseAmount);
    }

    const decreaseButtons = document.querySelectorAll('.decrease');
    for (let i = 0; i < decreaseButtons.length; i++) {
      decreaseButtons[i].addEventListener('click', decreaseAmount);
    }

    printCartDonuts();
    
}

printDonuts();



//plus knapp
function increaseAmount(e) {
  const index = e.target.id.replace('increase-', '');

  donuts[index].amount += 1;

  container.innerHTML = '';

  printDonuts();   
}
//minus knapp
function decreaseAmount(e) {
    let index = e.target.id.replace('decrease-', '');
    if (donuts[index].amount <= 0) {
      donuts[index].amount = 0;
    } else {
      donuts[index].amount -= 1;
    }
    
    container.innerHTML = '';

    printDonuts();

}

function printCartDonuts() {
  cartHtmlContainer.innerHTML = '';
    
  
  let sum = 0;
  let orderedDonutAmount = 0;
  let msg = '';
  let priceIncrease = getPriceMultiplier();

  
 

  donuts.forEach(donuts => {
    orderedDonutAmount += donuts.amount;

    

    if (donuts.amount > 0) {
      let donutPrice = donuts.price;
      if(donuts.amount >= 10) {
        donutPrice *= 0.9;
      }
      const adjustedDonutPrice = donutPrice * priceIncrease;

      sum += donuts.amount * adjustedDonutPrice;
      cartHtmlContainer.innerHTML += `
      <article class="cart-donut">
        <img src="${donuts.img.src}" alt="${donuts.alt}">s
        <div class="cart-info">
          <h3>${donuts.name}</h3>
          <span> Antal: ${donuts.amount}</span>
          <span> summa: ${Math.round (donuts.amount * adjustedDonutPrice)} kr</span>
        </div>
      </article>
      `;
    }
  });

  if (sum <= 0) {
    return;
  }

  // 10% rabatt på måndagar.
  if (today.getDay() === 1) {
    sum *= 0.9;
    msg += '<p class="summary"> Måndagsrabatt: 10% på hela beställningen</p>';
  }

  
  cartHtmlContainer.innerHTML += `
      <div class="sum">
        <p class="summary">Totala summa: ${Math.round (sum)}kr </p>
        <div> ${msg} </div>
      </div>
      `;

  //Om kunden beställer totalt mer än 15 munkar så blir frakten gratis. 
  //I annat fall är fraktsumman 25 kr plus 10% av totalbeloppet i varukorgen.
  if (orderedDonutAmount > 15) {
    cartHtmlContainer.innerHTML += '<p class="summary">Frakt: 0kr </p>';
  } else {
    cartHtmlContainer.innerHTML += `<p class="summary">Frakt: ${Math.round (25 + (0.1 * sum))} kr </p>`;
  }
  
}

printCartDonuts();

printDonuts();


//}; // slutet av sidan med donuts

//--------------------------------------------------------------

//cart

//if (document.title === 'Varukorg') {
  // den här koden kommer bara synas på sidan om varukorg.

const infoContainer = document.querySelector('#customer-info');



if (infoContainer !== null) {
  // Use innerHTML to set HTML content
  infoContainer.innerHTML =
  `<label>
    <span>Förnamn:</span>
    <input type="text" placeholder="Anton" id="firstname">

    <span>Efternamn:</span>
    <input type="text" placeholder="Schyberg" id="firstname">

    <span>Adress:</span>
    <input type="text" placeholder="Skitgatan 12" id="firstname">

    <span>Postnummer:</span>
    <input type="number" placeholder="13 377" id="firstname">

    <span>Postort:</span>
    <input type="text" placeholder="Skitborg" id="firstname">

    <span>Ev. portkod:</span>
    <input type="number" placeholder="420" id="firstname">

    <span>Telefon (mobil):</span>
    <input type="number" placeholder="133742069" id="firstname">

    <span>E-postadress:</span>
    <input type="text" placeholder="elon@mushroom.com" id="firstname">
  </label>`;
} else {
  console.error('Output container not found.');
}

//betalning

const cardInvoiceRadios = Array.from(document.querySelectorAll('input[name="payment-option"]'));
const inputs = [
  document.querySelector('#creditCardNumber'),
  document.querySelector('#creditCardYear'),
  document.querySelector('#creditCardMonth'),
  document.querySelector('#creditCardCvc'),
  document.querySelector('#personalID')
];

const invoiceOption = document.querySelector('#invoice');
const cardOption = document.querySelector('#card');
const orderBtn = document.querySelector('#orderBtn');
const creditCardNumber = document.querySelector('#creditCardNumber');
const creditCardYear = document.querySelector('#creditCardYear');
const creditCardMonth = document.querySelector('#creditCardMonth');
const creditCardCvc = document.querySelector('#creditCardCvc');

// Default options
let selectedPaymentOption = 'card';

// REGEX
const personalIdRegEx = new RegExp(/^(\d{10}|\d{12}|\d{6}-\d{4}|\d{8}-\d{4}|\d{8} \d{4}|\d{6} \d{4})/);
const creditCardNumberRegEx = new RegExp(/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/); // MasterCard
const credidCardMonthRegEx = new RegExp(/^(0[1-9]|1[0-2])/);
const credidCardYearRegEx = new RegExp(/^\d{4}$/);


// Add event listeners
inputs.forEach(input => {
  input.addEventListener('focusout', activateOrderButton);
  input.addEventListener('change', activateOrderButton);
});

creditCardNumber.addEventListener('input', activateOrderButton);
creditCardYear.addEventListener('input', activateOrderButton);
creditCardMonth.addEventListener('input', activateOrderButton);
creditCardCvc.addEventListener('input', activateOrderButton);

cardInvoiceRadios.forEach(radioBtn => {
  radioBtn.addEventListener('change', switchPaymentMethod);
});


// Switches between invoice payment method and
//card payment method. Toggles their visibility.
 
function switchPaymentMethod(e) {
  selectedPaymentOption = e.target.value;
}

function isPersonalIdNumberValid() {
  return personalIdRegEx.exec(personalID.value);
}

function checkboxSelected() {
  let checkbox = document.querySelector('#privpoli');

  if (checkbox && checkbox.type === "checkbox") {
    return checkbox.checked;
  } else {
    console.log('knapp är inte klickad');
    return false;
  }
}


/**
 * Activate order button if all fields are
 * correctly filled.
 */
function activateOrderButton() {
  orderBtn.setAttribute('disabled', '');

  if (selectedPaymentOption === 'invoice' && isPersonalIdNumberValid()) {
    orderBtn.removeAttribute('disabled');
  } else if (selectedPaymentOption === 'invoice' && !isPersonalIdNumberValid()) {
    orderBtn.setAttribute('disabled', 'disabled');
    
  }
  
  if (selectedPaymentOption === 'card') {
    // Check card number
    if (creditCardNumberRegEx.exec(creditCardNumber.value) === null) {
      console.log('activateOrderButton called');
      return;
    }

    // Check card year
    let year = Number (creditCardYear.value);
    const today = new Date();
    const shortYear = Number(String(today.getFullYear()).substring(2));

    
    if (year > shortYear + 2 || year < shortYear) {
      return;
    }
    
    /*
    if (credidCardYearRegEx.exec(creditCardYear.value) === null) {
      console.log('activateOrderButton called');
      return;
    } 
    */

    // TODO: Fixa månad, obs. "padStart" med 0
    let month = Number(creditCardMonth.value);
    if (month < 1 || month > 12) {
      return;
    }
    

    // Check card CVC
    if (creditCardCvc.value.length !== 3) {
      return;
    }
    

    // check if terms and conditions is checked
    if (!checkboxSelected()) {
      orderBtn.setAttribute('disabled', 'disabled');
      return;
    } else {
      orderBtn.removeAttribute('disabled');
    }
    
  }
  
}

printCartDonuts();

printDonuts();
//}

