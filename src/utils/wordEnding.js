export const getTransfersWordEnding = (transfersCount) => {
    if (transfersCount === 1) {
      return `${transfersCount} пересадка`;
    } else if (transfersCount >= 2 && transfersCount <= 4) {
      return `${transfersCount} пересадки`;
    } else {
      return `${transfersCount} пересадок`;
    }
  }