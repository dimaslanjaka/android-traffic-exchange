import { Toast } from 'flowbite-react';
import React from 'react';

interface FlowbiteToastProps {
  [key: string]: any;
  /** show toast indicator */
  showToast: boolean;
  /** parent state to show/hide toast indicator */
  handler: (showToast: boolean) => any | ((...args: any[]) => any);
  /** toast title */
  title?: string;
  /** toast description */
  description?: string;
  /** fontawesome classname without fa- */
  iconClassName?: string;
  /** auto hide in milliseconds, by default 3s */
  autoHide?: boolean | number;
}

const FlowbiteToast: React.FC<FlowbiteToastProps> = props => {
  React.useEffect(() => {
    if (props.showToast && props.autoHide) {
      // auto hide toast
      setTimeout(() => props.handler(false), typeof props.autoHide == 'number' ? props.autoHide : 3000);
    }
  });
  return (
    props.showToast && (
      <Toast className="absolute top-5 end-5 z-50 shadow">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
          <i className={'fa-duotone fa-' + (props.iconClassName || 'shield')}></i>
        </div>
        <div className="ml-3 text-sm font-normal">
          <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
            {props.title || 'Toast title'}
          </span>
          <div className="mb-2 text-sm font-normal">{props.description || 'Toast description'}</div>
        </div>
        <Toast.Toggle onDismiss={() => props.handler(false)} />
      </Toast>
    )
  );
};

export default FlowbiteToast;
