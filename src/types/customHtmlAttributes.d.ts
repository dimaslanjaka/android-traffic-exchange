interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
  // extends React's HTMLAttributes
  [key: string]: any;
}
