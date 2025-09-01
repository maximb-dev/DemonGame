/**
 * @todo
 * @param index - индекс поля
 * @param boardSize - размер квадратного поля (в длину или ширину)
 * @returns строка - тип ячейки на поле:
 *
 * top-left
 * top-right
 * top
 * bottom-left
 * bottom-right
 * bottom
 * right
 * left
 * center
 *
 * @example
 * ```js
 * calcTileType(0, 8); // 'top-left'
 * calcTileType(1, 8); // 'top'
 * calcTileType(63, 8); // 'bottom-right'
 * calcTileType(7, 7); // 'left'
 * ```
 * */
export function calcTileType(index, boardSize) {
  return (
    checkTopFieldSide(index, boardSize) || 
    checkBottomFieldSide(index, boardSize) || 
    checkLeftFieldSide(index, boardSize) || 
    checkRightFieldSide(index, boardSize) || 
    'center'
  );
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}

function checkTopFieldSide(index, boardSize) {
  if (index < boardSize) {
    if (index === 0) {
      return 'top-left';
    }

    if (index === (boardSize - 1)) {
      return 'top-right';
    }

    return 'top';
  }
}

function checkBottomFieldSide(index, boardSize) {
  if (index >= (boardSize**2 - boardSize)) {
    if (index === (boardSize**2 - boardSize)) {
      return 'bottom-left';
    }

    if (index === (boardSize**2 - 1)) {
      return 'bottom-right';
    }

    return 'bottom';
  }
}

function checkLeftFieldSide(index, boardSize) {
  if (index % boardSize === 0) {
    return 'left';
  }
}

function checkRightFieldSide(index, boardSize) {
  if ((index + 1) % boardSize === 0) {
    return 'right';
  }
}