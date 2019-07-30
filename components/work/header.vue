<template>
  <div>
    <img
      class="u-boxshadow-xl"
      src="~/assets/images/home/case-hero.jpg"
    >

    <h2 class="o-type-m u-weight-bold u-pv-x4">
      {{ title }}
    </h2>

    <div class="o-grid">
      <div class="o-grid__col u-6/12@sm u-pb-x2@xs">
        <p class="o-type-s">
          {{ description }}
        </p>
      </div>

      <div class="o-grid__col u-6/12@sm">
        <div class="o-media">
          <div class="o-media__fixed u-pr-x4">
            <small class="o-type-s u-color-wash-dark">
              Role
            </small>
            <small class="o-type-s u-block">
              {{ role }}
            </small>
          </div>

          <div class="o-media__fluid">
            <small class="o-type-s u-color-wash-dark">
              Category
            </small>
            <small class="o-type-s u-block">
              {{ category }}
            </small>
          </div>
        </div>
      </div>
    </div>

    <p class="o-type-xs u-text-center u-color-grey">
      Case study not available yet
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },

    category: {
      required: true,
      type: String,
    },

    description: {
      required: true,
      type: String,
    },

    role: {
      required: true,
      type: String,
    },

  },
};
</script>
