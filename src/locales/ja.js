module.exports = {
  head: {
    title: 'レコエ　レオナール',
    keywords: 'フルスタック,フルスタックエンジニア,デザイナー,テックリーダー,開発者',
  },

  theme: {
    dark: 'ダーク',
    light: 'ライト',
    system: 'システム',
  },

  links: {
    index: 'ホーム',
    about: 'プロフィール',
    social: {
      codepen: 'Codepen',
      dribbble: 'Dribbble',
      github: 'Github',
      linkedin: 'LinkedIn',
    },
  },

  // index

  index: {
    head: {
      title: 'ハーロー!',
    },
  },

  // about

  about: {
    title: '自己紹介',

    hero: [
      ['フルスタッカ', 'エンジニア'],
      ['デザイナー'],
      ['日本', '在住'],
    ],

    me: {
      intro: `{year}年以上の経験を持つフランス人のフルスタックエンジニア兼デザイナーです。
        現在、東京に住んでいます。`,
      current: '現在Appier Japan株式会社で勤務し、ここで一からプロダクトを開発し、管理しています。',
      history: `渡日以前は、フランスのIT会社でパリを拠点に働いていました。
        システム管理からウェブデザインまで、様々な分野のスキルを向上しています。`,
      moto: 'すべての問題に対して、よりシンプルな解決策を提供するよう常に努力しています。',
      linkedin: '{linkedin}で私についてもっと知りたい。',
    },

    skills: {
      title: 'スキル',
      items: {
        frontend: {
          title: 'フロントエンド',
          description: 'HTML、CSS、JavaScript',
        },
        backend: {
          title: 'バックエンド',
          description: 'NodeJs, ルビー',
        },
        devops: {
          title: 'デブオプス',
          description: 'システム管理、AWS、CI / CD、Webサーバー、コンテナー、シェルスクリプト',
        },
        interactionDesign: {
          title: 'インタラクションデザイン',
          description: 'プロトタイプ、アニメーション、マイクロインタラクション、アクセシビリティ',
        },
        uiDesign: {
          title: 'UIデザイン',
          description: 'ムードボード、ハイファイ構成、デザインシステム',
        },
        uxDesign: {
          title: 'UXデザイン',
          description: 'ユーザー調査、ワイヤーフレーミング、モックアップ、ユーザーテスト',
        },
      },
    },

    cv: {
      title: '履歴書',
      workplace: {
        appier: 'Appier Japan株式会社',
        emin: 'Emotion Intelligence株式会社',
        syllage: 'Syllage',
        frenchEmbassy: 'フランス大使館',
        telindus: 'Telindus',
        af83: 'AF83',
      },
      job: {
        techleader: 'テックリーダー',
        fullstack: 'フルスタックエンジニア',
        sysadmin: 'システムアドミニストレータ',
      },
    },
  },

  // chat

  chat: {
    content: {
      me: {
        hi: 'こんにちは',
        howAreYou: '元気？',
        fantastic: '素晴らしい',
        oh: 'そっか。。',
        cheer: '多分、これで元気になるかも',
        leonard: '私の名前は、レオナールです',
        thanks: 'どうもありがとう〜',
        bye: '来てくれてありがとう',
        profession: 'フルスタックエンジニア兼デザイナー',
        workplace: '東京のAppier Japan株式会社で',
        challenging: 'それは挑戦的だね',
      },

      visitor: {
        awesome: '元気だよ',
        notGood: 'まあまあ',
        thanks: 'ありがとう！',
        living: '仕事は何をしていますか？',
        friends: 'もう友達だよ',
        seeYou: 'またね',
        where: 'どこで？',
        boring: '退屈じゃない？',
      },
    },

    replies: {
      great: '元気',
      meh: 'まあまあ',
      thanks: 'ありがとう',
      who: 'だれ？',
      iKnow: '知ってる',
      bye: 'バイバイ',
      where: 'どこ？',
      andSo: 'それで？',
    },
  },

  // form

  form: {
    previous: '前',
    next: '次',
  },

  // footer

  footer: {
    contact: '何か質問があれば、お気軽にお問い合わせください。',
    source: '{link}のソースを表示',
  },

  // error

  error: {
    notFound: 'ご指定のページが見つかりません〜',
    occurred: 'エラーが発生しました。',
    goHome: 'ホームに戻る',
  },
};
