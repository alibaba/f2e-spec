import { createElement } from 'rax';
import Image from 'rax-image';

export default (props) => {
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
