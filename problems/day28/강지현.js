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
  for (const menu of menuTree) {
    // 1. 현재 메뉴 ID가 일치하면 → active 반환
    if (menu.id === menuId) {
      return menu.active;
    }

    // 2. children이 있으면 → 재귀 호출
    if (menu.children.length > 0) {
      const result = isMenuActive(menu.children, menuId);
      // result가 있으면 → 반환
      if (result !== false) {
        return result;
      }
    }
  }
  // 3. 못 찾으면 → false 반환
  return false;
}

// TEST
console.log(isMenuActive(menuTree, 5)); // true (Electronics)
console.log(isMenuActive(menuTree, 2)); // false (Dashboard)
console.log(isMenuActive(menuTree, 99)); // false (존재하지 않는 ID)
