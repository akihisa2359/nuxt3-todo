import type { TYPE } from "../libs/constants";

export interface ToastOptions {
  type?: TYPE;
}

export type ToastContent = string;

export type ToastOptionsAndRequiredContent = ToastOptions & {
  content: ToastContent;
};

// export type Toast = {
//   id: number | string;
//   content: string; // componentやelementにも拡張する
//   type?: TYPE;
// };

export type ToastID = string | number;

export type Toast = {
  content: string;
  type?: TYPE;
};

// export type ToastType = {
//   toast: ToastOptionsAndRequiredContent;
// };
