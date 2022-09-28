export interface Currency {
  id: string;
  currencyCode: string;
  currencySymbol: string;
}

export const uniqueChecker = (arr: Currency[], val?: string) => {
  const userExists = arr.some((curr) => {
    return curr.currencyCode === val?.toUpperCase();
  });
  return !userExists;
};
