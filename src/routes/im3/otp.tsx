import springUtils from '@root/src/utils/springUtils';
import React from 'react';

export default class im3Otp extends React.Component<any, any> {
  componentDidMount(): void {
    springUtils.fetchUserInfo();
  }
  render() {
    return <></>;
  }
}
