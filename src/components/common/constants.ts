import { GetLabeltextInterface, LabelType } from "../../utils /contants";

export interface RatingProps {
  ratings?: number;
  precision?: number;
  getLabelText?: (value: GetLabeltextInterface) => string;
  labels: LabelType;
}

export type CustomToggleButtonOptions = {
  text: string;
  value: string;
};

export interface CustomToggleButtonInterface {
  options: Array<CustomToggleButtonOptions>;
  disabled?: boolean;
  onClick: (value: string) => void;
}
