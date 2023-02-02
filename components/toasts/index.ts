import ToastContainer from "./components/toastContainer.vue";
import { EventBus } from "./libs/eventBus";
import { createApp } from "vue";
import { EVENTS, TYPE } from "./libs/constants";
import { Toast } from "./types";

const globalEventBus = new EventBus();

const useToast2 = () => {
  // const toast = {};
  const toast = () => {};
  toast.add = (content: string) => {
    globalEventBus.emit(EVENTS.ADD, { content: content });
  };

  toast.success = (content: string) => {
    globalEventBus.emit(EVENTS.ADD, {
      content: content,
      type: TYPE.SUCCESS,
    });
  };

  toast.error = (content: string) => {
    globalEventBus.emit(EVENTS.ADD, {
      content: content,
      type: TYPE.ERROR,
    });
  };

  // toast.remove = (id)

  return toast;
};

const initialize = () => {
  const app = createApp(ToastContainer, {
    eventBus: globalEventBus,
  });
  app.mount(document.createElement("div"));
};

export { useToast2, initialize };
