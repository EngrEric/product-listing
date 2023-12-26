export type LabelType = { [key: string]: string };

export interface GetLabeltextInterface {
  value: number;
  labels?: LabelType;
}

export const labels: LabelType = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+"
};
