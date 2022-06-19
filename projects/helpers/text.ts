export const getDateFromAndTo = (startDate: Date, endDate?: Date): string => {
  return `${getGBDate(startDate)} - ${endDate == null ? `Present` : `${getGBDate(endDate)}`}`;
};

export const getMonthsAndYears = (months: number): string => {
  if (months < 12) {
    return `${months} month${getPluralS(months)}`;
  } else {
    const years = Math.floor(months / 12);
    const monthsRemaining = months % 12;
    return `${years} year${getPluralS(years)} ${monthsRemaining} month${getPluralS(
      monthsRemaining,
    )}`;
  }
};

export const getLastWorkedOnOrOngoing = (lastWorkedOn?: Date): string => {
  return lastWorkedOn == null ? `ongoing` : `last worked on ${getGBDate(lastWorkedOn)}.`;
};

export const getPluralS = (number: number): string => {
  if (number > 1) {
    return 's';
  }
  return '';
};

export const getGBDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric',
  });
};

export const getGBPound = Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
}).format;
