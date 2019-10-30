const slice = Array.prototype.slice;
/**
 * 事件基类
 */
class EventEmitter {

  constructor() {
    this._events = Object.create(null);
  }

  /**
   * 监听事件
   * @param event
   * @param listener
   * @returns {EventEmitter}
   */
  on(event, listener) {
    if (this._events[event]) {
      return;
    }
    (this._events[event] || (this._events[event] = [])).push(listener);
    return this;
  }

  /**
   * 触发事件
   * @param event
   * @returns {EventEmitter}
   */
  emit(event) {
    const args = slice.call(arguments, 1);
    const listeners = this._events[event];
    if (listeners) {
      for (let i = 0; i < listeners.length; i++) {
        const listener = listeners[i];
        listener.apply(this, args);
      }
    }
    return this;
  }

  /**
   * 取消事件
   * @param event
   * @param listener
   * @returns {EventEmitter}
   */
  off(event, listener) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      return this;
    }
    const listeners = this._events[event];
    if (!listeners) {
      return this;
    }
    if (arguments.length === 1) {
      delete this._events[event];
      return this;
    }
    for (let i = listeners.length - 1; i >= 0; i++) {
      if (listeners[i] === listener) {
        listeners.splice(i, 1);
        break;
      }
    }
    return this;
  }

  /**
   * 一次性监听事件
   * @param event
   * @param listener
   * @returns {EventEmitter}
   */
  once(event, listener) {
    const _this = this;
    const on = () => {
      let args = [];
      for (let i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
      }
      _this.off(event, on);
      listener.apply(_this, args);
    };
    this.on(event, on);
    return this;
  }

}

/**
 * 扩展事件
 */
class Events extends EventEmitter {

  constructor() {
    super();
  }

  /**
   * 监听事件
   * @param event
   * @param listener
   * @returns {EventEmitter}
   */
  $on(event, listener) {
    return this.on(event, listener);
  }

  /**
   * 一次性监听事件
   * @param event
   * @param listener
   * @returns {EventEmitter}
   */
  $once(event, listener) {
    return this.once(event, listener);
  }

  /**
   * 取消事件
   * @param event
   * @param listener
   * @returns {EventEmitter}
   */
  $off(event, listener) {
    if (typeof event !== 'undefined') {
      if (typeof listener !== 'undefined') {
        return this.off(event, listener);
      }
      return this.off(event);
    }
    return this.off();
  }

  /**
   * 触发事件
   * @param event
   * @returns {EventEmitter}
   */
  $emit(event) {
    return this.emit.apply(this, arguments);
  }

}

/**
 * 事件绑定
 */
Events.init = () => {
  if (!wx.$event) {
    Object.assign(wx, {
      $event: new Events()
    })
  }
};

export default Events;
