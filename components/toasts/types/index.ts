import type { TYPE } from "../libs/constants";

export interface ToastOptions {
  type?: TYPE;
}

export type ToastContent = string;

export type ToastOptionsAndRequiredContent = ToastOptions & {
  content: ToastContent;
};

// export type ToastType = {
//   toast: ToastOptionsAndRequiredContent;
// };
