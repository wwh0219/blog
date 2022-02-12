# 表格列复用

## 背景

在B端系统开发过程中，在多个页面中都存在一些表格，这些表格中部分列所显示的内容是一样的，所以需要一个可以复用列代码的方案

### 核心代码

```javascript
import { TableColumn, Button } from "element-ui";

/**
 * 用于生成表格列的配置对象,可以通过传入参数来定制化一些业务需求，这里只做简单的展示
 * 在实际应用中有多个模块需要复用列时可以复用这个方法
 * 完全不相关的模块则独立编写对应的生成列元数据的方法
 */
export const genTableColumnMeta = () => {
  return [
    {
      props: {
        label: "日期",
        width: 180,
        prop: "date",
      },
      scopedSlots: (h) => {
        return {
          default: (scope) => {
            return <span>{scope.date}</span>;
          },
        };
      },
    },
    {
      props: {
        prop: "name",
        label: "姓名",
        width: "180",
      },
    },
    {
      props: {
        label: "地址",
        prop: "address",
      },
      scopedSlots: (h) => {
        return {
          default: (scope) => {
            return <Button>{scope.address}</Button>;
          },
        };
      },
    },
  ];
};

/**
 * 用于生成列的渲染函数
 * 一般这个方法整个项目公用一个，可以添加参数来做别的操作，如列表排序、列显示隐藏的配置等等，根据需求进行定制
 * @param {Array} columnMetaList
 */
export const genTableRendererList = (
  columnMetaList,
  columnSortDataList,
  columnVisibleDataList
) => {
  if (columnSortDataList) {
    //列表排序的示例代码
    columnMetaList = columnSortDataList.map((column) => {
      return columnMetaList.find((i) => i.props.prop === column.prop);
    });
  }

  if (columnVisibleDataList) {
    //列表显示隐藏控制的示例代码
    columnMetaList = columnVisibleDataList
      .filter((column) => !!column.visible)
      .map((column) => {
        return columnMetaList.find((i) => i.props.prop === column.prop);
      });
  }
  return columnMetaList.map((meta) => {
    return (h) => (
      <TableColumn
        props={meta.props}
        scopedSlots={meta.scopedSlots}
      ></TableColumn>
    );
  });
};
```

### 应用示例

```html
<template>
  <el-table :data="tableData" style="width: 100%">
    <Render v-for="i in tableColumns" :renderer="i"></Render>
  </el-table>
</template>
<script>
import {
  genTableColumnMeta,
  genTableRendererList,
} from "../utils/table-columns";
import Render from "@/components/Render";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      tableColumns: [],
    };
  },
  components: {
    Render,
  },
  mounted() {
    this.tableColumns = genTableRendererList(genTableColumnMeta());
  },
};
</script>

```

### 思路

核心就是创建一个渲染函数的数组，然后在页面中使用v-for循环来进行列内容的渲染**genTableColumnMeta**这个方法一般是根据各个模块的实际需求来编写，需要复用的列结构的模块之间也复用这个函数

**genTableRendererList**这个方法属于一个通用的方法，在接收**genTableColumnMeta**返回的值后生成一个渲染函数的列表，这里可以做一些项目级的通用逻辑处理，比如通用的列显示隐藏控制逻辑、列的排序设置逻辑

