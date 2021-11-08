var exItems = [
  {
    movieUrl:'https://youtu.be/b6XNs4i10JU',
    imageUrl: 'https://i.ytimg.com/vi/b6XNs4i10JU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPGYynv4MIs30ZXQZKifmzt25zAQ',
    title: '死に支度（しにじたく）のススメ？（22 Aug 2021 ゴータミー精舎）',
    done: true,
  }, 
  {
    movieUrl:'https://youtu.be/EY4VkgRgOpM?list=PLv-Wl8PVb-JDqDYXfRYRhmz_1fG25GTjO',
    imageUrl: 'https://i.ytimg.com/vi/EY4VkgRgOpM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNgexXWczfRdzgjwqhfHiyT7PW5A',
    title: '正見で学ぶ「仕事」の意味ーーブッダになっても仕事からは逃げられない｜スマナサーラ長老の初期仏教テーマトーク（26Sep 2021 ゴータミー精舎）',
    done: true,
  },
  {
    movieUrl:'https://youtu.be/QrxMgTTDuWA?list=PLv-Wl8PVb-JBtqjEdjnElDBXO8DFknK0T',
    imageUrl: 'https://i.ytimg.com/vi/QrxMgTTDuWA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-MRzONjlPzMhTjhR5GI5JRdL11g',
    title: '”Depressed” 混乱した社会のなか、どう生きる？｜スマナサーラ長老の初期仏教テーマトーク（29 Aug 2021)ゴータミー精舎',
    done: true,
  },
  {
    id: 3,
    movieUrl:'https://youtu.be/yIYjoOOU04s?list=PLv-Wl8PVb-JBtqjEdjnElDBXO8DFknK0T',
    imageUrl: 'https://i.ytimg.com/vi/fCBfXPRZqkg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR36_iLGDFOcpwV0Qoj-JSBH2_4w',
    title: '無常の見方　2021｜スマナサーラ長老の初期仏教テーマトーク（05 Sep 2021 ゴータミー精舎）',
    done: false,
  },
  {
    movieUrl:'https://youtu.be/MsmzYqpyo70?list=PLv-Wl8PVb-JDqDYXfRYRhmz_1fG25GTjO',
    imageUrl: 'https://i.ytimg.com/vi/MsmzYqpyo70/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBV31WeOdF6uf631lcmarFbjLkYxw',
    title: '《ブッダのことば》こころが汚れる仕組み――汚染されない認識の仕方　『一切煩悩経』（中部２）を読む①｜スマナサーラ長老のパーリ経典解説（14 Mar 2021 ゴータミー精舎）',
    done: true,
  },    
  {
    movieUrl:'https://youtu.be/xzIWIk3u6wE?list=PLv-Wl8PVb-JDqDYXfRYRhmz_1fG25GTjO',
    imageUrl: 'https://i.ytimg.com/vi/xzIWIk3u6wE/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA2GbXuIjR5VrLuiGd9S-b1WVRRuA',
    title: '《ブッダのことば》ブッダのハザードマップ――思考の制御で邪見の罠を避ける　『一切煩悩経』（中部２）を読む②｜スマナサーラ長老のパーリ経典解説（28 Mar 2021 ゴータミー精舎）',
    done: true,
  },
  {
    movieUrl:'https://youtu.be/emAawtroW1k?list=PLv-Wl8PVb-JBtqjEdjnElDBXO8DFknK0T',
    imageUrl: 'https://i.ytimg.com/vi/emAawtroW1k/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBv34ndX9cdY6HgDMOokJQ9egkzfg',
    title: '《ブッダのことば》煩悩滅尽への道筋――聖者のこころを育てる究極の自己制御　『一切煩悩経』（中部２）を読む③｜スマナサーラ長老のパーリ経典解説（04 Apr 2021 ゴータミー精舎）',
    done: true,
  },  
  {
    movieUrl:'https://youtu.be/yYjqe6sJaAg?list=PLv-Wl8PVb-JBtqjEdjnElDBXO8DFknK0T',
    imageUrl: 'https://i.ytimg.com/vi/yYjqe6sJaAg/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLABjqTDENhrkMf6lJzo_-gWD1hB0Q',
    title: '四聖諦の発見――「日日是好日」の人が知る真理の世界　誓教寺オンライン仏道実践会④｜スマナサーラ長老の初期仏教法話（20 Mar 2021 ゴータミー精舎からライブ配信）',
    done: false,
  },  
  {
    movieUrl:'https://youtu.be/sZPJu6fKfOA?list=PLv-Wl8PVb-JBtqjEdjnElDBXO8DFknK0T',
    imageUrl: 'https://i.ytimg.com/vi/sZPJu6fKfOA/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDEDXtisnMFlRyNqdK5gLV8vnPM3w',
    title: '比較は危険――相対性を超えるブッダの道｜スマナサーラ長老のゴールデン・ウィーク瞑想実践会（04 May 2021 ゴータミー精舎）',
    done: false,
  },  
  {
    movieUrl:'https://youtu.be/1b4a0zQNShA',
    imageUrl: 'https://i.ytimg.com/vi/1b4a0zQNShA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCg9rVhSjYvqkVvvTJzpDuTkM7rOg',
    title: '仏教を信じるためには、あなた自身の自由と知恵が不可欠です。｜スマナサーラ長老の初期仏教法話より【字幕付き】',
    done: false,
  },  
  {
    movieUrl:'https://youtu.be/8wjIZG5w2Dc?list=PLv-Wl8PVb-JBtqjEdjnElDBXO8DFknK0T',
    imageUrl: 'https://i.ytimg.com/vi/FyGZuJPgTZY/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD7xhwbtUgVj3EOBcdxIsAUS1zbjw',
    title: '《ブッダのことば》仏道に性別は無い――仏教徒の模範となった在家女性聖者の物語（増支部七集ナンダ母経を読む）｜スマナサーラ長老のパーリ経典解説（15 Nov 2020 ゴータミー精舎）',
    done: false,
  },  
  {
    movieUrl:'https://youtu.be/l-T-vhLXPPY?list=PLv-Wl8PVb-JBtqjEdjnElDBXO8DFknK0T',
    imageUrl: 'https://i.ytimg.com/vi/l-T-vhLXPPY/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCcO-iFxKzO3GF4Sz9aYQwCV10Ztg',
    title: '《ブッダのことば》「ある」と思う、ゆえに苦しむ――サーリプッタ尊者とお釈迦様の問答　相応部因縁篇已生経を読む｜スマナサーラ長老のパーリ経典解説（25 Oct 2020 ゴータミー精舎）',
    done: false,
  },  
  {
    movieUrl:'https://youtu.be/3xKBpS5VHiI',
    imageUrl: 'https://i.ytimg.com/vi/3xKBpS5VHiI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCFCX4f7KwOTJ56BmsNpWIgXHvVPQ',
    title: '【第１部】スマナサーラ長老のゼロから始める「ブッダの瞑想」～彼岸への旅　瞑想指導（23 Sep 2021 ゴータミー精舎）',
    done: false,
  }, 
  {
    movieUrl:'https://youtu.be/VQUgteNkz8Q',
    imageUrl: 'https://i.ytimg.com/vi/VQUgteNkz8Q/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDsOm3BSCssRGkrqLhVzjb4D2DdXw',
    title: '【第２部】スマナサーラ長老のゼロから始める「ブッダの瞑想」～彼岸への旅　法話とQ&A（23 Sep 2021 ゴータミー精舎）',
    done: false,
  }, 
  {
    movieUrl:'https://youtu.be/gjLFEnuXnyg',
    imageUrl: 'https://i.ytimg.com/vi/NWy9hcMh9sM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAAYKpdeD9u4AXMD_xjspaFfa5Wdg',
    title: '嫉妬しないこと',
    done: true,
  }
  // {
  //   id: 4,
  //   movieUrl:'',
  //   imageUrl: '',
  //   title: '',
  //   done: false,
  // },
  // {
  //   id: 4,
  //   movieUrl:'',
  //   imageUrl: '',
  //   title: '',
  //   done: false,
  // },
  // {
  //   id: 4,
  //   movieUrl:'',
  //   imageUrl: '',
  //   title: '',
  //   done: false,
  // },
  // {
  //   id: 4,
  //   movieUrl:'',
  //   imageUrl: '',
  //   title: '',
  //   done: false,
  // },
  // {
  //   id: 4,
  //   movieUrl:'',
  //   imageUrl: '',
  //   title: '',
  //   done: false,
  // },
  // {
  //   id: 4,
  //   movieUrl:'',
  //   imageUrl: '',
  //   title: '',
  //   done: false,
  // }
  
];



