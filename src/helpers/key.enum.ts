export enum Key {
  Alt = 'Alt',
  Shift = 'Shift',
  Meta = 'Meta',
  CapsLock = 'CapsLock',
  Control = 'Control',
  Tab = 'Tab',
  ArrowUp = 'ArrowUp',
  ArrowDown = 'ArrowDown',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  Enter = 'Enter',
  Backspace = 'Backspace'
}

export const ignoredKeys = [
  Key.Alt,
  Key.Shift,
  Key.Meta,
  Key.CapsLock,
  Key.Control,
  Key.Tab,
  Key.ArrowUp,
  Key.ArrowLeft,
  Key.ArrowRight,
  Key.ArrowDown,
]