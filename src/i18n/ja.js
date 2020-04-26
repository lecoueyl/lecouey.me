module.exports = {

  head: {
    title: 'レコエ　レオナール',
    keywords: 'フルスタック,フルスタックエンジニア,デザイナー,テックリーダー,開発者',
  },

  links: {
    index: 'ホーム',
    about: '私について',
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
    title: '私について',

    hero: [
      ['フルスタッカ', 'エンジニア'],
      ['デザイナー'],
      ['日本', 'に', '住んでる'],
    ],

    me: {
      intro: `私は12年以上の経験を持つフランスのシステム管理者およびFullstackデザイナーです。
        現在、東京に住んでいます。`,
      history: `Emotion Intelligenceで2014年から働いています。
        ここで私は底から端まで製品を作り出す機会があります。`,
      work: `以前は日本に引っ越し、さまざまな会社で働いていました。
        システム管理からウェブデザインまで、さまざまな分野のスキルを向上させていました`,
      current: 'すべての問題に対してよりシンプルなソリューションを提供するよう常に努力しています。',
      linkedin: '{linkedin}について私についてもっと知りたい',
    },

    skills: {
      title: 'スキル',
      items: {
        frontend: {
          title: 'フロントエンド',
          description: 'HTML、(S)CSS、JavaScript',
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
        cheer: '多分、これはあなたを元気づけるでしょう',
        leonard: 'そういえば、レオナールです',
        thanks: 'どもありがとう〜',
        bye: '来てくれてありがとう',
        profession: 'システム管理者とフルスタッカデザイナー',
        workplace: '東京のEmotion Intelligence株式会社で',
        challenging: 'それが挑戦的だと言います',
      },

      visitor: {
        awesome: '元気だよ',
        notGood: 'まあまあ',
        thanks: 'ありがとう！',
        living: '生活のために何をしていますか？',
        friends: 'もう友達だよ',
        seeYou: 'またね',
        where: 'どこで？',
        boring: '退屈ですじゃない？',
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
      andSo: 'それから',
    },
  },

  // footer

  footer: {
    contact: '見知らぬ人ではなく、素晴らしいメッセージを送っていい',
    source: '{0}のソースを表示',
  },

  // error

  error: {
    title: 'エラー',
    notFound: 'ご指定のページが見つかりませんでした〜',
    occured: 'エラーが発生しました。',
  },
};
