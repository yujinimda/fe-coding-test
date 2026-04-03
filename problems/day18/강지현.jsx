import { useState } from "react";

const categories = [
  { id: 1, name: "Electronics", products: ["Laptop", "Smartphone", "Camera"] },
  { id: 2, name: "Clothing", products: ["T-shirt", "Jeans", "Jacket"] },
  {
    id: 3,
    name: "Home Appliances",
    products: ["Refrigerator", "Microwave", "Washing Machine"],
  },
];

function TabComponent() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <div>
      {/* 탭 버튼들 */}
      <div>
        {categories.map((category) => (
          <button key={category.id} onClick={() => setActiveTab(category.id)}>
            {category.name}
          </button>
        ))}
      </div>

      {/* 선택된 탭의 상품 목록 */}
      <ul>
        {categories
          .find((category) => category.id === activeTab)
          ?.products.map((product) => (
            <li key={product}>{product}</li>
          ))}
      </ul>
    </div>
  );
}

export default TabComponent;
