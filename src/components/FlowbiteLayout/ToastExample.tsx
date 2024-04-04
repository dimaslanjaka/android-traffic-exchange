import { emptyInterface } from '@root/src/types/emptyInterface';
import { Button, Toast } from 'flowbite-react';
import React from 'react';
import { HiFire } from 'react-icons/hi';

interface IState {
  showToast?: boolean;
}

export default class ToastExample extends React.Component<emptyInterface, IState> {
  constructor(props: emptyInterface) {
    super(props);

    this.state = {
      showToast: false
    };
  }

  render(): React.ReactNode {
    return (
      <div className="space-y-4">
        <Button onClick={() => this.setState({ showToast: !this.state.showToast })}>Toggle toast</Button>
        {this.state.showToast && (
          <Toast className="absolute top-5 end-5 z-50 shadow">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
              <HiFire className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Update available</span>
              <div className="mb-2 text-sm font-normal">A new software version is available for download.</div>
            </div>
            <Toast.Toggle onDismiss={() => this.setState({ showToast: false })} />
          </Toast>
        )}
      </div>
    );
  }
}
