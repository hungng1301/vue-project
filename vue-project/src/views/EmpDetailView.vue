<template>
    <employee-detail />
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator"
import EmployeeDetail from "../components/EmployeeDetail.vue"

@Component({
    components:{
        EmployeeDetail,
    } 
})
export default class DetailPage extends Vue{}

</script>