# scroll-antd-table
## 组件说明：<br>
自动计算表格内容应该显示的高度，使表格内容自动填满屏幕的剩余空间。<br>

## 使用使用：
使用时仅需要替换原来的antd 的Table组件即可
```
import ScrollTable from 'scroll-antd-table'

...

<ScrollTable>
  dataSource={data}
  scroll={{x:true}}
  ...
  bottomHeight={0}
<ScrollTable/>
```

## 参数说明：
 | Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| bottomHeight | 74 | `number` | 表格body到底部的距离，默认底部有分页信息为74px |

其他参数和antd的Table保持一致即可，建议先用antd的Table完成基本功能后在进行替换