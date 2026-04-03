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
  const [tabContent, setTabContent] = useState(categories[0]);

  const handleTabClick = (category) => {
    setTabContent(category);
  };

  return (
    <>
      <div role="tablist">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            style={{
              backgroundColor:
                c.id === tabContent.id ? "yellowgreen" : "transparent",
            }}
            aria-selected={c.id === tabContent.id}
            onClick={() => handleTabClick(c)}
          >
            {c.name}
          </button>
        ))}
      </div>
      <ul role="tabpanel" aria-labelledby="product-tab">
        {tabContent.products.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </>
  );
}

export default TabComponent;
