<template>
  <div id="app">
    <div class="hero_vector">
      <div class="padding_zero_bigscreens container">
        <div class="padding_zero_bigscreens col">
          <nav class="navbar navbar-expand-lg" style="padding-left: 5%;">
        <span class="navbar-brand"><img src="@/assets/at_transparente.png" width="200"/></span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <i class="far fa-angle-double-down" style="color: white"></i>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#forum">fórum</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#vagas">vagas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#podcast">podcast</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#artigos">artigos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#canal">canal</a>
              </li>
            </ul>
        </div>  
      </nav>
        <div>
          <div class=hero_text>
            <h1 class='hero_title'>print("Hello World")</h1>
            <span class='hero_sub_title'>A sua comunidade de teste está de cara nova!</span>
          </div>
        </div>
        <img class="hero_img" src="@/assets/agile_testers_mari_waldo.png"/>
        </div>
      </div>
    </div>
  <div class="container">
    <div class="row">

    </div>
    <div class="row">
      <div class="col-sm-12">
        <h1 id="forum">Fórum </h1>
          <div class="github_issue_box" v-for="post of forum" v-bind:key="post.id">
            <a target="_blank" v-bind:href=post.html_url>
            <div class="row">
              <div class="col-sm-10">
                <h2 class='github_issue_title'> {{post.title.slice(0, 75)}} </h2>
                <span class='github_issue_subtitle'>
                  {{post.user.login}} -- {{ post.created_at | moment("dddd, MMMM Do YYYY") }}
                </span>
              </div>
              <div class="github_arrow_col col-sm-1">
                <i class="fal fa-arrow-circle-right"></i>
              </div>
            </div>
            </a>
          </div>
      </div>
    <div>
          <a target="_blank" class="vermais_link" 
            href="https://github.com/AgileTesters/forum"> Ver mais </a>
    </div>
    </div>
    <br>
    <br>
    <div class="row">
      <div class="col-sm-12">
        <h1 id="vagas">Vagas </h1>
          <div class="github_issue_box" v-for="vaga of vagas" v-bind:key="vaga.id">
            <a target="_blank" v-bind:href=vaga.html_url>
            <div class="row">
              <div class="col-sm-10">
                <h2 class='github_issue_title'> {{vaga.title.slice(0, 75)}} </h2>
                <span class='github_issue_subtitle'>
                  {{vaga.user.login}} -- {{ vaga.created_at | moment("dddd, MMMM Do YYYY") }}
                </span>
              </div>
              <div class="github_arrow_col col-sm-1">
                <i class="fal fa-arrow-circle-right"></i>
              </div>
            </div>
            </a>
          </div>
      </div>
          <div>
          <a target="_blank" class="vermais_link" 
            href="https://github.com/qa-brasil/vagas"> Ver mais </a>
    </div>

    </div>
  <br>
  <br>

  <div class="row">
        <div class="col-sm-12">
          <h1 id="podcast">Nosso Podcast </h1>
          <div>
            <h5> Podcast do Agile Testers - Para sugerir temas e participantes, <a href="https://github.com/AgileTesters/forum/issues/19" target="_blank">clique aqui</a></h5>
            <br>
            <iframe src="https://anchor.fm/qansei/embed" height="160px" frameborder="0" scrolling="no" class="podcast_widget"></iframe>
          </div>

          <a class="btn btn-success" target="_blank" href="https://open.spotify.com/show/6C86lhNUZ6Pf4nYROy8ciI?si=RRlb_9VdT_eSvOtdXfuTwQ" role="button" style="margin-top: 16px;"><i class="fab fa-spotify"></i> Ouça também no spotify!</a>
        </div>
    </div>
  </div>


    <div class="row base-artigo">
        <div class='container'>
          <div class='row'>
            <div class="col-sm-12 artigo">
              <h1 id="artigos">Nossos Artigos </h1>
              <h5> Acesse nossa revista <a target="_blank" href="https://medium.com/assertqualityassurance"> AssertQA() </a></h5>
            </div>
          </div>
        
        <div class="row">
          <div v-for="article of articles" v-bind:key="article.link">
            <div class="col">
              <div class="article_box">
                  <a target="_blank" v-bind:href=article.link>
                    <img v-bind:src=article.thumbnail class="article_thumbnail">
                    <br>
                    <span class='article_author'>{{article.author}}</span>
                    <br>
                    <div class="article_title">{{article.title}}</div>
                  </a>
                </div>                  
            </div>
          </div>
        </div>
    </div>
  </div>
  <br><br>
  <div class="container">
      <div class="row">
        <div class="col-sm-6 newsletter_col">
          <h2> Esteja sempre atualizado! <i class="fad fa-newspaper"></i></h2>
          <form action="https://www.getrevue.co/profile/agile-testers/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
            <div class="row">
              <div class="col-sm-3">
                <label for="member_email">Email*</label>
              </div>
              <div class="col=sm-8">
                <input class="input_mobile" name="member[email]" id="member_email" :state="null" placeholder="Obrigatório">
              </div>
            </div>
            <div class="row">
              <div class="col-sm-3">
                <label for="member_first_name">Nome</label>
              </div>
              <div class="col=sm-8">
                <input class="input_mobile" name="member[first_name]" id="member_first_name" :state="null" placeholder="Não Obrigatório">
              </div>
            </div>
            <input type="submit" class="btn btn-primary" value="Assinar" name="member[subscribe]" id="member_submit">
          </form>
        </div>
            
        <div class="col-sm-6 newsletter_col">
            <h2> Pergunte-me qualquer coisa!</h2>
            
            <br/>
            <a class="btn btn-primary" target="_blank" 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeLMETwSFN-pmVNgL_hbWPmDtLMZR2lXtg9MVAhKS73LVPlaA/viewform" 
              role="button"> Faça sua pergunta pra gente!
            </a>

          </div>
      </div> 

      <div class="row">
        <div class='col-sm-12'>
           <center>
             <h1 id="canal">Nosso Canal no Youtube</h1>
             <iframe class="canal_iframe" src="https://www.youtube.com/embed/videoseries?list=UUhHLl66ov4h2hmL_G3hHi3Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </center>
          <br>
        </div>
      </div>
      <br><br>
  </div>

  <div class="footer">
    <a target="_blank" href="https://github.com/AgileTesters/"> <i class="fab fa-github-alt footer_icons"></i> </a> 
    <a target="_blank" href="https://www.facebook.com/agiletesters"> <i class="fab fa-facebook-square footer_icons"></i> </a>
    <a target="_blank" href="https://twitter.com/agile_testers/"> <i class="fab fa-twitter-square footer_icons"></i> </a>
  </div>
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
      const res = await fetch('https://api.github.com/repos/agiletesters/forum/issues?page=1&state=open');
      let data = await res.json();
      data = data.filter((issue) => { return issue.pull_request === undefined });
      this.forum = data.slice(0,4);
    },
    async getIssuesVagas(){
      const res = await fetch('https://api.github.com/repos/qa-brasil/vagas/issues?page=1&state=open');
      let data = await res.json();
      data = data.filter((issue) => { return issue.pull_request === undefined });
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