<template>



 <template v-if="iconMark=='<ReconciliationOutlined/>'||iconMark=='ReconciliationOutlined'">
<ReconciliationOutlined/>
   </template>
<template v-if="iconMark=='<ClusterOutlined/>'||iconMark=='ClusterOutlined'">
       <ClusterOutlined/>
   </template>


 <template v-if="iconMark=='<FormOutlined/>'||iconMark=='FormOutlined'">
       <FormOutlined/>
   </template>
 <template v-if="iconMark=='<ApartmentOutlined/>'||iconMark=='ApartmentOutlined'">
       <ApartmentOutlined/>
   </template>


 <template v-if="iconMark=='<BarsOutlined/>'||iconMark=='BarsOutlined'">
       <BarsOutlined/>
   </template>

 <template v-if="iconMark=='<ScheduleOutlined/>'||iconMark=='ScheduleOutlined'">
       <ScheduleOutlined/>
   </template>







 <template v-if="iconMark=='<SolutionOutlined/>'||iconMark=='SolutionOutlined'">
       <SolutionOutlined/>
   </template>

 <template v-if="iconMark=='<ProfileOutlined/>'||iconMark=='ProfileOutlined'">
       <ProfileOutlined/>
   </template>
 <template v-if="iconMark=='<BankOutlined/>'||iconMark=='BankOutlined'">
       <BankOutlined/>
   </template>
 <template v-if="iconMark=='<FundOutlined/>'||iconMark=='FundOutlined'">
       <FundOutlined/>
   </template>
   <template v-if="iconMark=='<AppstoreOutlined/>'||iconMark=='AppstoreOutlined'">
       <AppstoreOutlined/>
   </template>
 <template v-if="iconMark=='SettingOutlined'||iconMark=='<SettingOutlined/>'">
       <SettingOutlined />
   </template>
 <template v-if="iconMark=='FileWordOutlined'||iconMark=='<FileWordOutlined/>'">
       <FileWordOutlined />
   </template>
 <template v-if="iconMark=='FileMarkdownOutlined'||iconMark=='<FileMarkdownOutlined/>'">
       <FileMarkdownOutlined />
   </template>



 <template v-if="iconMark=='SnippetsOutlined'||iconMark=='<SnippetsOutlined/>'">
       <SnippetsOutlined />
   </template>

 <template v-if="iconMark=='TrademarkCircleOutlined'||iconMark=='<TrademarkCircleOutlined/>'">
       <TrademarkCircleOutlined />
   </template>

 <template v-if="iconMark=='TrademarkOutlined'||iconMark=='<TrademarkOutlined/>'">
       <TrademarkOutlined />
   </template>

 <template v-if="iconMark=='UserOutlined'||iconMark=='<UserOutlined/>'">
       <UserOutlined />
   </template>
 <template v-if="iconMark==''||iconMark==undefined||iconMark=='默认'">
       <AppstoreOutlined />
   </template>
 <template v-if="iconMark=='CalendarOutlined'||iconMark=='<CalendarOutlined/>'">
       <CalendarOutlined />
   </template>

   
</template>

<script   lang="ts">
import { reactive, toRefs,defineComponent,ref ,watch} from 'vue'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  FullscreenOutlined,
  BellOutlined,
  SearchOutlined,
  AppstoreOutlined,
  SettingOutlined,
  TrademarkCircleOutlined,SnippetsOutlined,TrademarkOutlined,FileWordOutlined,FileMarkdownOutlined,

  FundOutlined,BankOutlined,ProfileOutlined,ClusterOutlined,SolutionOutlined,FormOutlined,ApartmentOutlined
  ,BarsOutlined,ScheduleOutlined,CalendarOutlined,ReconciliationOutlined
} from "@ant-design/icons-vue";
export default defineComponent({
    props: { IconStr:String,
       },
      components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DownOutlined,
    FullscreenOutlined,
    BellOutlined,
    SearchOutlined,
    AppstoreOutlined,
    SettingOutlined,
    TrademarkCircleOutlined,SnippetsOutlined,TrademarkOutlined,FileWordOutlined,FileMarkdownOutlined
    ,FundOutlined,BankOutlined,ProfileOutlined,ClusterOutlined,SolutionOutlined,FormOutlined,ApartmentOutlined,BarsOutlined
    ,ScheduleOutlined,CalendarOutlined,ReconciliationOutlined
  },
    setup (props) {
        const state = reactive({
            count: 0,
            iconMark : props.IconStr
        })
     watch(
      () => props.IconStr,
      (newValue) => {
           
        
         
            state.iconMark=newValue;
      }
    );
        return {
            ...toRefs(state),
        }
    }
})
</script>

<style lang="scss" scoped>

</style>