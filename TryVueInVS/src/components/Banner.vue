<template>
  <section class="revolution-slider">
    <div class="bannercontainer">
      <div class="banner">
        <ul>
          <!-- Slide 1 -->
          <!--v-for="item in banner" :key="item.Id"
          v-bind:src="file+item.bannerImage"-->
          <li v-for="item in banner" :key="item.Id" data-transition="fade" class="banner_item" data-slotamount="7" data-masterspeed="1500">
            <!-- Main Image -->
            <img v-bind:src="file+item.bannerImage" style="opacity:0;" alt="slidebg1" data-bgfit="cover" data-bgposition="left bottom" data-bgrepeat="no-repeat">
            <!-- Layers -->
            <!-- Layer 1 -->
            <div class="caption sft revolution-starhotel bigtext"
                 data-x="505"
                 data-y="30"
                 data-speed="700"
                 data-start="1700"
                 data-easing="easeOutBack">
              <span><i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i></span> A Five Star Hotel <span><i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i></span>
            </div>
            <!-- Layer 2 -->
            <div class="caption sft revolution-starhotel smalltext"
                 data-x="605"
                 data-y="105"
                 data-speed="800"
                 data-start="1700"
                 data-easing="easeOutBack">
              <span>And we like to keep it that way!</span>
            </div>
            <!-- Layer 3 -->
            <div class="caption sft"
                 data-x="775"
                 data-y="175"
                 data-speed="1000"
                 data-start="1900"
                 data-easing="easeOutBack">
              <a href="room-list.html" class="button btn btn-purple btn-lg">See rooms</a>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  import { HttpFunc } from '../funcs/HttpService';
  import { IPropertyDTO } from '../Dtos/PropertyDTO';
  //import { ISiteConfig } from './Configurations/SiteConfig';
  export default Vue.extend({
    name: 'Banner',
    data: function () {
      const banner: IPropertyDTO[] = [];
      return {
        banner: banner,
        file: ""
      }
    },
    mounted: async function () {
      const banner = await HttpFunc.Get < IPropertyDTO[] > ('api/Property/Type/1');
      this.file = await HttpFunc.GetFile();
      if (banner) {
        this.banner = banner;
      }
    },
    updated: function () {
      if (this.banner) {
        (window as any)['RevolutionSlider'](this.banner.length);
      }
    }
  });
</script>