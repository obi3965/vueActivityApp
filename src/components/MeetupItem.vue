<template>
  <div class="column is-one-third">
          <!-- <router-link :to="'/meetups/' + meetup._id" class="card large"> -->
             <div class="card large">
             <router-link :to="{name: 'PageMeetupDetail', params:{id: meetup._id }}" class="card-meetup-link">
            <div class="card-image">
              <figure class="image is-4by3">
                <!--MEETUPS IMAGE-->
                  <img :src=" meetup.image" alt="Image">
              </figure>
            </div>
            <div class="card-content">
              <div class="level m-b-md">
                <div class="media-left">
                  <div class="level-item has-text-centered">
                    <div>
                      <!--GET THE MEETUPS STARTDATE-->
                      <p class="title">{{ meetup.startDate | formatDate('MMM') }}</p>
                      <p class="title">{{ meetup.startDate | formatDate('D') }}</p>
                    </div>
                  </div>
                </div>
                <div class="media-content">
                  <!--GET THE MEETUPS TITLE-->
                    <p class="title is-4 no-padding is-marginless">{{ meetup.title }}</p>
                    <!-- <p><span class="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p> -->
                    <!--GET THE MEETUPS CATEGORY-->
                    <span class="tag is-success">{{meetup.category.name }}</span>
                    <!--GET THE MEETUPS LOCATION-->
                    <p class="subtitle is-7">{{ meetup.location}} </p>
                </div>
              </div>
              <div class="content">
                <!--GET THE MEETUPS DESCRIPTION-->
                  {{ meetup.description }}
                  <div class="background-icon"><span class="icon-barcode"></span></div>
              </div>
            </div>
          </router-link>
          </div>
        </div>
</template>


<script>
export default {
 props:{
   meetup:{
     required:true,
     type:Object
   }
 }
}
</script>

<style scoped>
.card-meetup-link{
  color:black;

}
</style>
