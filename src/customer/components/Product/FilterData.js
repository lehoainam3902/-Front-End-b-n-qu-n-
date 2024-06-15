export const color = [
  "Trắng",
  "Đen",
  "Hồng",
  "Đỏ",
  "Vàng",
  "Xanh lá",
  "Xanh da trời",
  "Tím",
];

export const filters = [
  {
    id: "color",
    name: "Màu sắc",
    options: [
      { value: "trắng", label: "Trắng" },
      { value: "đen", label: "Đen" },
      { value: "hồng", label: "Hồng" },
      { value: "đỏ", label: "Đỏ" },
      { value: "vàng", label: "Vàng" },
      { value: "xanh lá", label: "Xanh lá" },
      { value: "xanh da trời", label: "Xanh da trời" },
      { value: "tím", label: "Tím" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
];

export const singleFilters = [
  {
    id: "price",
    name: "Giá",
    options: [
      { value: "0-149999", label: "0 -> 149999" },
      { value: "150000-249999", label: "150000 -> 249999" },
      { value: "250000-349999", label: "250000 -> 349999" },
      { value: "350000-499999", label: "350000 -> 499999" },
      { value: "500000-1000000", label: "500000 -> 1000000" },
    ],
  },
  {
    id: "discount",
    name: "% Giảm giá",
    options: [
      { value: "10%", label: "10% Trở lên" },
      { value: "20%", label: "20% Trở lên" },
      { value: "30%", label: "30% Trở lên" },
      { value: "40%", label: "40% Trở lên" },
      { value: "50%", label: "50% Trở lên" },
      { value: "60%", label: "60% Trở lên" },
      { value: "70%", label: "70% Trở lên" },
      { value: "80%", label: "80% Trở lên" },
    ],
  },
  {
    id: "stock",
    name: "Tình trạng hàng",
    options: [
      { value: "in_stock", label: "Còn hàng" },
      { value: "out_of_stock", label: "Hết hàng" },
    ],
  },
];
export const sortOption = [
  { name: "Price: Low To High", query: "price_low", current: false },
  { name: "Price: High To Low", query: "price_high", current: false },
];
