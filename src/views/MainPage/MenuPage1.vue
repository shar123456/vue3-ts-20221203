<template>
    <a-table :columns="columns" :data-source="data" class="components-table-demo-nested">
    <template #operation>
      <a>Publish</a>
    </template>
    <template #expandedRowRender>
      <a-table :columns="innerColumns" :data-source="innerData" :pagination="false">
        <template #status>
          <span>
            <a-badge status="success" />
            Finished
          </span>
        </template>
        <template #operation>
          <span class="table-operation">
            <a>Pause</a>
            <a>Stop</a>
            <a-dropdown>
              <template #overlay>
                <a-menu>
                  <a-menu-item>Action 1</a-menu-item>
                  <a-menu-item>Action 2</a-menu-item>
                </a-menu>
              </template>
              <a>
                More
                <down-outlined />
              </a>
            </a-dropdown>
          </span>
        </template>
      </a-table>
    </template>
  </a-table>
</template>

<script lang="ts">
import { reactive, toRefs,defineComponent  } from 'vue'
import { DownOutlined } from '@ant-design/icons-vue';

const columns = [
  { title: '菜单Id', dataIndex: 'menuId', key: 'name' },
  { title: '名称', dataIndex: 'menuTitle', key: 'platform' },
  { title: 'Url', dataIndex: 'menuUrl', key: 'version' },
  { title: '序号', dataIndex: 'menuorder', key: 'upgradeNum' },
  { title: '等级', dataIndex: 'menuLevel', key: 'creator' },
  { title: 'Icon', dataIndex: 'menuIcon', key: 'createdAt' },
    { title: '是否有子菜单', dataIndex: 'hasSub', key: 'createdAt1' },
      { title: '菜单父级Id', dataIndex: 'menuParentId', key: 'createdAt2' },
  { title: 'Action', key: 'operation', slots: { customRender: 'operation' } },
];

interface DataItem {
  key: number;
  menuId: string;
  menuTitle: string;
  menuUrl: string;
  menuorder: number;
  menuLevel: number;
  hasSub: boolean;
    menuParentId: string;
}

const data: DataItem[] = [];

  data.push({
    key: 1,
    menuId: '1',
    menuTitle: 'iOS',
    menuUrl: '10.3.4.5654',
    menuorder: 500,
    menuLevel: 1,
    hasSub: true,
       menuParentId: '0',
  });


const innerColumns = [
  { title: '菜单Id', dataIndex: 'menuId', key: 'date' },
  { title: '名称', dataIndex: 'menuTitle', key: 'name' },
  { title: 'Url', dataIndex: 'menuUrl', key: 'version' },
  { title: '序号', dataIndex: 'menuorder', key: 'upgradeNum' },
  { title: '等级', dataIndex: 'menuLevel', key: 'creator' },
  { title: 'Icon', dataIndex: 'menuIcon', key: 'createdAt' },
    { title: '是否有子菜单', dataIndex: 'hasSub', key: 'createdAt1' },
      { title: '菜单父级Id', dataIndex: 'menuParentId', key: 'createdAt2' },
  {
    title: 'Action',
    dataIndex: 'operation',
    key: 'operation',
    slots: { customRender: 'operation' },
  },
];

interface innerDataItem {
  key: number;
  date: string;
  name: string;
  upgradeNum: string;
}

const innerData: DataItem[] = [];
innerData.push({
    key: 1,
    menuId: '2',
    menuTitle: 'iOS22',
    menuUrl: '10.3.4.5654222',
    menuorder: 5002,
    menuLevel: 12,
    hasSub: false,
       menuParentId: '1',
  });




export default defineComponent ({
    components: {
    DownOutlined,
  },
  setup() {
    return {
      data,
      columns,
      innerColumns,
      innerData,
    };
  }
})
</script>

<style lang="scss" scoped>

</style>