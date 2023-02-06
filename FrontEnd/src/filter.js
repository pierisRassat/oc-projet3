const filterPortfolio = categoryId => portfolio =>
  categoryId
    ? portfolio.filter(({ categoryId: id }) => id === categoryId)
    : portfolio

export default filterPortfolio
