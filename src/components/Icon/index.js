import React from "react";
import classNames from "classnames";
//prop-types是react自带库
import PropTypes from "prop-types";

//字体图标公共组件（symbol引用法）
//style或者是className，不管是哪种样式传进来，就要加到svg身上
//校验：必须有type传进来
//添加各种事件监听

/* export default function Icon({ type, style, className, onClick,onMouseEnter }) {
  return (
    <svg
      style={style}
      class={classNames("icon", className)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      aria-hidden="true"
    >
      <use xlinkHref={`#${type}`}></use>
    </svg>
  );
} */

//最终版
export default function Icon({
  type,
  className,
  ...rest
}) {
  return (
    <svg
      {...rest}
      className={classNames("icon", className)}
      aria-hidden="true"
    >
      <use xlinkHref={`#${type}`}></use>
    </svg>
  );
}

Icon.propTypes = {
  //指定type属性为字符串类型且必需
  type: PropTypes.string.isRequired,
};
