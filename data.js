var exItems = [
  {
    id: 0,
    imageUrl: 'https://i.ytimg.com/vi/b6XNs4i10JU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPGYynv4MIs30ZXQZKifmzt25zAQ',
    movieUrl:'https://youtu.be/b6XNs4i10JU',
    title: '死に支度（しにじたく）のススメ？（22 Aug 2021 ゴータミー精舎）',
    done: false,
  }, 
  {
    id: 1,
    imageUrl: 'https://i.ytimg.com/vi/EY4VkgRgOpM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNgexXWczfRdzgjwqhfHiyT7PW5A',
    movieUrl:'https://youtu.be/EY4VkgRgOpM?list=PLv-Wl8PVb-JDqDYXfRYRhmz_1fG25GTjO',
    title: '正見で学ぶ「仕事」の意味ーーブッダになっても仕事からは逃げられない｜スマナサーラ長老の初期仏教テーマトーク（26Sep 2021 ゴータミー精舎）',
    done: true,
  },
  {
    id: 2,
    imageUrl: 'https://i.ytimg.com/vi/QrxMgTTDuWA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-MRzONjlPzMhTjhR5GI5JRdL11g',
    movieUrl:'https://youtu.be/QrxMgTTDuWA?list=PLv-Wl8PVb-JBtqjEdjnElDBXO8DFknK0T',
    title: '”Depressed” 混乱した社会のなか、どう生きる？｜スマナサーラ長老の初期仏教テーマトーク（29 Aug 2021)ゴータミー精舎',
    done: false,
  },
  {
    id: 3,
    imageUrl: 'https://i.ytimg.com/vi/fCBfXPRZqkg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR36_iLGDFOcpwV0Qoj-JSBH2_4w',
    movieUrl:'https://youtu.be/yIYjoOOU04s?list=PLv-Wl8PVb-JBtqjEdjnElDBXO8DFknK0T',
    title: '無常の見方　2021｜スマナサーラ長老の初期仏教テーマトーク（05 Sep 2021 ゴータミー精舎）',
    done: false,
  },
  {
    id: 4,
    movieUrl:'https://youtu.be/MsmzYqpyo70?list=PLv-Wl8PVb-JDqDYXfRYRhmz_1fG25GTjO',
    imageUrl: 'https://i.ytimg.com/vi/MsmzYqpyo70/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBV31WeOdF6uf631lcmarFbjLkYxw',
    title: '《ブッダのことば》こころが汚れる仕組み――汚染されない認識の仕方　『一切煩悩経』（中部２）を読む①｜スマナサーラ長老のパーリ経典解説（14 Mar 2021 ゴータミー精舎）',
    done: true,
  },    
  {
    id: 4,
    movieUrl:'https://youtu.be/xzIWIk3u6wE?list=PLv-Wl8PVb-JDqDYXfRYRhmz_1fG25GTjO',
    imageUrl: 'https://i.ytimg.com/vi/xzIWIk3u6wE/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA2GbXuIjR5VrLuiGd9S-b1WVRRuA',
    title: '《ブッダのことば》ブッダのハザードマップ――思考の制御で邪見の罠を避ける　『一切煩悩経』（中部２）を読む②｜スマナサーラ長老のパーリ経典解説（28 Mar 2021 ゴータミー精舎）',
    done: true,
  },
  {
    id: 4,
    movieUrl:'https://youtu.be/emAawtroW1k?list=PLv-Wl8PVb-JBtqjEdjnElDBXO8DFknK0T',
    imageUrl: 'https://i.ytimg.com/vi/emAawtroW1k/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBv34ndX9cdY6HgDMOokJQ9egkzfg',
    title: '《ブッダのことば》煩悩滅尽への道筋――聖者のこころを育てる究極の自己制御　『一切煩悩経』（中部２）を読む③｜スマナサーラ長老のパーリ経典解説（04 Apr 2021 ゴータミー精舎）',
    done: false,
  },  

  {
    id: 4,
    movieUrl:'https://youtu.be/yYjqe6sJaAg?list=PLv-Wl8PVb-JBtqjEdjnElDBXO8DFknK0T',
    imageUrl: 'https://i.ytimg.com/vi/yYjqe6sJaAg/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLABjqTDENhrkMf6lJzo_-gWD1hB0Q',
    title: '四聖諦の発見――「日日是好日」の人が知る真理の世界　誓教寺オンライン仏道実践会④｜スマナサーラ長老の初期仏教法話（20 Mar 2021 ゴータミー精舎からライブ配信）',
    done: false,
  },  

  {
    id: 4,
    movieUrl:'https://youtu.be/sZPJu6fKfOA?list=PLv-Wl8PVb-JBtqjEdjnElDBXO8DFknK0T',
    imageUrl: 'https://i.ytimg.com/vi/sZPJu6fKfOA/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDEDXtisnMFlRyNqdK5gLV8vnPM3w',
    title: '比較は危険――相対性を超えるブッダの道｜スマナサーラ長老のゴールデン・ウィーク瞑想実践会（04 May 2021 ゴータミー精舎）',
    done: false,
  }
];



