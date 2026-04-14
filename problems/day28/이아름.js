const menuTree = [
  {
    id: 1,
    name: "Home",
    active: true,
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

function isMenuActive(menuTree, menuId) {
  // 재귀로 풀이하기 > 함수를 함수 내부에서 호출하기
  // 해당하는 menuId의 active 여부를 표시해야함

  for (const menu of menuTree) {
    if (menu.id === menuId) {
      return menu.active;
    }

    if (menu.children && menu.children.length > 0) {
      const childrenResult = isMenuActive(menu.children, menuId);

      // 단순히 존재 여부가 아니라 undefined가 아닌지를 체크해야 함
      if (childrenResult !== undefined) {
        return childrenResult;
      }
    }
  }
}

console.log("활성화 상태:", isMenuActive(menuTree, 1));
console.log("활성화 상태:", isMenuActive(menuTree, 5));
console.log("활성화 상태:", isMenuActive(menuTree, 6));
