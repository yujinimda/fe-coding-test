const menuTree = [
  {
    id: 1,
    name: "Home",
    active: false,
    children: [
      { id: 2, name: "Dashboard", active: false, children: [] },
      { id: 3, name: "Reports", active: false, children: [] },
    ],
  },
  {
    id: 4,
    name: "Products",
    active: false,
    children: [
      { id: 5, name: "Electronics", active: true, children: [] },
      { id: 6, name: "Clothing", active: false, children: [] },
    ],
  },
];

/**
 * 메뉴 트리에서 특정 메뉴의 활성화 상태를 반환
 * @param {Array} menuTree - 메뉴 트리
 * @param {number} menuId - 찾을 메뉴 ID
 * @returns {boolean} 메뉴의 활성화 상태
 */
function isMenuActive(menuTree, menuId) {
  const find = (nodes) => {
    for (const menu of nodes) {
      if (menu.id === menuId) return menu.active;
      if (menu.children && menu.children.length > 0) {
        const result = find(menu.children);
        if (result !== undefined) return result;
      }
    }
    return undefined;
  };

  const result = find(menuTree);
  return result ?? false;
}

// TEST
console.log(isMenuActive(menuTree, 5)); // true (Electronics)
console.log(isMenuActive(menuTree, 2)); // false (Dashboard)
console.log(isMenuActive(menuTree, 99)); // false (존재하지 않는 ID)
