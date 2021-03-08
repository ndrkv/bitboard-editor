/* global BigInt */

/**
 * Since Number.MAX_SAFE_INTEGER is (2^53 - 1), we need to use BigInt to work with 64-bit numbers
 */

export function bin2hex(s) {
  return BigInt("0b" + clean(s)).toString(16);
}

export function hex2bin(s) {
  return BigInt("0x" + clean(s)).toString(2);
}

function clean(s) {
  return s.toLowerCase().replace(/[^0-9abcdef]/g, "") || "0";
}
