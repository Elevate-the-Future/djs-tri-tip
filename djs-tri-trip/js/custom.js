// preloader
$(window).load(function () {
  $(".preloader").fadeOut(3000); // set duration in brackets
});

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function () {
  // ------- WOW ANIMATED ------ //
  wow = new WOW({
    mobile: false,
  });
  wow.init();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $("#home").parallax("100%", 0.1);
    $("#gallery").parallax("100%", 0.3);
    $("#menu").parallax("100%", 0.2);
    $("#team").parallax("100%", 0.3);
    $("#contact").parallax("100%", 0.1);
  }
  initParallax();

  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // NIVO LIGHTBOX
  $("#gallery a").nivoLightbox({
    effect: "fadeScale",
  });

  const instagramRegExp = new RegExp(
    /<script type="text\/javascript">window\._sharedData = (.*);<\/script>/
  );
  const fetchInstagramPhotos = async (accountUrl) => {
    const response = await axios.get(accountUrl);
    const json = JSON.parse(response.data.match(instagramRegExp)[1]);
    const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(
      0,
      8
    );
    const photos = edges.map(({ node }) => {
      return {
        url: `https://www.instagram.com/p/${node.shortcode}/`,
        thumbnailUrl: node.thumbnail_src,
        displayUrl: node.display_url,
        caption: node.edge_media_to_caption.edges[0].node.text,
      };
    });
    return photos;
  };

  async function fetchInsta() {
    try {
      const photos = await fetchInstagramPhotos(
        "https://www.instagram.com/djs_tri_tip/"
      ).then((el) => {
        console.log(el);
        for (i = 1; i <= 6; i++) {
          document
            .getElementById(`img${i}href`)
            .setAttribute("href", el[i - 1].url);
          document
            .getElementById(`img${i}`)
            .setAttribute("src", el[i - 1].thumbnailUrl);
        }
      });
    } catch (e) {
      console.error("Fetching Instagram photos failed", e);
    }
  }
  fetchInsta();
});
