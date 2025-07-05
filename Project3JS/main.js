const cards = document.querySelector("#cards");
const url = "https://northwind.vercel.app/api/suppliers";
const search = document.querySelector("#search");
const cobject = document.querySelector("#cobject");
const cancelbtn = document.querySelector("#cancelbtn");
const savebtn = document.querySelector("#savebtn");
const modal = document.querySelector("#cmodal");
const cform = document.querySelector("#cform");
let editingId = null;
cobject.addEventListener("click", () => {
  const modal = document.querySelector("#cmodal");
  modal.classList.remove("hidden");
});
cancelbtn.addEventListener("click", () => {
  const modal = document.querySelector("#cmodal");
  modal.classList.add("hidden");
});
cform.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    companyname,
    contactname,
    contacttitle,
    streetaddress,
    city,
    country,
  } = cform;
  const NewCompany = {
    companyName: companyname.value,
    contactName: contactname.value,
    contactTitle: contacttitle.value,
    address: {
      street: streetaddress.value,
      city: city.value,
      country: country.value,
    },
  };

  const method = editingId ? "PUT" : "POST";
  const endpoint = editingId ? `${url}/${editingId}` : url;

  fetch(endpoint, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(NewCompany),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      modal.classList.add("hidden");
      cform.reset();
      editingId = null;
      fetch(url)
        .then((res) => res.json())
        .then((data) => renderdata(data));
    });
});

function renderdata(data) {
  cards.innerHTML = ``;
  data.forEach((supplier) => {
    cards.innerHTML += `
      <div class="p-[30px] border-[1px] mb-4">
        <h2 class="text-black font-bold text-[20px]">${
          supplier.companyName || "Melumat yoxdur"
        }</h2>
        <p>Contact name: ${supplier.contactName || "Melumat yoxdur"}</p>
        <p>Contact Title: ${supplier.contactTitle || "Melumat yoxdur"}</p>
        <p>City: ${supplier.address.city || "Melumat yoxdur"}</p>
        <p>Country: ${supplier.address.country || "Melumat yoxdur"}</p>
        <div>
          <button class="mr-[10px]" onclick="deleteCompany(${
            supplier.id
          })"><i class="fa-solid fa-trash"></i></button>
          <button onclick="editCompany(${
            supplier.id
          })"><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
      </div>
    `;
  });
}
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    renderdata(data);
    search.addEventListener("input", () => {
      const val = search.value.toLowerCase();
      const filtered = data.filter((item) =>
        item.companyName.toLowerCase().includes(val)
      );
      renderdata(filtered);
    });
  });
function deleteCompany(id) {
  console.log(id, typeof id);
  fetch(`${url}/${id}`, {
    method: "delete",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          renderdata(data);
        });
    });
}
function editCompany(id) {
  modal.classList.remove("hidden");
  editingId = id;
  fetch(`${url}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const { companyName, contactName, contactTitle, address } = data;
      cform.companyname.value = companyName;
      cform.contactname.value = contactName;
      cform.contacttitle.value = contactTitle;
      cform.streetaddress.value = address.street;
      cform.city.value = address.city;
      cform.country.value = address.country;
    });
}
