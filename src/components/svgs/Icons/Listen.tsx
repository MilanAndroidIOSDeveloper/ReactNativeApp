import React from 'react';
import Svg, { G, Circle, Path, SvgProps } from 'react-native-svg';
import GradientSVG from '../GradientSVG';

const Listen = (props: SvgProps) => (
  <Svg width={25} height={25} viewBox='0 0 25 25' {...props}>
    <GradientSVG id='linear-gradient' />
    <G transform='translate(-307.885 -3140.69)'>
      <Circle cx={12.5} cy={12.5} r={12.5} transform='translate(307.885 3140.69)' fill='url(#linear-gradient)' />
      <Path
        d='M320.389,3157.087a.565.565,0,0,1-.327.513.553.553,0,0,1-.241.055.568.568,0,0,1-.362-.131l-3.1-2.571H314.7a.568.568,0,0,1-.568-.568v-2.262a.568.568,0,0,1,.568-.568h1.653l3.1-2.571a.568.568,0,0,1,.93.437Zm2.181-.887h-.04a.566.566,0,0,1-.4-.166l-.076-.076a.569.569,0,0,1-.055-.74,3.3,3.3,0,0,0-.087-4.044.568.568,0,0,1,.039-.759l.076-.076a.553.553,0,0,1,.43-.166.569.569,0,0,1,.411.208,4.545,4.545,0,0,1,.118,5.592.569.569,0,0,1-.414.226Zm2.347,1.754a.57.57,0,0,1-.409.2h-.025a.571.571,0,0,1-.4-.166l-.074-.075a.568.568,0,0,1-.034-.767,6.049,6.049,0,0,0-.1-7.9.568.568,0,0,1,.023-.777l.074-.075a.558.558,0,0,1,.419-.167.571.571,0,0,1,.408.191,7.289,7.289,0,0,1,.119,9.538Zm0,0'
        fill='#fff'
      />
    </G>
  </Svg>
);

export default Listen;
