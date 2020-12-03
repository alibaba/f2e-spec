import { createElement } from 'rax';
import Image from 'rax-image';

import './index.css';

interface LogoProps {
  uri: string;
}

export default (props: LogoProps) => {
  const { uri } = props;
  const source = { uri };
  return (
    <Image
      style={{
        width: '200rpx',
        height: '180rpx',
        marginBottom: '20rpx',
      }}
      source={source}
    />
  );
};
