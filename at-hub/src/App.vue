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
            <a target="_blank" v-bind:href=post.html_url>
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
            <a class="issues_link" target="_blank" v-bind:href=vaga.html_url>
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
          <a class="btn btn-success" target="_blank" href="https://open.spotify.com/show/6C86lhNUZ6Pf4nYROy8ciI?si=RRlb_9VdT_eSvOtdXfuTwQ" role="button" style="margin-top: 16px;"><i class="fab fa-spotify"></i> Ouça também no spotify!</a>
        </b-col>
        </center>
      </b-row>

      <b-row class="issues base-artigo" style='padding-left: 0px;'>
        <center style='width: 100%'>
        <b-col>
           <h1 id="artigos">Nossos Artigos </h1>
          <h5> Artigos da nossa revista <a target="_blank" href="#"> AssertQA() </a> sobre qualidade de software, desenvolvimento e cultura</h5>
        </b-col>
        </center>
        <div class="w-100"></div>
        <div v-for="article of articles" v-bind:key="article.link">
          <b-col>
            <div class="article_box">
                  <a target="_blank" v-bind:href=article.link>
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

      <b-row class="issues" style='padding-left: 0px;'>
        <b-col lg="1" class="placeholder_div">
        </b-col>
        <b-col class="newsletter_col">
          <h2> Esteja sempre atualizado! <i class="fad fa-newspaper"></i></h2>
          <form action="https://www.getrevue.co/profile/agile-testers/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">

            <b-row class="my-1">
              <b-col sm="3">
                <label for="member_email">Email*</label>
              </b-col>
              <b-col sm="6">
            <b-form-input name="member[email]" id="member_email" :state="null" placeholder="Obrigatório"></b-form-input>
              </b-col>
            </b-row>

            <b-row class="my-1">
              <b-col sm="3">
                <label for="member_email">Nome*</label>
              </b-col>
              <b-col sm="6">
                <b-form-input name="member[first_name]" id="member_first_name" :state="null" placeholder="Não obrigatório"></b-form-input>
              </b-col>
            </b-row>
            <input type="submit" class="btn btn-primary" value="Assinar" name="member[subscribe]" id="member_submit">

          </form>

        </b-col>
          <b-col class="newsletter_col">
            <br>
            <h1> Pergunte-me qualquer coisa! <i class="fad fa-question-square"></i> </h1>
            
            <br/>
            <a class="btn btn-primary" target="_blank" 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeLMETwSFN-pmVNgL_hbWPmDtLMZR2lXtg9MVAhKS73LVPlaA/viewform" 
              role="button"> Faça sua pergunta pra gente!
            </a>

          </b-col>
        <b-col lg="1" class="placeholder_div">
        </b-col>
      </b-row>    
    
    <b-row class="footer">
        <b-col>
          <a target="_blank" href="https://github.com/AgileTesters/"> <i class="fab fa-github-alt footer_icons"></i> </a> 
          <a target="_blank" href="https://www.facebook.com/agiletesters"> <i class="fab fa-facebook-square footer_icons"></i> </a>
          <a target="_blank" href="https://twitter.com/agile_testers/"> <i class="fab fa-twitter-square footer_icons"></i> </a>
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