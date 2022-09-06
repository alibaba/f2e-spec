import { createElement } from 'rax';
import Text from 'rax-text';

import './index.css';

interface LogoProps {
  uri: string;
}

export default function RaxDemo(props: LogoProps) {
  const { uri } = props;
  const test = ['hello', 'world', uri];
  return (
    <Text x-for={item in test} key={item}>
      {item}
    </Text>
  );
}
