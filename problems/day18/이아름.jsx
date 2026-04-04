import { useRef, useState } from "react";

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
  const tabRefs = useRef([]);

  const handleTabClick = (category) => {
    setTabContent(category);
  };

  const handleKeydown = (e, index) => {
    const { key } = e;
    const len = categories.length;
    if (key !== "ArrowRight" && key !== "ArrowLeft") {
      return;
    }

    e.preventDefault();

    let nextIndex;
    if (key === "ArrowRight") {
      nextIndex = (index + 1) % len;
    } else {
      nextIndex = (index - 1 + len) % len;
    }

    setTabContent(categories[nextIndex]);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <>
      <div role="tablist">
        {categories.map((c, index) => (
          <button
            key={c.id}
            ref={(el) => (tabRefs.current[index] = el)}
            id={"tab-" + c.id}
            type="button"
            role="tab"
            aria-controls="product-panel"
            style={{
              backgroundColor:
                c.id === tabContent.id ? "yellowgreen" : "transparent",
            }}
            aria-selected={c.id === tabContent.id}
            tabIndex={c.id === tabContent.id ? 0 : -1}
            onKeyDown={(e) => handleKeydown(e, index)}
            onClick={() => handleTabClick(c)}
          >
            {c.name}
          </button>
        ))}
      </div>
      <ul
        id="product-panel"
        role="tabpanel"
        aria-labelledby={"tab-" + tabContent.id}
      >
        {tabContent.products.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </>
  );
}

export default TabComponent;
