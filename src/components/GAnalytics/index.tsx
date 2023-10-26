import React from 'react';
import callGAnalytics from './utils/callGAnalytics';

export default function GAnalytics() {
  React.useEffect(() => {
    callGAnalytics();
  }, []);

  return <></>;
}
