# scroll-antd-table

## Summary <br>

Automatically adjust the scroll-y attribute of the table based on page layout.

## Usage

Just need to replace the native antd Table component with scroll-antd-table.

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

## Props

 Includes all the props of antd Table component.
 ### additional props
| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| bottomHeight | 74 | `number` |  The distance between the table content and the bottom of the screen, such as the height of a pagenation or other component, defaults to a pagenation height of 74px |
