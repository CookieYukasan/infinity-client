<template>
  <div>
    <select :name="name" :id="id" :class="selectClass" @change="onChange">
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
        :selected="
          defaultValue && defaultValue === option.value ? 'selected' : ''
        "
      >
        <!-- <span v-if="option.icon && option.iconType" :class="option.iconType">{{
          option.icon
        }}</span> -->
        <p
          :class="{
            'ml-8': option.icon && option.iconType,
          }"
        >
          {{ option.text }}
        </p>
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    defaultValue: {
      default: null,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    selectClass: {
      type: String,
      default: 'font-bold prl-16 ptb-8 mt-16 br-6 border-grey-300 w-100',
    },
  },
  methods: {
    onChange(event) {
      this.$emit('onChange', event.target.value)
    },
  },
}
</script>
