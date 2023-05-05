<template>
  <div id="app" data-app>
    <div>
        <v-btn
          outlined
          color="primary"
          class="background-white"
          @click="onChoseFile"
        >Upload Image</v-btn>
        <input
          hidden
          ref="uploader"
          class="d-none"
          type="file"
          accept=".png"
          multiple
          v-on:change="onChangeFile"
        />
        <CropperImg
          v-if="!isFirstLoading"
          ref="cropComponent"
          :showDialogFlag="showDialogFlag"
          :saveFunc="onSaveImage"
          :arrayImg="arrayImg"
          @input="showDialogFlag = $event"
        />
  </div>
</div>  
</template>

<script>
import CropperImg from './components/CropperImg/CropperImg.vue';
export default {
  name: 'App',
  components:{
    CropperImg,
  },
  data(){
    return {
      arrayImg: [] ,
      showDialogFlag:false ,
      isFirstLoading: true,
    }
  } ,
  methods : {
    /**
     * Save cropped image info
     * @param dataList List image after cropping
     */
    async onSaveImage(dataList) {
      // TODO
      console.log('debug', dataList);
    },

    /**
     * Select image event
     */
    onChoseFile() {
      this.$refs.uploader.value = '';
      this.$refs.uploader.click();
    },

    /**
     * Select image file
     */
    onChangeFile(e) {
      const loader = this.$loading.show({
        loader: 'dots',
      });

      const files = e.target.files,
        fileLength = files.length;
      this.arrayImg = [];

      // Flag to use counting onload img
      let onLoadCount = 0;
      for (let i = 0; i < fileLength; i++) {
        const fileInfo = files[i];

        this.arrayImg.push({
          id: Date.now() + i,
          fileName: fileInfo.name,
          type : fileInfo.type,
          file: fileInfo,
        });

        // Convert img to base64
        if (typeof FileReader === 'function') {
          const reader = new FileReader();
          reader.onload = (event) => {
            let updatedImg = this.arrayImg[i];
            updatedImg.url = event.target.result;
            this.arrayImg[i] = updatedImg;

            // Avoid async onload image
            onLoadCount++;

            // Check to show dialog
            if (onLoadCount >= fileLength) {
              // Change img for cropper
              if (this.isFirstLoading) {
                this.isFirstLoading = false;
              } else {
                this.$refs.cropComponent.showLoading();
                this.$refs.cropComponent.replaceImage(this.arrayImg[0].url);
              }

              this.showDialogFlag = true;

              setTimeout(() => {
                loader.hide();
              }, 200);
            }
          };
          reader.readAsDataURL(fileInfo);
        }
      }
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>