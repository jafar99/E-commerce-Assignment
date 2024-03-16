import {
  SET_TSHIRT_STATE,
  SET_JEANS_STATE,
  SET_MOBILE_STATE,
  SET_EARPHONES_STATE,
  SET_MAC_STATE,
} from "../actions/actionTypes";

const initialState = {
  tshirtData: [
    {
      id: 1,
      name: "Blue T-shirt",
      price: 20,
      imageUrl:
        "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077",
      description: "Comfortable cotton blue T-shirt.",
    },
    {
      id: 2,
      name: "Red T-shirt",
      price: 25,
      imageUrl:
        "https://media.sivasdescalzo.com/media/catalog/product/F/T/FTAR60009-ALB_sivasdescalzo-Aries_Arise-MINI_PROBLEMO_SS_TEE-1664976129-52.jpg",
      description: "Stylish red T-shirt made from high-quality fabric.",
    },
    {
      id: 3,
      name: "Red T-shirt",
      price: 25,
      imageUrl:
        "https://images.meesho.com/images/products/285711749/uhuxj_512.webp",
      description: "Stylish red T-shirt made from high-quality fabric.",
    },
  ],
  shirtData: [
    {
      id: 1,
      name: "Blue T-shirt",
      price: 20,
      imageUrl:
        "https://assets.ajio.com/medias/sys_master/root/20230615/Xs7z/648b116042f9e729d74492c4/-473Wx593H-466278337-white-MODEL.jpg",
      description: "Comfortable cotton blue T-shirt.",
    },
    {
      id: 2,
      name: "Red T-shirt",
      price: 25,
      imageUrl:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/9/q/j/s-st27-vebnor-original-imagpgs4qcgdnh2c.jpeg?q=20&crop=false",
      description: "Stylish red T-shirt made from high-quality fabric.",
    },
    {
      id: 3,
      name: "Red T-shirt",
      price: 25,
      imageUrl:
        "https://images.meesho.com/images/products/285711749/uhuxj_512.webp",
      description: "Stylish red T-shirt made from high-quality fabric.",
    },
  ],
  jeansData: [
    {
      id: 1,
      name: "Slim Fit Jeans",
      price: 30,
      imageUrl:
        "https://imagescdn.planetfashion.in/img/app/product/7/795640-9350615.jpg?auto=format&w=494.40000000000003",
      description: "Trendy slim-fit jeans suitable for all occasions.",
    },
    {
      id: 2,
      name: "Regular Fit Jeans",
      price: 35,
      imageUrl:
        "https://images.meesho.com/images/products/269528394/801hu_512.webp",
      description: "Classic regular-fit jeans for a casual look.",
    },

    {
      id: 3,
      name: "Regular Fit Jeans",
      price: 35,
      imageUrl:
        "https://images.meesho.com/images/products/269528394/801hu_512.webp",
      description: "Classic regular-fit jeans for a casual look.",
    },
  ],
  mobileData: [
    {
      id: 1,
      name: "iPhone 12",
      price: 999,
      imageUrl:
        "https://cdn1.smartprix.com/rx-ipN4tnrld-w1200-h1200/pN4tnrld.jpg",
      description:
        "The latest iPhone model with advanced features and stunning design.",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      price: 899,
      imageUrl:
        "https://img.etimg.com/photo/msid-101297745,imgsize-63600/OnePlus11R5G.jpg",
      description:
        "Powerful Samsung Galaxy smartphone with cutting-edge technology.",
    },

    {
      id: 2,
      name: "Samsung Galaxy S21",
      price: 899,
      imageUrl:
        "https://motorolain.vtexassets.com/arquivos/ids/158499/motorola-g84-pdp-ecom-render-9-color-3-.png?v=638279707024600000",
      description:
        "Powerful Samsung Galaxy smartphone with cutting-edge technology.",
    },
  ],
  earphonesData: [
    {
      id: 1,
      name: "Apple AirPods Pro",
      price: 249,
      imageUrl:
        "https://www.jiomart.com/images/product/original/rvmowngzft/karimotech-i12-tws-bluetooth-earphone-touch-control-headphone-wireless-headset-earbud-white-product-images-orvmowngzft-p599113985-0-202303070928.jpg?im=Resize=(420,420)",
      description:
        "Premium wireless earphones with active noise cancellation and customizable fit.",
    },
    {
      id: 2,
      name: "Sony WH-1000XM4",
      price: 349,
      imageUrl:
        "https://m.media-amazon.com/images/I/61ijir6ozPL._AC_UF1000,1000_QL80_.jpg",
      description:
        "Top-of-the-line noise-canceling headphones with exceptional sound quality.",
    },

    {
      id: 3,
      name: "Sony WH-1000XM4",
      price: 349,
      imageUrl:
        "https://ae01.alicdn.com/kf/S845573edb71f4ac8874d3ad937cd475as.jpg_640x640Q90.jpg_.webp",
      description:
        "Top-of-the-line noise-canceling headphones with exceptional sound quality.",
    },
  ],
  macData: [
    {
      id: 1,
      name: "MacBook Air",
      price: 999,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0sVrP9rauEIK8tX6-EhlBbUPL6J3lTwLqIQ&usqp=CAU",
      description:
        "Thin and lightweight MacBook Air with powerful performance and long battery life.",
    },
    {
      id: 2,
      name: "MacBook Pro",
      price: 1299,
      imageUrl:
        "https://ik.imagekit.io/3dqckpw4d/upload/macbook_pro_m2_cto_Space_Grey1662197696m2CTO.png",
      description:
        "Professional-grade MacBook Pro with stunning Retina display and fast processors.",
    },
    {
      id: 3,
      name: "MacBook Pro",
      price: 1299,
      imageUrl:
        "https://ik.imagekit.io/3dqckpw4d/upload/macbook_pro_m2_cto_Space_Grey1662197696m2CTO.png",
      description:
        "Professional-grade MacBook Pro with stunning Retina display and fast processors.",
    },
  ],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TSHIRT_STATE:
      return {
        ...state,
        tshirtData: action.payload,
      };
    case SET_JEANS_STATE:
      return {
        ...state,
        jeansData: action.payload,
      };
    case SET_MOBILE_STATE:
      return {
        ...state,
        mobileData: action.payload,
      };
    case SET_EARPHONES_STATE:
      return {
        ...state,
        earphonesData: action.payload,
      };
    case SET_MAC_STATE:
      return {
        ...state,
        macData: action.payload,
      };
    default:
      return state;
  }
};

export default itemReducer;
