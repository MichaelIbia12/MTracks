<script setup>

</script>
<template>
  <div class="library">
    <div class="box1">
      <div class="navBox">
       
        <input type="text" placeholder="search something" class="input">
        <div class="settings">
          <div class="eq">
            <font-awesome-icon icon="fa-solid fa-moon" />
          </div>
          <div class="setting">
            <font-awesome-icon icon="fa-solid fa-cog" />
          </div>
        </div>
      </div>
    </div>
    <div class="box2 tab">
      <div class="page">
        <h1>Recent Playlists</h1>
        <div class="container-box">
          <div class="box art">
            <div class="content">
               <div class="SidealbumCover"></div>
               <h1>Mr. money with the vibe</h1>
               <p>asake</p>
              </div>
          </div>
          <div class="box art">
            <div class="content">
              <div class="SidealbumCover"></div>
              <h1>Mr. money with the vibe</h1>
              <p>asake</p>
            </div>
          </div>
          <div class="box art">
            <div class="content">
              <div class="SidealbumCover"></div>
              <h1>Mr. money with the vibe</h1>
              <p>asake</p>
            </div>
          </div>
          <div class="box art">
            <div class="content">
              <div class="SidealbumCover"></div>
              <h1>Mr. money with the vibe</h1>
              <p>asake</p>
            </div>
          </div>
        </div>
        <div class="outerSection-a">
          <div class="section-a">
            <div class="carosel-f">
           
              <div class="box large blue">
                <h1>R&B</h1>
              </div>
              <div class="box large red">
                <h1>Naija</h1>
              </div>
              <div class="box large yellow">
                <h1>HipHop</h1>
              </div>
              <div class="box large orange">
                <h1>See more</h1>
              </div>
            
            </div>
          </div>
        
        </div>
        <div class="playlist-Section">
          <h1>Workout playlist</h1>
          <div class="workout">
            <div class="box art"></div>
            <div class="box art"></div>
            <div class="box art"></div>
            <div class="box art"></div>
            <div class="box art"></div>
          </div>
        </div>
      </div>
      <div class="side tab">

        <div class="box popularityChart">

        </div>
        <div class="controls">
          <div class="box albumCover"></div>
          <div class="manualControls">
            <div class="box musicLength">
              <div class="box innerLength"></div>
            </div>
            <div class="miniControls">
              <div class="backward media-btn">
                <div class="btn-c">
                  <font-awesome-icon icon="fa-solid fa-backward" />
                </div>

              </div>
              <div class="play media-btn">
                <div class="btn-c">
                  <font-awesome-icon icon="fa-solid fa-play" />
                </div>

              </div>
              <div class="forward media-btn">
                <div class="btn-c">
                  <font-awesome-icon icon="fa-solid fa-forward" />
                </div>

              </div>
            </div>
            <div class="devices"></div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
 <script>
 export default {
    data() {
    return {
      client_id: 'bb2c2365106945cb81942f97c748f3fe',
      client_secret: 'cdd28fff7bf34c1ba446304040f1ff07'
    }
  },
  methods:{},
  mounted(){
      var parameter = {
        method:'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + (this.client_id + ':' + this.client_secret).toString('base64')
        },
        body:'grant_type=client_credentials&client_id='+this.client_id + '&client_secret='+ this.client_secret
      }
      fetch('https://api.spotify.com/api/token', parameter)
       .then(result => result.json())
       .then(data => console.log(data))
    
  }
 }
 </script>
<style scoped>

</style>