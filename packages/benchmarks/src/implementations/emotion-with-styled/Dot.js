import styled from 'react-emotion';
import View from './View';

// withProps is necessary to mimic .attrs from styled-components
import withProps from 'recompose/withProps';

const Dot = withProps({
  style: props => ({
    marginLeft: `${props.x}px`,
    marginTop: `${props.y}px`,
    borderRightWidth: `${props.size / 2}px`,
    borderBottomWidth: `${props.size / 2}px`,
    borderLeftWidth: `${props.size / 2}px`,
    borderBottomColor: `${props.color}`
  })
})(styled(View)`
  position: absolute;
  cursor: pointer;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-top-width: 0;
  transform: translate(50%, 50%);
`);

export default Dot;
