const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    order: 'random',
    preload: 'auto',
    audio: [
 /*   {
        name: "",
        artist: '',
        url: '/music/',
        cover: '',
      },    */
      {
        name: "Undertale",
        artist: 'Toby Fox',
        url: 'https://link.hhtjim.com/163/39227624.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/UNDERTALE.jpg',
      },
      {
        name: "Dogsong",
        artist: 'Toby Fox',
        url: 'https://link.hhtjim.com/163/39224618.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/UNDERTALE.jpg',
      },
      {
        name: "MEGALOVANIA",
        artist: 'Toby Fox',
        url: 'https://link.hhtjim.com/163/39224659.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/UNDERTALE.jpg',
      },
      {
        name: "Stronger Than You",
        artist: 'Chara Parody',
        url: 'https://link.hhtjim.com/163/410519017.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/UNDERTALE.jpg',
      },
      {
        name: "Reunited",
        artist: 'Toby Fox',
        url: 'https://link.hhtjim.com/163/39224654.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/UNDERTALE.jpg',
      },
      {
        name: "For the Fans",
        artist: 'Toby Fox',
        url: 'https://link.hhtjim.com/163/39227621.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/UNDERTALE.jpg',
      },
      {
        name: "Memory",
        artist: 'Toby Fox',
        url: 'https://link.hhtjim.com/163/39227602.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/UNDERTALE.jpg',
      },
      {
        name: "Shop",
        artist: 'Toby Fox',
        url: 'https://link.hhtjim.com/163/39224619.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/UNDERTALE.jpg',
      },
      {
        name: "Snowdin Town",
        artist: 'Toby Fox',
        url: 'https://link.hhtjim.com/163/39227596.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/UNDERTALE.jpg',
      },
      {
        name: "Home (Music Box)",
        artist: 'Toby Fox',
        url: 'https://link.hhtjim.com/163/39224614.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/UNDERTALE.jpg',
      },
      {
        name: "Death by Glamour",
        artist: 'Toby Fox',
        url: 'https://link.hhtjim.com/163/39227620.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/UNDERTALE.jpg',
      },
      {
        name: "Home",
        artist: 'Toby Fox',
        url: 'https://link.hhtjim.com/163/39227591.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/UNDERTALE.jpg',
      },
      {
        name: "NGAHHH!!",
        artist: 'Toby Fox',
        url: 'https://link.hhtjim.com/163/39227608.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/UNDERTALE.jpg',
      },
      {
        name: "???????????? (Movie ver.)",
        artist: 'RADWIMPS',
        url: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/???????????? (Movie ver.).mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/%E4%BD%A0%E7%9A%84%E5%90%8D%E5%AD%97.jpg',
      },
      {
        name: "??????????????? (????????????)",
        artist: '???????????????',
        url: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/??????????????? - ???????????????.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/%E4%BD%A0%E7%9A%84%E5%90%8D%E5%AD%97.jpg',
      },
      {
        name: "????????? (Dream Lantern)",
        artist: 'RADWIMPS',
        url: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/????????? (Dream Lantern).mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/%E4%BD%A0%E7%9A%84%E5%90%8D%E5%AD%97.jpg',
      },
      {
        name: "??????????????? (??????) (Movie ver.)",
        artist: 'RADWIMPS',
        url: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/??????????????? (??????) (Movie ver.).mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/%E4%BD%A0%E7%9A%84%E5%90%8D%E5%AD%97.jpg',
      },
      {
        name: "????????????????????? (??????????????????) (Movie ver.)",
        artist: 'RADWIMPS',
        url: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/????????????????????? (??????????????????) (Movie ver.).mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/%E4%BD%A0%E7%9A%84%E5%90%8D%E5%AD%97.jpg',
      },
      {
        name: "????????? (??????)",
        artist: 'RADWIMPS',
        url: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/????????? (??????).mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/%E4%BD%A0%E7%9A%84%E5%90%8D%E5%AD%97.jpg',
      },
      {
        name: "??????????????????????????????????????????(???????????????????????????)",
        artist: 'RADWIMPS',
        url: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/RADWIMPS - ??????????????????????????????????????????.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/%E5%A4%A9%E6%B0%94%E4%B9%8B%E5%AD%90.jpg',
      },
      {
        name: "?????? (Movie edit)",
        artist: '????????????',
        url: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/RADWIMPS,???????????? - ?????? feat.????????????.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/%E5%A4%A9%E6%B0%94%E4%B9%8B%E5%AD%90.jpg',
      },
      {
        name: "??????????????????????????? (Movie edit)",
        artist: '????????????',
        url: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/RADWIMPS,???????????? - ??????????????????????????? feat.????????????.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/%E5%A4%A9%E6%B0%94%E4%B9%8B%E5%AD%90.jpg',
      },
      {
        name: "????????????",
        artist: '???????????????',
        url: 'https://link.hhtjim.com/163/559735257.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/%E5%88%BA%E5%AE%A2%E4%BC%8D%E5%85%AD%E4%B8%83.jpg',
      },
      {
        name: "???????????????????????????????????????",
        artist: '?????????',
        url: 'https://link.hhtjim.com/163/559735259.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/%E5%88%BA%E5%AE%A2%E4%BC%8D%E5%85%AD%E4%B8%83.jpg',
      },
      {
        name: "???????????????????????????????????????",
        artist: '?????????',
        url: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/??????????????????????????????????????? - ?????????.m4a',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/%E5%88%BA%E5%AE%A2%E4%BC%8D%E5%85%AD%E4%B8%83.jpg',
      },
      {
        name: "???????????????",
        artist: '?????????',
        url: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/????????? - ???????????????.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/%E4%BE%9D%E7%84%B6%E8%8C%83%E7%89%B9%E8%A5%BF.jpg',
      },
      {
        name: "????????????????????????",
        artist: '?????????',
        url: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/????????? - ????????????????????????.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/%E9%AD%94%E6%9D%B0%E5%BA%A7.jpg',
      },
      {
        name: "?????????",
        artist: '?????????',
        url: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/????????? - ?????????.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/%E5%8D%81%E4%B8%80%E6%9C%88%E7%9A%84%E8%90%A7%E9%82%A6.jpg',
      },
      {
        name: "?????????",
        artist: '?????????',
        url: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/????????? - ?????????.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/%E4%B8%83%E9%87%8C%E9%A6%99.jpg',
      },
      {
        name: "???????????? ?????????Dogsong???Cover Toby Fox???",
        artist: 'Zz_?????????_zZ ??????V',
        url: 'https://link.hhtjim.com/qq/000buJNC3dnBfr.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/%E7%99%BD%E6%97%A5%E6%A2%A6%E5%B0%8F%E6%8F%90%E7%90%B4%E7%BF%BB%E5%A5%8F%E5%90%88%E9%9B%86.jpg',
      },
      {
        name: "????????????",
        artist: '????????????',
        url: 'https://link.hhtjim.com/163/537939.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/PIANO%20GARDEN.png',
      },
      {
        name: "il vento d'oro",
        artist: '????????????',
        url: 'https://link.hhtjim.com/163/1334780738.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/%E3%82%B8%E3%83%A7%E3%82%B8%E3%83%A7%E3%81%AE%E5%A5%87%E5%A6%99%E3%81%AA%E5%86%92%E9%99%BA%20%E9%BB%84%E9%87%91%E3%81%AE%E9%A2%A8.png',
      },
      {
        name: "Canon",
        artist: 'Peerless 2x2',
        url: 'https://link.hhtjim.com/163/5188837.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/The%20Ultimate%20Canon.png',
      },{
        name: "Alone",
        artist: 'Marshmello',
        url: 'https://link.hhtjim.com/163/412785957.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/guobang-yoo/CDN@master/music/Cover/Alone.jpg',
      	
      }
    ]
});

 /*   {
        name: "",
        artist: '',
        url: '',
        cover: '',
      },    */