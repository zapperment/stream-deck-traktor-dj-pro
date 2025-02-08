export function createControlChangeMessage(
  channel: number,
  control: number,
  value: number,
) {
  return [0xb0 | channel, control, value];
}
