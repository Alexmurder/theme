<template>
  <div class="conts">
	  <el-col :span="8">
      <div class="grid-content bg-purple">
            <router-link to="/chatlist" >
              <el-tree :data="data1" :props="defaultProps" node-key="id" default-expand-all :expand-on-click-node="false"  :render-content="renderContent" @node-click="handleNodeClick" ></el-tree>
            </router-link>
            <router-link to="/tree" >
              <el-tree :data="data2" :props="defaultProps" node-key="id" default-expand-all :expand-on-click-node="false"  :render-content="renderContent" @node-click="handleNodeClick" ></el-tree>
            </router-link>
            <router-link to="/group" >
              <el-tree :data="data3" :props="defaultProps" node-key="id" default-expand-all :expand-on-click-node="false"  :render-content="renderContent" @node-click="handleNodeClick" ></el-tree>
            </router-link>
      </div>
    </el-col>
	  <el-col :span="16">
      <div class="grid-content bg-purple-light">
        <router-view></router-view>
      </div>
    </el-col>
  </div>
</template>

<script>
let id = 1000;
  export default {
    data() {
      return {
        data1: [{
          id:1,
          label: '好友',
          children: [{
            id:4,
            label: '张三'
          }]
        }],
        data2:[{
          id:9,
          label: '组织',
          children: [{
            id:11,
            label: '一部门',
            children: [{
              id:13,
              label: '一处'
            }]
          }, {
            id:15,
            label: '二部门',
            children: [{
              id:17,
              label: '二处'
            }]
          }]
        }],
        data3:[{
          id:19,
          label: '群组',
          children: [{
            id:21,
            label: '事务安排',
            children: [{
              id:23,
              label: '出行安排'
            }]
          }, {
            id:25,
            label: '内部交流',
            children: [{
              id:27,
              label: '通知'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
    
      },
       append(store, data) {
        store.append({ id: id++, label: 'member', children: [] }, data);
      },
      remove(store, data) {
        store.remove(data);
      },
       renderContent(h, { node, data, store }) {
        return (
          <span>
            <span>
              <span>{node.label}</span>
            </span>
            <span style="float: right; margin-right: 20px">
            <router-link to="/backlog">
              <el-button size="mini">我的待办</el-button>
            </router-link>  
              <el-button size="mini" on-click={ () => this.remove(store, data) }>删除</el-button>
              <router-link to="/allot">
              <el-button size="mini">任务分配</el-button>
              </router-link>
            </span>
          </span>);
      }
    }
  };
</script>

<style>
  .conts {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .conts .el-row {
    margin-bottom: 20px;
  }
  .conts .el-col {
    border-radius: 4px;
  }
  .conts .bg-purple-dark {
    background: #99a9bf;
  }
  .conts .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    height: 360px;
    overflow-y:scroll;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

