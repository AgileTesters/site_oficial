<template>
  <div id="app">
    <b-container>
      <b-row class="hero_vector">
        <b-col>
            <b-navbar toggleable="lg" type="light">
            <b-navbar-brand href="#"><img src="@/assets/at_transparente.png" width="200"/></b-navbar-brand>


            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav center>
              <b-navbar-nav>
                <b-nav-item href="#forum">fórum</b-nav-item>
                <b-nav-item href="#vagas">vagas</b-nav-item>
                <b-nav-item href="#podcast">podcast</b-nav-item>
                <b-nav-item href="#artigos">artigos</b-nav-item>
                <b-nav-item href="#canal">canal</b-nav-item>
                <b-nav-item href="#">mais</b-nav-item>
              </b-navbar-nav>

              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">

                <b-nav-item-dropdown text="Lang" right>
                  <b-dropdown-item href="#">EN</b-dropdown-item>
                  <b-dropdown-item href="#">ES</b-dropdown-item>
                  <b-dropdown-item href="#">RU</b-dropdown-item>
                  <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                  <!-- Using 'button-content' slot -->
                  <template v-slot:button-content>
                    <em>User</em>
                  </template>
                  <b-dropdown-item href="#">Profile</b-dropdown-item>
                  <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>

        </b-col>
        <div class="w-100"></div>

        <b-col lg="6" sm="6">
          <div class=hero_text>
            <h1 class='hero_title'>print("Hello Bacon")</h1>
            <span class='hero_sub_title'>A sua comunidade de teste está de cara nova!
                </span>
          </div>
        </b-col>
        <b-col lg="6" sm="6">
          <img class="hero_img" src="@/assets/agile_testers_mari_waldo.png"/>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="issues">
        <b-col>
          <h1 id="forum">Fórum </h1>
          <div class="github_issue_box" v-for="post of forum" v-bind:key="post.id">
            <a v-bind:href=post.html_url>
            <b-row>
              <b-col>
                <h2 class='github_issue_title'> {{post.title}} </h2>
                <span class='github_issue_subtitle'>
                  {{post.user.login}} -- {{ post.created_at | moment("dddd, MMMM Do YYYY") }}
                </span>
              </b-col>
              <b-col col lg="1" class="github_arrow_col">
                <i class="fal fa-arrow-circle-right"></i>
              </b-col>
            </b-row>
            </a>
          </div>
        </b-col>
        <div class="w-100"></div>
        <b-col><a target="_blank" class="vermais_link" href="https://github.com/AgileTesters/forum"> Ver mais </a></b-col>
      </b-row>
      <b-row class="issues">
        <b-col>
          <h1 id="vagas"> Vagas </h1>
          <div  class="github_issue_box" v-for="vaga of vagas" v-bind:key="vaga.id">
            <a class="issues_link" v-bind:href=vaga.html_url>
            <b-row>
              <b-col>
                <h2 class='github_issue_title'> {{vaga.title}} </h2>
                <span class='github_issue_subtitle'>
                  {{vaga.user.login}} -- {{ vaga.created_at | moment("dddd, MMMM Do YYYY") }}
                </span>
              </b-col>
              <b-col col lg="1" class="github_arrow_col">
                <i class="fal fa-arrow-circle-right"></i>
              </b-col>
            </b-row>
            </a>
          </div>
        </b-col>
        <div class="w-100"></div>
        <b-col><a target="_blank" class="vermais_link" href="https://github.com/qa-brasil/vagas"> Ver mais </a></b-col>
      </b-row>

      <b-row class="issues" style='padding-left: 0px;'>
        <center style='width: 100%'>
        <b-col>
           <h1 id="podcast">Nosso Podcast </h1>
          <h5> Podcast do Agile Testers - Para sugerir temas e participantes, <a href="">clique aqui</a></h5>
        </b-col>
        <div class="w-100"></div>
        <b-col>
          <br>
          <iframe src="https://anchor.fm/qansei/embed" height="160px" frameborder="0" scrolling="no" class="podcast_widget"></iframe>
          <br>
            <b-button variant="success" style="margin-top: 16px;"> <i class="fab fa-spotify"></i> Ouça também no spotify! </b-button>          
        </b-col>
        </center>
      </b-row>

      <b-row class="issues base-artigo" style='padding-left: 0px;'>
        <center style='width: 100%'>
        <b-col>
           <h1 id="artigos">Nossos Artigos </h1>
          <h5> Artigos da comunidade agiletesters.com.br em parceria com a revista AssertQA() sobre qualidade de software, desenvolvimento e cultura</h5>
        </b-col>
        </center>
        <div class="w-100"></div>
        <div v-for="article of articles" v-bind:key="article.link">
          <b-col>
            <div class="article_box">
                  <a v-bind:href=article.link>
                    <img v-bind:src=article.thumbnail class="article_thumbnail">
                    <br>
                    <span class='article_author'>{{article.author}}</span>
                    <br>
                    <div class="article_title">{{article.title}}</div>
                  </a>
                </div>                  
            </b-col>
          </div>
      </b-row>

      <b-row class="issues" style='padding-left: 0px;'>
        <center style='width: 100%'>
        <b-col>
           <h1 id="canal">Nosso Canal no Youtube</h1>
        </b-col>
        <div class="w-100"></div>
        <b-col>
          <br>
          <iframe class="canal_iframe" src="https://www.youtube.com/embed/videoseries?list=UUhHLl66ov4h2hmL_G3hHi3Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br>
          <b-button variant="principal" style="margin-top: 16px;"> <i class="fab fa-youtube"></i> Se inscreva em nosso canal! </b-button>
        </b-col>
        </center>
      </b-row>
    
    
    <b-row class="footer">
        <b-col>
          <i class="fab fa-github-alt footer_icons"></i>  <i class="fab fa-facebook-square footer_icons"></i> <i class="fab fa-twitter-square footer_icons"></i>
        </b-col>
    </b-row>

    </b-container>
  </div>
</template>

<script>
export default {  
  name: "App",
  data() {
    return {
      data: {},
      vagas: {},
      forum: {},
      articles: {},
      }
  },
  beforeMount(){
    this.getIssuesAT();
    this.getIssuesVagas();
    this.getArticlesMedium();
  },
  methods: {
    async getIssuesAT(){
      const res = await fetch('https://api.github.com/repos/agiletesters/forum/issues?page=1');
      const data = await res.json();
      this.forum = data.slice(0,4);
    },
    async getIssuesVagas(){
      const res = await fetch('https://api.github.com/repos/qa-brasil/vagas/issues?page=1');
      const data = await res.json();
      this.vagas = data.slice(0,2);
    },
    async getArticlesMedium(){
      const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fassertqualityassurance&api_key=akgr6zefqs1va3nznr2hrbipedydqbhyki65rrjj')
      const data = await res.json();
      this.articles = data.items.slice(0,3);
    }
  }
};
</script>
<style>
  @import './assets/default.css';
</style>