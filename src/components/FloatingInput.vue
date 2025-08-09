<template>
  <div class="relative w-full">
    <label
      :for="id"
      class="absolute top-0 left-2 transform -translate-y-3 bg-[#0d152a] text-blue-400 px-2 text-sm transition-all"
    >
      {{ label }}
    </label>

    <component
      :is="tag"
      :id="id"
      :name="name"
      :type="type"
      :rows="rows"
      :required="required"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full border border-blue-700 text-white bg-transparent rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-transparent"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  id: String,
  name: String,
  label: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
  required: {
    type: Boolean,
    default: true,
  },
  rows: {
    type: Number,
    default: 5,
  },
  tag: {
    type: String,
    default: 'input',
  },
})

defineEmits(['update:modelValue'])
</script>
