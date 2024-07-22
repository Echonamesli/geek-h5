import React from "react";
import Icon from "@/components/Icon";
import './index.scss'

export default function Home() {
  return (
    <div>
      我是首页
      <Icon type="iconfanhui" className='big' onClick={() => alert('hhhhh')}></Icon>     
    </div>
  );
}
