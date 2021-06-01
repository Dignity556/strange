<template>
  <div class="home">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title" @click="Upload"><i class="el-icon-upload"></i>Upload Air Quality</template>
            <el-menu-item index="1-1" @click="toUpdate"><i class="el-icon-upload2"></i> Update</el-menu-item>
            <el-menu-item index="1-2" ><i class="el-icon-document"></i> History</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 20px">
          <el-rate
              v-model="airScore"
              disabled
              show-score
              text-color="#ff9900"
              score-template="airScore"
              style="margin-right: 0px"
          >
          </el-rate>
          <el-dropdown>
            <i class="el-icon-s-custom" style="margin-right: 15px;size: 20px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>User Info</el-dropdown-item>
              <el-dropdown-item>Quit</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>David</span>
        </el-header>

        <el-main>
          <router-view></router-view>
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140">
            </el-table-column>
            <el-table-column prop="name" label="Name" width="120">
            </el-table-column>
            <el-table-column prop="address" label="Address" width="300">
            </el-table-column>
            <el-table-column prop="airQuality" label="Air Quality" width="120">
            </el-table-column>
            <el-table-column prop="rate" label="Rate" width="80">
            </el-table-column>
            <el-table-column prop="isRecorded" label="isRecorded" width="120">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'

    };
    return {
      tableData: Array(1).fill(item),
      airScore:3.7
    }
  },
  methods:{
    upload:function ()
    {
      this.$router.replace('/')
    },
    toUpdate: function ()
    {
      this.$router.replace('/updateToday')
    }

  }
}
</script>
