<!-- Template for ComboBox dropdown -->
<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <div id="vueapp" class="vue-app">
      <div class="col-xs-12 col-sm-6 example-col">
        <div class="col-xs-12 col-sm-6 example-col">
          <p>Select Favorite Sports</p>
          <kendo-combobox
            :data-source="dataSourceArray"
            :filter="'contains'"
            @select="onSelect"
            :index="0"
          ></kendo-combobox>
        </div>
      </div>
    </div>
  </div>
</template>
<!--
Template for Dropdownlist dropdown
<template>
  <div class="hello">
    <h3>Kendo ui DropdownList demo</h3>
    <div id="vueapp" class="vue-app">
      <div class="col-xs-12 col-sm-6 example-col">
        <div class="col-xs-12 col-sm-6 example-col">
          <p>Select Favorite Sports</p>
          <kendo-dropdownlist 
          :data-source="dataSourceArray"
          @select="onSelect" 
          :index="0">
          </kendo-dropdownlist>
        </div>
      </div>
    </div>
  </div>
</template>
-->

<!-- 
Template for Multiselect dropdown 
<template>
  <div class="hello">
    <h3>Kendo ui Multiselect demo</h3>
    <div id="vueapp" class="vue-app">
      <div class="col-xs-12 col-sm-6 example-col">
        <p>Select Favorite Sports</p>
        <kendo-multiselect 
        :data-source="dataSourceArray" 
        @select="onSelect" 
        :filter="'contains'"></kendo-multiselect>
      </div>
    </div>
   </div>
</template> -->


<script>
import "@progress/kendo-ui";
import "@progress/kendo-theme-default/dist/all.css";
import { ComboBox } from "@progress/kendo-dropdowns-vue-wrapper";

export default {
  name: "Dropdown",
  props: {
    msg: String
  },
  data: function() {
    return {
      dataSourceArray: [
        "Football",
        "Tennis",
        "Basketball",
        "Baseball",
        "Cricket",
        "Field Hockey",
        "Volleyball"
      ]
    };
  },
  methods: {
    onSelect: function(e) {
      console.log(e.dataItem);
    }
  }
};
</script>
