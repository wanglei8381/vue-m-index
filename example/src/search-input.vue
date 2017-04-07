<template>
  <div class="search-container focus">
    <div class="back-page back-page-del tap-active" v-touch:tap="back"></div>
    <div class="search-box">
      <span class="search-icon"></span>
      <input class="search-input" type="text"
             :placeholder="placeholder" :value="value" :maxlength="maxlength" @input="input" @keyup.enter="search">
      <span v-show="value !=''" class="search-del-icon" v-touch:tap="clear"></span>
    </div>
    <div class="search-btn" v-touch:tap="search"></div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .search-container {
    height 2.2rem
    padding-top: .3rem
    padding-left: 2rem
    padding-right: 2rem
    position: relative
    background: #ffffff
    &.focus {
      .search-btn {
        display: block
      }
      .search-box {
        /*width 16rem*/
        .search-input {
          padding-left .6rem
          padding-right 1.5rem
        }
        .search-icon {
          display: none
        }
        .search-del-icon {
          display inline-block
        }
      }
    }

    .search-btn, .back-page {
      position: absolute
      top: 0
      right: 0
      width 2rem
      height 2.15rem
      background-repeat no-repeat
      background-size .9rem .9rem
      background-position center center
    }
    .search-btn {
      display: none
      background-image: url("data:image/pngbase64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAA7VJREFUWAm9V0trFEEQrpolQQOJD0IOQcEHSq5mIxH1oBcvYqKIiuDFH5CoCAZUcAX1IEg0+wO8CKIimgQvevGgQjCTXIOiHiIRwoqYSBTDTlvfTGrnkZlxzc7akFR3V/VX33Z1ddcwVdEKBWONfrN3Ow4dJkN5ItNOxPKHZmakP0NMtmXR00Pr8m8KBXY8XfX/Oc10X+HTqrlSqd8QnxeHbWm2vo5nmcytltbWoZeFzb/8+fReIpEdZyaOcrk8aIg2pkPEawV42uRy5ybvdD6OtwjPLiNijOF8//g1Y+hiyJTpsxgPWyb3zGq0PjS1NEhIiBbmFtud385Wh8sHhXSvhG5DcB0z3bCHui4zs6iTW4jIEon7QuKELmGJP1t0Zcve/N1Hx7ms83Hy2EOT+/jKPm0cumrcc+RZCZkHQuZkGpkQkc6+t9eDOyHKkdVNzade3+yYj3OcNLfnwlTzz4X5e7IFPWqDnZko7ryk46i0dAJnIkiCmId6WruO/CsJ4GEN1lrERcUHNnzoOCrdHVnKjnd6MLETAFpJGgYdIO1HSuNPdGcEd1qyaXtcNrk74qWolx04EwhHrSRACBjAAibG+KHwhX60WWDt3ROeCgdzJeGIAusYWMDUMXzBp45Vujdm5bKSFEV2qDIr6WIKtodn2nBLR7Et99pempUYDv8tRaMA1YyBCWy1DfrUOct7O7whLitVZC1D2O57FfYgscID5jXcmNrPWoaxfZ/qR4joK0qk17Yqs5RhbN+n+lh2elVRTynPjmRyuCE0bo5jGg9YWJ3dKIgtNL5EkRGaChG8olGDrMZhbN+n4stzQLYO8JRrP2sZxJZUHo/iWyjvdFIC14unXMdZSWACW/E4598pOmehxpTwzLoTUtSgnlBlVtLFrBRMPOv5DKPLW8MOakydRlGDekLHtUpgAVNx4CvuQXXTF4WuxG0axqisUNTEPUwKVq0EhlcgeRcYfMBX3HqXCOoDFLpqIPHsGf5qD9ZCBmtHS/ZtYFVwxUdcLQK9kPRbXUtFoqkGXts9Vtw253v0eyEidSue5a6UnWmSAmmsgdcciCMTIgJ+mX9OyE4IiQ797UlklhHRBVl9YDU6zS8WzffnkgTdih1Hxj2sahCU+EJDoStMByr3TNAgsY9PThrAWmAgDAgHnOsSkAK57r73LTqXuCNqAOlmQI0f4XCatjNVEQmSqqWfRiYxNLU4TFobFyZUiJz7sf6/7ogS1J1xSTDvt4tddStR1WeiBJldZyc3qcEfL9PbGxqufR4AAAAASUVORK5CYII=")
    }

    .back-page {
      left: 0
      background-size .525rem .85rem
      background-image: url("data:image/pngbase64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAiCAYAAACwaJKDAAAAAXNSR0IArs4c6QAAATRJREFUSA2t1F2ugjAQBWCLi+DJTbgMduHfA7CHG90EPIi4C55dy13I5Z5DLJFYYKbtJIbY2o/JdJztJjD6vjdpmjZZlu27rnuRMyEmwbqu73ie3s6tLMtr4os6QFI7rntlOgO2RVGcjTG9Gl0Dma4KlYAqVAqKUQ0oQrXgKuoDLqK+4CwaAjrRUPALjQFO0FjgiMYEBzQ2SJSjj///yQjkpOGmbyQA/vI8PwNoLYLsT+/hqxo49vx4iGWoqqrBxnHcNOaBF160mY8ooVjwBI0Ff6ExYCdqYVzWAyU58DsDtRXVeBYlwhr7wJP+JPQZvHW2G55Pu44XrbbbYqYfUIKMG2kpRChxgGJYjGpgFSqF1agEXrx9Aq5ANwxDyNUV/L0XyoMuGMu/3AsOdgWmW4vPj8X+AQJWbKrNdW1nAAAAAElFTkSuQmCC")
    }

    &[del] .back-page {
      background-size .725rem .725rem
      background-image: url("data:image/pngbase64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAeBJREFUSA211z1OwzAUB/C6VVNlYGThBgiJlRmoxBEY2FKkqu0NWBALN2irSjQLAon0DHyNjAhxBZaMDKFFUfi/NI5c4jS2MZbaOPbL+8lubKu1Wlam0+mW7/ub/N7mNUkSNhqNdnnOOlUInM/nT1EUPdqGM/AKzMt4PD4ij00mk2Ycx6/o3KYGlHfXdfc9zwuXt+bfAuhRFsbYFy579W63+43OCzTEWfodGyP+DVJutN32er03lkG14XB4DPgGHY2szXjEMhA5/X6/fwojyVGCbMBVIDkr6F9hFVCKmsKqYCmqC+uAa1FVWBesRKtgE1AJLYMdxzlcLBaX6E8XPsWh5MtieSv/Lry98rDicsJ6+8RIN4R4JZDilVEKlqxjaqaiDFJwuuFTRaVgRwkQ9yzG0ogx1We004jt6+rKKH9pcD0QE9IU47e91zmdlFAOAvM4iJE94GN0SFSiMhCwj9Oijb4TE3jti1QG8tOCRi15uSpPp1JUBeRTrQtLUR3QBC6gJqAuvIL+BdSBc9QGqAqnqE1QBWb/AVbB9dlsRhuEywNx1dq8hecK1cFgcIdB5RsINhIH9810eoMgaIRheI2nInHhF7IYNmTr+LzVarU7nc5HnoZgmuq8wXKF/knwlD+6udAek1BecwAAAABJRU5ErkJggg==")
    }

    .search-box {
      //$ufb-flex(1)
      position: relative
      height 1.6rem
      width 100%
      background: #e5e5e5
      border-radius: .2rem
      .search-icon, .search-del-icon {
        position: absolute
        top: .4rem
        display inline-block
        width .8rem
        height .8rem
        background: url("data:image/pngbase64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAA3xJREFUWAm9V0toE1EUbSaB2EBskeIiVBAEcd9FwZ0bN4W2olSEbEKhJQGF0J0KpaDdFaWLFgolm4AYFK3Qje6Fgt0XwVVLhNJFYyC1UBPPGecMLzOTpE0mDkzue/e+e87JvM/ciQyc42o0GtbGxsbts7Oz6UgkMoZ+Cmm8eZXhK8O3G4vFPs7NzX1Fv/4vdP7fSLuhhULhUq1WewLgBRBdbTdWMYw9xNiVRCKxmslkfsvfybYUsr6+fh+Ar3Bf6wQSFIegfdz5bDb7Piju9fmEgDgCES9gn3oGHwB4C75tTMGP4eHhMuPHx8cpTNkNNCeQMwU7Sr8u5CxDzHPYhnxBtkmII+IN7ENjMNfA4sjISGFmZuaP4fc1S6VS9OjoKIP8JQS1hgaQ/xZiHrUT0yRkbW3tJUDcJ4HET/F4PD07O1v1sbZxbG5uJk9PT4vAmtQwYC3ncrln6nutK4Rrol6vvzMGrCIxD4AL7wBiQIQFzNewj4VpWdaDVmvGFsLdcXJy8h1J9sLkk0DCvW5FiNgR8wHWfjLA2x8cHLwZtJssJnGLSgS6ZU5HryKISwxiEZN9cpCLbe9lUTUSFhRAe/Gia0K5QZZYxFSMXORUX9Y+MRHQYXXA3aFgWNbBPCAeuXhKe7EtHttyQu1Wpy2qsRexxCS2ckxO+TgtY+rAbhvtsJsutofT5uEacQ8enphhswvPxDY5FeeicYXo2FYwTOvBdjnF4Vu9CvTTYmp87x0Ksfc4ifkC65cAExtT89PLw8XqCnHeot4xofRNbJNT4Fysu+rAThjtsJsm9jcvuMXyTk6ImuKrXP2wLDGJLbxoNOqeKfJZTo156DhGWU8oGJZ1MO2CCdNySE4vNtdIHWpXFEB7ifWE+r1aYhFTOOQip/qy9vZloYvgvuNMOUVNz1sbpBaxgGvvRnKQS+SmtclYH2BQXgEATKJaY+HctRjmOoWRWaXlg2oR8roVGjv9LBUBvzc0NDSeTqd/kct7NQnBv2AF34/iuQbsBMh3IOZukJgmIVTpiAntcwKQe7hvEdu5AsX4hGg0i2mI6vkDK5lMfqlUKp+BOy5sWJ+YlkKYFNYnZ7FYvNxJTFsh+gd4Mj1/hHcScy4hEtSrbSem63OiG1HcLdw1yN1RPs6vVLVavfJfn4jI9WQoAi/AO/Pz830rUcXZ0lIMduZ1DfgLDzgCzFzmsSEAAAAASUVORK5CYII=") no-repeat
        background-size contain
      }
      .search-icon {
        left .6rem
      }
      .search-del-icon {
        display: none
        background-image: url("data:image/pngbase64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA1pJREFUWAnFlztPG0EQx9eHH4DtUICFiVKGBqR0sSyo0hIJKXU+QVKmjZQiUlrK5BOkRkJKnQrp5HSJTGPKCBsZCh4GbAPO/Da3p/P5XiAbRjK3j5n5/29mdthLqYRSr9ezJycnr1Kp1OZgMFiR31Mx5YccyDq/PVnfmZub+7m6utr7vxX9NxW9rVStViv3+/1P4vytOH8Sp8++6J6K7vdMJvO5Uqm0omxCCTQajVy73f4oxh/EWT7KSdieEOnI3lapVPqyvLzcDdILJOC89bYYVIOM7rFmSzTeBEVjhIBt2y9ub29/yFs/uwdQqIlE469sbqytrf3xKg0R4M2vr69/jRvcAEIinU6/9EbCMpvkXIpte1Lg4OAbDLAMrkvAKbhx5dz4D3pWHSy9p1PghH5fGN6r2oNQotY4HZKK56RCR4BzHgcuRiqfz6upqako3yqbzdIHInXAAhOllNPh2rIY2mRwWC6XVS6XU2Koms2mkpMyAjI/P6+KxaLqdruq1WqR8xEdsyA+T6VjlizaaxQ4BnKGNbgZQ8ay3PLRPhcWFjQ4E4jOzs7q9bA/YIJtCZPNMCWz3uv11NnZmZnqMC8uLrokpNOpQqHg7hOlq6srdx42ADstTFbCFLzrx8fHOrcGiLeEBKmYmZlxVSFL+INS5Co5A7AhYP6j+fdH5kdHR5oExYhAwivk/vDwMBE4dmCTyMQEMJIzrC4vLxkOyV3BHWNNYMhR3ITi8xcgNoQ8Sdh9/gdE4MC3GDoFmLz7Q48BdUAx3lGanIJEBAA3vcCAkApCb4Ta4DgmFbAhsBdnQPdbWlrSx8/odjodXXAUnZcEp4SGlETAtqQSd+KUp6endTMyeufn57oYmZN3SHD8jNANaclxArbFBVKYnEYpX1xcuG9JQ+I4egUSnH0aEEJEzNir5x2DqbFZ3N3d/SqPd14F/1gMdBS8b+rXIVVEC8Lydv5t//zb+vr6e93Qub0KABfIUMFhFDiGNzc3itqIAwcLTGw0AeeKtMXCA8mWuZZpAoBydZaH/QAEbAdLQ7kEuLdzdZbwcHudiOAbDO83gksARH1FsqzXkyDh+NwwoTdvOESAxWq1+purswzHmQ4bn/5vAvBCL2+P+mkGMyOP9nFqCJjnpD7P/wHm9a60zycigwAAAABJRU5ErkJggg==")
        right: .5rem
      }
      .search-input {
        display: block
        border: none
        background: transparent
        padding-left 1.9rem
        height 100%
        width 100%
        font-size .75rem
        color: #353535
        vertical-align middle
      }
    }
  }

</style>
<script>
  export default {
    props: {
      value: String,
      placeholder: String,
      maxlength: {
        type: String,
        default: '10000'
      }
    },
    methods: {
      back () {
        this.$emit('back')
      },
      search () {
        this.$emit('search')
      },
      input (e) {
        this.$emit('input', e.target.value.trim())
      },
      clear () {
        this.$emit('input', '')
      }
    }
  }
</script>