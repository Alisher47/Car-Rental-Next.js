import { koengsegg, nissan, rollsRoyce, SUV } from "@/app/common";

const CarRentalData = [
    { name: "Sport Car", value: 17439 },
    { name: "SUV", value: 9478 },
    { name: "Coupe", value: 18197 },
    { name: "Hatchback", value: 12510 },
    { name: "MPV", value: 14406 },
  ];

  const RecentTransactionData = [
    { name: "Nissan GT-R", price: '80$', date: '20 July', class: "Sports Car", image: nissan },
    { name: "Koegnigsegg", price: "99$", date: '19 July', class: "Sports Car", image: koengsegg },
    { name: "Rolls-Royce", price: "96$", date: '18 July', class: "Sports Car", image: rollsRoyce},
    { name: "CR-V", price: "80$", date: "17 July", class: "SUV", image: SUV},

  ];

  export {
    CarRentalData,
    RecentTransactionData
  }
  