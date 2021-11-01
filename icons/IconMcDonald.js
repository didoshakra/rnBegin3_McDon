import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconMcDonald(props) {
  const colorFill = props.colorFill || 'none';
  const width = props.width || '64';
  const height = props.height || '64';
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512">
      <Path
        fill={colorFill}
        d="M360.385 46.662c-42.168 0-79.773 56.343-104.383 144.411-24.578-88.067-62.219-144.411-104.393-144.411-74.113 0-134.212 187.447-134.212 418.677h59.648c0-214.725 33.403-388.776 74.563-388.776 41.196 0 74.565 160.688 74.565 358.871h59.646c0-198.184 33.404-358.871 74.564-358.871 41.191 0 74.564 174.052 74.564 388.776h59.654c.003-231.231-60.097-418.677-134.216-418.677zm0 0"
      />
    </Svg>
  );
}

export default IconMcDonald;
