import { GetLabeltextInterface, labels as starLabels } from "../contants";

/**
 * A function that returns a custom label for rating component
 * @param params an object of value and labels where
 * @param params.value is the value of rating
 * @param params.label is the labels of rating to be used
 */
export function getLabelText({
  value,
  labels = starLabels
}: GetLabeltextInterface): string {
  return `${value} Star${Number(value) !== 1 ? "s" : ""}, ${labels[value]}`;
}
