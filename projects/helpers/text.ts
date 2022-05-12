export const getDateFromAndTo = (startDate: Date, endDate?: Date): string => {
  return `${new Date(startDate).toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric',
  })} - ${
    endDate == null
      ? `Present`
      : `${endDate.toLocaleDateString('en-GB', {
          month: 'long',
          year: 'numeric',
        })}`
  }`;
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
  return lastWorkedOn == null
    ? `ongoing`
    : `last worked on ${lastWorkedOn.toLocaleDateString('en-GB', {
        month: 'long',
        year: 'numeric',
      })}.`;
};

export const getPluralS = (number: number): string => {
  if (number > 1) {
    return 's';
  }
  return '';
};
