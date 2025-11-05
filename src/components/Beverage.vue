<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Creamer v-if="creamer.name !== 'No Cream'":type="creamer" />
      </template>
      <template v-slot:mid>
        <Syrup v-if="syrup.name !== 'No Syrup'":type="syrup" />
      </template>
      <template v-slot:bottom>
        <Base :type ="base"/>
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";
//import { creamers } from "../stores/beverage";

type Props = {
  isIced: boolean;
  creamer: any;
  syrup: any;
  base: any;
};
defineProps<Props>();
</script>
