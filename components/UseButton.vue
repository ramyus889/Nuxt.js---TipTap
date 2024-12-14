<template>
  <component
    :is="as"
    :class="computedButtonClass"
    @click="handleClick"
    v-bind="linkAttributes"
    :disabled="isDisabled"
  >
    <span v-if="loading" :class="computedLoadingIconClass"></span>
    <span v-if="icon && !loading" :class="computedIconClass"></span>
    <slot>{{ label }}</slot>
  </component>
</template>

<script setup>
import { computed, defineEmits, defineProps, ref } from "vue";

const props = defineProps({
  as: { type: String, default: "button" },
  to: { type: [String, Object], default: null },
  icon: { type: String, default: "" },
  href: { type: String, default: null },
  size: { type: String, default: "medium" },
  label: { type: String, default: "Button" },
  outline: { type: String, default: "" },
  iconPos: { type: String, default: "left" },
  loading: { type: Boolean, default: false },
  bgColor: { type: String, default: "bg-blue" },
  rounded: { type: String, default: "rounded-lg" },
  disabled: { type: Boolean, default: false },
  textColor: { type: String, default: "" },
  buttonClass: { type: String, default: "" },
  motionClick: { type: String, default: "" },
  loadingIcon: { type: String, default: "pi pi-spinner pi-spin" },
  textPosition: { type: String, default: "" },
  motionAnimate: { type: String, default: "" },
  variant: { type: String, default: "default" },
});

const emit = defineEmits(["click"]);
const isAnimating = ref(false);

const handleClick = () => {
  if (!isDisabled.value) {
    isAnimating.value = true;
    emit("click");
    setTimeout(() => (isAnimating.value = false), 1000);
  }
};

const linkAttributes = computed(() => {
  return props.as === "a"
    ? { href: props.href }
    : props.as === "router-link"
    ? { to: props.to }
    : {};
});

const computedIconClass = computed(() => {
  return `${props.icon} ${props.iconPos === "right" ? "ml-2" : "mr-2"}`;
});

const computedLoadingIconClass = computed(() => {
  return `${props.loadingIcon} animate-spin mr-2`;
});

const isDisabled = computed(() => props.disabled || props.loading);

const textPositionClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const roundedClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
};

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
  xl: "px-8 py-4 text-xl",
  "2xl": "px-10 py-5 text-2xl",
  "3xl": "px-12 py-6 text-3xl",
};

const motionClasses = {
  "m-p-spin": "motion-preset-spin",
  "m-p-blink": "motion-preset-blink",
  "m-p-float": "motion-preset-float",
  "m-p-pulse": "motion-preset-pulse",
  "m-p-seesaw": "motion-preset-seesaw",
  "m-p-wobble": "motion-preset-wobble",
  "m-p-stretch": "motion-preset-stretch",
  "m-p-oscillate": "motion-preset-oscillate",
};

const variantClasses = {
  default: "",
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  success: "bg-green-500 text-white",
  danger: "bg-red-500 text-white",
};

const computedButtonClass = computed(() => {
  const colorClasses = {
    "bg-red": "bg-red-500 text-black font-semibold",
    "bg-blue": "bg-blue-500 text-black font-semibold",
    "bg-green": "bg-green-500 text-black font-semibold",
    "bg-yellow": "bg-yellow-500 text-black font-semibold",
    "bg-purple": "bg-purple-500 text-black font-semibold",
    "bg-grayBlack": "bg-gray-500 text-black font-semibold",
    "bg-grayWhite": "bg-gray-500 text-white font-semibold",
    "bg-black": "bg-black text-white font-semibold",
    "bg-white": "bg-white text-black font-semibold",
    "bg-orange": "bg-orange-500 text-black font-semibold",
    "bg-pink": "bg-pink-500 text-black font-semibold",
    "bg-cyan": "bg-cyan-500 text-black font-semibold",
  };

  const outlineClasses = {
    "outline-red": "border border-red-500 text-red-500 bg-transparent",
    "outline-blue": "border border-blue-500 text-blue-500 bg-transparent",
    "outline-green": "border border-green-500 text-green-500 bg-transparent",
    "outline-yellow": "border border-yellow-500 text-yellow-500 bg-transparent",
    "outline-purple": "border border-purple-500 text-purple-500 bg-transparent",
    "outline-grayBlack": "border border-gray-500 text-gray-500 bg-transparent",
    "outline-grayWhite": "border border-gray-500 text-gray-500 bg-transparent",
    "outline-black": "border border-black text-black bg-transparent",
    "outline-white": "border border-white text-white bg-transparent",
    "outline-orange": "border border-orange-500 text-orange-500 bg-transparent",
    "outline-pink": "border border-pink-500 text-pink-500 bg-transparent",
    "outline-cyan": "border border-cyan-500 text-cyan-500 bg-transparent",
  };

  const textClasses = {
    "text-red": "border-none text-red-500 bg-transparent",
    "text-blue": "border-none text-blue-500 bg-transparent",
    "text-green": "border-none text-green-500 bg-transparent",
    "text-yellow": "border-none text-yellow-500 bg-transparent",
    "text-purple": "border-none text-purple-500 bg-transparent",
    "text-grayBlack": "border-none text-gray-500 bg-transparent",
    "text-grayWhite": "border-none text-gray-500 bg-transparent",
    "text-black": "border-none text-black bg-transparent",
    "text-white": "border-none text-white bg-transparent",
    "text-orange": "border-none text-orange-500 bg-transparent",
    "text-pink": "border-none text-pink-500 bg-transparent",
    "text-cyan": "border-none text-cyan-500 bg-transparent",
  };

  return `
      transition-all
      ${sizeClasses[props.size] || sizeClasses.medium}
      ${textClasses[props.textColor] || ""}
      ${colorClasses[props.bgColor] || colorClasses.red}
      ${isAnimating.value ? props.motionClick : ""}
      ${motionClasses[props.motionAnimate] || ""}
      ${outlineClasses[props.outline] || ""}
      ${roundedClasses[props.rounded] || roundedClasses.md}
      ${isDisabled.value ? "opacity-50 cursor-not-allowed" : ""}
      ${textPositionClasses[props.textPosition] || ""}
      ${variantClasses[props.variant] || ""}
      ${props.buttonClass}
    `;
});
</script>
