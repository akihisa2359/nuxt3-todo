import Toast from "./components/toastContainer.vue";
import { EventBus } from "./libs/eventBus";
import { createApp } from "vue";
import { EVENTS } from "./libs/constants";

const globalEventBus = new EventBus();

const useToast2 = () => {
  // const toast = {};
  const toast = () => {};
  toast.add = (content) => {
    globalEventBus.emit(EVENTS.ADD, content);
  };
  return toast;
};

const initialize = () => {
  const app = createApp(Toast, {
    eventBus: globalEventBus,
  });
  app.mount(document.createElement("div"));
};

export { useToast2, initialize };
