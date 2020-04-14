document.addEventListener('DOMContentLoaded', () => {
  M.AutoInit()
})

class API {
  async fetchAPI() {
    const response = await fetch('../index.json')
    const json = await response.json()
    json[0].forEach(element => {
      console.log(element)
    });
    // console.log(json[0][])
      // console.log(json[0])

  }
  async loadSite() {
'use strict'

      // Variables

      const cards = document.getElementById('card-container')
      const cards_others = document.getElementById('card-container-others')
      const videoContainer = document.getElementById('video')
      const form_video = document.getElementById('form-video')
      const category = document.getElementsByClassName('categoryImages')

      function renderTemplate(url) {
        return (`
        <div class="col s12 m6 l4 xl3 card">
              <div class="card-image materialboxed">
                <img class="lazy materialboxed" data-src="static/images/${url}.png" data-srcset="static/images/${url}.png 2x, static/images/${url}.png  1x" alt="foto de la tarjeta" src="">
              </div>
              <div class="card-content">
                <div><p class="name-photo">Francisca Vallecillo</p></div>
                <div><p class="date-photo">march 28, 2020</p></div>
              </div>
              <div class="card-action">
                <div class="user-card">
                  <img class="user-img" src="https://scontent.fmga3-2.fna.fbcdn.net/v/t1.0-1/c38.0.160.160a/p160x160/86699303_832721240486433_5068736281786187776_o.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=wwMxlVUmKrIAX_Y4eCt&_nc_ht=scontent.fmga3-2.fna&oh=d753d59c0bc1bc3b3453e349edd14edf&oe=5EAD5ADD"
                   alt="Foto del usuario">
                   <p class="user-name">Walter Solorzano</p>
                </div>
              <div>
                  <button class="btn-user blue"><a href="https://twitter.com/intent/tweet">share twiter</a></button>
                  <button class="btn-user orange">add user</button>
                  <button class="btn-user red">send mail</button>
                </div>
              </div>
          </div>
        `)
      }
      const name = document.getElementsByClassName('user-name')

        for(let url=1; url<=86; url++) {
          const HTMLString = renderTemplate(url)
          const html = document.implementation.createHTMLDocument();
          html.body.innerHTML = HTMLString;
          cards.append(html.body.children[0])
          if (url >= 31) {
            const HTMLString = renderTemplate(url)
            const html = document.implementation.createHTMLDocument();
            html.body.innerHTML = HTMLString;
            cards_others.append(html.body.children[0])
          }
        }
      localStorage.setItem('images', cards.children[0].children[0].children[0].dataset.src)

        for (let i = 0; i < 86; i++) {
          name[i].textContent = name[i].textContent.slice(0, 8) 
        }
        
        var lazyImages = [].slice.call(document.querySelectorAll(".lazy"));
        // console.log(lazyImages)
        if ("IntersectionObserver" in window) {
          let lazyImageObserver = new IntersectionObserver(function callback(entries, observer) {
            entries.forEach(function(entry, index, array) {
              if (entry.isIntersecting) {
                let lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.srcset = lazyImage.dataset.srcset;
                lazyImage.classList.remove("lazy");
                lazyImageObserver.unobserve(lazyImage);
                name[1].textContent = name[1].textContent.slice(0, 7)
              }
            });
          });
          
          lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
          });
        } else {
          console.log('No es compatible intersection observer con esta navegador')
        }

    }
}

const api = new API()
api.loadSite()
api.fetchAPI()