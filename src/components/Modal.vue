<template>
    <div class="modal">
        <div>
            <div :class="['md-modal', 'modal-msg', 'md-modal-transition', {'md-show':mdShow}]">
                <div class="md-modal-inner">
                    <div class="md-top">
                        <button class="md-close" @click="closeModal">关闭</button>
                    </div>
                    <div class="md-content">
                        <div class="confirm-tips">
                            <slot name="message"></slot>
                        </div>
                        <div class="btn-wrap">
                            <slot name="btnGroup"></slot>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md-overlay" v-show="mdShow" @click="closeModal"></div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Modal',
  props: ['mdShow'],
  methods: {
    closeModal () {
      this.$emit('close')
    }
  }

}
</script>
<style lang="scss" scoped>

</style>
