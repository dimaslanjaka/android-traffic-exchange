/**
 * fix msisdn to append country 62
 * @param value phone number
 * @returns country appended msisdn
 */
export function msisdnAppendCountryID(value: string) {
  value = value.replace(/\D/g, '');
  if (value.startsWith('0')) return value.replace(/^0/gm, '62').trim();
  return value.trim();
}
