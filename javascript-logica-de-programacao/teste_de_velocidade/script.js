const vehicle1 = prompt("Enter name vehicle1:");
const speedTestV1 = parseFloat(prompt("Enter speed vehicle1:"));

const vehicle2 = prompt("Enter name vehicle2:");
const speedTestV2 = parseFloat(prompt("Enter speed vehicle2:"));

if (speedTestV1 > speedTestV2) {
  alert(vehicle1 + " is faster than the " + vehicle2);
} else if (speedTestV1 < speedTestV2) {
  alert(vehicle1 + " is less fast than the " + vehicle2);
} else if (speedTestV2 > speedTestV1) {
  alert(vehicle2 + " is faster than the " + vehicle1);
} else if (speedTestV2 < speedTestV1) {
  alert(vehicle2 + " is less fast than the " + vehicle1);
} else {
  alert(vehicle1 + " and " + vehicle2 + " have the same speed!");
}
