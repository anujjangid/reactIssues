// @flow

import React from 'react';
import { TagStyle } from '../styleComponent';

type Props = {
  data: [],
};
const Tags = ({ data }: Props) =>
  // $FlowFixMe
  data.map(tag => (
    <TagStyle key={tag.id} to={tag.url} color={tag.color}>
      {tag.name}
    </TagStyle>
  ));

export default Tags;
