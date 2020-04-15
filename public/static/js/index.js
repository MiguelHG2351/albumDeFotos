M.AutoInit()

class API {
  
  async loadSite() {

      // Variables

      const cards = document.getElementById('card-container')
      const cards_others = document.getElementById('card-container-others')
      const videoContainer = document.getElementById('video')
      const form_video = document.getElementById('form-video')
      const category = document.getElementsByClassName('categoryImages')

      async function getData(url) {
        const response = await fetch('https://miguelhg2351.github.io/albumDeFotos/public/index.json')
        const data = await response.json()
        return data[url]
      }

      function renderTemplate(url, author) {
        return (`
        <div class="col s12 m6 l4 xl3 card">
              <div class="card-image">
                <img class="lazy materialboxed" data-src="${url}" data-srcset="${url} 2x, ${url}  1x" alt="foto de la tarjeta" src="">
              </div>
              <div class="card-content">
                <div><p class="name-photo">Francisca Vallecillo</p></div>
                <div><p class="date-photo">march 28, 2020</p></div>
              </div>
              <div class="card-action">
                <div class="user-card">
                  <img class="user-img" src="https://scontent.fmga3-2.fna.fbcdn.net/v/t1.0-1/c38.0.160.160a/p160x160/86699303_832721240486433_5068736281786187776_o.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=wwMxlVUmKrIAX_Y4eCt&_nc_ht=scontent.fmga3-2.fna&oh=d753d59c0bc1bc3b3453e349edd14edf&oe=5EAD5ADD"
                   alt="Foto del usuario">
                   <p class="user-name">${author}</p>
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
      function createTemplate(htmlString) {
        const html = document.implementation.createHTMLDocument();
          html.body.innerHTML = htmlString;
          return html.body.children[0]
      }
      function renderListImage(category, container) {
        category.forEach(element => {
            const HTMLString = renderTemplate(element.image, element.author.slice(0,7))
            const html = createTemplate(HTMLString)
            return container.append(html);
            element.author = element.author.slice(0, 7)
          });
      }


      async function cacheExist(category, name) {
        const cacheList = localStorage.getItem(name)
          if(cacheList) {
          return JSON.parse(cacheList)
        }
        const dataNew = await getData(category)
        localStorage.setItem(name, JSON.stringify(dataNew))  
        return dataNew
      }

      const cards1 = await cacheExist(0, 'abuela')
      const cards2 = await cacheExist(1, 'otros')
      console.log(cards1)
      console.log(cards2)
      renderListImage(cards1, cards)
      renderListImage(cards2, cards_others)

      const name = document.getElementsByClassName('user-name')


      // localStorage.setItem('images', JSON.stringify(data[0]))
        
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