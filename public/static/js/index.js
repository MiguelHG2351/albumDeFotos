
      // Variables

      const cards = document.getElementById('card-container')
      const cards_others = document.getElementById('card-container-others')
      const ele = document.getElementsByClassName('user-name')
      const videoContainer = document.getElementById('video')
      const form_video = document.getElementById('form-video')
      const category = document.getElementsByClassName('categoryImages')
      // const BASE_URL = `static/images/${i}`

      function renderTemplate(url) {
        return `
        <div class="col s12 m6 l4 xl3 card">
              <div class="card-image materialboxed" style="overflow:scroll; height:286px !important;">
                <img class=""materialboxed" alt="foto de la tarjeta" src="static/images/${url}.png"">
              </div>
              <div class="card-content">
                <div><p class="name-photo">Francisca Vallecillo</p></div>
                <div><p class="date-photo">march 28, 2020</p></div>
              </div>
              <div class="card-action">
                <div class="user-card">
                  <img loading="lazy" class="user-img" src="https://scontent.fmga3-2.fna.fbcdn.net/v/t1.0-1/c38.0.160.160a/p160x160/86699303_832721240486433_5068736281786187776_o.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=wwMxlVUmKrIAX_Y4eCt&_nc_ht=scontent.fmga3-2.fna&oh=d753d59c0bc1bc3b3453e349edd14edf&oe=5EAD5ADD"
                   alt="Foto del usuario">
                   <p class="user-name">Walter Solorzano</p>
                </div>
              <div>
                  <button class="btn-user blue">add image</button>
                  <button class="btn-user orange">add user</button>
                  <button class="btn-user red">send mail</button>
                </div>
              </div>
          </div>
        `
      }

      document.addEventListener('DOMContentLoaded', () => {
        
        for(var url=1; url<=27; url++) {
          const HTMLString = renderTemplate(url)
          const html = document.implementation.createHTMLDocument();
          html.body.innerHTML = HTMLString;
          cards.append(html.body.children[0])
          //   console.log(name[url])
        }

        for(var url=28; url<=80; url++) {
          const HTMLString = renderTemplate(url)
          const html = document.implementation.createHTMLDocument();
          html.body.innerHTML = HTMLString;
          cards_others.append(html.body.children[0])
          //   console.log(name[url])
        }
        
        // setTimeout(() => {
          //     for (let i = 1; i <= 27 ; i++) {
            //         console.log(i)
            //         if(i <=5) {
              //             alert()
              //         }
              //     }
              // },4000)
            M.AutoInit()

       })
       debugger
       window.addEventListener('load', () => {
        
       })


    // async function hello() {
    //   const api = await fetch('https://miguelhg2351.github.io/albumDeFotos/public/static/js/index.json')
    //   const response = await api.json()
    //   console.log(response.hola.holaMundo)
    // }

    // hello()

