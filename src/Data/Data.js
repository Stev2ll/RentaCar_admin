// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilCar,
  UilChart,
  UilSetting,
  UilCreditCard,  
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Menu Princial",
  },
  {
    icon: UilClipboardAlt,
    heading: "Reservas",
  },
  {
    icon: UilUsersAlt,
    heading: "Clientes",
  },
  {
    icon: UilCar,
    heading: 'Autos'
  },
  {
    icon: UilChart,
    heading: 'Analisis'
  },
  {
    icon: UilCreditCard ,
    heading: 'Pagos'
  },
  {
    icon: UilSetting,
    heading: 'Configuración'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Ventas",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Ventas",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Ganancia",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Ganancia",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Gastos",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Gastos",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "Ha ordenado 1 camion por 1 dia",
    time: "Reciente",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "Devuelto el automovil",
    time: "Ayer",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "Ha ordenado 1 buseta para 3 días",
    time: "Recientemente",
  },
];
