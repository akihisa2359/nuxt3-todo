import type { EVENTS } from "./constants";

export interface EventBusInterface {
  on<E extends EVENTS>(eventType: E, hander): void;
  off<E extends EVENTS>(eventType: E, hander): void;
  emit<E extends EVENTS>(eventType: E, event): void;
}

export class EventBus implements EventBusInterface {
  protected allHandlers = {};

  protected getHandlers(eventType) {
    return this.allHandlers[eventType] || [];
  }

  public on(eventType, handler) {
    const handlers = this.getHandlers(eventType);
    handlers.push(handler);
    this.allHandlers[eventType] = handlers;
  }
  public off(eventType, handler) {
    const handlers = this.getHandlers(eventType);
    handlers.splice(handlers.indexOf(handler) >>> 0, 1);
  }
  public emit(eventType, event) {
    const handlers = this.getHandlers(eventType);
    handlers.forEach((handler) => handler(event));
  }
}
