import { createElement } from 'rax';
import Text from 'rax-text';

export default (props) => {
  const { uri } = props;
  const test = ['hello', 'world', uri];
  return (
    <Text x-for={item in test} key={item}>
      {item}
    </Text>
  );
};
