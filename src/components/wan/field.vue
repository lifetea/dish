<template>
  <wan-cell
  >
    <div slot="extra">
      <input   placeholder="输入同步到view中"/>
    </div>
    <!--:is-link="isLink"-->
    <!--:icon="leftIcon"-->
    <!--:title="label"-->
    <!--:center="center"-->
    <!--:border="border"-->
    <!--:required="required"-->
    <!--:customStyle="customStyle"-->
    <!--:titleWidth="'width:'+titleWidth"-->
    <!--custom-class="{{ customClass }} van-field {{ labelAlign ? 'van-field&#45;&#45;label-' + labelAlign : '' }}"-->

    <!--<slot name="label" slot="title" />-->
    <!--<view class="van-field__body {{ inputType === 'textarea' ? 'van-field__body&#45;&#45;textarea' : '' }}">-->

    <!--<textarea-->
      <!--v-if="inputType === 'textarea'"-->
    <!--/>-->

    <!--class="input-class van-field__control van-field__textarea {{ inputAlign ? 'van-field&#45;&#45;' + inputAlign : '' }} {{ error ? 'van-field&#45;&#45;error' : '' }} {{ disabled ? 'van-field__control&#45;&#45;disabled' : '' }}"-->
    <!--focus="{{ focus }}"-->
    <!--value="{{ value }}"-->
    <!--disabled="{{ disabled }}"-->
    <!--readonly="{{ readonly }}"-->
    <!--maxlength="{{ maxlength }}"-->
    <!--placeholder="{{ placeholder }}"-->
    <!--auto-height="{{ autosize }}"-->
    <!--placeholder-class="{{ placeholderClass }} {{ error ? 'van-field&#45;&#45;error' : '' }}"-->
    <!--cursor-spacing="{{ cursorSpacing }}"-->
    <!--bindinput="onInput"-->
    <!--bind:blur="onBlur"-->
    <!--bind:focus="onFocus"-->
    <!--bind:confirm="onConfirm"-->

    <!--<input-->
      <!--v-else-->
      <!--class="input-class van-field__control"-->
      <!--:class="[inputAlign ? 'van-field&#45;&#45;' + inputAlign : '', error ? 'van-field&#45;&#45;error' : '', disabled ? 'van-field__control&#45;&#45;disabled' : '']"-->
      <!--:focus="focus"-->
      <!--:value="value"-->
      <!--:disabled="disabled"-->
      <!--:readonly="readonly"-->
      <!--:maxlength="maxlength"-->
      <!--:placeholder="placeholder"-->


    <!--/>-->
    <!--:type="type"-->

    <!--confirm-type="{{ confirmType }}"-->
    <!--cursor-spacing="{{ cursorSpacing }}"-->
    <!--placeholder-class="{{ placeholderClass }} {{ error ? 'van-field&#45;&#45;error' : '' }}"-->

    <!--bindinput="onInput"-->
    <!--bind:blur="onBlur"-->
    <!--bind:focus="onFocus"-->
    <!--bind:confirm="onConfirm"-->

      <!--<van-icon-->
        <!--wx:if="{{ showClear }}"-->
        <!--name="clear"-->
        <!--custom-class="van-field__clear"-->
        <!--bind:touchstart="onClear"-->
      <!--/>-->
      <!--<view class="van-field__icon-container" wx:if="{{ icon || useIconSlot }}" bind:tap="onClickIcon">-->
        <!--<van-icon-->
          <!--wx:if="{{ icon }}"-->
          <!--name="{{ icon }}"-->
          <!--custom-class="van-field__icon {{ iconClass }}"-->
        <!--/>-->
        <!--<slot wx:else name="icon" />-->
      <!--</view>-->
      <!--<view wx:if="{{ useButtonSlot }}" class="van-field__button">-->
        <!--<slot name="button" />-->
      <!--</view>-->
    <!--</view>-->
    <!--<view wx:if="{{ errorMessage }}" class="van-field__error-message">-->
      <!--{{ errorMessage }}-->
    <!--</view>-->
  </wan-cell>
</template>

<script>
import icon from './icon'
import cell from './cell'
export default {
  name: 'field',
  components: {
    'wan-icon': icon,
    'wan-cell': cell
  },
  props: {
    icon: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    error: {
      type: Boolean,
      default: true
    },
    focus: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: true
    },
    isLink: {
      type: Boolean,
      default: true
    },
    leftIcon: String,
    disabled: {
      type: Boolean,
      default: true
    },
    autosize: {
      type: Boolean,
      default: true
    },
    readonly: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: true
    },
    iconClass: {
      type: String,
      default: null
    },
    clearable: {
      type: Boolean,
      default: true
    },
    labelAlign: {
      type: String,
      default: null
    },
    inputAlign: {
      type: String,
      default: null
    },
    customClass: {
      type: String,
      default: null
    },
    confirmType: {
      type: String,
      default: null
    },
    errorMessage: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    customStyle: {
      type: String,
      default: null
    },
    useIconSlot: {
      type: Boolean,
      default: true
    },
    useButtonSlot: {
      type: Boolean,
      default: true
    },
    placeholderClass: {
      type: String,
      default: null
    },
    cursorSpacing: {
      type: Number,
      default: 50
    },
    maxlength: {
      type: Number,
      default: -1
    },
    // value: {
    //   type: null,
    //   default: ''
    // },
    inputType: {
      type: String,
      default: 'text'
    },
    border: {
      type: Boolean,
      default: true
    },
    titleWidth: {
      type: String,
      default: '90px'
    }
  }
}
</script>

<style lang="scss">
  .van-field__body {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center
  }

  .van-field__body--textarea {
    min-height: 24px
  }

  .van-field__control {
    border: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    resize: none;
    display: block;
    text-align: left;
    box-sizing: border-box;
    line-height: inherit;
    background-color: transparent
  }

  .van-field__control--disabled {
    opacity: 1;
    color: #666;
    background-color: transparent
  }

  .van-field__control--center {
    text-align: center
  }

  .van-field__control--right {
    text-align: right
  }

  .van-field__button,.van-field__clear,.van-field__icon-container {
    -webkit-flex-shrink: 0;
    flex-shrink: 0
  }

  .van-field__clear,.van-field__icon-container {
    padding: 0 10px;
    line-height: inherit;
    margin-right: -10px;
    vertical-align: middle
  }

  .van-field__clear {
    color: #c9c9c9
  }

  .van-field__icon-container {
    color: #999
  }

  .van-field__icon {
    display: block;
    font-size: 16px;
    line-height: inherit
  }

  .van-field__button {
    padding-left: 10px
  }

  .van-field__error-message {
    color: #f44;
    font-size: 12px;
    text-align: left
  }

  .van-field--error {
    color: #f44
  }

  .van-field--label-center .van-cell__title {
    text-align: center
  }

  .van-field--label-right .van-cell__title {
    text-align: right
  }
</style>
